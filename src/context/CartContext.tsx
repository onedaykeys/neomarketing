import {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
  type ReactNode,
} from 'react'
import { services, type Service } from '../data/services'

export type CartItem = {
  serviceId: string
  quantity: number
}

type CartContextValue = {
  items: CartItem[]
  itemCount: number
  subtotal: number
  addItem: (serviceId: string) => void
  removeItem: (serviceId: string) => void
  setQuantity: (serviceId: string, quantity: number) => void
  clearCart: () => void
  getService: (serviceId: string) => Service | undefined
}

const CartContext = createContext<CartContextValue | null>(null)
const STORAGE_KEY = 'neomarketing-cart'

function loadCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as CartItem[]
    return parsed.filter((item) => services.some((s) => s.id === item.serviceId))
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() =>
    typeof window !== 'undefined' ? loadCart() : [],
  )

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const value = useMemo<CartContextValue>(() => {
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = items.reduce((sum, item) => {
      const service = services.find((s) => s.id === item.serviceId)
      return sum + (service ? service.price * item.quantity : 0)
    }, 0)

    return {
      items,
      itemCount,
      subtotal,
      addItem: (serviceId) => {
        setItems((prev) => {
          const existing = prev.find((i) => i.serviceId === serviceId)
          if (existing) {
            return prev.map((i) =>
              i.serviceId === serviceId ? { ...i, quantity: i.quantity + 1 } : i,
            )
          }
          return [...prev, { serviceId, quantity: 1 }]
        })
      },
      removeItem: (serviceId) => {
        setItems((prev) => prev.filter((i) => i.serviceId !== serviceId))
      },
      setQuantity: (serviceId, quantity) => {
        if (quantity < 1) {
          setItems((prev) => prev.filter((i) => i.serviceId !== serviceId))
          return
        }
        setItems((prev) =>
          prev.map((i) => (i.serviceId === serviceId ? { ...i, quantity } : i)),
        )
      },
      clearCart: () => setItems([]),
      getService: (serviceId) => services.find((s) => s.id === serviceId),
    }
  }, [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}

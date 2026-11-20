import { Link } from 'react-router-dom'
import { addressLines, company } from '../data/company'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container-wide">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              neo<span>marketing</span>
            </div>
            <p className="footer-tag">
              Cloud-native marketing for brands that refuse to blend in.
            </p>
            <address className="footer-address">
              {addressLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </address>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Explore</h4>
              <ul>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </li>
                <li>
                  <a href={`https://${company.domain}`}>{company.domain}</a>
                </li>
                <li>
                  <span className="footer-ceo">
                    {company.ceo.title}: {company.ceo.name}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Neomarketing</span>
          <span>London · {company.domain}</span>
        </div>
      </div>
    </footer>
  )
}

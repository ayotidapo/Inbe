import Button from '../../atoms/Button'
import './navbar.scss'

const Navbar = () => {
  return (
    <nav className="header__nav">
        <ul>
            <li>Product</li>
            <li>Services</li>
            <li>About</li>
            <li><Button className='log_in'>Log In</Button></li>
        </ul>
    </nav>
  )
}

export default Navbar
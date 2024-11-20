import React from 'react'
import HomeLogo from "./content/Image/Icons/logo.png"
import SearchIcon from "./content/Image/Icons/search-icon.png"
import CartIcon from "./content/Image/Icons/cart.png"
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div>
            <header className="header-wrapper">
        <div className="internal-wrapper">
            <div className="link-wrapper">
                <nav>
                    <ul>
                        <li className="home-logo"><Link to="/"><img src={HomeLogo} alt=""/></Link></li>
                        <li className="store"><a href="#">Store</a></li>
                        <li className="mac"><a href="#">Mac</a></li>
                        <li className="ipad"><Link to="/ipad">iPad</Link></li>
                        <li className="iphone"><Link to="/iphone">iPhone</Link></li>
                        <li className="watch"><a href="#">Watch</a></li>
                        <li className="airpods"><a href="#">AirPods</a></li>
                        <li className="tv"><a href="#">TV & Home</a></li>
                        <li className="entertainment"><a href="#">Entertainment</a></li>
                        <li className="accessories"><a href="#">Accessories</a></li>
                        <li className="support"><a href="#">Support</a></li>
                        <li className="search-icon"><a href="#"><img src={SearchIcon} alt=""/></a></li>
                        <li className="cart-icon"><a href="#"><img src={CartIcon} alt=""/></a></li>
                        <li className="equal"><a href="#">=</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    </div>
  )
}

export default Header
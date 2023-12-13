import React from 'react'

import './Header.css';

import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export default function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <StorefrontIcon fontSize='large' className="header__logoImage" />
                <h2 className="header__logoTitle">eShop</h2>
            </div>

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <div className="nav__item">
                    <span className="nav__itemLineOne">HelloGuest</span>
                    <span className="nav__itemLineTwo">Sign In</span>
                </div>
                <div className="nav__item">
                    <span className="nav__itemLineOne">Your</span>
                    <span className="nav__itemLineTwo">Shop</span>
                </div>
                <div className="nav__itemBasket">
                    <ShoppingBasketIcon fontSize='large' className='itemBasket' />
                    <span className="nav__itemLineTwo nav__basketCount">0</span>
                </div>
            </div>
        </div>
    )
}

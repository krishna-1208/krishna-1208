import './App.css';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


function App() {
  return (
    <div className="App">
      <HeaderLogo />
      <HeaderSearch />
      <HeaderNav />
    </div>
  );
}

function HeaderLogo() {
  return <div className="header__logo">
    <StorefrontIcon fontSize='large' />
    <h2 className="header__logoTitle">eShop</h2>
    <SearchIcon className="header__searchIcon" />
  </div>
}

function HeaderSearch() {
  return <div className="header__search">
    <input type="text" className="header__searchInput" />
  </div>
}

function HeaderNav() {
  return <div className="header__nav">
    <div className="nav__item">
      <span className="nav_itemLineOne">HelloGuest</span>
      <span className="nav__itemLineTwo">Sign In</span>
    </div>
    <div className="nav__item">
      <span className="nav_itemLineOne">Your</span>
      <span className="nav__itemLineTwo">Shop</span>
    </div>
    <div className="nav__item">
      <span className="nav_itemLineOne">
        <ShoppingBasketIcon fontSize='large' />
      </span>
      <span className="nav__itemLineTwo">0</span>
    </div>
  </div>
}

export default App;

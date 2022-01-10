import { Link, NavLink } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__logo logo">
        <Link to="/">
          <span className="logo__main">Marvel</span> inform portal
        </Link>
      </h1>
      <nav className="header__menu menu">
        <ul className="menu__list">
          <li className="menu__item active">
            <NavLink style={({ isActive }) => ({ color: isActive ? '#9f0013' : '#1c1c1c' })} to="/">
              Characters
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink style={({ isActive }) => ({ color: isActive ? '#9f0013' : '#1c1c1c' })} to="/comics">
              Comics
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

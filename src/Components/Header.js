import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__logo logo">
        <span className="logo__main">Marvel</span> inform portal
      </h1>
      <nav className="header__menu menu">
        <ul className="menu__list">
          <li className="menu__item active">Characters</li>
          <li className="menu__item">Comics</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import './Header.scss';

const Header = () => {
  const menuItemsData = ['Characters', 'Comics'];

  return (
    <header className="header">
      <h1 className="header__logo logo">
        <span className="logo__main">Marvel</span> inform portal
      </h1>
      <nav className="header__menu menu">
        <ul className="menu__list">
          {/* {menuItemsData.map((menuItem) => {
            return (
              <li key={menuItem} className="menu__item">
                {menuItem}
              </li>
            );
          })} */}
          <li className="menu__item active">{menuItemsData[0]}</li>
          <li className="menu__item">{menuItemsData[1]}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

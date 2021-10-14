import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import {Button} from './Button';
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  //Button sign in will not showing up on refresh
  useEffect(() => {
    showButton();
  }, []);

  // On resize of the screen will hide/show button
  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Ivangelista
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                О нас
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tour" className="nav-links" onClick={closeMobileMenu}>
                Заказать тур
              </Link>
            </li>
            <li className="nav-item">
              {/* <a href='https://sletat.ru/?_ga=2.47833895.1267186617.1603141839-2075412.1601587101' target="_blank" rel="noreferrer" className='nav-links' onClick={closeMobileMenu}>
                                Поиск туров
                            </a> */}
              <Link
                to="/travelAdvisor"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Путешественникам
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contacts"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Контакты
              </Link>
            </li>
            {/* <li className='nav-item'>
                            <a href='/' className='nav-links' onClick={closeMobileMenu}>
                                Отзывы
                            </a>
                        </li> */}
            {/* <li className='nav-item'>
                            <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Войти в личный кабинет
                            </Link>
                        </li> */}
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>Войти в личный кабинет</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

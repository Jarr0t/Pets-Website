import React from 'react';
import { useState, useRef, useEffect } from "react";
import logo from "../../resources/images/logo.svg";
import human from "../../resources/images/human.svg";
import search from "../../resources/images/search.svg";
import smallCheck from "../../resources/images/smallCheck.svg";
import "./Navbar.scss";

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setMenuIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    }
  }, [menuIsOpen]);

  return (
    <div className='navbar'>
      <img src={logo} alt="logo" draggable="false" />
      <ul className='navbar__menu' ref={menuRef}>
        <li>Пропало животное</li>
        <li>Вет. клиники</li>

        <li onClick={() => setMenuIsOpen(!menuIsOpen)}>Уход</li>
        <img onClick={() => setMenuIsOpen(!menuIsOpen)} className={menuIsOpen ? 'navbar__menu__check--active' : 'navbar__menu__check--disabled'} src={smallCheck} alt="" draggable="false" />

        <div className='navbar__menu__dropdown'>
          <ul className={menuIsOpen ? "navbar__menu__dropdown--active" : "navbar__menu__dropdown--disabled"} >
            <p onClick={() => {
              setMenuIsOpen(!menuIsOpen);
            }}>Кот</p>
            <p onClick={() => {
              setMenuIsOpen(!menuIsOpen);
            }}>Собака</p>
          </ul>
        </div>
        <li>Первая помощь</li>
        <li>Приюты</li>
        <img className="navbar__menu__icon" src={human} alt="" draggable="false" />
        <img className="navbar__menu__icon" src={search} alt="" draggable="false" />
      </ul>
    </div>
  )
}

export default Navbar;
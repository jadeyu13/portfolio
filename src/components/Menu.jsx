import React, { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { NAVBAR } from './data/Navbar';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  //eslint-disable-next-line
  const [links, setLinks] = useState(NAVBAR);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="menu-btn">
        <button onClick={toggleMenu}>
          <BiMenuAltRight />
        </button>
      </div>

      <header className={isOpen ? 'header open' : 'header'}>
        <nav>
          <ul>
            {links.map(({ id, title, url }) => {
              return (
                <li key={id} onClick={() => setIsOpen(false)}>
                  <Link to={url}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Menu;

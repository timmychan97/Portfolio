import React, { useState } from 'react';
import '../css/Header.css';
import { NavLink, Link } from 'react-router-dom';

const pages = ["Home", "Projects", "About Me", "Settings"];

// Shows usage of functional components
export default function Header() {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  const onPageChange = (pageName: string) => {
    // Close the opened dropdown, for mobile
    if (active) toggleActive();
  };

  return (
    <div className={"Header"}>
      <div className="site-logo">
        <Link to="/">Portfolio</Link>
      </div>

      <nav className="navigation-bar">
        <ul className={"menu" + ((active) ? " open" : "")}>

          {pages.map(function (name, index) {
            return (
              <li key={index}>
                <NavLink to={"/" + name.toLowerCase()} onClick={() => onPageChange(name)}>{name}</NavLink>
              </li>
            );
          })}

        </ul>
        <div className={"burger" + ((active) ? " open" : "")} onClick={() => toggleActive()}>
          <span /><span /><span /><span />
        </div>
      </nav>
    </div>
  );
}

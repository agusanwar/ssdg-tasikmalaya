import React from "react";
import NavLink from './navlink'

const Menu = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-left text-sm hover:text-amber-400">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default Menu;
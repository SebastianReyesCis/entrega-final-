import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <nav className="navBar">

      <ul>
        <li>
          <NavLink to="/">inicio</NavLink>
        </li>
        <li>
          <NavLink to="/category/Bebidas">Productos</NavLink>
        </li>
        <li>
          <NavLink to="/category/Combos">Promocion</NavLink>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
};

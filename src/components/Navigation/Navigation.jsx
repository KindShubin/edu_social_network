
import s from "./navigation.module.css";
import { Outlet, Link, NavLink, BrowserRouter } from "react-router-dom";

function Navigation() {
  const style = ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "";
  return (
    <nav className={s.nav}>
      {/* <BrowserRouter > */}
      <ul>
        <li>
          <NavLink to="/profile" className={style}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/dialogs" className={style}>
            Message
          </NavLink>
        </li>
        <li>
          {/* <a href="/music">Music</a> */}
          <NavLink to="/music" className={style}>
            Music
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" className={style}>
            News
          </NavLink>
        </li>
        <li>
          <NavLink to="/games" className={style}>
            Games
          </NavLink>
        </li>
      </ul>
      {/* </BrowserRouter> */}
    </nav>
  )
}

export default Navigation;
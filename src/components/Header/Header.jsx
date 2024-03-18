//import logo from '../../public/logo.jpg';
import logo from './logo.jpg';
import s from "./header.module.css";

function Header() {
  return(
    <header className={s.header}>
      <img src={logo} alt="logo"></img>
    </header>
  )
}

export default Header;
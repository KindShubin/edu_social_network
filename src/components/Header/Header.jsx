//import logo from '../../public/logo.jpg';
import logo from './logo.jpg';
import s from "./Header.module.css";

function Header() {
  return(
    <header className={s.header}>
      
      <img src="./logo.jpg" alt="logo"></img>
    </header>
  )
}

export default Header;
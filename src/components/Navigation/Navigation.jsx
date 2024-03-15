import s from "./Navigation.module.css";

const Navigation = () => {
  return(
    <nav className={s.nav}>
      <ul>
        <li>menu 1</li>
        <li>menu 2</li>
        <li>menu 3</li>
        <li>menu 4</li>
        <li>menu 5</li>
      </ul>
    </nav>
  )
}

export default Navigation;
import s from "./contacts.module.css";
import Contact from "./contact/contact";
import { NavLink } from "react-router-dom";

const Contacts = ({ contacts }) => {

  const arrtestmap = contacts.users.map((item) =>
    <NavLink key={item.id} to={item.id.toString()}>
      <Contact user={item} />
    </NavLink >);

  return (
    <div className={s.list}>
      {arrtestmap}
    </div>
  )

}
export default Contacts;
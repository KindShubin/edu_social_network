import s from "./contacts.module.css";
import Contact from "./contact/contact";
import { users, me } from "../../../testUsers.js";
import { NavLink} from "react-router-dom";


const val = 
<NavLink to="111" > 
  <Contact user="222" /> 
</NavLink >;
//props.user

const Contacts = () => {
  const arrtest = Array.from(Object.entries(users));
  const arrtestmap = arrtest.map((item) => 
    <NavLink to={`${item[0]}`} key={item[0]}> 
      <Contact user={item[1]} /> 
      </NavLink >);

return (
  <div className={s.list}>
    {arrtest.map(item => 
    <NavLink to={`${item[0]}`} key={item[0]}> 
    <Contact user={item[1]} /> 
    </NavLink >)
    }
    
  </div>
)

}
export default Contacts;
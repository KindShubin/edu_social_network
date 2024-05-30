import s from "./contact.module.css";

//props.user
const Contact = ( {user} ) => {
  return (
    <div className={s.user}>
      <img src={user.avatar} alt="avatar" className={s.avatar}></img>
      <div>{user.name}</div>
    </div>
  )
}

export default Contact;
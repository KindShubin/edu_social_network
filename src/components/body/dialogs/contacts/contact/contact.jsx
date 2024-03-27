import s from "./contact.module.css";

//props.user
const Contact = (props) => {
  return (
    <div className={s.user}>
      <img src={props.user.avatar} alt="avatar" className={s.avatar}></img>
      <div>{props.user.name}</div>
    </div>
  )
}

export default Contact;
import s from "./message.module.css";

//props.fromuser
//props.message
const Message = (props) => {
  return (
    <div className={s.message}>
      <div className={s.username}>{props.fromuser.name}</div>
      <div className={s.text}>{props.message}</div>
    </div>
  )
}

export default Message;
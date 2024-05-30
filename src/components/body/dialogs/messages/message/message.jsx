
import s from "./message.module.css";


const Message = ( {fromUser, toUser, date, message}) => {

  return (
    <div className={s.message}>
      <div className={s.username}>{fromUser}</div>
      <div className={s.text}>{message}</div>
      <div className={s.date}>{date}</div>
    </div>
  )
}

export default Message;
import Message from "./message/message";
import s from "./messages.module.css";

const Messages = ({messages}) => {
  return (
    <div className={s.messages}>
      {messages.map((msg, indx) => 
        <Message key={indx}
          fromUser={msg.fromUser}
          toUser={msg.toUser}
          date={msg.date}
          message={msg.message}
        />)}
    </div>
  )
}

export default Messages;
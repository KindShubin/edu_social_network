import Message from "./message/message";
import s from "./messages.module.css";
import { printNewMessageActionCreator, addMessageActionCreator } from "../../../../data/state";

const Messages = ({messages, textMessage, dispatch}) => {

  const onChangeTextMessage = (e) => {

    dispatch( printNewMessageActionCreator(e.target.value));

  }

  const onClickButton = (e) => {
    console.log('*****************');
    console.log(e);
    dispatch( addMessageActionCreator() );
  }

  return (
    <div className={s.messages}>
      {messages.map((msg, indx) => 
        <Message key={indx}
          fromUser={msg.fromUser}
          toUser={msg.toUser}
          date={msg.date}
          message={msg.message}
        />)}
        <textarea value={textMessage} onChange={ onChangeTextMessage }></textarea>
        <button onClick={ onClickButton }  >Send</button>
    </div>
  )
}

export default Messages;
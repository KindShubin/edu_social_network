import Message from "./message/message";
import s from "./messages.module.css";
//import { useLocation as ssssss } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { printNewMessageActionCreator, addMessageActionCreator } from "../../../../data/store/reducers/reducerDialogs";

const Messages = ({ messages, textMessage, dispatch }) => {

  let location = useLocation();

  const onChangeTextMessage = (e) => {

    dispatch(printNewMessageActionCreator(e.target.value));

  }

  const onClickButton = (e) => {
    console.log('*****************');
    console.log(e);
    console.log(location);
    dispatch(addMessageActionCreator());
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
      <div className="textArea">
        <textarea value={textMessage} onChange={onChangeTextMessage}></textarea>
      </div>
      <div className="sendButton">
        <button onClick={onClickButton}  >Send</button>
      </div>
    </div>
  )
}

export default Messages;
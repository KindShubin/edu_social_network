import s from "./dialogs.module.css";
import Contacts from "./contacts/contacts";
import Messages from "./messages/messages";

const Dialogs = ( {dialogs: {contacts, messages, textMessage}, dispatch} ) => {

  return (
    <div className={s.dialogs}>
      <Contacts contacts={contacts}/>
      <Messages messages={messages} textMessage={textMessage} dispatch={dispatch}/>
    </div>
  )
}

export default Dialogs;
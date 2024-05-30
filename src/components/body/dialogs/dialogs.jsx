import s from "./dialogs.module.css";
import Contacts from "./contacts/contacts";
import Messages from "./messages/messages";

const Dialogs = ( {dialogs: {contacts, messages}} ) => {

  return (
    <div className={s.dialogs}>
      <Contacts contacts={contacts}/>
      <Messages messages={messages}/>
    </div>
  )
}

export default Dialogs;
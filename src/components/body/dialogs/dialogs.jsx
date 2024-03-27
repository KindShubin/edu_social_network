import s from "./dialogs.module.css";
import Contacts from "./contacts/contacts";
import Messages from "./messages/messages";

const Dialogs = () => {
  let currentUser;

  return (
    <div className={s.dialogs}>
      <Contacts />
      <Messages />
    </div>
  )
}

export default Dialogs;
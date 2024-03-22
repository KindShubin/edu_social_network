import s from "./dialogs.module.css";
import ListConversations from "./listConversations/listConversations";
import Messages from "./messages/messages";

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <ListConversations />
      <Messages />
    </div>
  )
}

export default Dialogs;
import s from "./listConversations.module.css";
import UserConversation from "./userConversation/userConversation";
import * as users from "../../../testUsers.js";

//props.user
const ListConversations = () => {
  return (
    <div className={s.list}>
      <UserConversation user={users.user1}/>
      <UserConversation user={users.user2}/>
      <UserConversation user={users.user3}/>
    </div>
  )
}

export default ListConversations;
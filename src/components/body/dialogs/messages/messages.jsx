import Message from "./message/message";
import s from "./messages.module.css";
import * as users from "../../../testUsers";

const Messages = () => {
  return (
    <div className={s.messages}>
      <Message fromuser={users.user2} message="LoremLorem ipsum dolor sit amet consectetur adipisicing elit. Esse exercitationem sapiente, vel possimus minus assumenda totam maiores! Nostrum expedita perspiciatis iure ea culpa magni, quis tempora nam dignissimos temporibus dolore!
" />
      <Message fromuser={users.me} message="hello!" />
      <Message fromuser={users.user2} message="ping" />
      <Message fromuser={users.me} message="pong" />
    </div>
  )
}

export default Messages;
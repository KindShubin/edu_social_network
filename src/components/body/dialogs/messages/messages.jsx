import Message from "./message/message";
import s from "./messages.module.css";
import {users, me} from "../../../testUsers";

const Messages = () => {
  return (
    <div className={s.messages}>
      <Message fromuser={users[2]} message="LoremLorem ipsum dolor sit amet consectetur adipisicing elit. Esse exercitationem sapiente, vel possimus minus assumenda totam maiores! Nostrum expedita perspiciatis iure ea culpa magni, quis tempora nam dignissimos temporibus dolore!
" />
      <Message fromuser={me} message="hello!" />
      <Message fromuser={users[2]} message="ping" />
      <Message fromuser={me} message="pong" />
    </div>
  )
}

export default Messages;
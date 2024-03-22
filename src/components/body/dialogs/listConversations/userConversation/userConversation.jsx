import s from "./userConversation.module.css";

//props.user
const UserConversation = (props) => {
  console.log('000000000');
  console.log(props.user.avatar);
  console.log(props.user.name);
  return (
    <div className={s.user}>
      <img src={props.user.avatar} alt="avatar" className={s.avatar}></img>
      <div>{props.user.name}</div>
    </div>
  )
}

export default UserConversation;
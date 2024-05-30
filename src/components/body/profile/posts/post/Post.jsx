
import s from "./post.module.css";
//import pic from "./flower.jpg";

const Post = (props) => {
  return(
    <div className={s.item}>
      <img src={props.pic} alt="post img" className={s.img} />
      <div className={s.text}>{props.text}</div>
      {/* <div className={s.text}>{props.text.replace('\n','<br>')}</div> */}
      <div className={s.date}>{props.date}</div>
    </div>
  )
}

export default Post;
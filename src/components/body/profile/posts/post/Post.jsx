
import s from "./post.module.css";
import pic from "./flower.jpg";

const Post = (props) => {
  console.log(props);
  return(
    <div className={s.item}>
      <div className={s.img}/>
      {/* <img className={s.img} src={pic} alt="pic"></img> */}
      <div className={s.text}>{props.text}</div>
      <div className={s.date}>{props.date}</div>
    </div>
  )
}

export default Post;
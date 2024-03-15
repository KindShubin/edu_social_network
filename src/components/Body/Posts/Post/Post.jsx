
import s from "./Post.module.css";
import pic from "./flower.jpg";

const Post = () => {
  return(
    <div className={s.item}>
      <div className={s.img}/>
      {/* <img className={s.img} src={pic} alt="pic"></img> */}
      <div className={s.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, tempora. Iusto accusantium quod at distinctio omnis? Libero eligendi dignissimos, voluptate odit illum quaerat laboriosam, nesciunt earum praesentium obcaecati sint et.</div>
    </div>
  )
}

export default Post;
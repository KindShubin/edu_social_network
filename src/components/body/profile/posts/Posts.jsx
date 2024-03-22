
import Post from "./post/post";
import s from "./posts.module.css";

const Posts = () => {
  return(
    <div className={s.posts}>
      <Post text="some text" date="2035-12-22"/>
      <Post text="lorem....." date={new Date().toLocaleDateString()}/>
      <Post />
    </div>
  )
}

export default Posts;
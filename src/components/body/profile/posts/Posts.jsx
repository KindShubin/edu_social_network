
import Post from "./post/Post";
import s from "./posts.module.css";

const Posts = () => {
  return(
    <div className={s.posts}>
      <Post />
      <Post />
    </div>
  )
}

export default Posts;
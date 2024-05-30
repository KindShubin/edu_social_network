
import Post from "./post/post";
import s from "./posts.module.css";

//posts [...,...]
const Posts = ({ posts }) => {

  const components = posts.map((post) =>
    <Post key={post.id}
      text={post.text}
      pic={post.pic}
      date={post.date}
    />
  )
  return (
    <div className={s.posts}>

      {components}

    </div>
  )
}

export default Posts;
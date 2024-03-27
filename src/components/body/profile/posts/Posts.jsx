
import Post from "./post/post";
import s from "./posts.module.css";

const Posts = () => {
  return(
    <div className={s.posts}>
      <Post text="some text" date="2035-12-22"/>
      <Post text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, at! Similique rerum ullam culpa quibusdam quos soluta, tempore hic facilis amet ipsa, accusantium nulla praesentium eius ipsam tempora nemo mollitia." date={new Date().toLocaleDateString()}/>
      <Post />
      
    </div>
  )
}

export default Posts;
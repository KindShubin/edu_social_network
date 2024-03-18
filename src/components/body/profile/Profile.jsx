
import s from "./profile.module.css";
import Posts from "./posts/posts";

const Body = () => {
  return(
    <body className={s.body}>
      <div className={s.headerimg}></div>
      some body
      <Posts />
    </body>
  )
}

export default Body;
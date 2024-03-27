
import s from "./addPosts.module.css";

const AddPosts = (props) => {
  return(
    <div className={s.addposts}>
      <textarea className={s.input}>
        write here something
      </textarea>
      <button className={s.button}>
        Send
      </button>
    </div>
  )
}

export default AddPosts;
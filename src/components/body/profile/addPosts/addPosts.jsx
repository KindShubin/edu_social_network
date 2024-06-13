
import { useRef } from "react";
import s from "./addPosts.module.css";
import { createActionAddPost, createActionPrintNewPost } from "../../../../data/state";

const AddPosts = ({ textNewPost, dispatch }) => {

  const textA = useRef(null);

  const printNewPostText = () => {
    dispatch( createActionPrintNewPost(textA.current.value) );
  }
  const addPost = () => {
    dispatch( createActionAddPost() );
  }

  return (
    <div className={s.addposts}>
      <textarea className={s.input}
        onChange={ printNewPostText }
        ref={textA}
        value={textNewPost}
        placeholder="write here something" />
      <button className={s.button}
        onClick={ addPost }>
        Send
      </button>
    </div>
  )
}

export default AddPosts;
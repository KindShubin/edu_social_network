
import { useRef } from "react";
import s from "./addPosts.module.css";
import { addPostActionCreator, printNewPostActionCreator } from "../../../../data/store/reducers/reducerProfile";

const AddPosts = ({ textNewPost, dispatch }) => {

  const textA = useRef(null);

  const printNewPostText = () => {
    dispatch( printNewPostActionCreator(textA.current.value) );
  }
  const addPost = () => {
    dispatch( addPostActionCreator() );
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
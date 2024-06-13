
import s from "./profile.module.css";
import Posts from "./posts/posts";
import AddPosts from "./addPosts/addPosts";

const Profile = ({profile, dispatch}) => {


  return (
    <div className={s.body}>
      <AddPosts textNewPost={profile.textNewPost} dispatch={dispatch}/>
      <Posts posts={profile.posts}/>
    </div>
  )
}

export default Profile;
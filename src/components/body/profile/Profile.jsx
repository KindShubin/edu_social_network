
import s from "./profile.module.css";
import Posts from "./posts/posts";
import AddPosts from "./addPosts/addPosts";

const Profile = () => {
  return (
    <div className={s.body}>
      <AddPosts />
      <Posts />
    </div>
  )
}

export default Profile;
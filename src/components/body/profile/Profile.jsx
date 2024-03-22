
import s from "./profile.module.css";
import Posts from "./posts/posts";

const Profile = () => {
  return (
    <div className={s.body}>
      <Posts />
    </div>
  )
}

export default Profile;
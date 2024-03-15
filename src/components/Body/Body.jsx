
import s from "./Body.module.css";
import Posts from "./Posts/Posts";

const Body = () => {
  return(
    <body className={s.body}>
      <img className={s.headerimg} src="https://t3.ftcdn.net/jpg/02/44/45/82/240_F_244458280_6xD032FsVAVLNsLkYAhcizpLV3Yoo8Bk.jpg" alt="pic"></img>
      some body
      <Posts />
    </body>
  )
}

export default Body;
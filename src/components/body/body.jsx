
import { BrowserRouter, Route, Routes, Outlet, 
  createBrowserRouter, RouterProvider } from "react-router-dom";
import s from "./body.module.css";
import Profile from "./profile/profile";
import Dialogs from "./dialogs/dialogs";
import Music from "./music/music";

const router = createBrowserRouter([
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/dialogs",
    element: <Dialogs />,
  },
  {
    path: "/music",
    element: <Music />,
  },
]);

const Body = () => {
  return (
    <div className={s.body}>
      <div className={s.headerimg}></div>
      <div>some body</div>
      {/* <RouterProvider router={router} /> */}
      {/* <BrowserRouter > */}
        <div>121212</div>
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route path='/dialogs/*' element={<Dialogs />} />
          <Route path='/music' element={<Music />} />
        </Routes>
      {/* </BrowserRouter> */}
    </div>

  )
}

export default Body;
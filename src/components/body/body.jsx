
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

const Body = ( {data, dispatch} ) => {
  
  return (
    <div className={s.body}>
      <div className={s.headerimg}></div>
      <div>some body</div>
      {/* <RouterProvider router={router} /> */}
      {/* <BrowserRouter > */}
        <div>121212</div>
        <Routes>
          <Route path='/profile' element={<Profile profile={data.profile} dispatch={dispatch} />} />
          <Route path='/dialogs/*' element={<Dialogs dialogs={data.dialogs} dispatch={dispatch}/>} />
          <Route path='/music' element={<Music />} />
        </Routes>
      {/* </BrowserRouter> */}
    </div>

  )
}

export default Body;
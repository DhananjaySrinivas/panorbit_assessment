import React, { useContext } from "react";
import SideNav from "../Components/SideNav";
import ProfileNav from "../Components/ProfileNav";
import style from "../CSS/SoonPage.module.css";
import { AppContext } from "../ContextAPI/Provider";

const Posts = () => {
  const { setShowProfile } = useContext(AppContext); 
  return (
    <div className={style.mainDiv}>
      <SideNav />
      <div className={style.topDiv}>
        <div className={style.profile}>
          <h2>Posts</h2>
          <ProfileNav />
        </div>
        <hr style ={{ color: "grey", width: "100%" }} />
        <div className={style.screen} onClick={() => setShowProfile(false)}>
          <h1 className={style.ComingSoon}>Coming Soon</h1>
        </div>
      </div>
    </div>
  );
};

export default Posts;
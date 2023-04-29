import React, { useContext } from "react";
import SideNav from "../Components/SideNav";
import ProfileNav from "../Components/ProfileNav";
import { AppContext } from "../ContextAPI/Provider";
import style from "../CSS/SoonPage.module.css";

const Todo = () => {
  const { setShowProfile } = useContext(AppContext); 
  return (
    <div className={style.mainDiv}>
      <SideNav />
      <div className={style.topDiv}>
        <div className={style.profile}>
          <h2>ToDO</h2>
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

export default Todo;
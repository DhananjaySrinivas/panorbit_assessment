import React, { useContext, useEffect } from "react";
import { AppContext } from "../ContextAPI/Provider";
import style from "../CSS/UserDetails.module.css";
import Profile from "../Pages/Profile";

const ProfileNav = () => {
  const { profileData, setShowProfile, showProfile, getFilterData } =
    useContext(AppContext); 
  useEffect(() => {
    const ID = sessionStorage.getItem("id") || 1;
    getFilterData(Number(ID));
  }, []);

  return (
    <div>
      <div
        onClick={() => setShowProfile(!showProfile)}
        className={style.profile}
      >
        <img src={profileData[0]?.profilepicture} alt="profile img" />
        <p>{profileData[0]?.name}</p>
      </div>
      <Profile />
    </div>
  );
};

export default ProfileNav;
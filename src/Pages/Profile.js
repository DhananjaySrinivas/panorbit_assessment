import React, { useState, useEffect,useContext } from "react";
import axios from "axios";
import { Link,NavLink } from "react-router-dom";
import { AppContext } from "../ContextAPI/Provider";
import style from "../CSS/Profile.module.css";



const Profile = () => {
  const { profileData, setShowProfile, showProfile } = useContext(AppContext);


  const [data, setData] = useState([]);

const getUser = async()=>
{
      const response = await axios.get("https://panorbit.in/api/users.json")
      const data  = await response.data
      setData(data.users)
    
}

    useEffect(() => {
         getUser();
      }, []);
  const handleClick = () => {
    setShowProfile(false);
    sessionStorage.clear("id");
  };

  return (
    <div
      className={style.MainDiv}
      style={{ display: showProfile ? "block" : "none" }}
    >
      <div className={style.profile}>
     <img src={profileData[0]?.profilepicture} alt="profile" />
        <p>{profileData[0]?.name}</p>
        <p>{profileData[0]?.email}</p>
      </div>
      <hr />
      <div className={style.getProfile} onClick={() => setShowProfile(false)}>
      <div className={style.card_bottom}>
      {data.map((val) => (
          <div key={val.id}>
            <NavLink
              to={`/${val.id}`}>
              <div className={style.maping_div}>
                <img src={val.profilepicture} alt="profile image" /> 
                 <p>{val.name}</p>
              </div>
            </NavLink>
            <hr />
          </div>
      ))}
       </div>
       </div>
    
      <Link to="/">
        <button onClick={handleClick} className={style.signout_button}>
          Sign out
        </button>
      </Link>
    </div>
  );
};
export default Profile;
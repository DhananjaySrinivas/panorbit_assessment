import React, { useEffect,useContext } from 'react'
import { useParams } from 'react-router-dom';
import style from '../CSS/UserDetails.module.css';
import SideNav from "../Components/SideNav";
import Main from "../Components/Main";
import { AppContext } from '../ContextAPI/Provider';
import ProfileNav from '../Components/ProfileNav';

const UserDetails = () => {
  const { profileData, getFilterData, setShowProfile, showProfile } = useContext(AppContext);
  const { id } = useParams();
  sessionStorage.setItem("id", id);

  useEffect(() => {
    let ID = sessionStorage.getItem("id") || 1;
    getFilterData(ID);
  }, [id]);


  return (
    <div>
      <div className={style.HomeMain}>

        <SideNav />
        {profileData.map((val) => (
          <div className={style.profile_top} key={val.id}>
            <div className={style.profile}>
              <h2>Profile</h2>
              <ProfileNav />
            </div>
            <hr />
            <div onClick={() => setShowProfile(false)}>
              <Main {...val} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default UserDetails

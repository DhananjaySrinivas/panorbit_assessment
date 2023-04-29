import React from 'react';
import { useState,useEffect } from 'react';
import style from '../CSS/UserDetails.module.css';
import { NavLink } from "react-router-dom";

const SideNav = () => {
  const [userid, setUserId] = useState("1")


  const getID =()=>
  {
    setUserId(sessionStorage.getItem("id") || 1)
  }

  useEffect(()=>{
    getID();
  },[])

  return (
    <div className={style.mainDiv}>
         <p>
        <NavLink to={`/${userid}`}  className={({ isActive }) =>
          isActive ? style.active : style.notActive
        }>Profile</NavLink>
      </p>
      <hr />
      <p>
        <NavLink to="/post"  className={({ isActive }) =>
          isActive ? style.active : style.notActive
        }>Posts</NavLink>
      </p>
      <hr />
      <p>
        <NavLink to="/gallery"  className={({ isActive }) =>
          isActive ? style.active : style.notActive
        }> Gallery </NavLink>
      </p>
      <hr />
      <p>
        <NavLink to="/todo"  className={({ isActive }) =>
          isActive ? style.active : style.notActive
        }> ToDo </NavLink>
      </p>
    </div>
  )
}

export default SideNav
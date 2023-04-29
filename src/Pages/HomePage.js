import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from "../CSS/HomePage.module.css";

 const HomePage =  () => {
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
  return (
<div className={style.MainContainer}>
      <div className={style.card}>
        <h1 className={style.card_top} >Select an account</h1>
        
        
<div className={style.card_bottom}>
     {
        data.map((val) => (
          <div key={val.id}>
            <Link style={{textDecoration:"none"}} to={`/${val.id}`}>
              <div className={style.divStyle}>
                <img src={val.profilepicture} alt="profile Pic" />
                <p>{val.name}</p>
              </div>
            </Link>
             <br />
          </div>
        ))}
    </div>
           
      </div>
    </div>
  )
}

export default HomePage

import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import style from './UserDetails.module.css';
import SideNav from "./SideNav";
import Main from "./Main"

 const UserDetails = () => {

    const [user, setUser] = useState([]);
    const {id} = useParams()

    const getUser = async()=>
    {
          const response = await axios.get("https://panorbit.in/api/users.json")
          const data  = await response.data
          setUser((data.users).filter((val)=> val.id === Number(id)))
        
    }
    
        useEffect(() => {
             getUser();
          }, []);

  return (
    <div>
      <div className={style.HomeMain}>
      
        <SideNav />
         { user.map((val) => (
                <div className={style.profile_top} key={val.id}>
                  <div>
                    <h2>Profile</h2>
                    <div className={style.profile}>
                      <img
                        src={val.profilepicture}
                        alt="profile pic"
                      />
                      <p>{val.name}</p>
                    </div>
                  </div>
                  <hr />
                  <Main {...val}/>
            </div>
          ))}
      </div>
    </div>
  );
};
  

export default UserDetails

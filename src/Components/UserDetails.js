import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';


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
            {user.map((res)=>{
            return <h1 key={res.id}>{res.name}</h1>
            } )}
    </div>
  )
}

export default UserDetails

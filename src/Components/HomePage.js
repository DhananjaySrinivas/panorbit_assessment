import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div>
      <div >
        <h1 >Select an account</h1>
        
        {data.map((res)=>{
            return <Link to={`/${res.id}`}><h1 key={res.id}>{res.name}</h1>
             </Link>} )}
           
      </div>
    </div>
  )
}

export default HomePage

import React, { useState,createContext } from "react";
import axios from "axios";

export const AppContext = createContext();
const Provider = ({ children }) => {
  const [showProfile, setShowProfile] = useState(false);
  const [profileData, setProfileData] = useState([]);
  


 
  const getFilterData =  (id) => {
     axios.get("https://panorbit.in/api/users.json").then((response) => {
        setProfileData(response.data.users.filter((val) => val.id === Number(id)));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <AppContext.Provider
      value={{
        profileData,
        getFilterData,
        setShowProfile,
        showProfile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Provider;

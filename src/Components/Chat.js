import React, { useEffect, useState } from "react";
import style from "../CSS/chat.module.css";
import { BsChatRight } from "react-icons/bs";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import axios from "axios";

const Chat = () => {
  const [hide, setHide] = useState(false);
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
    <div
      className={style.mainDiv}
      style={{ marginTop: hide ? "-270px" : "20px" }}
    >
      <div onClick={() => setHide(!hide)} className={style.chat}>
        <div>
          <BsChatRight />
          <p>Chat</p>
        </div>
        {hide ? <FiChevronDown /> : <FiChevronUp />}
      </div>
      {hide ? (
        <div className={style.profiles}>
        {
            data.map((val) => (
              <div key={val.id}>
                <div className={style.maping_div}>
                  <img src={val.profilepicture} alt="profile image" />
                  <p>{val.name}</p>
                </div>
                <hr />
              </div>
            ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Chat;
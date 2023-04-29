import React from "react";
import style from '../CSS/Main.module.css';

const Main = (props) => {
  return (
    <div className={style.mainDiv}>
      <div className={style.leftSide}>
        <img src={props.profilepicture} alt="profile img" />
        <p>{props.name}</p>
        <h2>
          Username : <span>{props.username}</span>
        </h2>
        <h2>
          e-mail : <span>{props.email}</span>
        </h2>
        <h2>
          Phone : <span>{props.phone}</span>
        </h2>
        <h2>
          Website : <span>{props.website}</span>
        </h2>
        <hr />
        <h2>Company</h2>
        <h2>
          Name : <span>{props.company.name}</span>
        </h2>
        <h2>
          catchphrase : <span>{props.company.catchPhrase}</span>
        </h2>
        <h2>
          bs : <span>{props.company.bs}</span>
        </h2>
      </div>
      <p className={style.line}></p>
      <div className={style.rightSide}>
        <h2>Address:</h2>
        <div className={style.address}>
          <h2>
            Street : <span>{props.address.street}</span>
          </h2>
          <h2>
            Suite : <span>{props.address.suite}</span>
          </h2>
          <h2>
            City : <span>{props.address.city}</span>
          </h2>
          <h2>
            Zipcode : <span>{props.address.zipcode}</span>
          </h2>
        </div>
        <iframe
          width="450"
          height="300"
          className={style.Map}
          src={`https://maps.google.com/maps?q=${props.address.street},t=&z=13&ie=UTF8&iwloc=&output=embed`}
        ></iframe>
        <div className={style.geo}>
          <p>Lat : <span>{props.address.geo.lat}</span></p>
          <p>Lng : <span>{props.address.geo.lng}</span></p>
        </div>
      </div>
    </div>
  );
};

export default Main;
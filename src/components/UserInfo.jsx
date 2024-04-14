import React, { useEffect, useState } from "react";
import "/src/styles/userinfo.css";
import { Outlet } from "react-router-dom";
import Footer from "/src/components/Footer.jsx";

function UserInfo() {
  const [inputStatus, setInputStatus] = useState({
    buttonLink: "",
    inputstyle: "",
  });
  const [error, setError] = useState("");
  let phone = "";

  const handleChange = (event) => {
    phone = event.target.value;
    setInputStatus({
      buttonLink: phone === "" ? "" : "/plan",
    });
  };

  const errorStatus = () => {
    setError(phone === "" ? "active" : "");
    setInputStatus({
      inputstyle: phone === "" ? "error_active" : "",
    });
    setTimeout(() => {
      setError("");
      setInputStatus({
        inputstyle: "",
      });
    }, 2000);
  };

  return (
    <div className="personal_info_section">
      <div className="first_div">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number</p>
        <form action="submit" id="form_personal_info">
          <label htmlFor="name">
            Name
            <input type="text" id="name" placeholder="e.g. Sthephen King" />
          </label>
          <label htmlFor="email">
            Email Adress
            <input
              type="email"
              id="email"
              placeholder="e.g. sthephenking@lorem.com"
            />
          </label>
          <label htmlFor="number">
            Phone Number
            <span className={`error ${error}`}>This field is requiered</span>
            <input
              onChange={(event) => handleChange(event)}
              type="number"
              id="number"
              placeholder="e.g. +1 235 567 890"
              className={inputStatus.inputstyle}
            />
          </label>
        </form>
      </div>
      <div>
        <Footer
          action={errorStatus}
          next={inputStatus.buttonLink}
          noDisplay="hidden"
          title="Next Step"
        />
      </div>
      <Outlet />
    </div>
  );
}

export default UserInfo;

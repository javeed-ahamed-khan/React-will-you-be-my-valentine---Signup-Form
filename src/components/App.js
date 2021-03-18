import React, { Component, useRef, useState } from "react";
import "../styles/App.css";
import Email from "./Email";
import Gender from "./Gender";
import Name from "./Name";
import Password from "./Password";
import Phone from "./Phone";

const App = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userGender, setUserGender] = useState("male");
  const [userPhone, setUserPhone] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const message = useRef();

  const areFieldEmpty = () => {
    if (
      userName.trim() == "" ||
      userEmail.trim() == "" ||
      userPhone.trim() == "" ||
      userPassword.trim() == ""
    ) {
      return true;
    }
    return false;
  };
  const isNameInvalid = () => {
    const temp = userName.trim();
    if (/^[a-z0-9 ]+$/i.test(temp)) return false;
    return true;
  };
  const isEmailInvalid = () => {
    return userEmail.search("@") == -1 ? true : false;
  };
  const isPhoneInvalid = () => {
    return isNaN(userPhone);
  };
  const isPasswordInvalid = () => {
    return userPassword.length < 6 ? true : false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (areFieldEmpty()) {
      message.current.innerText = "All fields are mandatory";
      // alert("All fields are mandatory");
    } else if (isNameInvalid()) {
      message.current.innerText = "Name is not alphanumeric";
      // alert("Name is not alphanumeric");
    } else if (isEmailInvalid()) {
      message.current.innerText = "Email must contain @";
      // alert("Email must contain @");
    } else if (isPhoneInvalid()) {
      message.current.innerText = "Phone Number must contain only numbers";
      // alert("Phone Number must contain only numbers");
    } else if (isPasswordInvalid()) {
      message.current.innerText = "Password must contain atleast 6 letters";
      // alert("Password must contain atleast 6 letters");
    } else {
      message.current.innerText = `Hello ${userEmail
        .trim()
        .slice(0, userEmail.search("@"))}`;
      // alert(`Hello ${userEmail.trim().slice(0, userEmail.search("@"))}`);
      setUserName("");
      setUserEmail("");
      setUserGender("male");
      setUserPhone("");
      setUserPassword("");
    }
  };

  return (
    <div id="main">
      <h3 ref={message}></h3>
      <form id="myForm" action="#" method="post">
        <Name userName={userName} setUserName={setUserName} />
        <Email userEmail={userEmail} setUserEmail={setUserEmail} />
        <Gender userGender={userGender} setUserGender={setUserGender} />
        <Phone userPhone={userPhone} setUserPhone={setUserPhone} />
        <Password
          userPassword={userPassword}
          setUserPassword={setUserPassword}
        />
        <div>
          <button data-testid="submit" onClick={handleSubmit} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;

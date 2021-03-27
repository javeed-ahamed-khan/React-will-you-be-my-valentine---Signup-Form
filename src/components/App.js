import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [error, checkError] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errorClass, setErrorClass] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const checkCases = (e) => {
    e.preventDefault();
    let result = true;
    if (name === "" || email === "" || phone === "" || password === "")
      setMessage("All fields are mandatory");
    else if (!name.match(/^[0-9a-z]+$/)) setMessage("Name is not alphanumeric");
    else if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    )
      setMessage("Email must contain @");
    else if (!phone.match(/^\d{10}$/))
      setMessage("Phone Number must contain only numbers");
    else if (password.length < 6)
      setMessage("Password must contain atleast 6 letters");
    else {
      let show_name = "";
      let i = 0;
      while (email[i] !== "@") {
        show_name += email[i++];
      }
      setMessage(`Hello ${show_name}`);
      result = false;
    }
    checkError(result);
  };

  useEffect(() => {
    if (error) setErrorClass("error");
  }, [checkCases]);

  return (
    <div id="main">
      <h1>Sign Up Form</h1>
      <form action="">
        <label>Name: </label>
        <input
          onChange={handleChangeName}
          value={name}
          data-testid="name"
        ></input>
        <br />
        <label>Email: </label>
        <input
          onChange={handleChangeEmail}
          value={email}
          data-testid="email"
        ></input>
        <br />
        <select data-testid="gender" name="gender">
          <option value="male" defaultValue>
            Male
          </option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>
        <label>Phone: </label>
        <input
          onChange={handleChangePhone}
          value={phone}
          data-testid="phoneNumber"
        ></input>
        <br />
        <label>Password: </label>
        <input
          onChange={handleChangePassword}
          value={password}
          data-testid="password"
          type="password"
        ></input>
        <br />
        <button onClick={checkCases} type="submit" data-testid="submit">
          Submit
        </button>
      </form>
      <h1 className={errorClass}>{message}</h1>
    </div>
  );
};

export default App;

// import React, { Component, useRef, useState } from "react";
// import "../styles/App.css";
// import Email from "./Email";
// import Gender from "./Gender";
// import Name from "./Name";
// import Password from "./Password";
// import Phone from "./Phone";

// const App = () => {
//   const [userName, setUserName] = useState("");
//   const [userEmail, setUserEmail] = useState("");
//   const [userGender, setUserGender] = useState("male");
//   const [userPhone, setUserPhone] = useState("");
//   const [userPassword, setUserPassword] = useState("");
//   const message = useRef();

//   const areFieldEmpty = () => {
//     if (
//       userName.trim() == "" ||
//       userEmail.trim() == "" ||
//       userPhone.trim() == "" ||
//       userPassword.trim() == ""
//     ) {
//       return true;
//     }
//     return false;
//   };
//   const isNameInvalid = () => {
//     const temp = userName.trim();
//     if (/^[a-z0-9 ]+$/i.test(temp)) return false;
//     return true;
//   };
//   const isEmailInvalid = () => {
//     return userEmail.search("@") == -1 ? true : false;
//   };
//   const isPhoneInvalid = () => {
//     return isNaN(userPhone);
//   };
//   const isPasswordInvalid = () => {
//     return userPassword.length < 6 ? true : false;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (areFieldEmpty()) {
//       message.current.innerText = "All fields are mandatory";
//     } else if (isNameInvalid()) {
//       message.current.innerText = "Name is not alphanumeric";
//     } else if (isEmailInvalid()) {
//       message.current.innerText = "Email must contain @";
//     } else if (isPhoneInvalid()) {
//       message.current.innerText = "Phone Number must contain only numbers";
//     } else if (isPasswordInvalid()) {
//       message.current.innerText = "Password must contain atleast 6 letters";
//     } else {
//       message.current.innerText = `Hello ${userEmail
//         .trim()
//         .slice(0, userEmail.search("@"))}`;
//       setUserName("");
//       setUserEmail("");
//       setUserGender("male");
//       setUserPhone("");
//       setUserPassword("");
//     }
//   };

//   return (
//     <div id="main">
//       <form id="myForm" action="">
//         <Name userName={userName} setUserName={setUserName} />
//         <Email userEmail={userEmail} setUserEmail={setUserEmail} />
//         <Gender userGender={userGender} setUserGender={setUserGender} />
//         <Phone userPhone={userPhone} setUserPhone={setUserPhone} />
//         <Password
//           userPassword={userPassword}
//           setUserPassword={setUserPassword}
//         />
//         <div>
//           <button data-testid="submit" onClick={handleSubmit} type="submit">
//             Submit
//           </button>
//         </div>
//       </form>
//       <h3 ref={message}></h3>
//     </div>
//   );
// };

// export default App;

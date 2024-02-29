import React from "react";

import Login from "../login/Login";
import Signup from "../signup/Signup";

import "./LogOrSign.css";

const LogOrSign = ({ setLoggedIn }) => {
  return (
    <div className="logorsign-wrapper">
      <Login setLoggedIn={setLoggedIn} />
      <Signup setLoggedIn={setLoggedIn} />
    </div>
  );
};

export default LogOrSign;

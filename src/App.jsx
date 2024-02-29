import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LogOrSign from "./components/logOrSign/LogOrSign";

import "./App.css";
import Dashboard from "./components/dashboard/dashboard";
const URL = import.meta.env.PROD
  ? "https://instagrambe.onrender.com"
  : "http://localhost:5001";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log(loggedIn);
    console.log("useeffect hit");
    async function fetchusers() {
      console.log("fetchusers");
      const response = await fetch(`${URL}/users/getAllUsers`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      await setUsers(data.users);
    }
    fetchusers();
  }, []);

  return (
    <>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Dashboard loggedIn={loggedIn} />} />
          <Route
            path="/logOrSign"
            element={<LogOrSign setLoggedIn={setLoggedIn} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;

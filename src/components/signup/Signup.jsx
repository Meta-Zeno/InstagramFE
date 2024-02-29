import { useState } from "react";

import { signupUser } from "../../utils/fetch";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeHandler = (e, setter, state) => {
    setter(e.target.value);
    console.log(state);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hello from signup handle submit");
    await signupUser(username, email, password);
  };

  return (
    <div>
      <h3>Signup</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          onChange={(e) => changeHandler(e, setUsername, username)}
        />
        <input
          placeholder="Email"
          onChange={(e) => changeHandler(e, setEmail, email)}
        />
        <input
          placeholder="Password"
          onChange={(e) => changeHandler(e, setPassword, password)}
        />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;

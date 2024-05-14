import { useState, useContext } from "react";
import UserContext from "../contet/UseContext";

function Login() {
  const [username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, Password });
  };
  return (
    <div>
      <h1>login</h1>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        name=""
        id=""
        placeholder="username"
      />
      <input
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        name=""
        id=""
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;

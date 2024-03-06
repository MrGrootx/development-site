import { useState } from "react";

const Login = () => {
  const loginUser = (e) => {
    e.preventDefault();
  };
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  return (
    <div>
      <form onSubmit={loginUser}>
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

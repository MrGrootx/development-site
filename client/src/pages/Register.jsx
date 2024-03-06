import { useState } from "react";

const Register = () => {
  const registerUser = (e) => {
    e.preventDefault();
  };

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div>
      <form action="" onSubmit={registerUser}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;

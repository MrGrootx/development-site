import { useContext } from "react";
import { UserContext } from "../../context/userContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  return <div>
    <h1>Dashboard</h1>
    {!!user && <p>wassp buddy{user.name}</p>}
  </div>;
};

export default Dashboard;

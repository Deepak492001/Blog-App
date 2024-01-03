import React, { useContext } from "react";
import { Toaster } from "react-hot-toast";
import AddBlog from "../pages/AddBlog";
import { UserContext } from "../context/UserContext";

const Dashboard = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log(currentUser);
  return (
    <>
      <h1>Dashboard</h1>
      <AddBlog />
     
    </>
  );
};

export default Dashboard;
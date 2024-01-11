import React, { useContext } from "react";
import { Toaster } from "react-hot-toast";
import AddBlog from "../pages/AddBlog";
import { UserContext } from "../context/UserContext";

const Dashboard = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log(currentUser);
  return (
    <>
      <AddBlog />

    </>
  );
};

export default Dashboard;

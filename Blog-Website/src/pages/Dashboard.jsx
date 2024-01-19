import React, { useContext } from "react";

import { UserContext } from "../context/UserContext";
import AddPost from "./AddPost";

const Dashboard = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log(currentUser);
  return (
    <>
      <AddPost />

    </>
  );
};

export default Dashboard;

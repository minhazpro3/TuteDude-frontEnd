import React from "react";
import Nav from "../Nav/Nav";
import Refer_ui from "../ReferUI/Refer_ui";
import Users from "../usersList/Users";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="container">
        <Refer_ui />
        <Users />
      </div>
    </div>
  );
};

export default Home;

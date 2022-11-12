import React from "react";
import "./Nav.css";
import image from "../images/image 1.png";
import { FaChevronDown } from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi";

const Nav = () => {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="header_container">
        <div className="nav_subCon">
          <div className="logo_img">
            <img src={image} alt="" />
          </div>
          <div className="nav_routes">
            <h5 className="nav_route">My Assignment</h5>
            <h5 className="nav_route">Chat With Mentor</h5>
            <div className="profile_route">
              <HiUserCircle className="array_icon" />
              <h5>Profile Name</h5>
              <FaChevronDown className="array_icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

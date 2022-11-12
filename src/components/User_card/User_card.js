import React from "react";
import "./user_card.css";
const User_card = ({ id, name, course_index, amount, date }) => {
  return (
    <div className="card_sizing">
      <div>
        <div className="name_date">
          <h3 className="name">{name}</h3>
          <h3 className="date">{date}</h3>
        </div>
        <h3 className="course_index">
          Courses Enrolled <span>({course_index})</span>{" "}
        </h3>
        <h3 className="">
          <span className="courses"> {"UI/UX"}</span>{" "}
          <span className="courses">{"Photoshop"}</span>{" "}
          <span className="courses"> {"illustrator"}</span>
        </h3>
        <h3>
          <span className="courses"> {"Python"}</span>
          <span className="courses"> {"MERN"}</span>
        </h3>
        <h3 className="amount_li">
          {" "}
          Referral Amount <span id="amount">£{amount}</span>
        </h3>
      </div>
    </div>
  );
};

export default User_card;

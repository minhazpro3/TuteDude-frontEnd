import React from "react";
import User_card from "../User_card/User_card";
import "./users.css";

const Users = () => {
  const enrolled = [
    {
      id: 1,
      name: "Dhiraj Saxena",
      course_index: 6,
      courses: ["UI/UX", "Photoshop", "illustrator", "Python", "MERN", "Java"],
      amount: 185,
      date: "14 sep, 2022",
    },
    {
      id: 2,
      name: "Dhiraj Saxena",
      course_index: 23,
      courses: [
        "UI/UX",
        "Photoshop",
        "illustrator",
        "Python",
        "MERN",
        "Java",
        "C++",
      ],
      amount: 485,
      date: "15 sep, 2022",
    },
    {
      id: 3,
      name: "Paraful Kumar",
      course_index: 23,

      amount: 485,
      date: "16 sep, 2022",
    },
  ];

  return (
    <div>
      <div>
        <h3 className="enroll_index">
          Friends who enrolled <span id="index">(3)</span>
        </h3>
        <div className="cardPar_contain">
          <div className="card_contain">
            {enrolled.map((enroll) => (
              <User_card key={enroll.id} {...enroll} />
            ))}
          </div>
        </div>
        <div className="cardPar_contain">
          <h3 className="term">Term & Conditions</h3>
        </div>
      </div>
    </div>
  );
};

export default Users;

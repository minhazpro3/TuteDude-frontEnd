import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { BiLeftArrowAlt } from "react-icons/bi";
import "./Refer_ui.css";

const Refer_ui = () => {
  return (
    <div>
      <div>
        <h3 className="refer_route">
          UI/UX <IoIosArrowForward /> Refer & Earn <IoIosArrowForward /> Friends
          Referred
        </h3>
        <h3 className="back">
          {" "}
          <BiLeftArrowAlt /> go back
        </h3>
        <div className="refer_ui">
          <div>
            <h4>Your Referral Code </h4>
            <h4 className="code_wallet" id="code">
              EDCH54{" "}
            </h4>
          </div>
          <div className="wallet_balance">
            <h4>Wallet Balance</h4>
            <h4 className="code_wallet">£500</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refer_ui;

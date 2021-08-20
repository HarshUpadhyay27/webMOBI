import React from "react";
import AssessmentIcon from "@material-ui/icons/Assessment";
import { TiGroup } from "react-icons/ti";
import { IoMdAnalytics } from "react-icons/io";
import { FaEnvelopeOpenText } from "react-icons/fa";
import logo from "../image/logo.png";

const LeftSidebar = () => {
  return (
    <div className="left-nav">
      <ul>
        <li>
          <img src={logo} alt="..." />
        </li>
        <li className="active">
          <span>
            <AssessmentIcon className="logo" />
          </span>
          <p>Event</p>
        </li>
        <li className="active-hover">
          <span>
            <TiGroup className="logo" />
          </span>
          <p>Teams</p>
        </li>
        <li>
          <span>
            <IoMdAnalytics className="logo" />
          </span>
          <p>Analysis</p>
        </li>
        <li>
          <span>
            <FaEnvelopeOpenText className="logo" />
          </span>
          <p>Results</p>
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;

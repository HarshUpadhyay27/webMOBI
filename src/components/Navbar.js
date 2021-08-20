import React from "react";
import SortIcon from "@material-ui/icons/Sort";
import SmartphoneIcon from "@material-ui/icons/Smartphone";
import ComputerIcon from "@material-ui/icons/Computer";

const Navbar = () => {
  return (
    <div className="mid-nav">
      <div className="mid-nav-left">
        <ul>
          <li>
            <SortIcon className="logo" />
          </li>
          <li>
            <h1>Admin Dashbord</h1>
          </li>
        </ul>
      </div>
      <div className="mid-nav-right">
        <div>
          Preview on :
          <span>
            <SmartphoneIcon className="logo" />
          </span>
          <span>
            <ComputerIcon className="logo" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

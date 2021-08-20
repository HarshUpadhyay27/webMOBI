import React from "react";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { IoIosChatbubbles } from "react-icons/io";
import { GiCartwheel } from "react-icons/gi";
import { GoPrimitiveDot } from "react-icons/go";

const RightSidebar = () => {
  return (
    <div className="right-nav">
      <ul>
        <li className="profile" >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3i_qZtrjSgoPCyIOywhlX8MKOzRIaQbKU0A&usqp=CAU"
            alt="..."
          />
          <span>
            <GoPrimitiveDot />
          </span>
        </li>
        <li className="icon" >
          <IoNotificationsCircleSharp />
          <span>
            <GoPrimitiveDot />
          </span>
        </li>
        <li className="icon" >
          <IoIosChatbubbles />
          <span>
            <GoPrimitiveDot />
          </span>
        </li>
        <li>
          <GiCartwheel />
        </li>
      </ul>
    </div>
  );
};

export default RightSidebar;

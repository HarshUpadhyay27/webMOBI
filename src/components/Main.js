import React from "react";
import { IoMdLock, IoMdChatbubbles } from "react-icons/io";
import { ImCancelCircle } from "react-icons/im";
import { RiArrowDropUpLine } from "react-icons/ri";

const Main = () => {
  return (
    <div className="main">
      <div className="main-left">
        <div>Event settings</div>
        <ul>
          <li>General</li>
          <li>Privacy</li>
          <li className="active">Features</li>
          <li>Customization</li>
          <li>Integration</li>
          <li>
            Session Settings{" "}
            <span>
              <IoMdLock />
            </span>
          </li>
          <li>My plane</li>
        </ul>
      </div>
      <div className="main-right">
        <span className="cancel">
          <ImCancelCircle />
        </span>
        <div>
          <div className="head-div">
            <p>
              <span>
                <IoMdChatbubbles />
              </span>{" "}
              Audience Q&A
            </p>
            <label className="switch">
              <input type="checkbox" checked />
              <span className="slider"></span>
            </label>
            <span>
              <RiArrowDropUpLine />
            </span>
          </div>
          <ul>
            <li>
              <div>
                <p>Moderation</p>
                <span>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </span>
              </div>
              <p>Easily review all question before go live</p>
            </li>
            <li>
              <div>
                <p>Labels</p>
                <span>
                  <label className="switch">
                    <input type="checkbox" checked />
                    <span className="slider"></span>
                  </label>
                </span>
              </div>
              <p>Categorzied and filter question</p>
            </li>
            <li>
              <div>
                <p>Downvotes</p>
                <span>
                  <label className="switch">
                    <input type="checkbox" checked />
                    <span className="slider"></span>
                  </label>
                </span>
              </div>
              <p>Enable downvoting of question</p>
            </li>
            <li>
              <div>
                <p>Replies</p>
                <span>
                  <label className="switch">
                    <input type="checkbox" checked />
                    <span className="slider"></span>
                  </label>
                </span>
              </div>
              <p>Allow participant to reply to or comment on question</p>
            </li>
            <li>
              <div>
                <p>Anonymous questions</p>
                <span>
                  <label className="switch">
                    <input type="checkbox" checked />
                    <span className="slider"></span>
                  </label>
                </span>
              </div>
              <p>Let your participants send anonymous question</p>
            </li>
            <li>
              <div>
                <p>Maximum question length</p>
                <span>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </span>
              </div>
              <p>Show number of votes instead of percentage</p>
            </li>
            <div>
                <button>160</button>
                <button>240</button>
                <button className="uniqe" >300</button>
            </div>
            <li>
              <div>
                <p>Close questions</p>
                <span>
                  <label className="switch">
                    <input type="checkbox" checked />
                    <span className="slider"></span>
                  </label>
                </span>
              </div>
              <p>
                Prevent the participants from sending new questions to your
                event
              </p>
            </li>
          </ul>
        </div>
        <button>Save</button>
      </div>
    </div>
  );
};

export default Main;

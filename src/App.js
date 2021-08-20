import React from "react";
import "./App.css";
import LeftSidebar from "./components/LeftSidebar";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import RightSidebar from "./components/RightSidebar";

const App = () => {
  return (
    <>
      <nav>
        <div className="nav-mid">
          <Navbar />
        </div>
        <div className="nav-left">
          <LeftSidebar />
        </div>
        <div className="nav-right">
          <RightSidebar />
        </div>
        <main>
          <Main />
        </main>
      </nav>
    </>
  );
};

export default App;

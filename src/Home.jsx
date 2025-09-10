import React from "react";
import "./assets/style/Home.css";

function Home() {
  return (
    <>
      <div className="main">
        <h2>TITLE HEADING</h2>
        <h5>Title description, Dec 7, 2024</h5>
        <div className="fakeimg" style={{ height: "200px" }}>
          Image
        </div>
        <p>Some text..</p>
        <p>
          Sunt in culpa qui officia deserunt mollit anim id est laborum
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco.
        </p>
        <br />
        <h2>TITLE HEADING</h2>
        <h5>Title description, Sep 2, 2024</h5>
        <div className="fakeimg" style={{ height: "200px" }}>
          Image
        </div>
        <p>Some text..</p>
        <p>
          Sunt in culpa qui officia deserunt mollit anim id est laborum
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco.
        </p>
      </div>
    </>
  );
}

export default Home;

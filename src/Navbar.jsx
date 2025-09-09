import "./assets/style/Navbar.css";

function Navbar() {
  return (
    <>
      <div style={{ background: "yellow", padding: "5px" }}>
        <h2 style={{ textAlign: "center" }}>
          Resize the browser window to see the responsive effect.
        </h2>
      </div>

      <div className="header">
        <h1>My Website</h1>
        <p>
          With a <b>flexible</b> layout.
        </p>
      </div>

      <div className="navbar">
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
      </div>
    </>
  );
}

export default Navbar;

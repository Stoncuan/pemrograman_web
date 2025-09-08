import "./assets/style/Navbar.css";

function Navbar() {
  return (
    <>
      <div style="background:yellow;padding:5px">
        <h4 style="text-align:center">
          Resize the browser window to see the responsive effect.
        </h4>
      </div>

      <div class="header">
        <h1>My Website</h1>
        <p>
          With a <b>flexible</b> layout.
        </p>
      </div>

      <div class="navbar">
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
      </div>
    </>
  );
}

export default Navbar;

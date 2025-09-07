import "./assets/style/Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
      <div className="title">Stoncuan</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    </>
  );
}

export default Navbar;

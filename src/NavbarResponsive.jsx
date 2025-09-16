// import "./assets/style/NavbarResponsive.css";

// export default function NavbarResponsive() {
//   const [isResponsive, setIsResponsive] = useState(false);

//   const toggleMenu = () => {
//     setIsResponsive(!isResponsive);
//   };
// }

function NavbarResponsive() {
  return (
    <>
      <div
        className={isResponsive ? "topnav responsive" : "topnav"}
        id="myTopnav"
      >
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        <a href="#">Link 4</a>
        <button className="icon" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </>
  );
}

export default NavbarResponsive;

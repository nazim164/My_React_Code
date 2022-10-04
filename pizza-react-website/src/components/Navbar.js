import React,{useState} from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/pizzaLogo.png";
import "../style/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
function Navbar() {
  const [openlink, setOpenLink] = useState(false);
  const toggleNavber=()=>{
      setOpenLink(!openlink)
  }
  return (
    <div className="navbar">
      <div className="leftSide" id={openlink ?"open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNavber}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;

import "./menu.css";
import menu from "../images/menu.svg"
import { Link, BrowserRouter } from "react-router-dom"
const Menu = () => {
  return (
    <div className="menu">
      <BrowserRouter>



        <div className="m-items">
          <Link to="#" className="m-item m-icon"><img src={menu} alt="" width={50} height={40} /></Link>
          <Link to="#" className="m-item">Contacts</Link>
          <Link to="#" className="m-item">Projects</Link>
          <Link to="#" className="m-item">About</Link>
          <Link to="#" className="m-item">Home</Link>
        </div></BrowserRouter>
    </div>
  );
};

export default Menu;

import top_img_mb from "/src/assets/images/bg-sidebar-mobile.svg";
import top_img_dk from "/src/assets/images/bg-sidebar-desktop.svg";
import "/src/styles/top.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Top() {
  const location = useLocation();
  const isActive = (pathname) => {
    return location.pathname === pathname ? "selected" : "";
  };
  return (
    <div className="side_bar_container">
      <nav className="nav">
        <ul>
          <li>
            <Link to={"/"}>
              <button className={`btn 1 ${isActive("/")}`}>1</button>
            </Link>
            <div>
              <p>step 1</p>
              <h3>your info</h3>
            </div>
          </li>
          <li>
            <Link to={"/plan"}>
              <button className={`btn 2 ${isActive("/plan")}`}>2</button>
            </Link>
            <div>
              <p>step 2</p>
              <h3>select plan</h3>
            </div>
          </li>
          <li>
            <Link to={"/add-ons"}>
              <button className={`btn 3 ${isActive("/add-ons")}`}>3</button>
            </Link>
            <div>
              <p>step 3</p>
              <h3>add-ons</h3>
            </div>
          </li>
          <li>
            <Link to={"/buy_detail"}>
              <button className={`btn 4 ${isActive("/buy_detail")}`}>4</button>
            </Link>
            <div>
              <p>step 4</p>
              <h3>summary</h3>
            </div>
          </li>
        </ul>
      </nav>
      <div className="top_img_container">
        <img
          src={window.innerWidth >= 765 ? top_img_dk : top_img_mb}
          alt="performance_img"
          className="top_img"
        />
      </div>
    </div>
  );
}

export default Top;

import { Link } from "react-router-dom";
import "/src/styles/fotter.css";

function Footer({ next, noDisplay, goback, title, action }) {
  return (
    <footer className="footer_container">
      <Link rel="stylesheet" to={goback}>
        <button className={`back ${noDisplay}`}>Go Back</button>
      </Link>
      <Link rel="stylesheet" to={next}>
        <button onClick={() => action()} className="next_step">{title}</button>
      </Link>
    </footer>
  );
}

export default Footer;

import arcade_img from "/src/assets/images/icon-arcade.svg";
import advanced_img from "/src/assets/images/icon-advanced.svg";
import pro_img from "/src/assets/images/icon-pro.svg";
import "/src/styles/plan.css";
import { useContext, useState } from "react";
import { Selection } from "./Memoria";
import Footer from "/src/components/Footer.jsx";

function Plan() {
  const [estado, enviar] = useContext(Selection);
  const [promotionState, setPromotionState] = useState("");
  const [toggle, setToggle] = useState("");
  const [term, setTerm] = useState("mo");
  const [amount, setAmount] = useState({
    arcade: 9,
    advanced: 12,
    pro: 15,
  });
  const [activeButton, setActiveButton] = useState(null);
  const [userPlanSelected, setUserPlanSelected] = useState({
    id: 'plan',
    type: "",
    frequency: "",
    price: "",
  });

  const activePlan = (name, cost) => {
    setUserPlanSelected({
      id: 'plan',
      type: name,
      frequency: term,
      price: cost,
    });
  };

  const handleButtonClick = (buttonId) => {
    if (activeButton === buttonId) {
      setActiveButton(null);
    } else {
      setActiveButton(buttonId);
    }
  };

  function changeTerm() {
    const newTerm = toggle === "" ? "yr" : "mo";
    const newAmount =
      toggle === ""
        ? { arcade: 90, advanced: 120, pro: 150 }
        : { arcade: 9, advanced: 12, pro: 15 };
    const newToggle = toggle === "" ? "move" : "";
    const newPromotion = promotionState === "" ? "fade" : "";

    setTerm(newTerm);
    setAmount(newAmount);
    setToggle(newToggle);
    setPromotionState(newPromotion);
  }

  const actualizar = () => {
    enviar({tipo: 'actualizar', lista: userPlanSelected})
  };

  return (
    <section className="container2">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div className="options_container">
        <button
          className={`button ${activeButton === "Arcade" ? "active" : ""}`}
          onClick={() => {
            handleButtonClick("Arcade"), activePlan("Arcade", amount.arcade);
          }}
        >
          <img src={arcade_img} alt="Game Controller" />
          <div>
            <h3>Arcade</h3>
            <p>
              ${amount.arcade}/{term}
            </p>
            <span className={`year_promotion ${promotionState}`}>
              2 months free
            </span>
          </div>
        </button>
        <button
          className={`button ${activeButton === "Advanced" ? "active" : ""}`}
          onClick={() => {
            handleButtonClick("Advanced"),
              activePlan("Advanced", amount.advanced);
          }}
        >
          <img src={advanced_img} alt="Game Controller" />
          <div>
            <h3>Advanced</h3>
            <p>
              ${amount.advanced}/{term}
            </p>
            <span className={`year_promotion ${promotionState}`}>
              2 months free
            </span>
          </div>
        </button>
        <button
          className={`button ${activeButton === "Pro" ? "active" : ""}`}
          onClick={() => {
            handleButtonClick("Pro"), activePlan("Pro", amount.pro);
          }}
        >
          <img src={pro_img} alt="Game Controller" />
          <div>
            <h3>Pro</h3>
            <p>
              ${amount.pro}/{term}
            </p>
            <span className={`year_promotion ${promotionState}`}>
              2 months free
            </span>
          </div>
        </button>
      </div>
      <div className="toggle_container">
        <p className="month">Monthly</p>
        <div>
          <button className="btn_toggle " onClick={() => changeTerm()}>
            <span className={`button_toggle ${toggle}`}></span>
          </button>
        </div>
        <p className="year">Yearly</p>
      </div>
      <Footer
        next="/add-ons"
        goback="/"
        title="Next Step"
        action={actualizar}
      />
    </section>
  );
}

export default Plan;

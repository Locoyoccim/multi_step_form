import "/src/styles/checkbox.css";
import { useContext, useEffect, useState } from "react";
import { Selection } from "./Memoria";

function Checkbox({ id, priceMo, priceYr, descriptionService, type }) {
  const [estado, enviar] = useContext(Selection);
  const [isChecked, setIsChecked] = useState({
    1: true,
    2: true,
    3: false,
  });
  const paymentFrequency = estado.objetos["plan"].frequency;
  const [addonState, setAddonState] = useState({ ...estado.objetos[id] });

  function onChange() {
    setAddonState((prevState) => ({
      ...prevState,
      add: !addonState.add,
    }));
  }

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setIsChecked((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  const SendActive = () => {
    enviar({ tipo: "actualizar", lista: addonState });
  };

  useEffect(() => {
    SendActive();
  }, [addonState]);

  useEffect(() => {
    setAddonState({
      ...addonState,
      frequency: paymentFrequency === "mo" ? "mo" : "yr",
    });
  }, [estado.objetos["plan"]]);

  return (
    <div
      className={`online_addon option ${
        isChecked[id] === true ? "checked" : ""
      }`}
    >
      <div className="checkbox_description">
        <div className={`container`}>
          <input
            type="checkbox"
            value={paymentFrequency == "mo" ? priceMo : priceYr}
            id={id}
            checked={isChecked[id]}
            onChange={(event) => {
              handleCheckboxChange(event), onChange();
            }}
          />
          <div className="description">
            <h3>{type}</h3>
            <p>{descriptionService}</p>
          </div>
        </div>
      </div>
      <div className="price_addon">
        +${paymentFrequency == "mo" ? priceMo : priceYr}/{paymentFrequency}
      </div>
    </div>
  );
}

export default Checkbox;

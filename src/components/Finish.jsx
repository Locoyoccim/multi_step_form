import "/src/styles/finish.css";
import Footer from "./Footer";
import ExtraServices from "./ExtraServices";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Selection } from "./Memoria";

function Finish() {
  const [frequencyPayment, setFrequencyPayment] = useState("Monthly");
  const [estado, enviar] = useContext(Selection);
  const planSelected = estado.orden.filter(
    (item) => estado.objetos[item].id == "plan"
  );

  const extrasSelected = estado.orden.filter(
    (item) => estado.objetos[item].add === true
  );
  //Sumatoria de los servicios que contrata el usuario, obtenidos de la memoria
  const paymentFrequency =
    estado.objetos["plan"].frequency === "mo" ? "priceMo" : "priceYr";
  const sumServices = estado.objetos["plan"].price;
  const sumExtas = extrasSelected.reduce(
    (total, id) => total + estado.objetos[id][paymentFrequency],
    0
  );
  const total = sumServices + sumExtas;

  useEffect(() => {
    const newFrequency =
      estado.objetos[planSelected].frequency === "mo" ? "Monthly" : "Yearly";
    setFrequencyPayment(newFrequency);
  }, [estado.objetos[planSelected].type]);

  return (
    <section className="finish_section">
      <div className="first_container">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirm</p>
        <div className="details_container">
          <div>
            <div className="main_buy">
              <div>
                <h3>
                  {estado.objetos[planSelected].type} ({frequencyPayment})
                </h3>
                <Link to="/plan" className="change">
                  Change
                </Link>
              </div>
              <span className="main_price">
                ${estado.objetos[planSelected].price}/
                {estado.objetos[planSelected].frequency}
              </span>
            </div>
          </div>
          <hr />
          {extrasSelected.map((item) => (
            <ExtraServices key={item} {...estado.objetos[item]} />
          ))}
        </div>
        <div className="total_amount">
          <p>Total (per year)</p>
          <span className="total">
            ${total}/{estado.objetos["plan"].frequency}
          </span>
        </div>
      </div>
      <Footer goback="/add-ons" next="/thanks" title="Confirm"></Footer>
    </section>
  );
}

export default Finish;

import Footer from "./Footer";
import "/src/styles/addom.css";
import Checkbox from "./Checkbox";
import { useContext } from "react";
import { Selection } from "./Memoria";

function Addon() {
  const [estado, enviar] = useContext(Selection);
  
  const extrasSelected = estado.orden.filter(
    (item) => estado.objetos[item].id !== "plan"
  );
  return (
    <section className="addOn_section">
      <h1>Pick add-on</h1>
      <p>Add-ons help enhance your gaming experience.</p>

      {extrasSelected.map(id => <Checkbox key={id} {...estado.objetos[id]} />)}

      <Footer goback="/Plan" next="/buy_detail" title="Next Step"></Footer>
    </section>
  );
}

export default Addon;

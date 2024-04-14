import { createContext, useReducer } from "react";
const userSelection = [
  {
    id: "plan",
    type: "Arcade",
    frequency: "yr",
    price: 90,
  },
  {
    id: "1",
    type: "Online Service",
    frequency: "yr",
    priceMo: 1,
    priceYr: 10,
    descriptionService: "Access to multiplayer games",
    add: true,
  },
  {
    id: "2",
    type: "Larger storage",
    frequency: "yr",
    priceMo: 2,
    priceYr: 20,
    descriptionService: "Extra 1TB of lcoud save",
    add: true,
  },
  {
    id: "3",
    type: "Customizable profile",
    frequency: "yr",
    priceMo: 2,
    priceYr: 20,
    descriptionService: "Custom theme on your profile",
    add: false,
  },
];

export const Selection = createContext(null);
const estadoInicial = {
  orden: [],
  objetos: {},
};

function reductor(estado, accion) {
  switch (accion.tipo) {
    case "colocar": {
      const selections = accion.lista;
      const nuevoEstado = {
        orden: selections.map((item) => item.id),
        objetos: selections.reduce(
          (objeto, item) => ({ ...objeto, [item.id]: item }),
          {}
        ),
      };
      return nuevoEstado;
    }
    case "actualizar": {
      const id = accion.lista.id;
      estado.objetos[id] = {
        ...estado.objetos[id],
        ...accion.lista,
      };
      const nuevoEstado = { ...estado };
      return nuevoEstado;
    }
  }
}

const initList = reductor(estadoInicial, {
  tipo: "colocar",
  lista: userSelection,
});

function Memoria({ children }) {
  const [estado, enviar] = useReducer(reductor, initList);
  return (
    <Selection.Provider value={[estado, enviar]}>{children}</Selection.Provider>
  );
}

export default Memoria;

import { useState } from "react";
import Header from "./components/Header";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(0);
  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <div className="nuevo-gasto">
          <img
            src={IconoNuevoGasto}
            alt="Icono Nuevo Gasto"
            className="img-fluid"
          />
        </div>
      )}
    </div>
  );
}

export default App;

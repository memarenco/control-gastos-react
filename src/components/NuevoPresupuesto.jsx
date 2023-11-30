import { useState } from "react";
import Mensaje from "./Mensaje";
const NuevoPresupuesto = ({ presupuesto, setPresupuesto }) => {
  const [mensaje, setMensaje] = useState(0);
  const handlePresupuesto = (e) => {
    e.preventDefault();
    if (Number(presupuesto) <= 0) {
      setMensaje("No es un presupuesto válido");
    } else {
      setMensaje("Sí es valido");
    }
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>
          <input
            type="number"
            className="nuevo-presupuesto"
            placeholder="Añade tu Presupuesto"
            defaultValue={presupuesto}
            onChange={(e) => setPresupuesto(e.target.value)}
          />
        </div>
        <input type="submit" value="Añadir" />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;

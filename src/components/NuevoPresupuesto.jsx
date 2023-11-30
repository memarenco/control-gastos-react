import React from "react";

const NuevoPresupuesto = () => {
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>
          <input
            type="number"
            className="nuevo-presupuesto"
            placeholder="Añade tu Presupuesto"
          />
        </div>
        <input type="submit" value="Añadir" />
      </form>
    </div>
  );
};

export default NuevoPresupuesto;

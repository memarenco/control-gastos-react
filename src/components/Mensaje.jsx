import React from "react";

const Mensaje = ({ children, tipo }) => {
  return (
    <div>
      <p className={`alerta ${tipo}`}>{children}</p>
    </div>
  );
};

export default Mensaje;

const Gasto = ({ gasto }) => {
  const { categoria, nombre, cantidad } = gasto;
  return (
    <div className="gasto sombra">
      <div className="descripcion-gasto">
        <p className="categoria">{categoria}</p>
        <p className="nombre-gasto">{nombre}</p>
      </div>
    </div>
  );
};

export default Gasto;

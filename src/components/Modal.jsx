/* eslint-disable react/prop-types */
import CerrarBtn from "../img/cerrar.svg";
const Modal = ({ setModal, animarModal, setAnimarModal }) => {
  const ocultarModal = () => {
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };
  return (
    <div className="modal">
      <div className="cerrar modal">
        <div className="cerrar-modal">
          <img src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal} />
        </div>
      </div>
      <form className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
        <legend>Nuevo Gasto</legend>

        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            type="text"
            id="nombre"
            placeholder="Añade el Nombre del Gasto"
          />
        </div>
        <div className="campo">
          <label htmlFor="nombre">Cantidad</label>
          <input
            type="number"
            id="cantidad"
            placeholder="Añade la Cantidad del Gasto: ejem. 1000"
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoría</label>
          <select name="categoria" id="categoria">
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
            <option value="varios">Varios</option>
          </select>
        </div>
        <input type="submit" value="añadir gasto" />
      </form>
    </div>
  );
};

export default Modal;

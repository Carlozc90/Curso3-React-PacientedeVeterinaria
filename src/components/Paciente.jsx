const Paciente = ({ pa, setPaciente, eliminarPaciente }) => {
  const { alta, email, nombre, propietario, sintoma, id } = pa;

  const handleEliminar = () => {
    const respuesta = confirm("Deseas eliminar este paciente");

    if (respuesta) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className="m-3 px-5 py-10 rounded-xl bg-white shadow-md">
      <p className="font-bold mb-3 text-gray-600 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-600 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-600 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-600 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{alta}</span>
      </p>

      <p className="font-bold mb-3 text-gray-600 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{sintoma}</span>
      </p>

      <div className="flex justify-between">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => {
            setPaciente(pa);
          }}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;

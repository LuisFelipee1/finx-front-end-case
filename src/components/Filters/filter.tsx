import { FaArrowDown, FaArrowUp, FaSearch } from "react-icons/fa";
import type { FilterProps } from "../../types/appointment";

function Filter({
  pacienteFiltro,
  setPacienteFiltro,
  medicoFiltro,
  setMedicoFiltro,
  ordenacao,
  fetchAppointments,
  handleClearFilters,
  fetchFilterSort,
}: FilterProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-6 w-full">
      <input
        type="text"
        placeholder="Nome do Paciente"
        value={pacienteFiltro}
        className="
            flex-1
            min-w-[220px]
            px-3 py-2
            bg-white
            text-[#001F4D]
            border border-[#D9E3EA]
            rounded-md
            focus:outline-none
            focus:border-[#1699E8]
        "
        onChange={(e) => setPacienteFiltro(e.target.value)}
      />

      <input
        type="text"
        placeholder="Nome do Médico"
        value={medicoFiltro}
        className="
            flex-1
            min-w-[220px]
            px-3 py-2
            bg-white
            text-[#001F4D]
            border border-[#D9E3EA]
            rounded-md
            focus:outline-none
            focus:border-[#1699E8]
        "
        onChange={(e) => setMedicoFiltro(e.target.value)}
      />

        <button
            className="
              px-4 py-2
              bg-[#00204D]
              hover:bg-[#00163A]
              text-white
              rounded-md
              cursor-pointer
              flex items-center gap-2
              transition hover:scale-105
            "
            onClick={fetchFilterSort}
            >
            {ordenacao === "desc" ? (
                <>
                Mais Antigo
                <FaArrowDown />
                </>
            ) : (
                <>
                Mais Recente
                <FaArrowUp />
                </>
        )}
        </button>

      <button
        className="
            px-4 py-2
            bg-[#1699E8]
            hover:bg-[#0E66AD]
            text-white
            rounded-md
            cursor-pointer
            flex items-center gap-2
            transition hover:scale-105
        "
        onClick={() =>
          fetchAppointments(
            medicoFiltro,
            pacienteFiltro,
            ordenacao,
            1
          )
        }
      >
        Pesquisar <FaSearch className="ms-2" />
      </button>

      <button
        className="
            px-4 py-2
            bg-white
            border border-[#D9E3EA]
            text-[#334155]
            hover:bg-[#F1F5F9]
            rounded-md
            cursor-pointer
            transition hover:scale-105
        "
        onClick={handleClearFilters}
      >
        Limpar Filtros
      </button>
    </div>
  );
}

export default Filter;
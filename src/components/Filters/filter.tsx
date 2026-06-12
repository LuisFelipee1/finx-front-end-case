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
    <div className="flex flex-col md:flex-row flex-wrap gap-3 mb-6 w-full min-w-[300px]">
      <input
        type="text"
        placeholder="Nome do Paciente"
        value={pacienteFiltro}
        className="
            w-full md:flex-1
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
            w-full md:flex-1
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

        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <button
            className="
              w-full sm:w-auto
              px-4 py-2
              bg-[#00204D]
              hover:bg-[#00163A]
              text-white
              rounded-md
              cursor-pointer
              flex items-center justify-center gap-2
              transition hover:scale-105
              text-sm sm:text-base
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
              w-full sm:w-auto
              px-4 py-2
              bg-[#1699E8]
              hover:bg-[#0E66AD]
              text-white
              rounded-md
              cursor-pointer
              flex items-center justify-center gap-2
              transition hover:scale-105
              text-sm sm:text-base
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
            Pesquisar <FaSearch />
          </button>

          <button
            className="
              w-full sm:w-auto
              px-4 py-2
              bg-white
              border border-[#D9E3EA]
              text-[#334155]
              hover:bg-[#F1F5F9]
              rounded-md
              cursor-pointer
              transition hover:scale-105
              text-sm sm:text-base
            "
            onClick={handleClearFilters}
          >
            Limpar Filtros
          </button>
        </div>
    </div>
  );
}

export default Filter;
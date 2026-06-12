import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import type { PaginationProps } from "../../types/appointment";

function Pagination({
  mudarPagina,
  response,
  paginaAtual,
}: PaginationProps) {
  return (
    <div className="flex flex-col items-center gap-3 mt-6">
      <div className="flex gap-2">
        <button
          disabled={paginaAtual === 1}
          className="
            px-4 py-2
            border border-[#D9E3EA]
            bg-white
            text-[#001F4D]
            rounded-full
            cursor-pointer
            hover:bg-[#F1F5F9]
            disabled:bg-[#E2E8F0]
            disabled:text-[#94A3B8]
            disabled:cursor-not-allowed
          "
          onClick={() => mudarPagina(paginaAtual - 1)}
        >
          <FaChevronLeft />
        </button>

        <button
          disabled={
            paginaAtual === response?.paginacao.totalDePaginas
          }
          className="
            px-4 py-2
            bg-[#1699E8]
            hover:bg-[#0E66AD]
            text-white
            rounded-full
            cursor-pointer
            disabled:bg-[#E2E8F0]
            disabled:text-[#94A3B8] 
            disabled:cursor-not-allowed
          "
          onClick={() => mudarPagina(paginaAtual + 1)}
        >
          <FaChevronRight />
        </button>
      </div>

      <p className="text-sm text-[#334155]">
        Página {response?.paginacao.paginaAtual} de{" "}
        {response?.paginacao.totalDePaginas}
      </p>
    </div>
  );
}

export default Pagination;
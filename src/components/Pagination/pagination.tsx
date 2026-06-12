import type { PaginationProps } from "../../types/appointment";

function Pagination({mudarPagina, response, paginaAtual}: PaginationProps) {
    return (
        <div>
            <div>
            <button
                disabled={paginaAtual === 1}
                onClick={() => mudarPagina(paginaAtual - 1)}
            >
                Anterior
            </button>
            <button
            disabled={
                paginaAtual === response?.paginacao.totalDePaginas
            }
                onClick={() => mudarPagina(paginaAtual + 1)}
            >
                Próxima
            </button>
            </div>
            <p>
            Página {response?.paginacao.paginaAtual} de{" "}
            {response?.paginacao.totalDePaginas}
            </p>
        </div>
    );
}

export default Pagination;
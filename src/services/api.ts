import mockData from "../../mock/db.json";
import type { AgendamentosResponse, OrdenacaoData } from "../types/appointment";

export const appointmentsService = {
  async getAppointments(
    medico?: string,
    paciente?: string,
    ordenacao: OrdenacaoData = "desc",
    pagina: number = 1
  ): Promise<AgendamentosResponse> {

    await new Promise(resolve => setTimeout(resolve, 2000));
    const itensPorPagina = 6;
    let data = [...mockData.data];

    if (medico) {
      data = data.filter(item =>
        item.medico.nome
          .toLowerCase()
          .includes(medico.toLowerCase())
      );
    }

    if (paciente) {
      data = data.filter(item =>
        item.paciente.nome
          .toLowerCase()
          .includes(paciente.toLowerCase())
      );
    }

    if (ordenacao === "asc") {
      data.sort((a, b) =>
        new Date(a.dataCriacao).getTime() - new Date(b.dataCriacao).getTime()
      );
    }

    if (ordenacao === "desc") {
      data.sort((a, b) =>
        new Date(b.dataCriacao).getTime() - new Date(a.dataCriacao).getTime()
      );
    }

    const totalDeItens = data.length;
    const totalDePaginas = Math.ceil(
      totalDeItens / itensPorPagina
    );
    const inicio = (pagina - 1) * itensPorPagina;

    const fim = inicio + itensPorPagina;

    const dadosPaginados = data.slice(
      inicio,
      fim
    );

    const metricas = {
      totalAgendamentos: data.length,
      totalMedicos: new Set(
        data.map(item => item.medico.nome)
      ).size,
      totalPacientes: new Set(
        data.map(item => item.paciente.nome)
      ).size,
    };

  return {
    data: dadosPaginados,
    metricas,
    paginacao: {
      paginaAtual: pagina,
      itensPorPagina,
      totalDePaginas,
      totalDeItens,
      next_page_url:
        pagina < totalDePaginas
          ? `?page=${pagina + 1}`
          : null,
      prev_page_url:
        pagina > 1
          ? `?page=${pagina - 1}`
          : null,
    },
  };
  }
};
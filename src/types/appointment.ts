export interface Medico {
  nome: string;
}

export interface Paciente {
  nome: string;
  dataNascimento: string;
}

export interface Agendamento {
  id: number;
  medico: Medico;
  paciente: Paciente;
  dataCriacao: string;
}

export interface Paginacao {
  paginaAtual: number;
  itensPorPagina: number;
  totalDePaginas: number;
  totalDeItens: number;
  next_page_url: string | null;
  prev_page_url: string | null;
}

export interface AgendamentosResponse {
  data: Agendamento[];
  paginacao: Paginacao;
}

export interface FiltrosAgendamento {
  medico: string;
  paciente: string;
}

export type OrdenacaoData = "asc" | "desc";
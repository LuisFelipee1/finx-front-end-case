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
  dataAgendamento: string;
  horarioAgendamento: string;
}

export type PaginationProps = {
  mudarPagina: (pagina: number) => void;
  response: AgendamentosResponse | null;
  paginaAtual: number;
};

export interface FilterProps {
  pacienteFiltro: string;
  setPacienteFiltro: React.Dispatch<React.SetStateAction<string>>;

  medicoFiltro: string;
  setMedicoFiltro: React.Dispatch<React.SetStateAction<string>>;

  ordenacao: OrdenacaoData;

  fetchAppointments: (
    medico?: string,
    paciente?: string,
    ordenacao?: OrdenacaoData,
    pagina?: number
  ) => Promise<void>;

  handleClearFilters: () => void;

  fetchFilterSort: () => void;
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
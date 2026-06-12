import { useEffect, useState } from 'react';
import { appointmentsService } from './services/api';
import type { AgendamentosResponse, OrdenacaoData } from './types/appointment';
import { calcularIdade, formatarData } from './utils/utils';
import './App.css'
import Table from './components/Tables/table';
import Pagination from './components/Pagination/pagination';
import Filter from './components/Filters/filter';

function App() {
  const [response, setResponse] = useState<AgendamentosResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [medicoFiltro, setMedicoFiltro] = useState('');
  const [pacienteFiltro, setPacienteFiltro] = useState('');
  const [ordenacao, setOrdenacao] = useState<OrdenacaoData>("desc");
  const [paginaAtual, setPaginaAtual] = useState(1);

  const fetchFilterSort = () => {
    const novaOrdenacao =
      ordenacao === "desc"
        ? "asc"
        : "desc";

    setOrdenacao(novaOrdenacao);
    setPaginaAtual(1);

    fetchAppointments(
      medicoFiltro,
      pacienteFiltro,
      novaOrdenacao,
      1
    );
  };

  const handleClearFilters = () => {
    setMedicoFiltro('');
    setPacienteFiltro('');
    setOrdenacao('desc');
    setPaginaAtual(1);

    fetchAppointments(
      '',
      '',
      'desc',
      1
    );
  };

  async function fetchAppointments(
    medico?: string, 
    paciente?: string, 
    ordenacao: OrdenacaoData = "desc", 
    pagina: number = 1
  ) {
    setLoading(true);
    setResponse(null);
    const resp = await appointmentsService.getAppointments(
      medico, 
      paciente, 
      ordenacao, 
      pagina
    );

    setResponse(resp);
    setLoading(false);

    console.log(resp);
  }

  const mudarPagina = (pagina: number) => {
    setPaginaAtual(pagina);

    fetchAppointments(
      medicoFiltro,
      pacienteFiltro,
      ordenacao,
      pagina
    );
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <>
      <h1>Agendamentos</h1>
      <Filter
        pacienteFiltro={pacienteFiltro}
        setPacienteFiltro={setPacienteFiltro}
        medicoFiltro={medicoFiltro}
        setMedicoFiltro={setMedicoFiltro}
        ordenacao={ordenacao}
        fetchAppointments={fetchAppointments}
        handleClearFilters={handleClearFilters}
        fetchFilterSort={fetchFilterSort}
      />
      <div className="flex flex-wrap gap-4 justify-center">
        {response ? (
          response.data.length > 0 ? (
            <Table dados={response.data} />
          ) : (
            <p>Nenhum agendamento encontrado</p>
          )
        ) : (
          <p>Carregando...</p>
        )}
      </div>
      <Pagination 
        mudarPagina={mudarPagina} 
        response={response} 
        paginaAtual={paginaAtual} 
      />
    </>
  )
}

export default App

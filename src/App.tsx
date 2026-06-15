import { useEffect, useState } from 'react';
import { appointmentsService } from './services/api';
import type { AgendamentosResponse, OrdenacaoData } from './types/appointment';
import './App.css'
import Table from './components/Tables/table';
import Pagination from './components/Pagination/pagination';
import Filter from './components/Filters/filter';
import { AiOutlineLoading } from "react-icons/ai"
import Results from './components/results/results';

function App() {
  const [response, setResponse] = useState<AgendamentosResponse | null>(null);
  const [medicoFiltro, setMedicoFiltro] = useState('');
  const [pacienteFiltro, setPacienteFiltro] = useState('');
  const [ordenacao, setOrdenacao] = useState<OrdenacaoData>("desc");
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [agendamentos, setAgendamentos] = useState<number>(0);
  const [medicos, setMedicos] = useState<number>(0);
  const [pacientes, setPacientes] = useState<number>(0);

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
    setResponse(null);
    const resp = await appointmentsService.getAppointments(
      medico, 
      paciente, 
      ordenacao, 
      pagina
    );


    setAgendamentos(resp.paginacao.totalDeItens);
    setMedicos(resp.metricas.totalMedicos);
    setPacientes(resp.metricas.totalPacientes);
    
    console.log('resp', resp);


    setResponse(resp);
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
    <div className="min-h-screen w-full block px-4 py-8 box-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-0">
          <h1 style={{ marginBottom: 10 }}
            className="
              my-0
              text-5xl
              font-extrabold
              text-[#001F4D]
              tracking-tight
            "
          >
            Agendamentos
          </h1>

          <div
            className="
              w-100
              h-1
              bg-[#1699E8]
              rounded-full
              mx-auto
              mt-1
            "
          />
          <p className="text-[#4B6B88] text-2xl pt-3 pb-3">
            Gerencie consultas médicas com rapidez e eficiência
          </p>
        </div>
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
          <Results totalMedicos={medicos} totalPacientes={pacientes} totalAgendamentos={agendamentos} />
          <div className="w-full overflow-hidden"> 
            {response ? (
              response.data.length > 0 ? (
                <>
                  <div className="w-full overflow-x-auto inline-block align-middle">
                    <Table dados={response.data} />
                  </div>
                  <Pagination 
                    mudarPagina={mudarPagina} 
                    response={response} 
                    paginaAtual={paginaAtual} 
                  />
                </>
              ) : (
                <p className="text-center py-4">Nenhum agendamento encontrado</p>
              )
            ) : (
              <div className="flex justify-center py-8 w-full">
                <AiOutlineLoading className="animate-spin text-[#001F4D] w-12 h-12" />
              </div>
            )}
          </div>
      </div>
    </div>
  )
}

export default App

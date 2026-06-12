import type { FilterProps } from "../../types/appointment";

function Filter({
    pacienteFiltro,
    setPacienteFiltro,
    medicoFiltro,
    setMedicoFiltro,
    ordenacao,
    fetchAppointments,
    handleClearFilters,
    fetchFilterSort
}: FilterProps) {
    return (
        <div>
            <input 
            type="text" 
            placeholder="Digite o nome do Paciente" 
            value={pacienteFiltro} 
            onChange={(e) => setPacienteFiltro(e.target.value)} 
            />
            <input 
            type="text" 
            placeholder="Digite o nome do Médico" 
            value={medicoFiltro} 
            onChange={(e) => setMedicoFiltro(e.target.value)} 
            />
            <button onClick={fetchFilterSort}>
            {ordenacao === "desc"
                ? "Mais Antigo"
                : "Mais Recente"}
        </button>
            <button 
            onClick={() => fetchAppointments(medicoFiltro, pacienteFiltro, ordenacao, 1)}
            >
            Pesquisar
            </button>
            <button onClick={() => handleClearFilters()}>Limpar Filtros</button>
        </div>
    );
}

export default Filter;
import { useEffect, useState } from 'react';
import { appointmentsService } from './services/api';
import type { AgendamentosResponse } from './types/appointment';
import './App.css'

function App() {
  const [response, setResponse] = useState<AgendamentosResponse | null>(null);

  async function fetchAppointments() {
    const resp = await appointmentsService.getAppointments();

    setResponse(resp);

    console.log(resp);
  }

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <>
      <div>
        {response && (
          response.data.map((item) => (
            <div key={item.id}>
              <p>Médico: {item.medico.nome}</p>
              <p>Paciente: {item.paciente.nome}</p>
              <p>Data Criação: {item.dataCriacao}</p>
            </div>
          ))
        )}
      </div>
    </>
  )
}

export default App

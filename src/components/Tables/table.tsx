import { calcularIdade, formatarData } from "../../utils/utils";

function Table(dados: any) {
    return (
        <table >
          <thead>
            <tr>
              <th>Paciente</th>
              <th>Médico</th>
              <th>Data Criação</th>
              <th>Idade</th>
              <th>Data Agendamento</th>
              <th>Horário Agendamento</th>
            </tr>
          </thead>
          <tbody className="overflow-x-auto">
            {dados.dados.map((item: any) => (
              <tr key={item.id}>
                <td>Médico: {item.medico.nome}</td>
                <td>Paciente: {item.paciente.nome}</td>
                <td>Idade: {calcularIdade(item.paciente.dataNascimento)}</td>
                <td>Data Criação: {formatarData(item.dataCriacao)}</td>
                <td>Data do Agendamento: {formatarData(item.dataAgendamento)}</td>
                <td>Horário do Agendamento: {item.horarioAgendamento}</td>
              </tr>
            ))}
          </tbody>
        </table>
    );
}

export default Table;
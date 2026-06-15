import { calcularIdade, formatarData } from "../../utils/utils";

function Table({ dados }: any) {
  return (
    <div className="w-full overflow-x-auto rounded-xl shadow-lg">
      <table className="w-full bg-white">
        <thead>
          <tr className="bg-[#00204D] text-white whitespace-nowrap">
            <th className="p-3 text-center">Paciente</th>
            <th className="p-3 text-center">Médico</th>
            <th className="p-3 text-center">Idade</th>
            <th className="p-3 text-center">Data Criação</th>
            <th className="p-3 text-center">Data Agendamento</th>
            <th className="p-3 text-center">Horário</th>
          </tr>
        </thead>

        <tbody>
          {dados.map((item: any, index: number) => (
            <tr
              key={item.id}
              className={`
                text-[#001F4D]
                border-l-4 border-transparent hover:border-[#1699E8] transition-colors duration-200
                ${index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}
              `}
            >
              <td className="p-3">{item.paciente.nome}</td>
              <td className="p-3">{item.medico.nome}</td>
              <td className="p-3">
                {calcularIdade(item.paciente.dataNascimento)}
              </td>
              <td className="p-3">
                {formatarData(item.dataCriacao)}
              </td>
              <td className="p-3">
                {formatarData(item.dataAgendamento)}
              </td>
              <td className="p-3">
                {item.horarioAgendamento}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
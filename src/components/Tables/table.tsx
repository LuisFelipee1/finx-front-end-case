import { calcularIdade, formatarData } from "../../utils/utils";

function Table({ dados }: any) {
  return (
    <div className="w-full overflow-x-auto rounded-xl shadow-lg">
      <table className="w-full bg-white">
        <thead>
          <tr className="bg-[#00204D] text-white whitespace-nowrap">
            <th className="p-3 text-left">Paciente</th>
            <th className="p-3 text-left">Médico</th>
            <th className="p-3 text-left">Idade</th>
            <th className="p-3 text-left">Data Criação</th>
            <th className="p-3 text-left">Data Agendamento</th>
            <th className="p-3 text-left">Horário</th>
          </tr>
        </thead>

        <tbody>
          {dados.map((item: any, index: number) => (
            <tr
              key={item.id}
              className={`
                text-[#001F4D]
                border-t border-[#D9E3EA]
                hover:bg-[#E6F4FD]
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
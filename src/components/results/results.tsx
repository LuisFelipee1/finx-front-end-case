import type { MetricasAgendamentos } from '../../types/appointment';
import { FaCalendarCheck } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";

function results({
  totalMedicos,
  totalPacientes,
  totalAgendamentos,
}: MetricasAgendamentos) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-4">
      <div
        className="
          flex items-center justify-between
          bg-white p-5 rounded-xl
          shadow-md hover:shadow-xl
          hover:-translate-y-1
          transition-all duration-300 min-w-[200px]
        "
      >
        <div>
          <p className="text-4xl font-bold text-[#001F4D]">
            {totalAgendamentos}
          </p>
          <p className="text-[#64748B]">
            Agendamentos
          </p>
        </div>

        <div
          className="
            w-14 h-14
            rounded-lg
            bg-[#E6F4FD]
            flex items-center justify-center
          "
        >
          <FaCalendarCheck className="text-[#1699E8] text-3xl" />
        </div>
      </div>
      <div
        className="
          flex items-center justify-between
          bg-white p-5 rounded-xl
          shadow-md hover:shadow-xl
          hover:-translate-y-1
          transition-all duration-300
        "
      >
        <div>
          <p className="text-4xl font-bold text-[#001F4D]">
            {totalMedicos}
          </p>
          <p className="text-[#64748B]">
            Médicos
          </p>
        </div>

        <div
          className="
            w-14 h-14
            rounded-lg
            bg-[#E6F4FD]
            flex items-center justify-center
          "
        >
          <FaUserDoctor className="text-[#1699E8] text-3xl" />
        </div>
      </div>
      <div
        className="
          flex items-center justify-between
          bg-white p-5 rounded-xl
          shadow-md hover:shadow-xl
          hover:-translate-y-1
          transition-all duration-300
        "
      >
        <div>
          <p className="text-4xl font-bold text-[#001F4D]">
            {totalPacientes}
          </p>
          <p className="text-[#64748B]">
            Pacientes
          </p>
        </div>

        <div
          className="
            w-14 h-14
            rounded-lg
            bg-[#E6F4FD]
            flex items-center justify-center
          "
        >
          <FaUsers className="text-[#1699E8] text-3xl" />
        </div>
      </div>
    </div>
  );
}

export default results;
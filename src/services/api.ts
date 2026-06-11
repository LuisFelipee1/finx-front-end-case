import mockData from "../../mock/db.json";
import type { AgendamentosResponse } from "../types/appointment";

export const appointmentsService = {
  async getAppointments(): Promise<AgendamentosResponse> {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return mockData;
  },
};
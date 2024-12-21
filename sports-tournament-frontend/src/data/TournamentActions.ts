const API_BASE_URL = "http://localhost:5205/api/TimskiTurnir";
import axios from "axios";
export const getTournamentsByTeam = async (timId: number, token: string) => {
  const response = await axios.get(
    `${API_BASE_URL}/get-turniri-by-tim`,
    {
      params: { timId },  
      headers: {
        Authorization: `Bearer ${token}`,  
      },
    }
  );
  
  
  return response.data;

  };
  
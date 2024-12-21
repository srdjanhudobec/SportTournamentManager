import axios from "axios";
import { Team } from "../interfaces/Team"; 
import { useAuth } from "../contexts/AuthContext"; 

const API_BASE_URL = "http://localhost:5205/api/Tim";


export const getAllTeams = async (): Promise<Team[] | string> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/get-all`);
    
    return response.data;
  } catch (error: any) {
    if (error.response) {
      return error.response.data.message || "An error occurred while fetching teams.";
    }
    return "Network error or server unavailable.";
  }
};

export const getUserTeams = async (): Promise<Team[] | string> => {
  const { token } = useAuth(); 
  if (!token) {
    return "Authentication token is missing.";
  }

  try {
    const response = await axios.get(`${API_BASE_URL}/get-timovi-by-ucesnik`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      return error.response.data.message || "An error occurred while fetching user teams.";
    }
    return "Network error or server unavailable.";
  }
};
export const joinTeam = async (timId: number): Promise<Team | string> => {
  const { token } = useAuth(); // Access the token from the AuthContext

  try {
    if (!token) {
      throw new Error('No token found');
    }

    const response = await axios.post(
      "http://localhost:5000/api/tim/join-team",
      { timId },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token to the Authorization header
        },
      }
    );

    return response.data;
  } catch (error) {
    return "An error occurred while joining the team.";
  }
};

import axios from "axios";
import { Team } from "../interfaces/Team"; 

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

export const getUserTeams = async (token: string): Promise<Team[] | string> => {
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
export const joinTeam = async (timId: number, token: string): Promise<Team | string> => {
  try {
    if (!token) {
      throw new Error('No token found');
    }
    
    const response = await axios.post(
      `${API_BASE_URL}/join-team`,
      null, 
      { params: { timId }, 
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    return "An error occurred while joining the team.";
  }
};

export const getTeamById = async (id: number, token: string) => {
  try {
    console.log("Fetching team details for ID:", id);

    const response = await axios.get(`${API_BASE_URL}/get-tim-by-id`, {
      params: { id },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("API response for getTeamById:", response.data);
    return response.data; // Ensure this matches the structure of your `Team` object
  } catch (error) {
    console.error("Error in getTeamById API call:", error);
    throw new Error("Error fetching team details");
  }
};
import axios from "axios";
import { User, UserLogin } from "../interfaces/User";

export const register = async (data: User): Promise<User | string> => {
  try {
    const response = await axios.post(" http://localhost:5205/api/Ucesnik/register-ucesnik", data);
    return response.data;
  } catch (error: any) {
    
    if (error.response) {
      return error.response.data.message || "An error occurred while registering the user.";
    }
    return "Network error or server unavailable.";
  }
};

export const login = async (data: UserLogin): Promise<string> => {
    try {
      const response = await axios.post(" http://localhost:5205/api/Ucesnik/login", data);
      return response.data;
    } catch (error: any) {
      
      if (error.response) {
        return error.response.data.message || "An error occurred while registering the user.";
      }
      return "Network error or server unavailable.";
    }
  };

import axios from "axios";
import { toast } from "react-toastify";
import { API_KEY } from "./constants";

class Api {
  static instance: any = null;

  constructor() {
    if (Api.instance == null) {
      Api.instance = axios.create({
        baseURL: "https://api.themoviedb.org/3",
      });
    }
  }
  
  private addRequestHeaders = () => {
    const headers = {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    };

    return headers;
  };

  public get = async (url: string) => {
    try {
      const response = await Api.instance.get(url, this.addRequestHeaders());
      return response.data;
    } catch (err) {
      toast.error('Something went wrong!');
    }

  };

}

export default Api;

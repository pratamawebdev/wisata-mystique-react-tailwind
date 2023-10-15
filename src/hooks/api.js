// api.js
import axios from "axios";
import useLocalStorage from "./useLocalStorage";

const API_KEY = "24405e01-fbc1-45a5-9f5a-be13afcd757c";
const [token, setToken] = useLocalStorage("authtoken", "");

const axiosInstance = axios.create({
  baseURL: "https://travel-journal-api-bootcamp.do.dibimbing.id/", // Ganti dengan baseURL yang sesuai
  headers: {
    "Content-Type": "application/json",
    apiKey: API_KEY,
    Authorization: `Bearer ${token}`,
  },
});

export const fetchData = async (endpoint) => {
  try {
    const response = await axiosInstance.get(endpoint);
    if (response.headers["content-type"].includes("application/json")) {
      return response.data;
    } else {
      throw new Error("Invalid response format: not JSON");
    }
  } catch (error) {
    console.log(error);
  }
};

export const createData = async (endpoint, newData) => {
  try {
    const response = await axiosInstance.post(endpoint, newData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateData = async (endpoint, updatedData) => {
  try {
    const response = await axiosInstance.put(endpoint, updatedData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteData = async (endpoint) => {
  try {
    const response = await axiosInstance.delete(endpoint);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

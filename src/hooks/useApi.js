// useApi.js
import { useEffect, useState } from "react";
import { fetchData, createData, updateData, deleteData } from "./api";

const useApi = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchApiData = async () => {
    try {
      setLoading(true);
      const result = await fetchData(endpoint);
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const createApiData = async (newData) => {
    try {
      setLoading(true);
      await fetchApiData();
      const result = await createData(endpoint, newData);
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const updateApiData = async (updatedData) => {
    try {
      setLoading(true);
      const result = await updateData(endpoint, updatedData);
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteApiData = async () => {
    try {
      setLoading(true);
      const result = await deleteData(endpoint);
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   fetchApiData();
  // }, [endpoint]);

  return {
    data,
    loading,
    error,
    createApiData,
    updateApiData,
    deleteApiData,
    fetchApiData,
  };
};

export default useApi;

import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import useLocalStorage from "./useLocalStorage";

const useAuth = () => {
  const [result, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [token, setToken] = useLocalStorage("authToken", ""); // Gunakan useLocalStorage

  const [config, setConfig] = useState({
    key: null, // Inisialisasi dengan null atau sesuai kebutuhan awal
    data: undefined,
  });

  const apiMap = {
    register_user: {
      url: "/api/v1/register",
      method: "POST",
      data: config.data,
    },
    login_user: {
      url: "/api/v1/login",
      method: "POST",
      data: config.data,
    },
    logout_user: {
      url: "/api/v1/logout",
      method: "GET",
    },
  };

  const selectedApi = apiMap[config.key];
  console.log(selectedApi);

  const {
    data: results,
    loading: load,
    error: err,
  } = useFetch(
    selectedApi
      ? `https://travel-journal-api-bootcamp.do.dibimbing.id${selectedApi.url}`
      : "",
    selectedApi ? selectedApi.method : "",
    selectedApi ? selectedApi.data : undefined,
    token // Pass token to useFetch
  );

  useEffect(() => {
    setData(results?.data);
    setLoading(load);
    setError(err);

    // Jika login berhasil, atur token
    if (config.key === "login_user" && results?.token) {
      setToken(results.token);
    }

    return () => {};
  }, [results, load, err, config, setToken]);

  return {
    data: result,
    loading,
    error,
    setConfigAuth: setConfig,
    configAuth: config,
    token,
  };
};

export default useAuth;

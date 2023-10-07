import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const useAuth = () => {
  const [result, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [config, setConfig] = useState({
    key: "get",
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

  const {
    data: results,
    loading: load,
    error: err,
  } = useFetch(
    `https://travel-journal-api-bootcamp.do.dibimbing.id${
      apiMap[config.key].url
    }`,
    apiMap[config.key].method,
    apiMap[config.key].data
  );

  useEffect(() => {
    setData(results);
    setLoading(load);
    setError(err);
    return () => {};
  }, [results, load, err, config]);

  return {
    data: result,
    loading,
    error,
    setConfigAuth: setConfig,
    configAuth: config,
  };
};

export default useAuth;

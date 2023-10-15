import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import useLocalStorage from "./useLocalStorage";

const useUsers = () => {
  const [result, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [token, setToken] = useLocalStorage("authToken", "");
  const [config, setConfig] = useState({
    key: "all_users",
    data: undefined,
  });

  console.log({ config });
  const apiMap = {
    logged_users: {
      url: "/api/v1/user",
      method: "GET",
      data: config.data,
    },
    all_users: {
      url: "/api/v1/all-user",
      method: "GET",
      data: config.data,
    },
    update: {
      url: "/api/v1/update-profile",
      method: "POST",
      data: config.data,
    },
    update_user_role: {
      url: `/api/v1/update-user-role/${config.data?.userId}`,
      method: "POST",
      data: { role: config.data?.role },
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
    apiMap[config.key].data,
    token
  );

  useEffect(() => {
    setLoading(load);
    setError(err);

    if (config.key === "all_users" && results) {
      setData(results);
      if (results?.token) {
        setToken(results.token);
      }
    }
    if (config.key === "update_user_role") {
      setConfig({ key: "all_users" });
    }
  }, [config, load, err]);

  return {
    data: result,
    loading,
    error,
    setConfigUsers: setConfig,
    configUsers: config,
    token,
  };
};

export default useUsers;

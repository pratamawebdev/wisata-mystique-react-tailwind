import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const usePromo = () => {
  const [result, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [config, setConfig] = useState({
    key: "get",
    data: undefined,
  });

  const apiMap = {
    create: {
      url: "/api/v1/create-promo",
      method: "POST",
      data: config.data,
    },
    update: {
      url: "/api/v1/update-promo/",
      method: "POST",
      data: config.data,
    },
    delete: {
      url: "/api/v1/delete-promo/",
      method: "DELETE",
    },
    get: {
      url: "/api/v1/promos",
      method: "GET",
    },
    get_by_id: {
      url: "/api/v1/promo/",
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
    setConfigPromo: setConfig,
    configPromo: config,
  };
};

export default usePromo;

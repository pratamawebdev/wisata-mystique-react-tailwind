import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const useCategory = () => {
  const [result, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [config, setConfig] = useState({
    key: "get",
    data: undefined,
  });

  const apiMap = {
    create: {
      url: "/api/v1/create-category",
      method: "POST",
      data: config.data,
    },
    update: {
      url: "",
      method: "POST",
      data: config.data,
    },
    delete: {
      url: "",
      method: "DELETE",
    },
    get: {
      url: "/api/v1/categories",
      method: "GET",
    },
    get_by_id: {
      url: "",
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
    setConfigCategory: setConfig,
    configCategory: config,
  };
};

export default useCategory;

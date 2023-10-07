import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const useBanner = () => {
  const [result, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [config, setConfig] = useState({
    key: "get",
    data: undefined,
  });

  const apiMap = {
    create: {
      url: "/api/v1/create-banner",
      method: "POST",
      data: config.data,
    },
    update: {
      url: "/api/v1/update-banner/",
      method: "POST",
      data: config.data,
    },
    delete: {
      url: "/api/v1/delete-banner/",
      method: "DELETE",
    },
    get: {
      url: "/api/v1/banners",
      method: "GET",
    },
    get_by_id: {
      url: "/api/v1/banner/",
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
    setConfigBanner: setConfig,
    configBanner: config,
  };
};

export default useBanner;

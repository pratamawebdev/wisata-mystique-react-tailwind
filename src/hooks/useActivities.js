import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const useActivities = () => {
  const [result, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [config, setConfig] = useState({
    key: "get",
    data: undefined,
  });

  const apiMap = {
    create: {
      url: "/api/v1/create-activity",
      method: "POST",
      data: config.data,
    },
    update: {
      url: "/api/v1/update-activity/",
      method: "POST",
      data: config.data,
    },
    delete: {
      url: "/api/v1/delete-activity/",
      method: "DELETE",
    },
    get: {
      url: "/api/v1/activities",
      method: "GET",
    },
    get_by_id: {
      url: "/api/v1/activity/",
      method: "GET",
    },
    get_by_category_id: {
      url: "/api/v1/activities-by-category/",
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
    setConfigActivities: setConfig,
    configActivities: config,
  };
};

export default useActivities;

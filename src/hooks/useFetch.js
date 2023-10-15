import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, method, body, authToken) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  console.log({ url, method, body, authToken });
  useEffect(() => {
    console.log("Sending request to:", url);
    if (url && method) {
      let config = {
        url,
        method,
        headers: {
          "Content-Type": "application/json",
          apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
        },
      };
      if (body) {
        config.data = body;
      }
      if (authToken) {
        config.headers.Authorization = "Bearer " + authToken;
      }
      axios(config)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err.message);
          setError(err.response.data.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }

    return () => {};
  }, [url, method, body, authToken]);

  return { data, loading, error };
};

export default useFetch;

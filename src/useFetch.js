// Create api fetch to connect to database http://192.168.7.166:3000/ without axios

import { useState, useEffect } from "react";


export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  },[url]);

  return { data, error, loading };
}
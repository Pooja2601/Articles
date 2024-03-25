import { useState } from "react";

export const useFetch = (url) => {
  // using state to set response data
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const execute = () => {
    setIsLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          // error coming back from server
          throw Error("Couldn't fetch data from server");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setData(data);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  };

  return { execute: execute, data, isLoading, error };
};

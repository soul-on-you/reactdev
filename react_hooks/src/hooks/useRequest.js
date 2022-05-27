import { useCallback, useEffect, useState } from "react";

export const useRequest = (request) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  //   const request = useCallback(
  //     (...args) => {
  //       setLoading(true);

  //       request(...args)
  //         .then((response) => setData([...data, ...response.data]))
  //         .catch((error) => setError(error))
  //         .finally(() => setLoading(false));
  //     },
  //     [...args]
  //   );

  useEffect(() => {
    setLoading(true);

    request()
      .then((response) => setData([...data, ...response.data]))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return [data, isLoading, error];
};

// page, limit;
//   const res = axios.get("https://jsonplaceholder.typicode.com/todos", {
//     params: { _limit: limit, _page: page },
//   }).then

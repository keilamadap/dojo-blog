import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          //   console.log(res);
          if (!res.ok) {
            throw Error("Não foi possível acessar os dados.");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setError(null);
          setIsPending(false);
        })
        .catch((e) => {
          console.log(e.message);
          setError(e.message);
          setIsPending(false);
        });
    }, 1000);
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;

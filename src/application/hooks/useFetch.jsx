import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [toggleRefetch, setToggleRefetch] = useState(false);

  const refetch = () => {
    setToggleRefetch((prev) => {
      return !prev;
    });
  };

  useEffect(() => {
    const abortC = new AbortController();

    const fetchData = async () => {
      setLoading(() => {
        return true;
      });

      try {
        const response = await fetch(url, { signal: abortC.signal });

        if (response.ok) {
          const result = await response.json();

          setData(() => {
            return result;
          });

          setError(() => {
            return null;
          });
        } else {
          throw new Error("Failed to fetch the data!");
        }
      } catch (err) {
        setError(() => {
          return err.message;
        });
      } finally {
        setLoading(() => {
          return false;
        });
      }
    };

    fetchData();

    return () => {
      abortC.abort();
    };
  }, [url, toggleRefetch]);

  return { data, loading, error, refetch };
};

export default useFetch;

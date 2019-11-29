import { useEffect, useState } from "react";
import { ServerAPI } from "../api";

const useFact = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [result, setResult] = useState();

  useEffect(() => {
    let isCancelled = false;

    (async () => {
      if (!isCancelled && isFetching) {
        setResult(await ServerAPI.getFact());
        setIsFetching(false);
      }
    })();

    return () => {
      isCancelled = true;
    };
  }, [isFetching]);

  const fetch = () => {
    if (!isFetching) {
      setIsFetching(true);
    }
  };

  return [result, isFetching, fetch];
};

export { useFact };

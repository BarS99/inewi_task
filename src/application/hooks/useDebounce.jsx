import { useRef, useEffect } from "react";

const useDebounce = (callback, delay, dependencies) => {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef(null);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      callbackRef.current();
    }, delay);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [...dependencies, delay, callback]); // eslint-disable-line
};

export default useDebounce;

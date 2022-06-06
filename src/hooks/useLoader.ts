import { useState } from "react";

export const useLoader = () => {
  const [isLoading, setLoading] = useState(false);
  const startLoading = () => setLoading(true);
  const endLoading = () => setLoading(false);

  return {
    isLoading,
    startLoading,
    endLoading,
  };
};

import { useState, useEffect } from "react";

function useConfig() {
  const [isConfigured, setIsConfigured] = useState(false);

  useEffect(() => {
    // get config from web storage
  }, []);

  return { isConfigured, setIsConfigured };
}

export default useConfig;

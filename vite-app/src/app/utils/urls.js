const baseUrls = {
    baseURL: `${import.meta.env.VITE_BASE_URL}/api`,
  };
  
  const urls = {
    firstViewUrls: {
      groups: `${baseUrls.baseURL}/groups`,
    },
  };
  
  export default urls;
  
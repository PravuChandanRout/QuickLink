import { getCurrentUser } from "@/db/apiAuth";
import useFetch from "@/hooks/useFetch";
import { createContext, useContext, useEffect } from "react";

const UrlContext = createContext();

const UrlProvider = ({ children }) => {
  const { data: user, loading, func: fetchUser } = useFetch(getCurrentUser);

  const isAuthenticated = user?.role === "authenticated";

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <UrlContext.Provider value={{ user, loading, fetchUser, isAuthenticated }}>
      {children}
    </UrlContext.Provider>
  );
};

export const UrlState = () => {
  return useContext(UrlContext);
};

export default UrlProvider;

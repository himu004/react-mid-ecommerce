import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const Context = ({ children }) => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  const info = {
    data,
    loading,
    setLoading
  }

  return (
    <DataContext.Provider value={info}>
        {children}
    </DataContext.Provider>
  );
};

export default Context;

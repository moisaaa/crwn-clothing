import { useState, createContext, useEffect } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/Firebase';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoriesMap);
    };
    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categoriesMap }}>
      {children}
    </CategoriesContext.Provider>
  );
};

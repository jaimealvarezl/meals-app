import { createContext, PropsWithChildren, useState } from 'react';

export const FavoritesContext = createContext<{
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}>({
  ids: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

type FavoritesContextProviderProps = PropsWithChildren<object>;

const FavoritesContextProvider = ({ children }: FavoritesContextProviderProps) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);

  const addFavorite = (id: string) => {
    setFavoriteMealIds((currentIds) => [...currentIds, id]);
  };
  const removeFavorite = (id: string) => {
    setFavoriteMealIds((currentIds) => currentIds.filter((mealId) => mealId !== id));
  };

  const value = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite,
  };

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};

export default FavoritesContextProvider;

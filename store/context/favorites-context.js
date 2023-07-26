import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
});

function FavoritesContextProvider({children}) {
    const [favoriteMealsIds,setFavoriteMealsIds] = useState([])

    function addFavorite(id) {
        setFavoriteMealsIds((currentFavIds)=>[...currentFavIds,id])
    }

    function removeFavorite(id) {
        setFavoriteMealsIds((currentFavIds) => currentFavIds.filter(mealId => mealId !== id))
    }

    const value = {
        ids:favoriteMealsIds,
        addFavorite:addFavorite,
        removeFavorite:removeFavorite
    }

    return (
        <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
    )
}

export default FavoritesContextProvider;
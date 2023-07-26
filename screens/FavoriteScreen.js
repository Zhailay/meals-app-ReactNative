// import { useContext } from "react"
import { useSelector } from "react-redux"
import MealsList from "../components/MealsList/MealsList"
// import { FavoritesContext } from "../store/context/favorites-context"
import { MEALS } from "../data/dummy-data"
import { StyleSheet, Text, View } from "react-native"

function FavoriteScreen() {
    const favoriteMealsIds = useSelector(state => state.favoriteMeals.ids)
    console.log(favoriteMealsIds)
    // const favoriteMealsCtx = useContext(FavoritesContext)

    const favoriteMeals = MEALS.filter((meal =>
        favoriteMealsIds.includes(meal.id))
    )

        if(favoriteMeals.length === 0){
            return (
                <View style={styles.rootContainer}>
                    <Text style={styles.text}>You have no favorite meals yet.</Text>
                </View>
            )
        }

    return (
        <MealsList items={favoriteMeals} />
    )
}

export default FavoriteScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    }
})
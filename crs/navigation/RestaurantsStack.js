import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utips/screenName";
import RestaurantsScreen from "../screens/restaurant/RestaurantsScreen";
import AddRestaurantsScreen from "../screens/restaurant/AddRestaurantsScreen";



const Stack = createNativeStackNavigator();

const RestaurantsStack= () => {
    return (
    
        <Stack.Navigator>
            <Stack.Screen
            name={screen.restaurants.restaurants}
            component={RestaurantsScreen}
            options={{ title: "Restaurantes"}}
            />
            <Stack.Screen
            name={ screen.restaurants.addRestaurant}
            component={AddRestaurantsScreen}
            options={{ title: "Nuevo Restaurante"}}
            />
        </Stack.Navigator>
    );

};
export default RestaurantsStack;
 

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utips/screenName";
import RankingScreen from "../screens/RankingScreen";

const Stack = createNativeStackNavigator();

const RankingStack=()=>{
    return (
        <Stack.Navigator>
            <Stack.Screen
            name={screen.ranking.ranking}
            component={RankingScreen}
            options={{ title: "Clasificacion" }} 
            />
        </Stack.Navigator>
    );
};

export default RankingStack;
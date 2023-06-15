import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";
import { screen } from "../utips/screenName";
import RestaurantStack from "./RestaurantsStack";
import FavoritesStack from "./FavoritesStack";
import RankingStack from "./RankingStack";
import AccountStack from "./AccountStack";
import SearchStack from "./SearchStack";

//crear una instancia para la gestion de la navegacion
const Tab = createBottomTabNavigator();

export const AppNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#1E8449",
        tabBarInactiveTintColor: "#7B241C",
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
      })}
    >
      <Tab.Screen
        name={screen.restaurants.tab}
        component={RestaurantStack}
        options={{ title: "Restaurantes" }}
      />
      
      <Tab.Screen
        name={screen.favorites.tab}
        component={FavoritesStack}
        options={{ title: "Favoritos" }}
      />

      <Tab.Screen
        name={screen.ranking.tab}
        component={RankingStack}
        options={{ title: "Ranking" }}
      />

      <Tab.Screen
        name={screen.search.tab}
        component={SearchStack}
        options={{ title: "Buscar" }}
      />

      <Tab.Screen
        name={screen.account.tab}
        component={AccountStack}
        options={{ title: "Cuenta" }}
      />
    </Tab.Navigator>
  );
};

const screenOptions = (route, color, size) => {
  let iconName;

  if (route.name == screen.restaurants.tab) {
    iconName = "silverware-fork-knife";
  }

  if (route.name == screen.favorites.tab) {
    iconName = "star-circle";
  }

  if (route.name == screen.ranking.tab) {
    iconName = "text-search";
  }

  if (route.name == screen.search.tab) {
    iconName = "text-box-search-outline";
  }
  if (route.name == screen.account.tab) {
    iconName = "account-cowboy-hat-outline";
  }

  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );
};

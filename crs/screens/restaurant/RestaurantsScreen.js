import React from "react";
import { View, Text } from "react-native";
import { Button } from "@rneui/themed";
import { screen } from "../../utips/screenName";
const RestaurantsScreen = (props) => {
  const { navigation } = props;

  //console.log(props);
  const goToAddRestaurant = () => {
    //console.log("Ir a creacion de restaurante");
    navigation.navigate(screen.restaurants.addRestaurant);
  };
  return (
    <View>
      <Text>Estamos en la screen de Restaurantes</Text>
      <Button title="Crear Restaurante" onPress={goToAddRestaurant} />
    </View>
  );
};

export default RestaurantsScreen;

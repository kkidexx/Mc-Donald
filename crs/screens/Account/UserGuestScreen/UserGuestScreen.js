import React from "react";
import { View, ScrollView } from "react-native";
import { Text, Button, Image } from "@rneui/themed";
import {styles} from "./UserGuestScreen.styles";
import { screen} from "../../../utips/screenName";
import { useNavigation } from "@react-navigation/native";

const UserGuestScreen= () => {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screen.account.login);
  };

  
  return (
    <ScrollView contentContainerStyle={{flex: 1, justifyContent: "center"}}
    style={styles.ViewBody}
    >
      <Image
      source={require("../../../../assets/img/user-guest.png")}
      style={styles.image}
      />
      <Text style={styles.title}>Consultar tu perfil de mc donald</Text>
      <Text style={styles.description}>
        ¿Como description tu mejor restaurante? busca y visualiza los mejores
        restaurantes de una forma sencilla,vota cual te ha gustado mas y 
        comenta como ha sido tu experiencia.
      </Text>
      <Button 
      title= "Ver tu perfil" 
      onPress={goToLogin}
      buttonStyle={styles.btnStyle}
      />
    </ScrollView>
  );
};

export default UserGuestScreen;
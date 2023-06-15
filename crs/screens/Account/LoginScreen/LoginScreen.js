import React from "react";
import { View, ScrollView } from "react-native";
import { Text, Image } from "@rneui/themed";
import { styles, style } from "./LoginScreen.styles";
import { Button } from "@rneui/base";
import { screen } from "../../../utips/screenName";
import LoginForm from "../../../components/Auth/LoginForm/LoginForm";


const LoginScreen=(props)=> {
  const {navigation} = props;
  const goToRegister = () => {
    navigation.navigate(screen.account.register)
  };


  return (
    <ScrollView>
      <Image
      source={require("../../../../assets/img/5-tenedores-letras-icono-logo.png")}
      style={styles.image}
      />
      <View style={styles.content}>
      <LoginForm/>
      <Text style={styles.textRegister}>
        ¿Aun no tienes una cuenta?
         <Text style={styles.btnRegister} onPress={goToRegister}>
          Registrate
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};
export default LoginScreen;

import React from "react";
import { View, Text } from "react-native";
import { Image } from "@rneui/base";
import { styles } from "./Registercreen.style";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import RegisterForm from "../../../components/Auth/RegisterForm/RegisterForm";

const RegisterScreen= () => {
  return (
    <KeyboardAwareScrollView>
      <Image
      source={require("../../../../assets/img/5-tenedores-letras-icono-logo.png")}
      style={styles.image}
      />
      <View style={styles.content}>
        <RegisterForm/>

      </View>
    </KeyboardAwareScrollView>
  );
};

export default RegisterScreen;
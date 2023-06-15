import React, {useState} from "react";
import { View } from "react-native";
import {Input, Icon , Button} from "@rneui/themed";
import { useFormik } from "formik";
import { initialValues } from "./RegisterForm.data";
import { validationSchema } from "./RegisterForm.data";
import { styles } from "./ResgisterForm.styles";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utips/screenName";
import  Toast from "react-native-toast-message";

const RegisterForm =() => {
  const navigation = useNavigation();

    const[showPassword, setShowPassword]= useState(false);

    
        const formik = useFormik ({
            initialValues:initialValues(),
            validationSchema: validationSchema(),
            validateOnChange: false,
            onSubmit: async (formValue)=>{
                //console.log("Formulario");
                //console.group(formValue);
                try {
                  const auth=getAuth();
                  await createUserWithEmailAndPassword(
                    auth, 
                    formValue.email,
                    formValue.password
                  );
                  navigation.navigate(screen.account.login);
                } catch(error) {
                  console.log(error);
                  Toast.show({
                    type: "error",
                    position: "bottom",
                    text1: "Error al registrarse",
                    text2: "Intentelo de nuevo",
                  });

                }


            },

        });

        const showHiddenPassword = () => {
            setShowPassword(!showPassword);
        };
    


  return (
    <View style={styles.content}>
      <Input 
      placeholder="Correo electronico" 
      containerStyle={styles.input} 
      secureTextEntry={false}
      rightIcon={
        <Icon type="material-community" name= "at"
        iconStyle={styles.icon}/>
      }
      onChangeText={(text)=>formik.setFieldValue("email", text)}
      errorMessage={formik.errors.email}
      />

      <Input 
      placeholder="Contraseña" 
      containerStyle={styles.input} 
      secureTextEntry={showPassword ? false : true}
      rightIcon={
        <Icon type="material-community" name={ showPassword ?  "eye-outline" : "eye-outline"}
        iconStyle={styles.icon}
        onPress={showHiddenPassword}
        
        />
      }
      onChangeText={(text)=> formik.setFieldValue("password", text)}
      errorMessage={formik.errors.password}
      />
          <Input 
      placeholder="Confirmar contraseña" 
      containerStyle={styles.input} 
      secureTextEntry={showPassword ? false : true}
      rightIcon={
        <Icon type="material-community" name={ showPassword ?  "eye-outline" : "eye-outline"}
        iconStyle={styles.icon}
        onPress={showHiddenPassword}
        
        />
      }
      onChangeText={(text)=>formik.setFieldValue("confirmPassword", text)}
      errorMessage={formik.errors.confirmPassword}
      />
      <Button 
      title="Unirse" 
      containerStyle={styles.btnContainer} 
      buttonStyle={styles.btnRegister}
      onPress={formik.handleSubmit}
      loading={formik.isSubmitting}
      />
        
        
    </View>
  );
};

export default RegisterForm;
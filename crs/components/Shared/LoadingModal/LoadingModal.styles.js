import { Overlay } from "@rneui/base";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
Overlay:{
    height: 100,
    width: 200,
    backgroundColor: "#F1C40F",
    borderColor: "#F1C40F",
    borderWith: 2,
    borderRadius: 10,
},
view:{
    flex: 1,
    alignItems:"center",
    justifyContent: "center",
},
text: {
    color: "#3498DB",
    textTransform: "uppercase",
    marginTop: 10,
},

});
import { AppNavigation } from "./crs/navigation/AppNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { initFirebase } from "./crs/utips/firebase";
import Toast from "react-native-toast-message";

const App = ()=> {
  return (
    <>
    <NavigationContainer>
    <AppNavigation/>
    </NavigationContainer>
    <Toast/>
    </>

   
  );
}
export default App;



import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NavigationConfig from "./screens/Navigation/NavigationConfig";



const App = () => {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
      <NavigationConfig />
    </NavigationContainer>
    </SafeAreaProvider>
    
      
  );
}

export default App
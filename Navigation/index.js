import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CompletedTasks from "../pages/CompletedTasks";
import Main from "../pages/Main/Index";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="completed"
          component={CompletedTasks}
          options={{ title: "Completed Tasks" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

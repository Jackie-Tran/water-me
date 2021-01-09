import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootStackParamList } from './constants/NavigationTypes';
import LoginScreen from './screens/login';
import TabsScreen from './screens/tabs';
import PlantsScreen from './screens/plants';
import PlantScreen from './screens/plant';

import {
  Merriweather_300Light,
  Merriweather_300Light_Italic,
  Merriweather_400Regular,
  Merriweather_400Regular_Italic,
  Merriweather_700Bold,
  Merriweather_700Bold_Italic,
  Merriweather_900Black,
  Merriweather_900Black_Italic,
  useFonts,
} from '@expo-google-fonts/merriweather';
import {
  WorkSans_100Thin,
  WorkSans_200ExtraLight,
  WorkSans_300Light,
  WorkSans_400Regular,
  WorkSans_500Medium,
  WorkSans_600SemiBold,
  WorkSans_700Bold,
  WorkSans_800ExtraBold,
  WorkSans_900Black,
  WorkSans_100Thin_Italic,
  WorkSans_200ExtraLight_Italic,
  WorkSans_300Light_Italic,
  WorkSans_400Regular_Italic,
  WorkSans_500Medium_Italic,
  WorkSans_600SemiBold_Italic,
  WorkSans_700Bold_Italic,
  WorkSans_800ExtraBold_Italic,
  WorkSans_900Black_Italic,
} from '@expo-google-fonts/work-sans';
import AppLoading from 'expo-app-loading';
import AddPlantScreen from './screens/add-plant';
import RepeatScreen from './screens/add-plant/repeat';
import NameScreen from './screens/add-plant/name';
import TypeScreen from './screens/add-plant/type';
import EditPlantScreen from './screens/edit-plant';
import { User, UserContext } from './context/user-context';
import SignUpScreen from './screens/sign-up';
import { Plant, PlantContext } from './context/plant-context';
import CameraScreen from './screens/camera';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [user, setUser] = React.useState<User>({
    uid: '',
    firstName: '',
    lastName: '',
    email: '',
  });

  const [plant, setPlant] = React.useState<Plant>({
    id: -1,
    name: '',
    type: '',
    waterTime: '',
    repeat: [],
    uid: '',
  });

  const [fontsLoaded] = useFonts({
    Merriweather_300Light,
    Merriweather_300Light_Italic,
    Merriweather_400Regular,
    Merriweather_400Regular_Italic,
    Merriweather_700Bold,
    Merriweather_700Bold_Italic,
    Merriweather_900Black,
    Merriweather_900Black_Italic,
    WorkSans_100Thin,
    WorkSans_200ExtraLight,
    WorkSans_300Light,
    WorkSans_400Regular,
    WorkSans_500Medium,
    WorkSans_600SemiBold,
    WorkSans_700Bold,
    WorkSans_800ExtraBold,
    WorkSans_900Black,
    WorkSans_100Thin_Italic,
    WorkSans_200ExtraLight_Italic,
    WorkSans_300Light_Italic,
    WorkSans_400Regular_Italic,
    WorkSans_500Medium_Italic,
    WorkSans_600SemiBold_Italic,
    WorkSans_700Bold_Italic,
    WorkSans_800ExtraBold_Italic,
    WorkSans_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <UserContext.Provider value={{ user, setUser }}>
          <PlantContext.Provider value={{ plant, setPlant }}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              {/* <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Sign Up" component={SignUpScreen} />
              <Stack.Screen
                name="Tabs"
                options={{ gestureEnabled: true }}
                component={TabsScreen}
              />
              <Stack.Screen name="Your Plants" component={PlantsScreen} />
              <Stack.Screen name="Plant" component={PlantScreen} />
              <Stack.Screen name="Edit Plant" component={EditPlantScreen} /> */}
              <Stack.Screen name="Add Plant" component={AddPlantScreen} />
              {/* <Stack.Screen name="Repeat" component={RepeatScreen} />
              <Stack.Screen name="Name" component={NameScreen} />
              <Stack.Screen name="Type" component={TypeScreen} /> */}
              <Stack.Screen name="Camera" component={CameraScreen} />
            </Stack.Navigator>
          </PlantContext.Provider>
        </UserContext.Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Provider} from "react-redux";
import {persistor, store} from "./srс/redux/store";
import {PersistGate} from "redux-persist/integration/react";
import WelcomeScreen from "./srс/navigation/WelcomeScreen";
import MainTabNavigator from "./srс/navigation/MainTabNavigator";
import WelcomeScreen2 from "./srс/navigation/WelcomeScreen2";
import WelcomeScreen4 from "./srс/navigation/WelcomeScreen4";
import WelcomeScreen5 from "./srс/navigation/WelcomeScreen5";
import WelcomeScreen3 from "./srс/navigation/WelcomeScreen3";
import SearchResultScreen from "./srс/screens/SearchResultScreen";
import SearchResultLoadindScreen from "./srс/screens/SearchResultLoadingScreen";
import QuestionsScreen from "./srс/screens/QuestionsScreen";
import QuizResultScreen from "./srс/screens/QuizResultScreen";
import LocalCuisineMoreScreen from "./srс/screens/LocalCuisineMoreScreen";


const Stack = createStackNavigator();

function CustomHeaderLeft() {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}
        >
        </TouchableOpacity>
    );
}


const customPic = () => (
    <Image
        source={require('./srс/assets/img/headerP.png')}
        style={{ width: 250, resizeMode: 'contain' }}
    />
)

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#0C0C0C', height: 180, },
                        headerLeft: CustomHeaderLeft,
                        headerTitle: customPic
                    }}>
                        {/*<Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />*/}
                        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Welcome2" component={WelcomeScreen2} options={{ headerShown: false }} />
                        <Stack.Screen name="Welcome3" component={WelcomeScreen3} options={{ headerShown: false }} />
                        <Stack.Screen name="Welcome4" component={WelcomeScreen4} options={{ headerShown: false }} />
                        <Stack.Screen name="Welcome5" component={WelcomeScreen5} options={{ headerShown: false }} />
                        <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />

                        <Stack.Screen name="SearchResultLoadind" component={SearchResultLoadindScreen}  />
                        <Stack.Screen name="SearchResult" component={SearchResultScreen}  />

                        <Stack.Screen name="Questions" component={QuestionsScreen}  />
                        <Stack.Screen name="QuizResult" component={QuizResultScreen}  />

                        <Stack.Screen name="LocalCuisineMore" component={LocalCuisineMoreScreen}  />
                    </Stack.Navigator>
                </NavigationContainer>
          </PersistGate>
         </Provider>
    );
}

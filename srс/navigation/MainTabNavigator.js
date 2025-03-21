// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { useNavigation } from '@react-navigation/native';
// import {Share, TouchableOpacity, Vibration} from "react-native";
// import {useSelector} from "react-redux";
// import FirstScreen from '../screens/FirstScreen';
// import SecondScreen from '../screens/SecondScreen';
// import ThirdScreen from '../screens/ThirdScreen';
// import ForthScreen from '../screens/ForthScreen';
// import FifthScreen from '../screens/FifthScreen';
// import FirstSvg from '../assets/svg/FirstSvg';
// import SecondSvg from '../assets/svg/SecondSvg';
// import ThirdSvg from '../assets/svg/ThirdSvg';
// import ForthSvg from '../assets/svg/ForthSvg';
// import FifthSvg from '../assets/svg/FifthSvg';
//
// const Tab = createBottomTabNavigator();
//
// const MainTabNavigator = () => {
//   return (
//       <Tab.Navigator
//           screenOptions={({ route }) => ({
//             headerStyle: { backgroundColor: '#0C0C0C', height: 180,
//             },
//               headerShadowVisible: false,
//             tabBarStyle: { backgroundColor: '#000', elevation: 0, shadowOpacity: 0 },
//             tabBarIcon: ({ focused }) => {
//               let IconComponent;
//
//               if (route.name === 'First') {
//                 IconComponent = FirstSvg;
//               } else if (route.name === 'Second') {
//                 IconComponent = SecondSvg;
//               } else if (route.name === 'Third') {
//                 IconComponent = ThirdSvg;
//               } else if (route.name === 'Forth') {
//                 IconComponent = ForthSvg;
//               } else if (route.name === 'Fifth') {
//                 IconComponent = FifthSvg;
//               }
//
//               return <IconComponent  color={focused ? '#BC3D32' : '#aaaaaa'} />;
//             },
//             tabBarActiveTintColor: '#BC3D32',
//             tabBarInactiveTintColor: '#aaaaaa',
//             // headerRight: CustomHeaderRight
//           })}
//       >
//         <Tab.Screen name="First" component={FirstScreen} options={{
//           tabBarLabel: '',
//           headerTitleStyle: {
//             color: 'white',
//             fontSize: 28,
//           },
//         }} />
//           <Tab.Screen name="Second" component={SecondScreen} options={{
//               tabBarLabel: '',
//               headerTitleStyle: {
//                   color: 'white',
//                   fontSize: 28,
//               },
//           }} />
//           <Tab.Screen name="Third" component={ThirdScreen} options={{
//               tabBarLabel: '',
//               headerTitleStyle: {
//                   color: 'white',
//                   fontSize: 28,
//               },
//           }} />
//           <Tab.Screen name="Forth" component={ForthScreen} options={{
//               tabBarLabel: '',
//               headerTitleStyle: {
//                   color: 'white',
//                   fontSize: 28,
//               },
//           }} />
//           <Tab.Screen name="Fifth" component={FifthScreen} options={{
//               tabBarLabel: '',
//               headerTitleStyle: {
//                   color: 'white',
//                   fontSize: 28,
//               },
//           }} />
//       </Tab.Navigator>
//   );
// };
//
// export default MainTabNavigator;

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';
import ThirdScreen from '../screens/ThirdScreen';
import ForthScreen from '../screens/ForthScreen';
import FifthScreen from '../screens/FifthScreen';
import FirstSvg from '../assets/svg/FirstSvg';
import SecondSvg from '../assets/svg/SecondSvg';
import ThirdSvg from '../assets/svg/ThirdSvg';
import ForthSvg from '../assets/svg/ForthSvg';
import FifthSvg from '../assets/svg/FifthSvg';

const Tab = createBottomTabNavigator();

const customPic = () => (
    <Image
        source={require('../assets/img/headerP.png')}
        style={{ width: 250, resizeMode: 'contain' }}
    />
)

const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerStyle: { backgroundColor: '#0C0C0C', height: 180 },
                headerShadowVisible: false,
                tabBarStyle: {
                    position: 'absolute', // Делаем таббар "парящим"
                    bottom: 20, // Поднимаем таббар
                    left: 20,
                    right: 20,
                    height: 70,
                    width: '90%',
                    marginLeft: '5%',
                    backgroundColor: '#0C0C0C', // Немного прозрачности
                    borderRadius: 25, // Закругляем углы
                    paddingHorizontal: 1,
                    borderWidth: 1,
                    borderColor: '#262626',
                    paddingTop: 15,
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 0.3,
                    shadowRadius: 10,

                },
                tabBarIcon: ({ focused }) => {
                    let IconComponent;

                    if (route.name === 'First') {
                        IconComponent = FirstSvg;
                    } else if (route.name === 'Second') {
                        IconComponent = SecondSvg;
                    } else if (route.name === 'Third') {
                        IconComponent = ThirdSvg;
                    } else if (route.name === 'Forth') {
                        IconComponent = ForthSvg;
                    } else if (route.name === 'Fifth') {
                        IconComponent = FifthSvg;
                    }

                    return <IconComponent color={focused ? '#BC3D32' : '#aaaaaa'} />;
                },
                tabBarActiveTintColor: '#BC3D32',
                tabBarInactiveTintColor: '#aaaaaa',
            })}
        >
            <Tab.Screen
                name="First"
                component={FirstScreen}
                options={{
                    tabBarLabel: '',
                    headerTitle: customPic,
                }}
            />

            <Tab.Screen
                name="Second"
                component={SecondScreen}
                options={{
                    tabBarLabel: '',
                    headerTitle: customPic,
                }}
            />

            <Tab.Screen
                name="Third"
                component={ThirdScreen}
                options={{
                    tabBarLabel: '',
                    headerTitle: customPic,
                }}
            />

            <Tab.Screen
                name="Forth"
                component={ForthScreen}
                options={{
                    tabBarLabel: '',
                    headerTitle: customPic,
                }}
            />

            <Tab.Screen
                name="Fifth"
                component={FifthScreen}
                options={{
                    tabBarLabel: '',
                    headerTitle: customPic,
                }}
            />
        </Tab.Navigator>
    );
};

export default MainTabNavigator;

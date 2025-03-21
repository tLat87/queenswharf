import React from 'react';
import { View, Dimensions, Alert, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps'; // Для добавления маркеров и окна при нажатии

const SecondScreen = ({ navigation }) => {
    const { width, height } = Dimensions.get('window');

    // Список ресторанов с координатами
    const restaurants = [
        {
            name: "Agnes",
            description: "Wood-fired Australian cuisine with a focus on local, seasonal produce.",
            rating: "⭐⭐⭐⭐",
            coordinates: {
                latitude: -27.4590,
                longitude: 153.0350
            }
        },
        {
            name: "SK Steak & Oyster",
            description: "Premium steaks and fresh oysters in an elegant, contemporary setting.",
            rating: "⭐⭐⭐⭐",
            coordinates: {
                latitude: -27.4680,
                longitude: 153.0220
            }
        },
        {
            name: "Gambaro Seafood Restaurant",
            description: "A long-standing Brisbane institution specializing in fresh seafood, including signature mud crab and lobster.",
            rating: "⭐⭐⭐⭐",
            coordinates: {
                latitude: -27.4675,
                longitude: 153.0260
            }
        },
        {
            name: "Moo Moo The Wine Bar + Grill",
            description: "Steakhouse offering a refined menu of Australian meats, fresh seafood, and a great selection of wines.",
            rating: "⭐⭐⭐⭐",
            coordinates: {
                latitude: -27.4640,
                longitude: 153.0270
            }
        },
        // Добавляем рестораны из FineDining
        {
            name: "Urbane",
            description: "A fine dining restaurant offering modern Australian cuisine with innovative tasting menus.",
            rating: "⭐⭐⭐⭐⭐",
            coordinates: {
                latitude: -27.4688,
                longitude: 153.0265
            }
        },
        {
            name: "Esquire",
            description: "An intimate fine dining experience with a focus on modern Australian flavors and seasonal ingredients.",
            rating: "⭐⭐⭐⭐⭐",
            coordinates: {
                latitude: -27.4635,
                longitude: 153.0280
            }
        },
        {
            name: "OTTO Brisbane",
            description: "A sophisticated Italian restaurant offering premium dishes and views of the river and city skyline.",
            rating: "⭐⭐⭐⭐⭐",
            coordinates: {
                latitude: -27.4670,
                longitude: 153.0240
            }
        },
        {
            name: "The Euro",
            description: "A fine dining European-inspired restaurant, serving modern Australian cuisine with Mediterranean influences.",
            rating: "⭐⭐⭐⭐⭐",
            coordinates: {
                latitude: -27.4650,
                longitude: 153.0285
            }
        },
        // Добавляем рестораны из CasualBites
        {
            name: "Little Loco",
            description: "A vibrant, casual spot serving fresh Mexican street food, including tacos, burritos, and margaritas.",
            rating: "⭐⭐⭐⭐",
            coordinates: {
                latitude: -27.4597,
                longitude: 153.0280
            }
        },
        {
            name: "Miss Kay's",
            description: "American-style comfort food, including fried chicken, burgers, and milkshakes in a fun, casual atmosphere.",
            rating: "⭐⭐⭐⭐",
            coordinates: {
                latitude: -27.4676,
                longitude: 153.0261
            }
        },
        {
            name: "The Charming Squire",
            description: "A lively pub with classic Australian food, craft beers, and live entertainment.",
            rating: "⭐⭐⭐⭐",
            coordinates: {
                latitude: -27.4685,
                longitude: 153.0250
            }
        },
        {
            name: "Salt Meats Cheese",
            description: "Offering a variety of Italian-inspired dishes, including pizzas, pastas, and a great selection of wines.",
            rating: "⭐⭐⭐⭐",
            coordinates: {
                latitude: -27.4672,
                longitude: 153.0242
            }
        },
        // Добавляем рестораны из InternationalCuisine
        {
            name: "Hellenika",
            description: "Traditional Greek cuisine with a modern twist, offering a variety of grilled meats, seafood, and fresh salads.",
            rating: "⭐⭐⭐⭐",
            coordinates: {
                latitude: -27.4692,
                longitude: 153.0233
            }
        },
        {
            name: "GOMA Restaurant",
            description: "Contemporary Australian dining with an international flair, offering a fine dining experience with global flavors.",
            rating: "⭐⭐⭐⭐⭐",
            coordinates: {
                latitude: -27.4690,
                longitude: 153.0190
            }
        },
        {
            name: "Sake Restaurant & Bar",
            description: "Japanese dining offering sushi, sashimi, and other traditional Japanese dishes with modern Australian influences.",
            rating: "⭐⭐⭐⭐⭐",
            coordinates: {
                latitude: -27.4696,
                longitude: 153.0253
            }
        },
        {
            name: "The Spaghetti House Trattoria",
            description: "Authentic Italian restaurant serving pasta, pizza, and a variety of traditional Italian dishes in a relaxed atmosphere.",
            rating: "⭐⭐⭐⭐",
            coordinates: {
                latitude: -27.4643,
                longitude: 153.0278
            }
        }
    ];

    // Обработчик нажатия на маркер
    const handleMarkerPress = (restaurant) => {
        Alert.alert(
            restaurant.name,
            `${restaurant.description}\nRating: ${restaurant.rating}`,
            [{ text: "OK" }]
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={{ width: width, height: height }}
                provider={MapView.PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: -27.4590,
                    longitude: 153.0350,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}
            >
                {/* Добавляем маркеры для каждого ресторана */}
                {restaurants.map((restaurant, index) => (
                    <Marker
                        key={index}
                        coordinate={restaurant.coordinates}
                        title={restaurant.name}
                        description={restaurant.description}
                        onPress={() => handleMarkerPress(restaurant)}
                    >
                        {/* Всплывающее окно с данными */}
                        <Callout>
                            <View>
                                <Text>{restaurant.name}</Text>
                                <Text>{restaurant.description}</Text>
                                <Text>{restaurant.rating}</Text>
                            </View>
                        </Callout>
                    </Marker>
                ))}
            </MapView>
        </View>
    );
};

export default SecondScreen;

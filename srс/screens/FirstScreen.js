import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ButtonGold from '../component/ButtonGold';
import SomeIcon3Svg from '../assets/svg/SomeIcon3Svg';
import SomeIcon1Svg from '../assets/svg/SomeIcon1Svg';
import { removeRestaurant } from '../redux/slices/savedRestaurantsSlice';
import Share from 'react-native-share';


const FirstScreen = ({ navigation }) => {
    const savedRestaurants = useSelector(state => state.savedRestaurants.savedRestaurants);
    const dispatch = useDispatch();

    const handleRemoveRestaurant = (index) => {
        dispatch(removeRestaurant(index));
        Alert.alert(
            "Success",
            "Restaurant removed from your saved list!",
            [{ text: "OK" }]
        );
    };

    const handleShareRestaurant = (restaurant) => {
        const shareOptions = {
            title: restaurant.name,
            message: `${restaurant.name}\n\n${restaurant.description}\nRating: ⭐${restaurant.rating}`,
            // url: 'https://your-restaurant-link.com',
        };
        Share.open(shareOptions)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <ScrollView
            style={{
                flex: 1, paddingTop: 54, backgroundColor: '#000', borderColor: '#CCA65A',
                paddingHorizontal: 16, borderWidth: 2, borderTopLeftRadius: 16, borderTopRightRadius: 16,
                marginRight: -2, marginLeft: -2, marginBottom: -2, marginTop: -10, zIndex: 2
            }}
        >
            <Text style={{
                color: '#fff', fontSize: 18, fontFamily: 'Montserrat', marginBottom: 18,
                alignSelf: 'flex-start',
            }}>
                Saved Spots:
            </Text>

            {/* Маппим список сохраненных ресторанов */}
            {savedRestaurants.map((restaurant, index) => (
                <View
                    key={index}
                    style={{
                        padding: 24,
                        marginBottom: 18,
                        flexDirection: 'column',
                        borderWidth: 1,
                        borderColor: '#353535',
                        borderRadius: 16,
                        backgroundColor: '#0C0C0C',
                        width: '100%',
                        alignItems: 'center'
                    }}
                >
                    <Text
                        style={{
                            color: '#CCA65A',
                            fontSize: 32,
                            fontFamily: 'Iceland-Regular',
                        }}
                    >
                        {restaurant.name}
                    </Text>

                    <Text
                        style={{
                            color: '#fff',
                            fontSize: 16,
                            marginTop: 16,
                            fontFamily: 'Montserrat',
                            marginBottom: 12
                        }}
                    >
                        {restaurant.description}
                    </Text>

                    <Text
                        style={{
                            color: '#fff',
                            fontSize: 16,
                            marginTop: 16,
                            fontFamily: 'Montserrat',
                            marginBottom: 12
                        }}
                    >
                        Rating: {'⭐'.repeat(restaurant.rating)}
                    </Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <TouchableOpacity
                            onPress={() => { handleRemoveRestaurant(index) }}
                            style={{
                                borderColor: '#353535', borderWidth: 1, borderRadius: 12, backgroundColor: '#262626', padding: 10,
                                justifyContent: 'center', alignItems: 'center'
                            }}
                        >
                            <SomeIcon3Svg />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handleShareRestaurant(restaurant)} // Добавляем обработчик для "Share"
                            style={{
                                borderColor: '#353535', borderWidth: 1, borderRadius: 12, backgroundColor: '#262626', padding: 10,
                                justifyContent: 'center', alignItems: 'center'
                            }}
                        >
                            <SomeIcon1Svg />
                        </TouchableOpacity>
                    </View>
                </View>
            ))}

            <View style={{ marginBottom: 150 }} />
        </ScrollView>
    );
};

export default FirstScreen;

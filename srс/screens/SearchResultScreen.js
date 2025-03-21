import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import ButtonGold from '../component/ButtonGold';
import SomeIcon1Svg from '../assets/svg/SomeIcon1Svg';
import SomeIcon2Svg from '../assets/svg/SomeIcon2Svg';
import SomeIcon3Svg from '../assets/svg/SomeIcon3Svg';
import { useDispatch, useSelector } from 'react-redux';
import { addRestaurant } from '../redux/slices/savedRestaurantsSlice';
import Share from 'react-native-share'; // Импортируем библиотеку для обмена

const SearchResultScreen = ({ navigation, route }) => {
    const { category, data } = route.params;

    const randomIndex = Math.floor(Math.random() * data.length);
    const randomItem = data[randomIndex];

    const dispatch = useDispatch();

    const handleAddRestaurant = () => {
        dispatch(addRestaurant(randomItem));
        Alert.alert(
            "Success",
            "Restaurant added to your saved list!",
            [{ text: "OK" }]
        );
    };

    // Функция для обработки нажатия на кнопку "Share"
    const handleShareRestaurant = () => {
        const shareOptions = {
            title: randomItem.name,
            message: `${randomItem.name}\n\n${randomItem.description}\nRating: ⭐${randomItem.rating}`,
            url: 'https://your-restaurant-link.com', // Здесь может быть ссылка на страницу ресторана
        };

        Share.open(shareOptions)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <ScrollView style={{
            flex: 1, paddingTop: 24, backgroundColor: '#000', borderColor: '#CCA65A',
            paddingHorizontal: 16, borderWidth: 2, borderTopLeftRadius: 16, borderTopRightRadius: 16,
            marginRight: -2, marginLeft: -2, marginBottom: -2, marginTop: -10, zIndex: 2
        }}>
            <Text
                style={{
                    color: '#CCA65A',
                    fontSize: 32,
                    fontFamily: 'Iceland-Regular',
                    alignSelf: 'center',
                }}>
                Search Result
            </Text>

            <View style={{
                padding: 24, marginBottom: 18, flexDirection: 'column', borderWidth: 1, borderColor: '#353535', borderRadius: 16,
                backgroundColor: '#0C0C0C', width: '100%', alignItems: 'center'
            }}>

                <Image
                    source={randomItem.path}
                    style={{
                        width: '100%',
                        height: 200,
                        borderRadius: 16,
                        marginBottom: 16,
                        resizeMode: 'contain'
                    }}
                />
                <Text
                    style={{
                        color: '#CCA65A',
                        fontSize: 32,
                        fontFamily: 'Iceland-Regular',
                    }}>
                    {randomItem.name}
                </Text>

                <Text
                    style={{
                        color: '#fff',
                        fontSize: 16,
                        marginTop: 16,
                        fontFamily: 'Montserrat',
                        marginBottom: 12
                    }}>
                    {randomItem.description}
                </Text>

                <Text
                    style={{
                        color: '#fff',
                        fontSize: 16,
                        marginTop: 16,
                        fontFamily: 'Montserrat',
                        marginBottom: 12
                    }}>
                    Rating: {'⭐'.repeat(randomItem.rating)}
                </Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    {/*<ButtonGold text='Open' onPress={() => { }} addStyle={{ width: '60%' z} />*/}
                    <TouchableOpacity onPress={() => { handleAddRestaurant() }} style={{
                        borderColor: '#353535', borderWidth: 1, borderRadius: 12, backgroundColor: '#262626', padding: 10,
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                        <SomeIcon3Svg />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleShareRestaurant} style={{
                        borderColor: '#353535', borderWidth: 1, borderRadius: 12, backgroundColor: '#262626', padding: 10,
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                        <SomeIcon1Svg />
                    </TouchableOpacity>
                </View>

            </View>
            <ButtonGold text='Back' onPress={() => { navigation.pop(1) }} addStyle={{ alignSelf: 'center' }} />
        </ScrollView>
    );
}

export default SearchResultScreen;

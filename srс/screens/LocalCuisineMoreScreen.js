import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import ButtonGold from '../component/ButtonGold';
import GoldBack from '../assets/svg/GoldBack';

const LocalCuisineMoreScreen = ({ navigation, route }) => {
    const { post } = route.params;

    return (
        <ScrollView
            style={{
                flex: 1,
                paddingTop: 54,
                backgroundColor: '#000',
                borderColor: '#CCA65A',
                paddingHorizontal: 16,
                borderWidth: 2,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                marginRight: -2,
                marginLeft: -2,
                marginBottom: -2,
                marginTop: -10,
                zIndex: 2,
            }}
        >
            {/* Header */}
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <GoldBack />
                </TouchableOpacity>
                <Text
                    style={{
                        color: '#fff',
                        fontSize: 18,
                        fontFamily: 'Montserrat',
                        alignSelf: 'flex-start',
                    }}
                >
                    Local Cuisine Blog {'>'} Reading
                </Text>
            </View>

            {/* Title */}
            <Text
                style={{
                    color: '#CCA65A',
                    fontSize: 32,
                    fontFamily: 'Iceland-Regular',
                    width: '80%',
                    alignSelf: 'flex-start',
                    marginVertical: 16,
                }}
            >
                {post.title}
            </Text>

            {/* Description */}
            <Text
                style={{
                    color: '#fff',
                    fontSize: 16,
                    fontFamily: 'Montserrat',
                    marginBottom: 18,
                    alignSelf: 'flex-start',
                }}
            >
                {post.description}
            </Text>

            {/* Other Info */}
            <Text
                style={{
                    color: '#fff',
                    fontSize: 16,
                    fontFamily: 'Montserrat',
                    marginBottom: 18,
                    alignSelf: 'flex-start',
                    fontWeight: 'bold',
                }}
            >
                Must-Try Dish: {post.mustTry}
            </Text>
            <Text
                style={{
                    color: '#fff',
                    fontSize: 16,
                    fontFamily: 'Montserrat',
                    marginBottom: 18,
                    alignSelf: 'flex-start',
                    fontWeight: 'bold',
                }}
            >
                Location: {post.location}
            </Text>
            <Text
                style={{
                    color: '#fff',
                    fontSize: 16,
                    fontFamily: 'Montserrat',
                    marginBottom: 18,
                    alignSelf: 'flex-start',
                    fontWeight: 'bold',
                }}
            >
                Rating: {post.rating}
            </Text>
            <Text
                style={{
                    color: '#fff',
                    fontSize: 16,
                    fontFamily: 'Montserrat',
                    marginBottom: 18,
                    alignSelf: 'flex-start',
                    fontWeight: 'bold',
                }}
            >
                Coordinates: {post.coordinates.lat}° S, {post.coordinates.lng}° E
            </Text>

            {/* Button */}
            {/*<ButtonGold text="Share" />*/}

            <View style={{ marginBottom: 150 }} />
        </ScrollView>
    );
};

export default LocalCuisineMoreScreen;

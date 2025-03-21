import React from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import ButtonGold from '../component/ButtonGold';
import SomeIcon1Svg from '../assets/svg/SomeIcon1Svg';
import Share from 'react-native-share';  // Импортируем библиотеку для обмена

const blogPosts = [
    {
        title: 'Agnes - A Must-Visit Dining Spot in Brisbane',
        description: `If you're looking to experience something truly special in Brisbane, Agnes in Fortitude Valley should be at the top of your list. This modern Australian restaurant offers a unique wood-fired dining experience that blends bold flavors with locally-sourced ingredients. The menu features seasonal dishes, with highlights including the wood-fired octopus and tender roasted lamb.

Agnes's minimalist design complements its sophisticated yet relaxed atmosphere, making it the perfect place for a memorable meal. Whether you're a local or a visitor, this culinary gem promises an unforgettable dining experience.`,
        mustTry: 'Wood-Fired Octopus',
        location: '22 Agnes Street, Fortitude Valley, Brisbane',
        rating: '⭐⭐⭐⭐',
        coordinates: { lat: -27.4590, lng: 153.0350 },
    },
    {
        title: 'SK Steak & Oyster - A Premium Dining Experience',
        description: `For those who enjoy a premium dining experience, SK Steak & Oyster in Brisbane offers the finest steaks and freshest oysters in a luxurious setting. Whether you're in the mood for a perfectly cooked steak or delicate oysters paired with a glass of wine, SK Steak & Oyster delivers an exceptional meal that will leave you wanting more.

The intimate atmosphere and attentive service make it an ideal place for date nights or special celebrations. Their menu features the highest quality cuts of beef and a range of fresh, locally-sourced seafood.`,
        mustTry: 'Chargrilled Ribeye Steak',
        location: '179 Mary Street, Brisbane',
        rating: '⭐⭐⭐⭐⭐',
        coordinates: { lat: -27.4680, lng: 153.0220 },
    },
    {
        title: 'Gambaro Seafood Restaurant - A Brisbane Icon',
        description: `For seafood lovers, Gambaro Seafood Restaurant is a Brisbane institution that you can’t miss. Located in the heart of the city, Gambaro has been serving fresh seafood since 1953 and continues to offer an unparalleled dining experience. The menu includes everything from succulent mud crab to fresh oysters, prepared with the perfect blend of flavors and techniques.

The restaurant’s warm and welcoming atmosphere, paired with its exceptional seafood offerings, makes it a favorite among locals and tourists alike. If you're visiting Brisbane and love seafood, Gambaro is a must-try.`,
        mustTry: 'Mud Crab',
        location: '33 Caxton Street, Brisbane',
        rating: '⭐⭐⭐⭐',
        coordinates: { lat: -27.4675, lng: 153.0260 },
    },
];

const ForthScreen = ({ navigation }) => {

    // Функция для обработки нажатия на кнопку "Поделиться"
    const handleSharePost = (post) => {
        const shareOptions = {
            title: post.title,
            message: `${post.title}\n\n${post.description}\nMust Try: ${post.mustTry}\nLocation: ${post.location}\nRating: ${post.rating}`,
            url: 'https://your-restaurant-blog-link.com',  // Здесь можно добавить ссылку на статью
        };

        Share.open(shareOptions)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

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
            }}>
            <Text
                style={{
                    color: '#fff',
                    fontSize: 18,
                    fontFamily: 'Montserrat',
                    marginBottom: 18,
                    alignSelf: 'flex-start',
                }}>
                Local Cuisine Blog
            </Text>

            {blogPosts.map((post, index) => (
                <View
                    key={index}
                    style={{
                        width: '100%',
                        marginBottom: 12,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 26,
                        borderWidth: 1,
                        borderColor: '#353535',
                        borderRadius: 16,
                        backgroundColor: '#0C0C0C',
                    }}>
                    <Text
                        style={{
                            color: '#CCA65A',
                            fontSize: 24,
                            fontFamily: 'Iceland-Regular',
                            width: '100%',
                            alignSelf: 'flex-start',
                            marginBottom: 12,
                        }}>
                        {post.title}
                    </Text>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%',
                        }}>
                        <ButtonGold
                            text="Read"
                            onPress={() => {
                                navigation.navigate('LocalCuisineMore', { post });
                            }}
                            addStyle={{ width: '80%' }}
                        />
                        <TouchableOpacity
                            style={{
                                borderColor: '#353535',
                                borderWidth: 1,
                                borderRadius: 12,
                                backgroundColor: '#262626',
                                padding: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            onPress={() => handleSharePost(post)}  // Добавляем обработчик для кнопки Share
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

export default ForthScreen;

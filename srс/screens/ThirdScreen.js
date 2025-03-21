import {ImageBackground, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import ButtonGold from '../component/ButtonGold';
import SomeIcon1Svg from '../assets/svg/SomeIcon1Svg';
import React, {useState} from 'react';
import GoldBoxSvg from '../assets/svg/GoldBoxSvg';
import GoldPizaSvg from '../assets/svg/GoldPizaSvg';
import GoldMeetSvg from '../assets/svg/GoldMeetSvg';

const LocalFavorites = [
    {
        "name": "Agnes",
        "description": "Wood-fired Australian cuisine with a focus on local, seasonal produce.",
        "rating": 4,
        "coordinates": {
            "latitude": -27.4590,
            "longitude": 153.0350
        },
        "path": require('../assets/img/1/image1.png')
    },
    {
        "name": "SK Steak & Oyster",
        "description": "Premium steaks and fresh oysters in an elegant, contemporary setting.",
        "rating": 4,
        "coordinates": {
            "latitude": -27.4680,
            "longitude": 153.0220
        },
        "path": require('../assets/img/1/image2.png')
    },
    {
        "name": "Gambaro Seafood Restaurant",
        "description": "A long-standing Brisbane institution specializing in fresh seafood, including signature mud crab and lobster.",
        "rating": 4,
        "coordinates": {
            "latitude": -27.4675,
            "longitude": 153.0260
        },
        "path": require('../assets/img/1/image3.png')
    },
    {
        "name": "Moo Moo The Wine Bar + Grill",
        "description": "Steakhouse offering a refined menu of Australian meats, fresh seafood, and a great selection of wines.",
        "rating": 4,
        "coordinates": {
            "latitude": -27.4640,
            "longitude": 153.0270
        },
        "path": require('../assets/img/1/image4.png')
    }
]

const  FineDining =[
    {
        "name": "Urbane",
        "description": "A fine dining restaurant offering modern Australian cuisine with innovative tasting menus.",
        "rating": 5,
        "coordinates": {
            "latitude": -27.4688,
    "longitude": 153.0265
        },
        "path": require('../assets/img/2/image.png')
    },
    {
        "name": "Esquire",
        "description": "An intimate fine dining experience with a focus on modern Australian flavors and seasonal ingredients.",
        "rating": 5,
        "coordinates": {
            "latitude": -27.4635,
    "longitude": 153.0280
    },
        "path": require('../assets/img/2/image2.png')
    },
    {
        "name": "OTTO Brisbane",
        "description": "A sophisticated Italian restaurant offering premium dishes and views of the river and city skyline.",
        "rating": 5,
        "coordinates": {
            "latitude": -27.4670,
    "longitude": 153.0240
    },
        "path": require('../assets/img/2/image3.png')
    },
    {
        "name": "The Euro",
        "description": "A fine dining European-inspired restaurant, serving modern Australian cuisine with Mediterranean influences.",
        "rating": 5,
        "coordinates": {
            "latitude": -27.4650,
    "longitude": 153.0285
    },
        "path": require('../assets/img/2/image4.png')
    }
]


const CasualBites = [
    {
        "name": "Little Loco",
        "description": "A vibrant, casual spot serving fresh Mexican street food, including tacos, burritos, and margaritas.",
        "rating": 4,
        "coordinates": {
            "latitude": -27.4597,
            "longitude": 153.0280
        },
        "path": require('../assets/img/3/image.png')
    },
    {
        "name": "Miss Kay's",
        "description": "American-style comfort food, including fried chicken, burgers, and milkshakes in a fun, casual atmosphere.",
        "rating": 4,
        "coordinates": {
            "latitude": -27.4676,
            "longitude": 153.0261
        },
        "path": require('../assets/img/3/image2.png')
    },
    {
        "name": "The Charming Squire",
        "description": "A lively pub with classic Australian food, craft beers, and live entertainment.",
        "rating": 4,
        "coordinates": {
            "latitude": -27.4685,
            "longitude": 153.0250
        },
        "path": require('../assets/img/3/image3.png')
    },
    {
        "name": "Salt Meats Cheese",
        "description": "Offering a variety of Italian-inspired dishes, including pizzas, pastas, and a great selection of wines.",
        "rating": 4,
        "coordinates": {
            "latitude": -27.4672,
            "longitude": 153.0242
        },
        "path": require('../assets/img/3/image4.png')
    }
]

const InternationalCuisine = [
    {
        "name": "Hellenika",
        "description": "Traditional Greek cuisine with a modern twist, offering a variety of grilled meats, seafood, and fresh salads.",
        "rating": 4,
        "coordinates": {
            "latitude": -27.4692,
            "longitude": 153.0233
        },
        "path": require('../assets/img/4/image.png')
    },
    {
        "name": "GOMA Restaurant",
        "description": "Contemporary Australian dining with an international flair, offering a fine dining experience with global flavors.",
        "rating": 5,
        "coordinates": {
            "latitude": -27.4690,
            "longitude": 153.0190
        },
        "path": require('../assets/img/4/image2.png')
    },
    {
        "name": "Sake Restaurant & Bar",
        "description": "Japanese dining offering sushi, sashimi, and other traditional Japanese dishes with modern Australian influences.",
        "rating": 5,
        "coordinates": {
            "latitude": -27.4696,
            "longitude": 153.0253
        },
        "path": require('../assets/img/4/image3.png')
    },
    {
        "name": "The Spaghetti House Trattoria",
        "description": "Authentic Italian restaurant serving pasta, pizza, and a variety of traditional Italian dishes in a relaxed atmosphere.",
        "rating": 4,
        "coordinates": {
            "latitude": -27.4643,
            "longitude": 153.0278
        },
        "path": require('../assets/img/4/image.png')
    }
]


const ThirdScreen = ({ navigation }) => {
    const [selectedCategory, setSelectedCategory] = useState(null); // состояние для выбранной категории

    // Данные для каждой категории
    const categories = {
        "Local Favorites": LocalFavorites,
        "Fine Dining": FineDining,
        "Casual Bites": CasualBites,
        "International Cuisine": InternationalCuisine
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    return (
        <View
            style={{
                flex: 1,
                paddingTop: 54,
                alignItems: 'center',
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
            <Text
                style={{
                    color: '#fff',
                    fontSize: 18,
                    fontFamily: 'Montserrat',
                    marginBottom: 18,
                    alignSelf: 'flex-start',
                }}
            >
                Select The Category:
            </Text>

            <ImageBackground
                source={{
                    uri: 'https://s3-alpha-sig.figma.com/img/95c7/ffc3/74b9536c5a2309ba34dbf7728451f737?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=N8dP-D26j-rcqGtJRYhzRGtHz-5A3ntmUkr0ildOO5MKwC0AuJZnR8WEmLVrX6DCA0N-piSgYju2hYqPivtJ~uqWlDFwOnNPUlMetpwj7jt3gnbc9hG7LFVsbr-0XoKKSPu~9bYlRVi9irxOM-NX0Sl9OZ4pnvhxiY-cEXSbLBDt-Ropn9O53VbXXfS1k6tcfFVhz9KBVNI7xhMm08sURe9kWgKDvr3fNgjITzNJaW2157rgYY3hcL0YgU6DfiFy69bCVvE1MJiEf3Hp355N4~vGCAGL0GNfAHPc32XdhDFK9q7Dg2Tz4KAckwi00p~7o9O09tKcjTSJFKZfl3EhHQ__',
                }}
                style={{
                    width: '100%',
                    borderColor: '#353535',
                    borderWidth: 1,
                    borderRadius: 16,
                    marginBottom: 18,
                }}
                imageStyle={{ borderRadius: 16 }}
                resizeMode="cover"
            >
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        borderRadius: 16,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    }}
                />
                <TouchableOpacity
                    style={{
                        padding: 20,
                        backgroundColor: selectedCategory === 'Local Favorites' ? '#CCA65A' : 'transparent',
                        borderRadius: 16,
                    }}
                    onPress={() => handleCategorySelect('Local Favorites')}
                >
                    <GoldBoxSvg />
                    <Text
                        style={{
                            color: '#CCA65A',
                            fontSize: 22,
                            fontFamily: 'Iceland-Regular',
                        }}
                    >
                        Local Favorites
                    </Text>
                </TouchableOpacity>
            </ImageBackground>

            <View
                style={{
                    flexDirection: 'row',
                    marginBottom: 18,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    marginTop: 18,
                }}
            >
                <ImageBackground
                    source={{
                        uri: 'https://s3-alpha-sig.figma.com/img/670f/74bc/682cae7c25295c8cca152f17c16e6817?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LmAES7Y~kCRUYFx0qhZudd5kVP1sXr-bUQpeME7EnvIb0ZnswCqNabGQnNGm1gfQkbsmZSJCqSNRcpk9jghowIBCvyUnY8~0hjtE9Y8lU3oPdpooV8mf-Cbf~41JLBoT0SR1TkLYAZQfpE5hYoPK~lwDfur6PZkfj4XGsbBA4E-V8Ur21qebm7-2w0UoSZrGldh1EvW6t-Lr3qZVwAqiN45v~Qo6KOXBeEzIqIY3b1z03SvHH2Q26i3q83s3ZzI3S5bdjNGmWyg6AzS7QgTjkcTuDSxQ1n0NxNKr1mbsEJLZq9cRbFnckICoxsOsAV5DG7GDGRZgleBUsJXet2mO1w__',
                    }}
                    style={{
                        width: '48%',
                        borderColor: '#353535',
                        borderWidth: 1,
                        borderRadius: 16,
                    }}
                    imageStyle={{ borderRadius: 16 }}
                    resizeMode="cover"
                >
                    <View
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            borderRadius: 16,
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        }}
                    />
                    <TouchableOpacity
                        style={{
                            padding: 20,
                            backgroundColor: selectedCategory === 'Fine Dining' ? '#CCA65A' : 'transparent',
                            borderRadius: 16,
                        }}
                        onPress={() => handleCategorySelect('Fine Dining')}
                    >
                        <GoldMeetSvg />
                        <Text
                            style={{
                                color: '#CCA65A',
                                fontSize: 22,
                                fontFamily: 'Iceland-Regular',
                            }}
                        >
                            Fine Dining
                        </Text>
                    </TouchableOpacity>
                </ImageBackground>

                <ImageBackground
                    source={{
                        uri: 'https://s3-alpha-sig.figma.com/img/9f78/ba31/ed1f331246544d6e5ad2e055b56d739a?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dqysPpQS6R5xomTjKMDkang1mldfRFFYSNHEjTC7Zl-v-mxzClVTlh75iwuLL96oBVER3M42nl-37IqQw8v7VXdJvbbvWhEYP7LYSEDMSy4Y2KaRkALcTk0pDWvShoJ-BoFZElGP~upV-Jn6sNd-JNJGF9A~I8Hib3iGq84ED4LoqM3SEaRpYqA~qeF16w-gV9mhZQbB7FBQJiIxyN0vGK4KwAmKW-Uvl1~EFmHcZ88zI-FcKVrHDMOaWx1o-AJwdqKmMSOctdidxQ0xsPAoOGUiTfQ25vnNAYfArHiMJnJ67hliB0qs3KNToSo9MKP07scYcqe4giuME6zUCVLaVg__',
                    }}
                    style={{
                        width: '48%',
                        borderColor: '#353535',
                        borderWidth: 1,
                        borderRadius: 16,
                    }}
                    imageStyle={{ borderRadius: 16 }}
                    resizeMode="cover"
                >
                    <View
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            borderRadius: 16,
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        }}
                    />
                    <TouchableOpacity
                        style={{
                            padding: 20,
                            backgroundColor: selectedCategory === 'Casual Bites' ? '#CCA65A' : 'transparent',
                            borderRadius: 16,
                        }}
                        onPress={() => handleCategorySelect('Casual Bites')}
                    >
                        <GoldPizaSvg />
                        <Text
                            style={{
                                color: '#CCA65A',
                                fontSize: 22,
                                fontFamily: 'Iceland-Regular',
                            }}
                        >
                            Casual Bites
                        </Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>

            <ImageBackground
                source={{
                    uri: 'https://s3-alpha-sig.figma.com/img/a0ed/bc66/45367ad8cef582298e7e53784846c816?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Z6thzeMGxeALqbW5IlcfHBcXkq1QVXetYqGyzP5gtAbt4XBN1A5ojiLRgxw8gT3I5NhfVmwk-zYUFEBuWvKx9rF5mRSE7UpARCr15vqwC7Qfeoi09ITdCksSg-Txxs-2hCE6PhvZImJ6B3rFop4MvcmrkU1Y1F9vLekEgWWVaFyrteWRmrPwq9Zf9vGaazftcLoUh~WbMcm~oUBUAzbXl6PHCxCbZyvhPhStFtctW~42uOv~NW65lkkgDytbbf42VW6-F3VSZxiHH54p6PQqqk0Kp9LprbEcN3N-5ZBJjZZMeMxm4YJ1RhuUBMHFNzE3WejYKeiJolUrEkh~SiyH-g__',
                }}
                style={{
                    width: '100%',
                    borderColor: '#353535',
                    borderWidth: 1,
                    borderRadius: 16,
                    marginBottom: 18,
                }}
                imageStyle={{ borderRadius: 16 }}
                resizeMode="cover"
            >
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        borderRadius: 16,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    }}
                />
                <TouchableOpacity
                    style={{
                        padding: 20,
                        backgroundColor: selectedCategory === 'International Cuisine' ? '#CCA65A' : 'transparent',
                        borderRadius: 16,
                    }}
                    onPress={() => handleCategorySelect('International Cuisine')}
                >
                    <GoldBoxSvg />
                    <Text
                        style={{
                            color: '#CCA65A',
                            fontSize: 22,
                            fontFamily: 'Iceland-Regular',
                        }}
                    >
                        International Cuisine
                    </Text>
                </TouchableOpacity>
            </ImageBackground>

            <ButtonGold
                text='Explore'
                onPress={() => {
                    if (selectedCategory) {
                        navigation.navigate('SearchResultLoadind', { category: selectedCategory, data: categories[selectedCategory] });
                    }
                }}
            />
        </View>
    );
};

export default ThirdScreen

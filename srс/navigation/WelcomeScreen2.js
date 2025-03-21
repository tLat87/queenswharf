import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import ButtonGold from '../component/ButtonGold';

const WelcomeScreen2 = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image
                source={{ uri: 'https://s3-alpha-sig.figma.com/img/82b9/644b/81514c0dbad75971d64fe4870f51d57f?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aaaocL7WRxPLhjt~Zc7RANYxiPC~3iDrEzsZQFNElVTnqkFpGoxCqtz-Q-PsnYe4euWARGcJmJuivNRWH6HbZZFmUl~5fxijIFUUPakNy~guwOhl5xKNL-IoV3bZg~stIApTezBsdYu0qdH3YMRggBx3UKaplBjW2H9GbnihnAnqMKjSwGSWXPjHYsVqFJM4KdgustCtqRyTlqVSWM5~c1meT~Kzg9q1i2OpYLdVhXXLDpulhb9KClQ2mLPxY7Kysdlrg1uG-txRTUiTMc5nJgGbZ6XH0qU8~CDAX6QpL~cDvVeWxKfPJg6Frff5IjYy4VcRpX2hXBoJ6fqBpoeBpQ__' }} // Замените на свою картинку
                style={styles.image}
                resizeMode="cover"
            />
            <View style={{ position: 'absolute',
                bottom: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',}} />
            <Image
                source={require('../assets/img/onBoard.png')}
                style={{width:'80%', position:'absolute', top:'40%'}}
                resizeMode='contain'
            />
        </View>

        <View style={styles.textContainer}>
            <Text style={{color: '#CCA65A', textAlign: 'center', fontSize: 28,marginTop: 30, fontFamily: 'Iceland-Regular'}}>Explore Dining Options</Text>
            <Text style={{color: '#fff', textAlign: 'center', fontSize: 16, marginTop: 10, marginBottom: 28, fontFamily: 'Montserrat'}}>
                Select from four carefully curated categories to find the perfect place to eat, no matter what you're craving.{"\n"}
                {"\n"}Local Favorites{"\n"}
                Fine Dining{"\n"}
                Casual Bites{"\n"}
                International Cuisine
            </Text>


            <ButtonGold text='Next' onPress={()=>{navigation.navigate('Welcome3')}} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    textContainer: {
        flex: 1,
        backgroundColor: '#0C0C0C',
        alignItems: 'center',
        padding: 16,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderColor: '#CCA65A',
        marginTop: -10,
        marginLeft: -1,
        marginRight: -1,
        marginBottom: -1,
        borderWidth: 1,
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitle: {
        color: 'white',
        fontSize: 16,
        marginTop: 10,
        textAlign: 'center',
    },
});

export default WelcomeScreen2;

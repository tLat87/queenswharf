import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import ButtonGold from '../component/ButtonGold';

const WelcomeScreen5 = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image
                source={{ uri: 'https://s3-alpha-sig.figma.com/img/9147/1647/f6434df2125fbff44f454d7ee08361ae?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JYukBfyVWGH6kjgic1ani2K9Kdsb4knW4f93KT7MLD~SAYdppeVPXLA-8yuRPQNtaWl2W2FtuCdxMG639c9vl1W-dmPzyLIwhx6Uyao8u7RN9bNSGxuuu8-FBTC6MBP1L9Ipe~yYoGLPxx9GZA8ELLnTvcsM71ClsIdBqztkOdD9r2I2X7f-PpJIrpe2sV50IKwTYVfBvmL0KlsPZeN35uHacmm9c4mrI39-LvwiCR5az1XInQsa3TpsD4mZIkt2uMZMw1SyPOH-rVftAqce6vFLSADl0baZlhjdwPi2oeBoJq5ofL8GYi9lhFJtXJlIwnC7km2vj9Fni0zwP0JnvQ__' }} // Замените на свою картинку
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
            <Text style={{color: '#CCA65A', textAlign: 'center', fontSize: 28,marginTop: 30, fontFamily: 'Iceland-Regular'}}>Test Your Knowledge with Our Quiz!</Text>
            <Text style={{color: '#fff', textAlign: 'center', fontSize: 16, marginTop: 10,marginBottom: 28, fontFamily: 'Montserrat'}}>How well do you know Australian food? Take our "Food of Australia" quiz to discover more delicious facts while having fun.</Text>

            <ButtonGold text='Next' onPress={()=>{navigation.replace('Main')}} />
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

export default WelcomeScreen5;

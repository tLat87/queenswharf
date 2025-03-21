import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import ButtonGold from '../component/ButtonGold';

const WelcomeScreen4 = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image
                source={{ uri: 'https://s3-alpha-sig.figma.com/img/8c67/12a8/6a4ededc0b4126b0925bcd1c90f0fa6e?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Bi3Aa17wkRTv1PbR1a0o1-ztI1251cd9LTw9xaN1y9zIcp9wrVJ4WLZU8Qm6PlDUUVR~0j2CHh5h92gqkP2UduMzxAvZDjbZj6A-B9uEBLV8YuL9Lahj6vkPAKMyCj2OTpBtXAjGoFauGefET7PWEyinthSqn~FrhiUX3QKAA61NsBOuhpZk~FDxImMdmtALN2RVskiM441PiKIybLLgBo2Wmnsta1~iRWFTHbJ~mLnsTYw7rDDvJSKONNWPQs0IuDCFQd5BtJiQezVZlRHhRmXEaigrTSSf4dYWN~MSnPPtG7bRPQAhyNzqQnMDa7h4hvOD0NUkF1lqsg5Ur62XUA__' }} // Замените на свою картинку
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
            <Text style={{color: '#CCA65A', textAlign: 'center', fontSize: 28,marginTop: 30, fontFamily: 'Iceland-Regular'}}>Save Your Favorite Spots</Text>
            <Text style={{color: '#fff', textAlign: 'center', fontSize: 16, marginTop: 10,marginBottom: 28, fontFamily: 'Montserrat'}}>Found a place you love? Save it to your personal list for quick access whenever you’re ready to eat.</Text>

            <ButtonGold text='Next' onPress={()=>{navigation.navigate('Welcome5')}} />
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

export default WelcomeScreen4;

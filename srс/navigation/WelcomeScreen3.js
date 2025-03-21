import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import ButtonGold from '../component/ButtonGold';

const WelcomeScreen3 = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image
                source={{ uri: 'https://s3-alpha-sig.figma.com/img/71dc/00dc/3cbb22319abeeaf60737f9cbfca1336c?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BQOBsU77nHorrRlBBS5BDr1Z5CPD3yOgNnMp61lj41NjtrVHVZQI-dRL6ExrR3PJnF4OoxSlzS0aEtp50TyAI~YOSU1ulGx33WonPE9Tgmf1ueaOiuQNzRrAiGKMxd7zaoFRELesWkSzihL9ah-dTL90fJisL9HlU4a0svP9TqY~GO2NtetAP7aUy40PQU0247jFDqVTgE-DPN04JaGaVh4v76o-nr5gqNecmduNLcqRxA2oB8xhAOyVvUohTFtKThvJcziEfC0gBZvOAuESBKu~xXpVam5-FyOjXfPFjVcT9Q98MNnBWlDxLIKnLD9hYcM2murdrsPvFmGJWHRjjA__' }} // Замените на свою картинку
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
            <Text style={{color: '#CCA65A', textAlign: 'center', fontSize: 28,marginTop: 30, fontFamily: 'Iceland-Regular'}}>Navigate the Best Eateries</Text>
            <Text style={{color: '#fff', textAlign: 'center', fontSize: 16, marginTop: 10,marginBottom: 28, fontFamily: 'Montserrat'}}>Use our interactive map to find dining spots around Queens Wharf. Get directions and check out all the top-rated places in Brisbane.</Text>

            <ButtonGold text='Next' onPress={()=>{navigation.navigate('Welcome4')}} />
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

export default WelcomeScreen3;

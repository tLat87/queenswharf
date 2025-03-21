import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import ButtonGold from '../component/ButtonGold';

const WelcomeScreen = ({ navigation }) => (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
            source={{ uri: 'https://s3-alpha-sig.figma.com/img/9eae/5fe8/943532a5a92789c48424424c2cc33dc9?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jLcUgjP6pmuw3ye7KroeZfZ58jqxM9RK1Ic5jQTNkg-leOtAKxBw-c0UW4JvpVmcp9MxNQYk6kcXXBy0IJq9j~3XGXYWoBlrDE4mJsFDXPBIsKSUCKX4xLz5xj7AZg8aQ~vaROb1zUwflzBlWaz25xXa-vv5e6vg5KFprLpIyvKzvM2rbPwtGxQL4Hu-dQGu5rwTsuhngjOMsyhMqS8bCMdnBdy7-rftdl1dR4B6W9pKM~XcvGuaFg3VBfPS8pWUfS~ncjBmPLgEkIKwNKtLK2aEGr6IfXQ3HsBmB1lAXBt7iP3D3sZTa85XdQv8zoOxng9FyB31YxSmcV1BQwEV-A__' }} // Замените на свою картинку
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
        <Text style={{color: '#CCA65A', textAlign: 'center', fontSize: 28,marginTop: 30, fontFamily: 'Iceland-Regular'}}>Welcome to Culinary Delights – Your Guide to the Best Dining in Brisbane!</Text>
        <Text style={{color: '#fff', textAlign: 'center', fontSize: 16, marginTop: 10,marginBottom: 28, fontFamily: 'Montserrat'}}>Explore the finest culinary spots at Queens Wharf. Let’s start your delicious journey!</Text>

        <ButtonGold text='Next' onPress={()=>{navigation.navigate('Welcome2')}} />
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

export default WelcomeScreen;

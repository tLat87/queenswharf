import React, {useEffect} from 'react';
import { Text, View, ImageBackground } from 'react-native';
import ButtonGold from '../component/ButtonGold';

const SearchResultLoadindScreen = ({ navigation, route }) => {
    const { category, data } = route.params;

    useEffect(() => {
        // Через 3 секунды переходим на экран SearchResult
        const timeout = setTimeout(() => {
            navigation.replace('SearchResult', { category, data });
        }, 3000);

        // Очистка таймера при размонтировании компонента
        return () => clearTimeout(timeout);
    }, [category, data, navigation]);

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
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
          zIndex: 99,
        }}>
        <Text
          style={{
            color: '#CCA65A',
            fontSize: 32,
            fontFamily: 'Iceland-Regular',
          }}>
          {category}
        </Text>
          <Text
              style={{
                  color: '#fff',
                  fontSize: 16,
                  marginTop: 16,
                  fontFamily: 'Montserrat',
                  marginBottom: 12
              }}>
              Loading...
          </Text>

          <ButtonGold text='Please wait' onPress={()=>{}}/>
      </View>
    );
}

export default SearchResultLoadindScreen;

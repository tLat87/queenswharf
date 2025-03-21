import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import ButtonGold from '../component/ButtonGold';
import SomeIcon1Svg from '../assets/svg/SomeIcon1Svg';
import GoldYesSvg from '../assets/svg/GoldYesSvg';

const QuizResultScreen = ({ route, navigation }) => {
    const { correct = 0, total = 0 } = route.params || {};

    return (
        <View style={{
            flex: 1,
            paddingTop: 104,
            backgroundColor: '#000',
            alignItems: 'center',
            borderColor: '#CCA65A',
            paddingHorizontal: 16,
            borderWidth: 2,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            marginRight: -2,
            marginLeft: -2,
            marginBottom: -2,
            marginTop: -10,
            zIndex: 2
        }}>
            <GoldYesSvg />

            <Text style={{
                color: '#fff',
                marginTop: 16,
                fontSize: 18,
                fontFamily: 'Montserrat',
                marginBottom: 18,
            }}>
                Quiz Result:
            </Text>

            <Text style={{
                color: '#CCA65A',
                fontSize: 32,
                fontFamily: 'Iceland-Regular',
                marginBottom: 24
            }}>
                {correct >= total / 2 ? 'Good Job!' : 'Keep Practicing!'}
            </Text>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%'
            }}>
                <View style={{
                    width: '80%',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 16,
                    borderWidth: 1,
                    borderColor: '#353535',
                    borderRadius: 16,
                    backgroundColor: '#0C0C0C'
                }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 24,
                        fontFamily: 'Iceland-Regular',
                    }}>
                        Right answers: {correct}/{total}
                    </Text>
                </View>
                <TouchableOpacity style={{
                    borderColor: '#353535',
                    borderWidth: 1,
                    borderRadius: 12,
                    backgroundColor: '#262626',
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <SomeIcon1Svg />
                </TouchableOpacity>
            </View>

            <ButtonGold
                text='Try Again'
                o onPress={() => navigation.pop('2')}
                addStyle={{ width: '100%', marginTop: 12 }}
            />

            <TouchableOpacity
                onPress={() => navigation.pop('2')}
                style={{
                    width: '80%',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 16,
                    borderColor: '#353535',
                    borderRadius: 16,
                    backgroundColor: '#0C0C0C',
                    marginTop: 12
                }}
            >
                <Text style={{
                    color: '#fff',
                    fontSize: 24,
                    fontFamily: 'Iceland-Regular',
                }}>
                    Close
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default QuizResultScreen;

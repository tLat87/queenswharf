import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import ButtonGold from '../component/ButtonGold';

const QuestionsScreen = ({ route, navigation }) => {
    const { quiz } = route.params;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showAnswer, setShowAnswer] = useState(false);
    const [score, setScore] = useState(0);
    const currentQuestion = quiz.questions[currentQuestionIndex];

    const handleOptionPress = (option) => {
        if (showAnswer) return;
        setSelectedOption(option);
        setShowAnswer(true);

        if (option === currentQuestion.correctAnswer) {
            setScore(score + 1);
        }
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null);
            setShowAnswer(false);
        } else {
            navigation.navigate('QuizResult', {
                total: quiz.questions.length,
                correct: score
            });
        }
    };

    const getOptionStyle = (option) => {
        if (!showAnswer) return baseOptionStyle;

        if (option === currentQuestion.correctAnswer) {
            return { ...baseOptionStyle, backgroundColor: '#2E7D32' }; // green
        }
        if (option === selectedOption) {
            return { ...baseOptionStyle, backgroundColor: '#C62828' }; // red
        }
        return baseOptionStyle;
    };

    const baseOptionStyle = {
        width: '100%',
        marginBottom: 8,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        borderWidth: 1,
        borderColor: '#353535',
        borderRadius: 16,
        backgroundColor: '#0C0C0C'
    };

    return (
        <View style={{
            flex: 1,
            paddingTop: 24,
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
            <Text style={{
                color: '#fff',
                fontSize: 18,
                fontFamily: 'Montserrat',
                marginBottom: 18,
                alignSelf: 'flex-start',
            }}>
                Question {currentQuestionIndex + 1} of {quiz.questions.length}
            </Text>

            <Text style={{
                color: '#CCA65A',
                fontSize: 32,
                fontFamily: 'Iceland-Regular',
                alignSelf: 'flex-start',
                marginBottom: 16
            }}>
                {currentQuestion.question}
            </Text>

            {currentQuestion.options.map((option, index) => (
                <TouchableOpacity key={index} onPress={() => handleOptionPress(option)} style={getOptionStyle(option)}>
                    <Text style={{ color: '#fff', fontSize: 24, fontFamily: 'Iceland-Regular' }}>
                        {option}
                    </Text>
                </TouchableOpacity>
            ))}

            {showAnswer && (
                <ButtonGold
                    text={currentQuestionIndex === quiz.questions.length - 1 ? 'Finish' : 'Next'}
                    onPress={nextQuestion}
                    addStyle={{ width: '100%', marginTop: 12 }}
                />
            )}
        </View>
    );
};

export default QuestionsScreen;

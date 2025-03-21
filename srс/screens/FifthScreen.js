import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import ButtonGold from '../component/ButtonGold';
import SomeIcon1Svg from '../assets/svg/SomeIcon1Svg';
import Share from 'react-native-share';  // Импортируем библиотеку для обмена

const quizzes = [
    {
        title: "Australian Cuisine Basics",
        questions: [
            {
                question: "What is Australia's national meat pie called?",
                options: ["Vegemite Pie", "Meat Pie", "Chicken Pie", "Sausage Roll"],
                correctAnswer: "Meat Pie"
            },
            {
                question: "Which Australian dish is made with a mixture of crushed biscuits, butter, and cocoa powder?",
                options: ["Pavlova", "Lamington", "Anzac Biscuits", "Chocolate Slice"],
                correctAnswer: "Chocolate Slice"
            },
            {
                question: "What is the primary ingredient in a classic Australian dish known as \"Damper\"?",
                options: ["Corn", "Flour", "Rice", "Potatoes"],
                correctAnswer: "Flour"
            },
            {
                question: "Which Australian food spread is commonly eaten on toast and is known for its savory, salty flavor?",
                options: ["Nutella", "Peanut Butter", "Vegemite", "Marmite"],
                correctAnswer: "Vegemite"
            },
            {
                question: "Which of these is a popular Australian dessert that consists of a meringue base topped with fresh fruit?",
                options: ["Pavlova", "Lamington", "Anzac Biscuit", "Tim Tam"],
                correctAnswer: "Pavlova"
            }
        ]
    },
    {
        title: "Australian Iconic Dishes",
        questions: [
            {
                question: "What type of meat is typically used in the Australian dish \"kangaroo steak\"?",
                options: ["Chicken", "Kangaroo", "Beef", "Lamb"],
                correctAnswer: "Kangaroo"
            },
            {
                question: "What is \"Fairy Bread\"?",
                options: ["A type of cake", "A sandwich with jam and sprinkles", "A dessert with meringue and berries", "A type of Australian pancake"],
                correctAnswer: "A sandwich with jam and sprinkles"
            },
            {
                question: "Which of these is a popular Australian seafood dish often served with chips?",
                options: ["Fish and Chips", "Lobster Roll", "Calamari Salad", "Shrimp Toast"],
                correctAnswer: "Fish and Chips"
            },
            {
                question: "Which dish is made from a mixture of lamb, spices, and vegetables, typically cooked in a pie crust?",
                options: ["Shepherd's Pie", "Beef Wellington", "Meat Pie", "Bangers and Mash"],
                correctAnswer: "Meat Pie"
            },
            {
                question: "Which Australian food is made from dried meat, often kangaroo, and is similar to beef jerky?",
                options: ["Chiko Roll", "Biltong", "Bush Tomato", "Jerky"],
                correctAnswer: "Jerky"
            }
        ]
    },
    {
        title: "Australian Food Trivia",
        questions: [
            {
                question: "What is the name of the iconic Australian chocolate biscuit, often dunked in tea or coffee?",
                options: ["Tim Tam", "Anzac Biscuit", "Lamington", "Wagon Wheel"],
                correctAnswer: "Tim Tam"
            },
            {
                question: "Which of the following is a popular Australian beverage made from tea leaves and milk?",
                options: ["Coffee", "Hot Chocolate", "Milo", "Flat White"],
                correctAnswer: "Flat White"
            },
            {
                question: "Which vegetable is often used to make \"pumpkin soup\" in Australia?",
                options: ["Sweet Potato", "Carrot", "Pumpkin", "Cauliflower"],
                correctAnswer: "Pumpkin"
            },
            {
                question: "Which of these fruits is used to make the iconic Australian dessert \"Pavlova\"?",
                options: ["Mango", "Kiwi", "Banana", "Apple"],
                correctAnswer: "Kiwi"
            },
            {
                question: "Which of these is a traditional Australian food commonly enjoyed at a BBQ?",
                options: ["Hamburger", "Vegemite Toast", "Lamington", "Sausage Sizzle"],
                correctAnswer: "Sausage Sizzle"
            }
        ]
    }
];

const FifthScreen = ({ navigation }) => {

    // Функция для обработки нажатия на кнопку "Поделиться"
    const handleShareQuiz = (quiz) => {
        const shareOptions = {
            title: quiz.title,
            message: `${quiz.title}\n\nCheck out these fun questions!\n\n${quiz.questions.map((question, index) => `${index + 1}. ${question.question}`).join('\n')}`,
            url: 'https://your-quiz-link.com',  // Здесь можно добавить ссылку на викторину
        };

        Share.open(shareOptions)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <ScrollView style={{
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
            zIndex: 2
        }}>
            <Text style={{
                color: '#fff',
                fontSize: 18,
                fontFamily: 'Montserrat',
                marginBottom: 18,
                alignSelf: 'flex-start',
            }}>
                Mini-Quizzes:
            </Text>

            {quizzes.map((quiz, index) => (
                <View key={index} style={{
                    width: '100%',
                    marginBottom: 12,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 26,
                    borderWidth: 1,
                    borderColor: '#353535',
                    borderRadius: 16,
                    backgroundColor: '#0C0C0C'
                }}>
                    <Text style={{
                        color: '#CCA65A',
                        fontSize: 32,
                        fontFamily: 'Iceland-Regular',
                        width: '80%',
                        alignSelf: 'flex-start',
                        marginBottom: 16
                    }}>
                        {quiz.title}
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <ButtonGold
                            text='Try Now'
                            onPress={() => navigation.navigate('Questions', { quiz })}
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
                                alignItems: 'center'
                            }}
                            onPress={() => handleShareQuiz(quiz)}  // Добавляем обработчик для кнопки Share
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

export default FifthScreen;

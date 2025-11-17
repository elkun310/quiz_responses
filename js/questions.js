// Quiz Questions Database
// 51 Multiple Choice Questions + 9 Essay Questions

const QUESTIONS_DATABASE = {
    mcqs: [
        {
            id: 'mcq-1',
            type: 'mcq',
            text: 'What is the capital of France?',
            options: ['London', 'Berlin', 'Paris', 'Madrid'],
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-2',
            type: 'mcq',
            text: 'Which planet is known as the Red Planet?',
            options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-3',
            type: 'mcq',
            text: 'What is the largest ocean on Earth?',
            options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
            correctAnswer: 3,
            score: 1
        },
        {
            id: 'mcq-4',
            type: 'mcq',
            text: 'Who wrote "Romeo and Juliet"?',
            options: ['Jane Austen', 'William Shakespeare', 'Charles Dickens', 'Mark Twain'],
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-5',
            type: 'mcq',
            text: 'What is the chemical symbol for Gold?',
            options: ['Go', 'Gd', 'Au', 'Ag'],
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-6',
            type: 'mcq',
            text: 'In what year did the Titanic sink?',
            options: ['1912', '1915', '1920', '1905'],
            correctAnswer: 0,
            score: 1
        },
        {
            id: 'mcq-7',
            type: 'mcq',
            text: 'What is the smallest prime number?',
            options: ['0', '1', '2', '3'],
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-8',
            type: 'mcq',
            text: 'Which country is home to the Great Wall?',
            options: ['Japan', 'China', 'Korea', 'Vietnam'],
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-9',
            type: 'mcq',
            text: 'What is the capital of Japan?',
            options: ['Osaka', 'Kyoto', 'Tokyo', 'Hiroshima'],
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-10',
            type: 'mcq',
            text: 'How many sides does a hexagon have?',
            options: ['5', '6', '7', '8'],
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-11',
            type: 'mcq',
            text: 'What is the largest mammal in the world?',
            options: ['African Elephant', 'Giraffe', 'Blue Whale', 'Hippopotamus'],
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-12',
            type: 'mcq',
            text: 'Which gas do plants absorb from the atmosphere?',
            options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-13',
            type: 'mcq',
            text: 'What is the speed of light?',
            options: ['300,000 km/s', '150,000 km/s', '450,000 km/s', '600,000 km/s'],
            correctAnswer: 0,
            score: 1
        },
        {
            id: 'mcq-14',
            type: 'mcq',
            text: 'Who painted the Mona Lisa?',
            options: ['Michelangelo', 'Leonardo da Vinci', 'Raphael', 'Donatello'],
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-15',
            type: 'mcq',
            text: 'What is the capital of Australia?',
            options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-16',
            type: 'mcq',
            text: 'How many continents are there?',
            options: ['5', '6', '7', '8'],
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-17',
            type: 'mcq',
            text: 'What is the boiling point of water?',
            options: ['90°C', '100°C', '110°C', '120°C'],
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-18',
            type: 'mcq',
            text: 'Which element has the atomic number 1?',
            options: ['Helium', 'Hydrogen', 'Lithium', 'Beryllium'],
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-19',
            type: 'mcq',
            text: 'What is the largest country by area?',
            options: ['Canada', 'China', 'Russia', 'United States'],
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-20',
            type: 'mcq',
            text: 'How many strings does a violin have?',
            options: ['3', '4', '5', '6'],
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-21',
            type: 'mcq',
            text: 'What is the capital of Brazil?',
            options: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'],
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-22',
            type: 'mcq',
            text: 'Which planet is closest to the Sun?',
            options: ['Venus', 'Mercury', 'Earth', 'Mars'],
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-23',
            type: 'mcq',
            text: 'What is the currency of the United Kingdom?',
            options: ['Euro', 'Pound Sterling', 'Dollar', 'Franc'],
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-24',
            type: 'mcq',
            text: 'How many bones are in the human body?',
            options: ['186', '206', '226', '246'],
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-25',
            type: 'mcq',
            text: 'What is the capital of Canada?',
            options: ['Toronto', 'Vancouver', 'Ottawa', 'Montreal'],
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-26',
            type: 'mcq',
            text: 'Which country has the most population?',
            options: ['India', 'China', 'United States', 'Indonesia'],
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-27',
            type: 'mcq',
            text: 'What is the smallest country in the world?',
            options: ['Monaco', 'Liechtenstein', 'Vatican City', 'San Marino'],
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-28',
            type: 'mcq',
            text: 'How many minutes are in a full week?',
            options: ['7,200', '10,080', '14,400', '20,160'],
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-29',
            type: 'mcq',
            text: 'What is the capital of Egypt?',
            options: ['Alexandria', 'Cairo', 'Giza', 'Luxor'],
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-30',
            type: 'mcq',
            text: 'Which metal is liquid at room temperature?',
            options: ['Gold', 'Silver', 'Mercury', 'Copper'],
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-31',
            type: 'mcq',
            text: 'What is the capital of India?',
            options: ['Mumbai', 'New Delhi', 'Bangalore', 'Kolkata'],
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-32',
            type: 'mcq',
            text: 'How many sides does a triangle have?',
            options: ['2', '3', '4', '5'],
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-33',
            type: 'mcq',
            text: 'What is the capital of Germany?',
            options: ['Munich', 'Hamburg', 'Berlin', 'Frankfurt'],
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-34',
            type: 'mcq',
            text: 'Which ocean is the deepest?',
            options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
            correctAnswer: 3,
            score: 1
        },
        {
            id: 'mcq-35',
            type: 'mcq',
            text: 'What is the capital of Spain?',
            options: ['Barcelona', 'Valencia', 'Madrid', 'Seville'],
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-36',
            type: 'mcq',
            text: 'How many legs does an octopus have?',
            options: ['6', '8', '10', '12'],
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-37',
            type: 'mcq',
            text: 'What is the capital of Italy?',
            options: ['Milan', 'Venice', 'Rome', 'Florence'],
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-38',
            type: 'mcq',
            text: 'Which planet has the most moons?',
            options: ['Saturn', 'Jupiter', 'Uranus', 'Neptune'],
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-39',
            type: 'mcq',
            text: 'What is the capital of Greece?',
            options: ['Thessaloniki', 'Patras', 'Athens', 'Heraklion'],
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-40',
            type: 'mcq',
            text: 'How many chambers does a human heart have?',
            options: ['2', '3', '4', '5'],
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-41',
            type: 'mcq',
            text: 'What is the capital of Mexico?',
            options: ['Cancun', 'Guadalajara', 'Mexico City', 'Monterrey'],
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-42',
            type: 'mcq',
            text: 'Which gas makes up most of the atmosphere?',
            options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Argon'],
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-43',
            type: 'mcq',
            text: 'What is the capital of South Korea?',
            options: ['Busan', 'Incheon', 'Seoul', 'Daegu'],
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-44',
            type: 'mcq',
            text: 'How many teeth does an adult human have?',
            options: ['28', '30', '32', '34'],
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-45',
            type: 'mcq',
            text: 'What is the capital of Thailand?',
            options: ['Phuket', 'Chiang Mai', 'Bangkok', 'Pattaya'],
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-46',
            type: 'mcq',
            text: 'Which country is known as the Land of the Rising Sun?',
            options: ['China', 'Korea', 'Japan', 'Vietnam'],
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-47',
            type: 'mcq',
            text: 'What is the capital of Turkey?',
            options: ['Istanbul', 'Izmir', 'Ankara', 'Bursa'],
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-48',
            type: 'mcq',
            text: 'How many years are in a decade?',
            options: ['5', '10', '15', '20'],
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-49',
            type: 'mcq',
            text: 'What is the capital of Sweden?',
            options: ['Gothenburg', 'Malmö', 'Stockholm', 'Uppsala'],
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-50',
            type: 'mcq',
            text: 'Which animal is the fastest land animal?',
            options: ['Lion', 'Gazelle', 'Cheetah', 'Antelope'],
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-51',
            type: 'mcq',
            text: 'What is the capital of Norway?',
            options: ['Bergen', 'Stavanger', 'Oslo', 'Trondheim'],
            correctAnswer: 2,
            score: 1
        }
    ],
    essays: [
        {
            id: 'essay-1',
            type: 'essay',
            text: 'Explain the process of photosynthesis and its importance to life on Earth.',
            score: 5
        },
        {
            id: 'essay-2',
            type: 'essay',
            text: 'Describe the causes and effects of climate change on global ecosystems.',
            score: 5
        },
        {
            id: 'essay-3',
            type: 'essay',
            text: 'Discuss the impact of the Industrial Revolution on modern society.',
            score: 5
        },
        {
            id: 'essay-4',
            type: 'essay',
            text: 'Explain the theory of evolution and provide examples of natural selection.',
            score: 5
        },
        {
            id: 'essay-5',
            type: 'essay',
            text: 'Analyze the role of technology in transforming communication and social interaction.',
            score: 5
        },
        {
            id: 'essay-6',
            type: 'essay',
            text: 'Discuss the importance of renewable energy sources and their potential benefits.',
            score: 5
        },
        {
            id: 'essay-7',
            type: 'essay',
            text: 'Explain the concept of supply and demand in economics and provide real-world examples.',
            score: 5
        },
        {
            id: 'essay-8',
            type: 'essay',
            text: 'Analyze the significance of the Renaissance period in European history.',
            score: 5
        },
        {
            id: 'essay-9',
            type: 'essay',
            text: 'Discuss the ethical implications of artificial intelligence and machine learning.',
            score: 5
        }
    ]
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QUESTIONS_DATABASE;
}

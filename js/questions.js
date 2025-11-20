// Quiz Questions Database
// 51 Multiple Choice Questions + 9 Essay Questions
// Supports multiple languages: English (en) and Japanese (ja)

const QUESTIONS_DATABASE = {
    mcqs: [
        {
            id: 'mcq-1',
            type: 'mcq',
            text: {
                en: 'What is the capital of France?',
                ja: 'フランスの首都はどこですか？'
            },
            options: {
                en: ['London', 'Berlin', 'Paris', 'Madrid'],
                ja: ['ロンドン', 'ベルリン', 'パリ', 'マドリード']
            },
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-2',
            type: 'mcq',
            text: {
                en: 'Which planet is known as the Red Planet?',
                ja: '赤い惑星として知られているのはどの惑星ですか？'
            },
            options: {
                en: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
                ja: ['金星', '火星', '木星', '土星']
            },
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-3',
            type: 'mcq',
            text: {
                en: 'What is the largest ocean on Earth?',
                ja: '地球上で最も大きな海洋はどれですか？'
            },
            options: {
                en: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
                ja: ['大西洋', 'インド洋', '北極海', '太平洋']
            },
            correctAnswer: 3,
            score: 1
        },
        {
            id: 'mcq-4',
            type: 'mcq',
            text: {
                en: 'Who wrote "Romeo and Juliet"?',
                ja: '「ロミオとジュリエット」を書いたのは誰ですか？'
            },
            options: {
                en: ['Jane Austen', 'William Shakespeare', 'Charles Dickens', 'Mark Twain'],
                ja: ['ジェーン・オースティン', 'ウィリアム・シェイクスピア', 'チャールズ・ディケンズ', 'マーク・トウェイン']
            },
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-5',
            type: 'mcq',
            text: {
                en: 'What is the chemical symbol for Gold?',
                ja: '金の化学記号は何ですか？'
            },
            options: {
                en: ['Go', 'Gd', 'Au', 'Ag'],
                ja: ['Go', 'Gd', 'Au', 'Ag']
            },
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-6',
            type: 'mcq',
            text: {
                en: 'In what year did the Titanic sink?',
                ja: 'タイタニック号が沈没したのは何年ですか？'
            },
            options: {
                en: ['1912', '1915', '1920', '1905'],
                ja: ['1912年', '1915年', '1920年', '1905年']
            },
            correctAnswer: 0,
            score: 1
        },
        {
            id: 'mcq-7',
            type: 'mcq',
            text: {
                en: 'What is the smallest prime number?',
                ja: '最小の素数は何ですか？'
            },
            options: {
                en: ['0', '1', '2', '3'],
                ja: ['0', '1', '2', '3']
            },
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-8',
            type: 'mcq',
            text: {
                en: 'Which country is home to the Great Wall?',
                ja: '万里の長城がある国はどこですか？'
            },
            options: {
                en: ['Japan', 'China', 'Korea', 'Vietnam'],
                ja: ['日本', '中国', '韓国', 'ベトナム']
            },
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-9',
            type: 'mcq',
            text: {
                en: 'What is the capital of Japan?',
                ja: '日本の首都はどこですか？'
            },
            options: {
                en: ['Osaka', 'Kyoto', 'Tokyo', 'Hiroshima'],
                ja: ['大阪', '京都', '東京', '広島']
            },
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-10',
            type: 'mcq',
            text: {
                en: 'How many sides does a hexagon have?',
                ja: '六角形には何本の辺がありますか？'
            },
            options: {
                en: ['5', '6', '7', '8'],
                ja: ['5本', '6本', '7本', '8本']
            },
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-11',
            type: 'mcq',
            text: {
                en: 'What is the largest mammal in the world?',
                ja: '世界最大の哺乳類は何ですか？'
            },
            options: {
                en: ['African Elephant', 'Giraffe', 'Blue Whale', 'Hippopotamus'],
                ja: ['アフリカゾウ', 'キリン', 'シロナガスクジラ', 'カバ']
            },
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-12',
            type: 'mcq',
            text: {
                en: 'Which gas do plants absorb from the atmosphere?',
                ja: '植物が大気から吸収するガスは何ですか？'
            },
            options: {
                en: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
                ja: ['酸素', '窒素', '二酸化炭素', '水素']
            },
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-13',
            type: 'mcq',
            text: {
                en: 'What is the speed of light?',
                ja: '光の速度はどれくらいですか？'
            },
            options: {
                en: ['300,000 km/s', '150,000 km/s', '450,000 km/s', '600,000 km/s'],
                ja: ['300,000 km/秒', '150,000 km/秒', '450,000 km/秒', '600,000 km/秒']
            },
            correctAnswer: 0,
            score: 1
        },
        {
            id: 'mcq-14',
            type: 'mcq',
            text: {
                en: 'Who painted the Mona Lisa?',
                ja: 'モナリザを描いたのは誰ですか？'
            },
            options: {
                en: ['Michelangelo', 'Leonardo da Vinci', 'Raphael', 'Donatello'],
                ja: ['ミケランジェロ', 'レオナルド・ダ・ヴィンチ', 'ラファエロ', 'ドナテッロ']
            },
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-15',
            type: 'mcq',
            text: {
                en: 'What is the capital of Australia?',
                ja: 'オーストラリアの首都はどこですか？'
            },
            options: {
                en: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
                ja: ['シドニー', 'メルボルン', 'キャンベラ', 'ブリスベン']
            },
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-16',
            type: 'mcq',
            text: {
                en: 'How many continents are there?',
                ja: '大陸はいくつありますか？'
            },
            options: {
                en: ['5', '6', '7', '8'],
                ja: ['5つ', '6つ', '7つ', '8つ']
            },
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-17',
            type: 'mcq',
            text: {
                en: 'What is the boiling point of water?',
                ja: '水の沸点は何度ですか？'
            },
            options: {
                en: ['90°C', '100°C', '110°C', '120°C'],
                ja: ['90°C', '100°C', '110°C', '120°C']
            },
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-18',
            type: 'mcq',
            text: {
                en: 'Which element has the atomic number 1?',
                ja: '原子番号1の元素は何ですか？'
            },
            options: {
                en: ['Helium', 'Hydrogen', 'Lithium', 'Beryllium'],
                ja: ['ヘリウム', '水素', 'リチウム', 'ベリリウム']
            },
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-19',
            type: 'mcq',
            text: {
                en: 'What is the largest country by area?',
                ja: '面積が最も大きい国はどこですか？'
            },
            options: {
                en: ['Canada', 'China', 'Russia', 'United States'],
                ja: ['カナダ', '中国', 'ロシア', 'アメリカ']
            },
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-20',
            type: 'mcq',
            text: {
                en: 'How many strings does a violin have?',
                ja: 'バイオリンには何本の弦がありますか？'
            },
            options: {
                en: ['3', '4', '5', '6'],
                ja: ['3本', '4本', '5本', '6本']
            },
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-21',
            type: 'mcq',
            text: {
                en: 'What is the capital of Brazil?',
                ja: 'ブラジルの首都はどこですか？'
            },
            options: {
                en: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'],
                ja: ['リオデジャネイロ', 'サンパウロ', 'ブラジリア', 'サルバドール']
            },
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-22',
            type: 'mcq',
            text: {
                en: 'Which planet is closest to the Sun?',
                ja: '太陽に最も近い惑星はどれですか？'
            },
            options: {
                en: ['Venus', 'Mercury', 'Earth', 'Mars'],
                ja: ['金星', '水星', '地球', '火星']
            },
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-23',
            type: 'mcq',
            text: {
                en: 'What is the currency of the United Kingdom?',
                ja: 'イギリスの通貨は何ですか？'
            },
            options: {
                en: ['Euro', 'Pound Sterling', 'Dollar', 'Franc'],
                ja: ['ユーロ', 'ポンド', 'ドル', 'フラン']
            },
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-24',
            type: 'mcq',
            text: {
                en: 'How many bones are in the human body?',
                ja: '人体には何本の骨がありますか？'
            },
            options: {
                en: ['186', '206', '226', '246'],
                ja: ['186本', '206本', '226本', '246本']
            },
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-25',
            type: 'mcq',
            text: {
                en: 'What is the capital of Canada?',
                ja: 'カナダの首都はどこですか？'
            },
            options: {
                en: ['Toronto', 'Vancouver', 'Ottawa', 'Montreal'],
                ja: ['トロント', 'バンクーバー', 'オタワ', 'モントリオール']
            },
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-26',
            type: 'mcq',
            text: {
                en: 'Which country has the most population?',
                ja: '人口が最も多い国はどこですか？'
            },
            options: {
                en: ['India', 'China', 'United States', 'Indonesia'],
                ja: ['インド', '中国', 'アメリカ', 'インドネシア']
            },
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-27',
            type: 'mcq',
            text: {
                en: 'What is the smallest country in the world?',
                ja: '世界で最も小さい国はどこですか？'
            },
            options: {
                en: ['Monaco', 'Liechtenstein', 'Vatican City', 'San Marino'],
                ja: ['モナコ', 'リヒテンシュタイン', 'バチカン市国', 'サンマリノ']
            },
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-28',
            type: 'mcq',
            text: {
                en: 'How many minutes are in a full week?',
                ja: '1週間は何分ですか？'
            },
            options: {
                en: ['7,200', '10,080', '14,400', '20,160'],
                ja: ['7,200分', '10,080分', '14,400分', '20,160分']
            },
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-29',
            type: 'mcq',
            text: {
                en: 'What is the capital of Egypt?',
                ja: 'エジプトの首都はどこですか？'
            },
            options: {
                en: ['Alexandria', 'Cairo', 'Giza', 'Luxor'],
                ja: ['アレクサンドリア', 'カイロ', 'ギザ', 'ルクソール']
            },
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-30',
            type: 'mcq',
            text: {
                en: 'Which metal is liquid at room temperature?',
                ja: '室温で液体の金属はどれですか？'
            },
            options: {
                en: ['Gold', 'Silver', 'Mercury', 'Copper'],
                ja: ['金', '銀', '水銀', '銅']
            },
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-31',
            type: 'mcq',
            text: {
                en: 'What is the capital of India?',
                ja: 'インドの首都はどこですか？'
            },
            options: {
                en: ['Mumbai', 'New Delhi', 'Bangalore', 'Kolkata'],
                ja: ['ムンバイ', 'ニューデリー', 'バンガロール', 'コルカタ']
            },
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-32',
            type: 'mcq',
            text: {
                en: 'How many sides does a triangle have?',
                ja: '三角形には何本の辺がありますか？'
            },
            options: {
                en: ['2', '3', '4', '5'],
                ja: ['2本', '3本', '4本', '5本']
            },
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-33',
            type: 'mcq',
            text: {
                en: 'What is the capital of Germany?',
                ja: 'ドイツの首都はどこですか？'
            },
            options: {
                en: ['Munich', 'Hamburg', 'Berlin', 'Frankfurt'],
                ja: ['ミュンヘン', 'ハンブルク', 'ベルリン', 'フランクフルト']
            },
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-34',
            type: 'mcq',
            text: {
                en: 'Which ocean is the deepest?',
                ja: '最も深い海洋はどれですか？'
            },
            options: {
                en: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
                ja: ['大西洋', 'インド洋', '北極海', '太平洋']
            },
            correctAnswer: 3,
            score: 1
        },
        {
            id: 'mcq-35',
            type: 'mcq',
            text: {
                en: 'What is the capital of Spain?',
                ja: 'スペインの首都はどこですか？'
            },
            options: {
                en: ['Barcelona', 'Valencia', 'Madrid', 'Seville'],
                ja: ['バルセロナ', 'バレンシア', 'マドリード', 'セビリア']
            },
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-36',
            type: 'mcq',
            text: {
                en: 'How many legs does an octopus have?',
                ja: 'タコには何本の足がありますか？'
            },
            options: {
                en: ['6', '8', '10', '12'],
                ja: ['6本', '8本', '10本', '12本']
            },
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-37',
            type: 'mcq',
            text: {
                en: 'What is the capital of Italy?',
                ja: 'イタリアの首都はどこですか？'
            },
            options: {
                en: ['Milan', 'Venice', 'Rome', 'Florence'],
                ja: ['ミラノ', 'ヴェネツィア', 'ローマ', 'フィレンツェ']
            },
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-38',
            type: 'mcq',
            text: {
                en: 'Which planet has the most moons?',
                ja: '最も多くの衛星を持つ惑星はどれですか？'
            },
            options: {
                en: ['Saturn', 'Jupiter', 'Uranus', 'Neptune'],
                ja: ['土星', '木星', '天王星', '海王星']
            },
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-39',
            type: 'mcq',
            text: {
                en: 'What is the capital of Greece?',
                ja: 'ギリシャの首都はどこですか？'
            },
            options: {
                en: ['Thessaloniki', 'Patras', 'Athens', 'Heraklion'],
                ja: ['テッサロニキ', 'パトラス', 'アテネ', 'イラクリオン']
            },
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-40',
            type: 'mcq',
            text: {
                en: 'How many chambers does a human heart have?',
                ja: '人間の心臓には何個の部屋がありますか？'
            },
            options: {
                en: ['2', '3', '4', '5'],
                ja: ['2個', '3個', '4個', '5個']
            },
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-41',
            type: 'mcq',
            text: {
                en: 'What is the capital of Mexico?',
                ja: 'メキシコの首都はどこですか？'
            },
            options: {
                en: ['Cancun', 'Guadalajara', 'Mexico City', 'Monterrey'],
                ja: ['カンクン', 'グアダラハラ', 'メキシコシティ', 'モンテレイ']
            },
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-42',
            type: 'mcq',
            text: {
                en: 'Which gas makes up most of the atmosphere?',
                ja: '大気の大部分を占めるガスは何ですか？'
            },
            options: {
                en: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Argon'],
                ja: ['酸素', '窒素', '二酸化炭素', 'アルゴン']
            },
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-43',
            type: 'mcq',
            text: {
                en: 'What is the capital of South Korea?',
                ja: '韓国の首都はどこですか？'
            },
            options: {
                en: ['Busan', 'Incheon', 'Seoul', 'Daegu'],
                ja: ['釜山', '仁川', 'ソウル', '大邱']
            },
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-44',
            type: 'mcq',
            text: {
                en: 'How many teeth does an adult human have?',
                ja: '成人の人間には何本の歯がありますか？'
            },
            options: {
                en: ['28', '30', '32', '34'],
                ja: ['28本', '30本', '32本', '34本']
            },
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-45',
            type: 'mcq',
            text: {
                en: 'What is the capital of Thailand?',
                ja: 'タイの首都はどこですか？'
            },
            options: {
                en: ['Phuket', 'Chiang Mai', 'Bangkok', 'Pattaya'],
                ja: ['プーケット', 'チェンマイ', 'バンコク', 'パタヤ']
            },
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-46',
            type: 'mcq',
            text: {
                en: 'Which country is known as the Land of the Rising Sun?',
                ja: '日出ずる国として知られているのはどこですか？'
            },
            options: {
                en: ['China', 'Korea', 'Japan', 'Vietnam'],
                ja: ['中国', '韓国', '日本', 'ベトナム']
            },
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-47',
            type: 'mcq',
            text: {
                en: 'What is the capital of Turkey?',
                ja: 'トルコの首都はどこですか？'
            },
            options: {
                en: ['Istanbul', 'Izmir', 'Ankara', 'Bursa'],
                ja: ['イスタンブール', 'イズミル', 'アンカラ', 'ブルサ']
            },
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-48',
            type: 'mcq',
            text: {
                en: 'How many years are in a decade?',
                ja: '10年間は何年ですか？'
            },
            options: {
                en: ['5', '10', '15', '20'],
                ja: ['5年', '10年', '15年', '20年']
            },
            correctAnswer: 1,
            score: 1
        },
        {
            id: 'mcq-49',
            type: 'mcq',
            text: {
                en: 'What is the capital of Sweden?',
                ja: 'スウェーデンの首都はどこですか？'
            },
            options: {
                en: ['Gothenburg', 'Malmö', 'Stockholm', 'Uppsala'],
                ja: ['ヨーテボリ', 'マルメ', 'ストックホルム', 'ウプサラ']
            },
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-50',
            type: 'mcq',
            text: {
                en: 'Which animal is the fastest land animal?',
                ja: '最も速い陸上動物はどれですか？'
            },
            options: {
                en: ['Lion', 'Gazelle', 'Cheetah', 'Antelope'],
                ja: ['ライオン', 'ガゼル', 'チーター', 'アンテロープ']
            },
            correctAnswer: 2,
            score: 1
        },
        {
            id: 'mcq-51',
            type: 'mcq',
            text: {
                en: 'What is the capital of Norway?',
                ja: 'ノルウェーの首都はどこですか？'
            },
            options: {
                en: ['Bergen', 'Stavanger', 'Oslo', 'Trondheim'],
                ja: ['ベルゲン', 'スタヴァンゲル', 'オスロ', 'トロンハイム']
            },
            correctAnswer: 2,
            score: 1
        }
    ],
    essays: [
        {
            id: 'essay-1',
            type: 'essay',
            text: {
                en: 'Explain the process of photosynthesis and its importance to life on Earth.',
                ja: '光合成のプロセスと地球上の生命にとっての重要性を説明してください。'
            },
            score: 5
        },
        {
            id: 'essay-2',
            type: 'essay',
            text: {
                en: 'Describe the causes and effects of climate change on global ecosystems.',
                ja: '気候変動の原因と地球規模の生態系への影響について説明してください。'
            },
            score: 5
        },
        {
            id: 'essay-3',
            type: 'essay',
            text: {
                en: 'Discuss the impact of the Industrial Revolution on modern society.',
                ja: '産業革命が現代社会に与えた影響について論じてください。'
            },
            score: 5
        },
        {
            id: 'essay-4',
            type: 'essay',
            text: {
                en: 'Explain the theory of evolution and provide examples of natural selection.',
                ja: '進化論を説明し、自然選択の例を挙げてください。'
            },
            score: 5
        },
        {
            id: 'essay-5',
            type: 'essay',
            text: {
                en: 'Analyze the role of technology in transforming communication and social interaction.',
                ja: 'コミュニケーションと社会的交流を変革する技術の役割を分析してください。'
            },
            score: 5
        },
        {
            id: 'essay-6',
            type: 'essay',
            text: {
                en: 'Discuss the importance of renewable energy sources and their potential benefits.',
                ja: '再生可能エネルギー源の重要性とその潜在的な利点について論じてください。'
            },
            score: 5
        },
        {
            id: 'essay-7',
            type: 'essay',
            text: {
                en: 'Explain the concept of supply and demand in economics and provide real-world examples.',
                ja: '経済学における需要と供給の概念を説明し、実例を挙げてください。'
            },
            score: 5
        },
        {
            id: 'essay-8',
            type: 'essay',
            text: {
                en: 'Analyze the significance of the Renaissance period in European history.',
                ja: 'ヨーロッパ史におけるルネサンス期の重要性を分析してください。'
            },
            score: 5
        },
        {
            id: 'essay-9',
            type: 'essay',
            text: {
                en: 'Discuss the ethical implications of artificial intelligence and machine learning.',
                ja: '人工知能と機械学習の倫理的な影響について論じてください。'
            },
            score: 5
        }
    ]
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QUESTIONS_DATABASE;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  year: number;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập vào ngày nào?',
    options: [
      '15 tháng 8 năm 1945',
      '2 tháng 9 năm 1945',
      '19 tháng 12 năm 1946',
      '7 tháng 5 năm 1954'
    ],
    correctAnswer: 1,
    explanation: 'Chủ tịch Hồ Chí Minh đã đọc Tuyên ngôn Độc lập vào ngày 2 tháng 9 năm 1945 tại Quảng trường Ba Đình, Hà Nội.',
    year: 1945
  },
  {
    id: 'q2',
    question: 'Trận chiến quyết định nào đã kết thúc ách thống trị của thực dân Pháp tại Việt Nam?',
    options: [
      'Trận Hà Nội',
      'Trận Sài Gòn',
      'Trận Điện Biên Phủ',
      'Trận Huế'
    ],
    correctAnswer: 2,
    explanation: 'Chiến thắng Điện Biên Phủ (tháng 5/1954) là chiến thắng vĩ đại của quân đội Việt Nam, kết thúc ách thống trị của thực dân Pháp.',
    year: 1954
  },
  {
    id: 'q3',
    question: 'Hiệp định Genève năm 1954 đã tạm thời chia cắt Việt Nam tại vĩ tuyến nào?',
    options: [
      'Vĩ tuyến 15',
      'Vĩ tuyến 16',
      'Vĩ tuyến 17',
      'Vĩ tuyến 18'
    ],
    correctAnswer: 2,
    explanation: 'Hiệp định Genève đã tạm thời chia cắt Việt Nam tại vĩ tuyến 17, tạo ra miền Bắc và miền Nam.',
    year: 1954
  },
  {
    id: 'q4',
    question: 'Đảng Lao động Việt Nam được thành lập vào năm nào?',
    options: [
      'Năm 1945',
      'Năm 1950',
      'Năm 1951',
      'Năm 1954'
    ],
    correctAnswer: 2,
    explanation: 'Đảng Lao động Việt Nam được thành lập vào tháng 2/1951, kế thừa Đảng Cộng sản Đông Dương.',
    year: 1951
  },
  {
    id: 'q5',
    question: 'Mặt trận Dân tộc Giải phóng miền Nam Việt Nam được thành lập vào thời gian nào?',
    options: [
      'Tháng 12/1958',
      'Tháng 12/1959',
      'Tháng 12/1960',
      'Tháng 12/1961'
    ],
    correctAnswer: 2,
    explanation: 'Mặt trận Dân tộc Giải phóng miền Nam Việt Nam được thành lập vào tháng 12/1960 để chống chính quyền Ngô Đình Diệm.',
    year: 1960
  },
  {
    id: 'q6',
    question: 'Cuộc tổng tiến công lớn được phát động trong dịp Tết năm 1968 có tên gọi là gì?',
    options: [
      'Tổng tiến công Xuân',
      'Tổng tiến công Tết Mậu Thân',
      'Tổng tiến công Xuân - Hè',
      'Tổng tiến công Cuối cùng'
    ],
    correctAnswer: 1,
    explanation: 'Tổng tiến công và nổi dậy Tết Mậu Thân (tháng 1/1968) là cuộc tổng tiến công lớn trên khắp miền Nam.',
    year: 1968
  },
  {
    id: 'q7',
    question: 'Chủ tịch Hồ Chí Minh qua đời vào ngày nào?',
    options: [
      '2 tháng 9 năm 1968',
      '2 tháng 9 năm 1969',
      '2 tháng 9 năm 1970',
      '2 tháng 9 năm 1971'
    ],
    correctAnswer: 1,
    explanation: 'Chủ tịch Hồ Chí Minh qua đời vào ngày 2 tháng 9 năm 1969, đúng 24 năm sau ngày tuyên bố độc lập.',
    year: 1969
  },
  {
    id: 'q8',
    question: 'Chiến thắng "Điện Biên Phủ trên không" diễn ra vào thời gian nào?',
    options: [
      'Tháng 12/1971',
      'Tháng 12/1972',
      'Tháng 12/1973',
      'Tháng 12/1974'
    ],
    correctAnswer: 1,
    explanation: 'Chiến thắng "Điện Biên Phủ trên không" diễn ra vào tháng 12/1972 khi quân dân Hà Nội bắn rơi hàng chục máy bay B-52 của Mỹ.',
    year: 1972
  },
  {
    id: 'q9',
    question: 'Hiệp định Paris được ký kết vào năm nào?',
    options: [
      'Năm 1971',
      'Năm 1972',
      'Năm 1973',
      'Năm 1974'
    ],
    correctAnswer: 2,
    explanation: 'Hiệp định Paris được ký kết vào tháng 1/1973, dẫn đến việc rút quân đội Mỹ khỏi Việt Nam.',
    year: 1973
  },
  {
    id: 'q10',
    question: 'Miền Nam được giải phóng hoàn toàn vào ngày nào?',
    options: [
      '30 tháng 4 năm 1974',
      '30 tháng 4 năm 1975',
      '1 tháng 5 năm 1975',
      '15 tháng 4 năm 1975'
    ],
    correctAnswer: 1,
    explanation: 'Miền Nam được giải phóng hoàn toàn vào ngày 30 tháng 4 năm 1975, kết thúc chiến tranh và thống nhất đất nước.',
    year: 1975
  },
  {
    id: 'q11',
    question: 'Đoàn 559 được thành lập với mục đích gì?',
    options: [
      'Bảo vệ biên giới',
      'Mở đường Hồ Chí Minh',
      'Huấn luyện quân đội',
      'Tổ chức tình báo'
    ],
    correctAnswer: 1,
    explanation: 'Đoàn 559 được thành lập vào tháng 5/1959 để mở và phát triển đường Hồ Chí Minh, vận chuyển vũ khí và lương thực vào Nam.',
    year: 1959
  },
  {
    id: 'q12',
    question: 'Sự kiện nào đánh dấu sự ra đời của Quân đội nhân dân Việt Nam?',
    options: [
      'Thành lập Việt Minh',
      'Thành lập Việt Nam Tuyên truyền Giải phóng quân',
      'Cách mạng Tháng Tám',
      'Kháng chiến chống Pháp'
    ],
    correctAnswer: 1,
    explanation: 'Việt Nam Tuyên truyền Giải phóng quân được thành lập ngày 22/12/1944, đánh dấu sự ra đời của Quân đội nhân dân Việt Nam.',
    year: 1945
  },
  {
    id: 'q13',
    question: 'Đại hội Đảng toàn quốc lần thứ III họp vào năm nào?',
    options: [
      'Năm 1958',
      'Năm 1959',
      'Năm 1960',
      'Năm 1961'
    ],
    correctAnswer: 2,
    explanation: 'Đại hội Đảng toàn quốc lần thứ III họp vào tháng 9/1960, quyết định đường lối cách mạng miền Nam.',
    year: 1960
  },
  {
    id: 'q14',
    question: 'Thủ đô Hà Nội được giải phóng hoàn toàn vào năm nào?',
    options: [
      'Năm 1953',
      'Năm 1954',
      'Năm 1955',
      'Năm 1956'
    ],
    correctAnswer: 1,
    explanation: 'Thủ đô Hà Nội được giải phóng hoàn toàn vào tháng 10/1954, sau 9 năm kháng chiến chống Pháp.',
    year: 1954
  },
  {
    id: 'q15',
    question: 'Chiến dịch nào mở đầu cho Tổng tiến công Xuân 1975?',
    options: [
      'Chiến dịch Hồ Chí Minh',
      'Chiến dịch Tây Nguyên',
      'Chiến dịch Huế - Đà Nẵng',
      'Chiến dịch Sài Gòn'
    ],
    correctAnswer: 1,
    explanation: 'Chiến dịch Tây Nguyên (tháng 3/1975) với trận đánh Buôn Ma Thuột mở đầu cho Tổng tiến công Xuân 1975.',
    year: 1975
  }
];

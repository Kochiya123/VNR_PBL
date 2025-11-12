export interface HistoricalEvent {
  id: string;
  year: number;
  month: number;
  title: string;
  description: string;
  // Optional category to differentiate marker type on the map
  // Examples: 'party' (Vietnam Communist), 'war', 'diplomacy', 'culture', 'other'
  category?: 'party' | 'war' | 'diplomacy' | 'culture' | 'other';
  // Optional visual placeholder to replace the default marker icon
  // image: use placeholderValue as image URL
  // emoji: use placeholderValue as emoji string (e.g., "⭐", "🔥")
  // text: use placeholderValue as short text/initials
  placeholderType?: 'image' | 'emoji' | 'text';
  placeholderValue?: string;
  // Optional CSS class to animate marker later (e.g., 'animate-bounce')
  animationClass?: string;
  location: {
    name: string;
    lat: number;
    lng: number;
  };
  significance: 'critical' | 'major' | 'important';
}

export const historicalEvents: HistoricalEvent[] = [
  {
    id: '1',
    year: 1945,
    month: 2,
    title: 'Thành lập Việt Nam Tuyên truyền Giải phóng quân',
    description: 'Ngày 22/12/1944, đội Việt Nam Tuyên truyền Giải phóng quân được thành lập tại Cao Bằng dưới sự chỉ đạo của Đảng và Bác Hồ, đánh dấu sự ra đời của Quân đội nhân dân Việt Nam.',
    location: { name: 'Cao Bằng', lat: 22.6667, lng: 106.2500 },
    significance: 'critical'
  },
  {
    id: '2',
    year: 1945,
    month: 8,
    title: 'Cách mạng Tháng Tám',
    description: 'Việt Minh, do Hồ Chí Minh lãnh đạo, giành chính quyền tại Hà Nội trong Cách mạng Tháng Tám, đánh dấu sự khởi đầu của nền độc lập Việt Nam.',
    location: { name: 'Hà Nội', lat: 21.0285, lng: 105.8542 },
    significance: 'critical'
  },
  {
    id: '3',
    year: 1945,
    month: 9,
    title: 'Tuyên ngôn Độc lập',
    description: 'Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình, tuyên bố thành lập nước Việt Nam Dân chủ Cộng hòa.',
    location: { name: 'Hà Nội', lat: 21.0285, lng: 105.8542 },
    significance: 'critical'
  },
  {
    id: '4',
    year: 1946,
    month: 3,
    title: 'Hội nghị Đại biểu toàn quốc lần thứ nhất của Đảng',
    description: 'Đại hội họp tại Hà Nội, thảo luận và quyết định đường lối kháng chiến chống thực dân Pháp xâm lược.',
    location: { name: 'Hà Nội', lat: 21.0270, lng: 105.8542 },
    significance: 'major'
  },
  {
    id: '5',
    year: 1946,
    month: 12,
    title: 'Kháng chiến chống Pháp bắt đầu',
    description: 'Cuộc chiến tranh giữa Pháp và Việt Minh bắt đầu, đánh dấu cuộc đấu tranh lâu dài vì độc lập của Việt Nam.',
    location: { name: 'Hà Nội', lat: 21.0270, lng: 105.8530 },
    significance: 'critical'
  },
  {
    id: '6',
    year: 1950,
    month: 1,
    title: 'Việt Nam được quốc tế công nhận',
    description: 'Liên Xô và Trung Quốc công nhận nước Việt Nam Dân chủ Cộng hòa, mở ra giai đoạn mới trong quan hệ quốc tế.',
    location: { name: 'Hà Nội', lat: 21.0285, lng: 105.8542 },
    significance: 'major'
  },
  {
    id: '7',
    year: 1951,
    month: 2,
    title: 'Thành lập Đảng Lao động Việt Nam',
    description: 'Đảng Cộng sản Đông Dương được tổ chức lại thành Đảng Lao động Việt Nam, đánh dấu giai đoạn phát triển mới của Đảng.',
    location: { name: 'Hà Nội', lat: 21.0285, lng: 105.8542 },
    significance: 'critical'
  },
  {
    id: '8',
    year: 1953,
    month: 12,
    title: 'Chiến dịch Điện Biên Phủ bắt đầu',
    description: 'Quân đội nhân dân Việt Nam khởi động chiến dịch lịch sử Điện Biên Phủ dưới sự chỉ huy của Đại tướng Võ Nguyên Giáp.',
    location: { name: 'Điện Biên Phủ', lat: 21.3833, lng: 103.0167 },
    significance: 'major'
  },
  {
    id: '9',
    year: 1954,
    month: 5,
    title: 'Chiến thắng Điện Biên Phủ',
    description: 'Chiến thắng vĩ đại của quân đội Việt Nam trước quân Pháp tại Điện Biên Phủ, kết thúc ách thống trị của thực dân Pháp.',
    location: { name: 'Điện Biên Phủ', lat: 21.3833, lng: 103.0167 },
    significance: 'critical'
  },
  {
    id: '10',
    year: 1954,
    month: 7,
    title: 'Hiệp định Genève',
    description: 'Hội nghị Genève dẫn đến việc tạm thời chia cắt Việt Nam tại vĩ tuyến 17.',
    location: { name: 'Vĩ tuyến 17', lat: 17.0, lng: 107.0 },
    significance: 'critical'
  },
  {
    id: '11',
    year: 1954,
    month: 10,
    title: 'Giải phóng Thủ đô Hà Nội',
    description: 'Quân đội và nhân dân Hà Nội tiếp quản hoàn toàn Thủ đô sau 9 năm kháng chiến chống Pháp.',
    location: { name: 'Hà Nội', lat: 21.0285, lng: 105.8542 },
    significance: 'critical'
  },
  {
    id: '12',
    year: 1959,
    month: 5,
    title: 'Thành lập Đoàn 559',
    description: 'Thành lập Đoàn 559 để mở và phát triển đường Hồ Chí Minh, vận chuyển vũ khí và lương thực vào Nam.',
    location: { name: 'Tây Nguyên', lat: 14.0, lng: 108.0 },
    significance: 'major'
  },
  {
    id: '13',
    year: 1960,
    month: 9,
    title: 'Đại hội Đảng toàn quốc lần thứ III',
    description: 'Đại hội họp tại Hà Nội, quyết định đường lối cách mạng miền Nam, xây dựng chủ nghĩa xã hội ở miền Bắc.',
    location: { name: 'Hà Nội', lat: 21.0285, lng: 105.8542 },
    significance: 'critical'
  },
  {
    id: '14',
    year: 1960,
    month: 12,
    title: 'Thành lập Mặt trận Dân tộc Giải phóng miền Nam',
    description: 'Mặt trận Dân tộc Giải phóng miền Nam Việt Nam được thành lập để chống chính quyền Ngô Đình Diệm.',
    location: { name: 'Miền Nam', lat: 10.8231, lng: 106.6297 },
    significance: 'critical'
  },
  {
    id: '15',
    year: 1964,
    month: 8,
    title: 'Sự kiện Vịnh Bắc Bộ',
    description: 'Vụ việc hải quân dẫn đến sự gia tăng can thiệp quân sự của Mỹ tại Việt Nam.',
    location: { name: 'Vịnh Bắc Bộ', lat: 20.0, lng: 107.5 },
    significance: 'critical'
  },
  {
    id: '16',
    year: 1965,
    month: 2,
    title: 'Mỹ bắt đầu ném bom miền Bắc',
    description: 'Chiến dịch ném bom "Sấm sét lăn" của Mỹ nhằm vào miền Bắc Việt Nam bắt đầu.',
    location: { name: 'Miền Bắc', lat: 21.0285, lng: 105.8542 },
    significance: 'major'
  },
  {
    id: '17',
    year: 1965,
    month: 3,
    title: 'Quân Mỹ đổ bộ lên Đà Nẵng',
    description: 'Lính thủy đánh bộ Mỹ đầu tiên đổ bộ lên Đà Nẵng, đánh dấu sự can thiệp trực tiếp của Mỹ.',
    location: { name: 'Đà Nẵng', lat: 16.0544, lng: 108.2022 },
    significance: 'major'
  },
  {
    id: '18',
    year: 1968,
    month: 1,
    title: 'Tổng tiến công và nổi dậy Tết Mậu Thân',
    description: 'Cuộc tổng tiến công lớn của quân giải phóng và Việt Cộng trên khắp miền Nam trong dịp Tết.',
    location: { name: 'Sài Gòn', lat: 10.8231, lng: 106.6297 },
    significance: 'critical'
  },
  {
    id: '19',
    year: 1969,
    month: 6,
    title: 'Thành lập Chính phủ Cách mạng lâm thời',
    description: 'Chính phủ Cách mạng lâm thời Cộng hòa miền Nam Việt Nam được thành lập.',
    location: { name: 'Miền Nam', lat: 10.8231, lng: 106.6297 },
    significance: 'major'
  },
  {
    id: '20',
    year: 1969,
    month: 9,
    title: 'Chủ tịch Hồ Chí Minh qua đời',
    description: 'Chủ tịch Hồ Chí Minh, người cha già kỉnh yêu của dân tộc, qua đời nhưng sự nghiệp cách mạng tiếp tục.',
    location: { name: 'Hà Nội', lat: 21.0285, lng: 105.8542 },
    significance: 'critical'
  },
  {
    id: '21',
    year: 1972,
    month: 3,
    title: 'Chiến dịch Xuân - Hè 1972',
    description: 'Cuộc tổng tiến công lớn của quân Bắc Việt vượt qua vùng phi quân sự vào miền Nam.',
    location: { name: 'Quảng Trị', lat: 16.75, lng: 107.2 },
    significance: 'major'
  },
  {
    id: '22',
    year: 1972,
    month: 12,
    title: 'Chiến thắng Điện Biên Phủ trên không',
    description: 'Quân và dân Hà Nội bắn rơi máy bay B-52 của Mỹ trong 12 ngày đêm.',
    location: { name: 'Hà Nội', lat: 21.0285, lng: 105.8542 },
    significance: 'critical'
  },
  {
    id: '23',
    year: 1973,
    month: 1,
    title: 'Hiệp định Paris',
    description: 'Hiệp định Paris được ký kết, dẫn đến việc rút quân đội Mỹ khỏi Việt Nam.',
    location: { name: 'Toàn quốc', lat: 16.0, lng: 108.0 },
    significance: 'critical'
  },
  {
    id: '24',
    year: 1975,
    month: 3,
    title: 'Chiến dịch Tây Nguyên',
    description: 'Chiến dịch giải phóng Tây Nguyên mở đầu cho Tổng tiến công và nổi dậy Xuân 1975.',
    location: { name: 'Buôn Ma Thuột', lat: 12.6667, lng: 108.0500 },
    significance: 'major'
  },
  {
    id: '25',
    year: 1975,
    month: 4,
    title: 'Giải phóng hoàn toàn miền Nam',
    description: 'Quân giải phóng tiến vào Dinh Độc Lập Sài Gòn, kết thúc chiến tranh và thống nhất đất nước.',
    location: { name: 'Sài Gòn', lat: 10.8231, lng: 106.6297 },
    significance: 'critical'
  },
  {
    id: '26',
    year: 1946,
    month: 1,
    title: 'Tổng tuyển cử đầu tiên sau ngày giải phóng',
    description: ' Tổng tuyển cử trong cả nước bầu đại biểu Quốc hội khóa I nước Việt Nam Dân chủ cộng hòa. Đây là một sự kiện quan trọng sau Lễ Tuyên ngôn Độc lập diễn ra vào ngày 2-9-1945 chỉ hơn 4 tháng. Chủ tịch Hồ Chí Minh đã phân tích: Đây là lần đầu tiên người dân Việt Nam được thể hiện quyền làm chủ của mình trong một quốc gia theo chính thể Cộng hòa - Dân chủ.',
    location: { name: 'Hà Nội', lat: 21.0285, lng: 105.8542 },
    significance: 'critical'
  },
  {
    id: '27',
    year: 1945,
    month: 9,
    title: 'Quân Pháp đánh chiếm Miền Nam',
    description: 'Quân Pháp sau nhiều ngày khiêu khích đã nổ súng tấn công vào trụ sở Ủy ban nhân dân Nam bộ, trụ sở Quốc gia Tự vệ Cuộc, Bưu điện, Nhà đèn, Kho bạc, Đài Phát thanh. Cuộc nổ súng trên đều có sự hậu thuẫn của Mỹ và thực dân Anh.',
    location: { name: 'Sài Gòn', lat: 10.5231, lng: 106.8297 },
    significance: 'critical'
  },
  {
    id: '28',
    year: 1945,
    month: 8,
    title: 'Quân Tưởng kéo vào giải giáp Quân Nhât',
    description: 'Dưới sự hỗ trợ của quân đội Đòng Minh, 20 vạn quân Tưởng kéo vào nước ta để giải giáp quân Nhật',
    location: { name: 'Đà Nẵng', lat: 16.0, lng: 108.3 },
    significance: 'critical'
  },
  {
    id: '29',
    year: 1945,
    month: 11,
    title: 'Ban Chấp Hành Trung ương ra Chỉ Thị Kháng Chiến',
    description: 'Ngày 25/11/1945, Chỉ Thị kháng chiến được đưa ra, phân tích sâu sắc sự biến đổi của tình hình thế giới và trong nước, xác định rõ "kẻ thù chính của nước ta lúc này là thực dân Pháp xâm lược phải tập trung ngọn lửa đấu tranh vào chúng. Đồng thời cũng đề ra nhiều biện pháp cụ thể giải quyết những khó khăn của cách mạng Việt Nam như thành lập Chính Phủ, động viên toàn dân kháng chiến, thực hiện ngoại giao "làm cho nước mình ít kẻ thù và nhiều bạn đồng minh hơn hết".',
    location: { name: 'Hà Nội', lat: 21.0280, lng: 105.8530 },
    significance: 'critical'
  },
  {
    id: '30',
    year: 1946,
    month: 11,
    title: 'Bản Hiến Pháp đầu tiên của nước Việt Nam Dân Chủ Cộng Hòa được Quốc Hội thông qua',
    description: 'Ngày 9/11/1946, Chủ tịch nước Hồ Chí Minh ký thông qua Bản Hiến Pháp đầu tiên của nước Việt Nam Dân Chủ Cộng Hòa. ',
    location: { name: 'Hà Nội', lat: 21.0280, lng: 105.8530 },
    significance: 'critical'
  },
  {
    id: '31',
    year: 1946,
    month: 5,
    title: 'Phái đoàn chính phủ Việt Nam thăm chính thức Pháp',
    description: 'Ngày 31/5/1946, Phái đoàn chính phủ Việt Nam thăm chính thức Pháp để thực hiện ngoại giao và thương lượng với Pháp. Chuyến thăm kéo dài 4 tháng đã thu được những thành công nhất định, điển hình như bảm tạm ước Mácxây',
    location: { name: 'Pháp', lat: 48.8566, lng: 2.3522 },
    significance: 'critical'
  },
  {
    id: '32',
    year: 1946,
    month: 7,
    title: 'Triệt phá âm mưu của bọn Đại Việt, Quốc Dân Đảng',
    description: 'Rạng sáng ngày 12/7/1946, lực lượng công an đã đột nhâp, triệt phá thành công âm mưu lật đổ chính quyền của bọn Đại Việt, Quốc Dân Đảng ở số nhà 132 Duvigneau, kết thúc Vụ án ở số 7 phố Ôn Như Hầu.',
    location: { name: 'phố Bùi Thị Xuân, Hà Nội', lat: 21.0280, lng: 105.8480 },
    significance: 'critical'
  },
  {
    id: '33',
    year: 1946,
    month: 11,
    title: 'Thực dân Pháp đánh chiếm Hải Phòng, Lạng Sơn.',
    description: 'Thực dân Pháp đánh chiếm Hải Phòng, Lạng Sơn, đơn phương hủy bỏ bản Tạm ước đã ký trước đó.',
    location: { name: 'Hải Phòng', lat: 20.8667, lng: 106.6833 },
    significance: 'critical'
  },
  {
    id: '34',
    year: 1946,
    month: 12,
    title: 'Pháp gửi tối hậu thư đòi phía Việt Nam phải giải giáp',
    description: 'Ngày 18/12, đại diện Pháp ở Hà Nội tuyên bố ngừng mọi liên lạc và gửi tối hậu thư yêu cầu chính phủ Việt Nam phải giải giáp, giao lại quyền kiểm soát thành phố.',
    location: { name: 'Hà Nội', lat: 21.0280, lng: 105.8530 },
    significance: 'critical'
  },
  {
    id: '35',
    year: 1946,
    month: 12,
    title: 'Lời kêu gọi toàn quốc kháng chiến.',
    description: 'Ngày 19/12, Chủ tich Hồ Chí Minh ra Lời kêu gọi toàn quốc kháng chiến, khẳng định quyết tâm sắt đá của nhân dân Việt Nam trong công cuộc kháng chiến bảo vệ Tổ quốc.',
    location: { name: 'Hà Nội', lat: 21.0280, lng: 105.8530 },
    significance: 'critical'
  }
  {
    id: '36',
    year: 1947,
    month: 2,
    title: 'Thành công đưa các lực lượng quân sự rút lui ra khỏi Hà Nội',
    description: 'Nhờ sự chống trả anh dũng của dân quân địa phương, các lực lượng công an, cảnh sát. Đến ngày 17/2/1974 về cơ bản đã hoàn tất việc rút lui các lực lượng chủ lực lên chiến khu Việt Bắc, tạo thế phát triển kháng chiến lâu dài.'
    location: { name: 'Việt Bắc', lat: , lng: },
    significance: 'critical'
  },
  
];

export const getEventsByYear = (year: number): HistoricalEvent[] => {
  return historicalEvents.filter(event => event.year === year);
};

export const getEventsByYearRange = (startYear: number, endYear: number): HistoricalEvent[] => {
  return historicalEvents.filter(event => event.year >= startYear && event.year <= endYear);
};

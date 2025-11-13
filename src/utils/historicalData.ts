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
  },
  {
    id: '36',
    year: 1947,
    month: 2,
    title: 'Thành công đưa các lực lượng quân sự rút lui ra khỏi Hà Nội',
    description: 'Nhờ sự chống trả anh dũng của dân quân địa phương, các lực lượng công an, cảnh sát. Đến ngày 17/2/1974 về cơ bản đã hoàn tất việc rút lui các lực lượng chủ lực lên chiến khu Việt Bắc, tạo thế phát triển kháng chiến lâu dài.',
    location: { name: 'Việt Bắc', lat: 22.0, lng: 105.5 },
    significance: 'critical'
  },
  {
    id: '37',
    year: 1948,
    month: 6,
    title: 'Lời kêu gọi thi đua ái quốc',
    description: 'Ngày 11/6/1948, Chủ tịch Hồ Chí Minh ra lời kêu gọi thi đua ái quốc, kêu gọi mọi người đóng góp sức mình vào công cuộc xây dựng đất nước.',
    location: { name: 'Hà Nội', lat: 21.0280, lng: 105.8530 },
    significance: 'critical'
  },
  {
    id: '38',
    year: 1949,
    month: 11,
    title: 'Sắc lệnh về nghĩa vụ quân sự',
    description: 'Chủ tịch hồ Chí Minh ký sắc lệnh về Nghĩa vụ quân sự, từ đó các lực lượng quân sự của ta phát triển nhanh chóng cả về số lượng lẫn chất lượng',
    location: { name: 'Hà Nội', lat: 21.0280, lng: 105.8530 },
    significance: 'critical'
  },
  {
    id: '39',
    year: 1950,
    month: 2,
    title: 'Đảng chủ trương tổng động viên',
    description: 'Chủ tịch Hồ Chí Minh và Đảng ra sắc lệnh Tổng đọng viên, huy động mọi nguồn lực tập trung cho cuộc kháng chiên.',
    location: { name: 'Hà Nội', lat: 21.0280, lng: 105.8530 },
    significance: 'critical'
  },
  {
    id: '40',
    year: 1948,
    month: 3,
    title: 'Trận thắng La Ngà',
    description: 'Quân ta đã hạ gục 59 xe các loại, tiêu diệt 150 tên và bắt sống 300 tên địch. Trận đánh đã ra sự hoang mang trong nôi bộ nước Pháp.',
    location: { name: 'La Ngà, Quảng Trị', lat: 11.166337, lng: 107.234741 },
    significance: 'critical'
  },
  {
    id: '41',
    year: 1948,
    month: 4,
    title: 'Chiến thắng Tầm Vu',
    description: 'Là trận đánh phục kích do bộ đội chủ lực Khu 4 thực hiện. Ta tiêu diệt 100 sĩ quan Pháp, phá hủy 14 xe vận tải quân sự đồng thời lần đầu tiên thu giữ khẩu pháo 105mm.',
    location: { name: 'Tầm Vu, Quảng Trị', lat: 10.44361, lng: 106.469215 },
    significance: 'critical'
  },
  {
    id: '42',
    year: 1950,
    month: 1,
    title: 'Cuộc biểu tình ở Sài Gòn Chở lớn của học sinh sinh viên.',
    description: 'Ngày 9/1/1950, hưởng ứng lời kêu gọi của chủ tich Hồ Chí Minh, học sinh sinh viên đã tổ chức nhiều phong trào biểu tình chống lại chủ nghĩa thực dân đế quốc Pháp và sự xâm lược và can thiệp của Mỹ vào miền Nam Việt Nam.',
    location: { name: 'Sài Gòn', lat: 10.8231, lng: 106.6297 },
    significance: 'critical'
  },
  {
    id: '43',
    year: 1949,
    month: 12,
    title: 'Chiến dịch Cầu Kè - Trà Vinh',
    description: 'Quân ta tổ chức tiến công lớn vào khu vực đóng quân của địch trên cầu Kè, tiêu diệt và loại vỏ 17 đồn bốt, tiêu diệt 500 địch, bắt sống 200, bắn chìm 2 tàu, phá hủy 2 xe lội nước, 4 xe quân sự, thu trên 300 súng.',
    location: { name: 'Cầu Kè, Trà Vinh', lat: 9.872252, lng: 106.061655 },
    significance: 'critical'
  },
  {
    id: '44',
    year: 1949,
    month: 7,
    title: 'Quốc Gia Việt Nam ra đời',
    description: 'Sau khi được người Pháp đưa về Sài Gòn vào ngày 13/6/1949, Quốc Trưởng Bảo Đại đã chính thức tuyên bố thành lập "Quốc gia Việt Nam" vào ngày 1/7/1949.',
    location: { name: 'Sài Gòn', lat: 10.8231, lng: 106.6297 },
    significance: 'critical'
  },
  {
    id: '45',
    year: 1950,
    month: 6,
    title: 'Chiến dịch biên giới Thu - Đông 1950',
    description: 'Chiến dịch biên giới Thu - Đông được Thường vụ Trung ương Đảng tiến hành nhằm tiêu diệt một bộ phận sinh lực địch, đồng thời giữ an toàn cho các tuyến đường dọc biên giới Việt-Trung nhằm mục đích hậu cần và tiếp tế từ nước bạn.',
    location: { name: 'thị xã Cao Bằng - Đình Lập', lat: 22.6667, lng: 106.2500 },
    significance: 'critical'
  },
  {
    id: '46',
    year: 1952,
    month: 4,
    title: 'Hội Nghị lần thứ 3 ',
    description: 'Ban Chấp hành Trung ương Đảng đã đề ra những quyết sách lớn trong công tác "chỉnh Đảng, chỉnh quân", phục vụ cho cuộc kháng chiến cứu nước.',
    location: { name: 'Hà Nội', lat: 21.0280, lng: 105.8530 },
    significance: 'critical'
  },
  {
    id: '47',
    year: 1953,
    month: 11,
    title: 'Hội nghị toàn quốc lần thứ nhất và hội nghị trung ương Đảng lần thứ 5',
    description: 'Thông qua cương lĩnh ruộng đất, thực hiện "phát động quần chúng triệt để giảm tô, thực hiện giảm tức và tiến hành cải cách ruộng đất", nâng cao quyền lợi kinh tế của người nông dân.',
    location: { name: 'Hà Nội', lat: 21.0280, lng: 105.8530 },
    significance: 'critical'
  },
  {
    id: '48',
    year: 1953,
    month: 12,
    title: 'Luật cải cách ruộng đất được ban hành.',
    description: 'Ngày 19/12/1953, chủ tịch Hồ Chí Minh đã ký ban hành luật cải cách ruộng đất, chia hành nghìn hecta ruộng cày, trâu bò và các loại nông cụ cho người nông dân nghèo.',
    location: { name: 'Hà Nội', lat: 21.0280, lng: 105.8530 },
    significance: 'critical'
  },
  {
    id: '49',
    year: 1953,
    month: 5,
    title: 'Đại tướng H. Navarre nhậm chức Tổng chỉ huy quân đội Pháp ở Đông Dương.',
    description: 'Khi nhậm chức mới, Navarre đã phát biểu rằng "Bây giờ chúng ta có thể nhìn thấy rõ chiến thắng (ở Việt Nam) giống như nhìn thấy ánh sáng cuối đường hầm"',
    location: { name: 'Hà Nội', lat: 21.0280, lng: 105.8530 },
    significance: 'critical'
  },
  {
    id : '50',
    year: 1954,
    month: 2,
    title: 'Xây dựng Điện Biên Phủ',
    description: 'Song song với việc thực hiện kế hoạch Nava, căn cứ Điện Biên Phủ đã được người Pháp xây dựng, gia cố trở thành tập đoàn cứ điểm mạnh nhất toàn Đông Dương. Tướng Navarre hi vọng sẽ giành được một chiến thắng quân sự lớn trong 18 tháng và kết thúc chiến tranh trong danh dự',
    location: { name: 'Điện Biên Phủ', lat: 21.3833, lng: 103.0167 },
    significance: 'critical'
  },
  {
    id: '51',
    year: 1953,
    month: 9,
    title: 'Chiến lược Đông Xuân 1953-1954',
    description: 'Bộ Chính Trị họp bàn, thông qua chủ trương tác chiến cho chiến lược Đong Xuân 1953-1954, nhằm tiêu diệt sinh lực đich, giữ thế chủ động cho lực lượng của ta.',
    location: { name: 'Hà Nội', lat: 21.0280, lng: 105.8530 },
    significance: 'critical'
  },
  {
    id: '52',
    year: 1953,
    month: 6,
    title: 'Khai màn chiến dịch Điện Biên Phủ',
    description: 'Ngày 6/12/1953, Bộ Chính Trị đã quyết định khai màn chiến dịch Điện Biên Phủ và giao quyền chi huy cho tướng Võ Nguyên Giáp, đồng thời ở các địa điểm khác cũng diễn ra hàng loạt các cuộc tiến công của ta trên các hướng Lai Châu, Trung Lào, Tây Nguyên,.. nhằm chuẩn bị cho trận quyết chiến ở Điện Biên Phủ.',
    location: { name: 'Điện Biên Phủ', lat: 21.3833, lng: 103.0167 },
    significance: 'critical'
  },
  {
    id: '53',
    year: 1954,
    month: 3,
    title: 'Chiến dịch Điện Biên Phủ bắt đầu',
    description: 'Ngày 13/3/1954, ta thực hiện tiến công vào cứ điểm Điện Biên Phủ với phương châm "đánh chắc, tiến chắc", nổ súng tấn công phân khu phía bắc Mường Thanh.',
    location: { name: 'Mường Thanh, Điện Biên Phủ', lat: 22.0, lng: 103.5 },
    significance: 'critical'
  },
  {
    id: '54',
    year: 1954,
    month: 5,
    title: 'Hội Nghị Gienevo khai mạc',
    description: 'Hội Nghị Gienevo khai mạc, được tổ chức tại thủ đô Pháp, Paris, nhằm thảo luận về tình hình chiến tranh ở Việt Nam và các vấn đề liên quan. Ngày 21/7/1954, ta ký kết với Pháp bản Hiệp định đình chri chiến sự ở Việt Nam. Bản Tuyên bố cuối cùng đã nêu rõ cấc quyền dân tộc cơ bản của ba nước Đông Dương, cam kết chấm dứt chiến tranh, lập lại hòa bình.',
    location: { name: 'Paris', lat: 48.8566, lng: 2.3522 },
    significance: 'critical'
  },
  {
    id: '55',
    year: 1954,
    month: 7,
    title: 'Vĩ tuyến 17',
    description: 'Sau khi hiệp định Gienevo được ký kết, Vĩ tuyến 17 hình thành, chia nước ta ra làm 2 miền với miền Bắc do Đảng lãnh đạo và miền Nam do chính quyền thân Mỹ nắm giữ.',
    location: { name: 'Vĩ tuyến 17', lat: 17.0, lng: 107.0 },
    significance: 'critical'
  },
  {
    id: '56',
    year: 1955,
    month: 3,
    title: 'Hội nghị lần thứ 7 và thứ 8 Ban Cháp hành Trung ương Đảng',
    description: 'Xác định kẻ thù chính của cách mạng là Mỹ và chính quyền tay sai, đề ra phương hướng chiến lược cho cuộc cách mạng.',
    location: { name: 'Hà Nội', lat: 21.0280, lng: 105.8530 },
    significance: 'critical'
  },
  {
    id: '57',
    year: 1955,
    month: 5,
    title: 'Quân Pháp rút khỏi miền Bắc Việt Nam',
    description: 'Ngày 16/5/1955, toán lính Pháp cuối cùng đã phải rút khỏi miền Bắc Việt Nam.',
    location: { name: 'Vĩ tuyến 17', lat: 17.0, lng: 107.0 },
    significance: 'critical'
  },
  {
    id: '58',
    year: 1955,
    month: 5,
    title: 'Quân Pháp rút khỏi miền Bắc Việt Nam',
    description: 'Ngày 16/5/1955, toán lính Pháp cuối cùng đã phải rút khỏi miền Bắc Việt Nam.',
    location: { name: 'Vĩ tuyến 17', lat: 17.0, lng: 107.0 },
    significance: 'critical'
  },
  {
    id: '59',
    year: 1956,
    month: 7,
    title: 'Hoàn thành cải cách ruộng đất.',
    description: 'cải cách ruộng đất đã hoàn thành ở đồng bằng, trung du và miền núi. Tuy có những thành công nhất định, nhưng cũng mắc phải một số sai lầm nghiêm trọng dẫn đến tổn thất trong bộ máy Đảng và quan hệ với nhân dân',
    location: { name: 'Hà Nội', lat: 21.0280, lng: 105.8530 },
    significance: 'critical'
  },
  {
    id: '60',
    year: 1958,
    month: 11,
    title: 'Hội nghị lần thứ 14 Ban Cháp hành trung ương Đảng',
    description: 'Đề ra kế hoạch ba năm phát triển kinh tế, văn hóa và cải tạo xã hộichủ nghĩa đối với kinh tế cá thể và kinh tế tư bản tư doanh.',
    location: { name: 'Hà Nội', lat: 21.0280, lng: 105.8530 },
    significance: 'critical'
  },
  {
    id: '61',
    year: 1959,
    month: 4,
    title: 'Hội nghị lần thứ 16 Ban Chấp hành trung ương Đảng',
    description: 'Thông qua Nghị quyết về vấn đề hợp tác hóa nông nghiệp, xác định hình thức và bước đi của hợp tác xã là: hợp tác hóa đi trước cơ giới hóa. Chủ trương cải tạo hòa bình với giai cấp tư sản.',
    location: { name: 'Hà Nội', lat: 21.0280, lng: 105.8530 },
    significance: 'critical'
  },
  {
    id: '62',
    year: 1955,
    month: 10,
    title: 'Chế độ Việt Nam Cộng Hòa được thành lập',
    description: 'Thủ tướng Ngô Đình Diệm đã phế truất Bảo Đại thông qua trưng cầu dân ý giả tạo và thành lập nên nền đệ nhất Việt Nam Cộng Hòa, thành lập nội các và ban hành Hiến Pháp vào ngày 26/10/1955',
    location: { name: 'Sài Gòn', lat: 10.8231, lng: 106.6297 },
    significance: 'critical'
  },
];

// Helper function to calculate distance between two coordinates (in degrees)
const getDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

// Check if two coordinates are too close (within ~500 meters)
const areCoordinatesClose = (lat1: number, lng1: number, lat2: number, lng2: number, thresholdKm: number = 0.5): boolean => {
  return getDistance(lat1, lng1, lat2, lng2) < thresholdKm;
};

// Generate spiral offset pattern for spreading markers
const getSpiralOffset = (index: number, baseOffset: number = 0.005): { lat: number; lng: number } => {
  const angle = index * 0.5; // Golden angle approximation
  const radius = baseOffset * Math.sqrt(index);
  return {
    lat: radius * Math.cos(angle),
    lng: radius * Math.sin(angle)
  };
};

// Spread out overlapping coordinates while keeping them near the original location
const spreadOverlappingCoordinates = (events: HistoricalEvent[]): HistoricalEvent[] => {
  const processedEvents: HistoricalEvent[] = [];
  const locationGroups = new Map<string, HistoricalEvent[]>();

  // Group events by location name
  events.forEach(event => {
    const key = event.location.name.toLowerCase().trim();
    if (!locationGroups.has(key)) {
      locationGroups.set(key, []);
    }
    locationGroups.get(key)!.push(event);
  });

  // Process each location group
  locationGroups.forEach((groupEvents, locationName) => {
    if (groupEvents.length === 1) {
      // No overlap, keep original coordinates
      processedEvents.push(groupEvents[0]);
      return;
    }

    // Check for actual coordinate overlaps (not just same location name)
    const coordinateGroups = new Map<string, HistoricalEvent[]>();
    
    groupEvents.forEach(event => {
      // Find if this event's coordinates are close to any existing group
      let foundGroup = false;
      for (const [coordKey, coordGroup] of coordinateGroups.entries()) {
        const [baseLat, baseLng] = coordKey.split(',').map(Number);
        if (areCoordinatesClose(event.location.lat, event.location.lng, baseLat, baseLng)) {
          coordGroup.push(event);
          foundGroup = true;
          break;
        }
      }
      
      if (!foundGroup) {
        const newKey = `${event.location.lat},${event.location.lng}`;
        coordinateGroups.set(newKey, [event]);
      }
    });

    // Spread out overlapping coordinates
    coordinateGroups.forEach((coordGroup, coordKey) => {
      if (coordGroup.length === 1) {
        processedEvents.push(coordGroup[0]);
      } else {
        // Multiple events at same coordinates - spread them out
        const [baseLat, baseLng] = coordKey.split(',').map(Number);
        coordGroup.forEach((event, index) => {
          const offset = getSpiralOffset(index, 0.003); // ~300m offset per ring
          processedEvents.push({
            ...event,
            location: {
              ...event.location,
              lat: baseLat + offset.lat,
              lng: baseLng + offset.lng
            }
          });
        });
      }
    });
  });

  return processedEvents;
};

// Get events grouped by year
export const getEventsGroupedByYear = (): Map<number, HistoricalEvent[]> => {
  const grouped = new Map<number, HistoricalEvent[]>();
  
  historicalEvents.forEach(event => {
    if (!grouped.has(event.year)) {
      grouped.set(event.year, []);
    }
    grouped.get(event.year)!.push(event);
  });

  // Sort events within each year by month
  grouped.forEach((events, year) => {
    events.sort((a, b) => a.month - b.month);
  });

  return grouped;
};

// Get events by year with spread coordinates
export const getEventsByYear = (year: number): HistoricalEvent[] => {
  const events = historicalEvents.filter(event => event.year === year);
  return spreadOverlappingCoordinates(events);
};

// Get events by year range with spread coordinates
export const getEventsByYearRange = (startYear: number, endYear: number): HistoricalEvent[] => {
  const events = historicalEvents.filter(event => event.year >= startYear && event.year <= endYear);
  return spreadOverlappingCoordinates(events);
};

// Get all events with spread coordinates
export const getAllEventsWithSpreadCoordinates = (): HistoricalEvent[] => {
  return spreadOverlappingCoordinates(historicalEvents);
};

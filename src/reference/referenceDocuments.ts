/**
 * Reference documents for the Vietnam History RAG chatbot.
 *
 * Add additional objects to the `referenceDocuments` array or replace the
 * placeholder content below with your own sources. Each document can be any
 * length; the RAG indexer will chunk long documents automatically.
 */
export interface ReferenceDocument {
  id: string;
  title: string;
  content: string;
  source?: string;
}

export const referenceDocuments: ReferenceDocument[] = [
  {
    id: "core-history",
    title: "Lịch sử Việt Nam 1945-1975",
    source: "Tài liệu mặc định kèm dự án",
    content: `
# LỊCH SỬ VIỆT NAM 1945-1975: TẬP TRUNG VÀO ĐẢNG CỘNG SẢN VIỆT NAM

## 1945 - CÁCH MẠNG THÁNG TÁM VÀ ĐỘC LẬP

- 22/12/1944: Thành lập Việt Nam Tuyên truyền Giải phóng quân tại Cao Bằng
- Tháng 8/1945: Cách mạng Tháng Tám giành chính quyền
- 02/09/1945: Hồ Chí Minh đọc Tuyên ngôn độc lập tại Quảng trường Ba Đình

## 1946-1954 - KHÁNG CHIẾN CHỐNG PHÁP

- 19/12/1946: Toàn quốc kháng chiến
- Tháng 2/1951: Đảng Cộng sản Đông Dương đổi tên thành Đảng Lao động Việt Nam
- 07/05/1954: Chiến thắng Điện Biên Phủ
- Tháng 7/1954: Hiệp định Genève ký kết

## 1954-1964 - XÂY DỰNG CHỦ NGHĨA XÃ HỘI Ở MIỀN BẮC

- Cải cách ruộng đất, cải tạo XHCN
- Tháng 9/1960: Đại hội Đảng lần III xác định đường lối cách mạng miền Nam
- Tháng 12/1960: Thành lập Mặt trận Dân tộc Giải phóng miền Nam

## 1964-1968 - LEO THANG CHIẾN TRANH

- 08/1964: Sự kiện Vịnh Bắc Bộ
- 03/1965: Lính Mỹ đổ bộ Đà Nẵng
- 01/1968: Tổng tiến công và nổi dậy Tết Mậu Thân

## 1969-1973 - ĐÀM PHÁN VÀ TIẾP TỤC CHIẾN ĐẤU

- 02/09/1969: Chủ tịch Hồ Chí Minh qua đời
- 06/1969: Thành lập Chính phủ Cách mạng lâm thời CHMNVN
- 01/1973: Hiệp định Paris, Mỹ rút quân

## 1975 - GIẢI PHÓNG HOÀN TOÀN MIỀN NAM

- 03/1975: Chiến dịch Tây Nguyên
- 30/04/1975: Giải phóng Sài Gòn, thống nhất đất nước

## LÃNH ĐẠO CHỦ CHỐT

- Hồ Chí Minh, Lê Duẩn, Võ Nguyên Giáp, Phạm Văn Đồng, Trường Chinh, Lê Đức Thọ

## CHIẾN LƯỢC & CHÍNH SÁCH

- Chiến tranh nhân dân, kết hợp đấu tranh chính trị và quân sự
- Cải cách ruộng đất, công nghiệp hóa, giáo dục, bình đẳng giới
- Quan hệ quốc tế với Liên Xô, Trung Quốc, phong trào Không liên kết

## Ý NGHĨA

- Đánh bại thực dân Pháp và đế quốc Mỹ
- Thống nhất đất nước, khẳng định quyền tự quyết dân tộc
- Góp phần vào phong trào giải phóng dân tộc toàn cầu
    `,
  },
];


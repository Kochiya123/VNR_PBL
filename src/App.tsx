import React, { useState, useEffect } from 'react';
import { InteractiveMap } from './components/InteractiveMap';
import { TimelineSlider } from './components/TimelineSlider';
import { QuizSection } from './components/QuizSection';
import { ChatBot } from './components/ChatBot';
import { historicalEvents, getEventsByYear } from './utils/historicalData';
import { Book, MapIcon, MessageSquare, Trophy, Menu, X } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

type Section = 'map' | 'quiz' | 'chat';

export default function App() {
  const [selectedYear, setSelectedYear] = useState(1945);
  const [currentSection, setCurrentSection] = useState<Section>('map');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [yearEvents, setYearEvents] = useState(getEventsByYear(1945));

  useEffect(() => {
    setYearEvents(getEventsByYear(selectedYear));
  }, [selectedYear]);

  const scrollToSection = (section: Section) => {
    setCurrentSection(section);
    setMobileMenuOpen(false);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-800 to-red-700 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-2xl">⭐</span>
              </div>
              <div>
                <h1 className="text-2xl">Dấu Ấn Lịch Sử 1945-1975</h1>
                <p className="text-sm opacity-90">Con Đường Giành Độc Lập và Thống Nhất Đất Nước</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection('map')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  currentSection === 'map' ? 'bg-white/20' : 'hover:bg-white/10'
                }`}
              >
                <MapIcon className="w-5 h-5" />
                Bản đồ tương tác
              </button>
              <button
                onClick={() => scrollToSection('quiz')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  currentSection === 'quiz' ? 'bg-white/20' : 'hover:bg-white/10'
                }`}
              >
                <Trophy className="w-5 h-5" />
                Trắc nghiệm
              </button>
              <button
                onClick={() => scrollToSection('chat')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  currentSection === 'chat' ? 'bg-white/20' : 'hover:bg-white/10'
                }`}
              >
                <MessageSquare className="w-5 h-5" />
                Trợ lý AI
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pt-4 border-t border-white/20 space-y-2">
              <button
                onClick={() => scrollToSection('map')}
                className="w-full flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors text-left"
              >
                <MapIcon className="w-5 h-5" />
                Bản đồ tương tác
              </button>
              <button
                onClick={() => scrollToSection('quiz')}
                className="w-full flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors text-left"
              >
                <Trophy className="w-5 h-5" />
                Trắc nghiệm
              </button>
              <button
                onClick={() => scrollToSection('chat')}
                className="w-full flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors text-left"
              >
                <MessageSquare className="w-5 h-5" />
                Trợ lý AI
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1710702418104-6bf5419ab03d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwaGlzdG9yaWMlMjByZXZvbHV0aW9ufGVufDF8fHx8MTc2Mjg1NjExOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Vietnam historic revolution"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-red-700 text-white rounded-full mb-6">
              <span className="flex items-center gap-2">
                <Book className="w-4 h-4" />
                Kho Tư Liệu Lịch Sử Đảng Cộng Sản Việt Nam
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl text-gray-800 mb-6">
              30 Năm Cách Mạng
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Khám phá những sự kiện quan trọng, trận chiến quyết định và những thời khắc lịch sử 
              đã định hình hành trình của Việt Nam từ ách thống trị thực dân đến độc lập và thống nhất 
              dưới sự lãnh đạo của Đảng Cộng sản Việt Nam.
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="px-6 py-3 bg-white rounded-lg shadow-md">
                <div className="text-red-700">1945</div>
                <div className="text-gray-600">Cách mạng Tháng Tám</div>
              </div>
              <div className="px-6 py-3 bg-white rounded-lg shadow-md">
                <div className="text-red-700">1954</div>
                <div className="text-gray-600">Chiến thắng Điện Biên Phủ</div>
              </div>
              <div className="px-6 py-3 bg-white rounded-lg shadow-md">
                <div className="text-red-700">1975</div>
                <div className="text-gray-600">Thống nhất đất nước</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section id="map" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full mb-4">
                <MapIcon className="w-4 h-4" />
                <span>Dòng Thời Gian Tương Tác</span>
              </div>
              <h2 className="text-4xl text-gray-800 mb-4">
                Bản Đồ Sự Kiện Lịch Sử
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Khám phá ba thập kỷ lịch sử Việt Nam. Sử dụng thanh trượt thời gian 
                để tìm hiểu các sự kiện diễn ra trên khắp đất nước.
              </p>
            </div>

            {/* Timeline Slider */}
            <div className="mb-8">
              <TimelineSlider
                minYear={1945}
                maxYear={1975}
                currentYear={selectedYear}
                onYearChange={setSelectedYear}
              />
            </div>

            {/* Event Summary */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <span className="text-gray-600">Sự kiện năm {selectedYear}:</span>
                  <span className="ml-2 text-xl text-red-700">{yearEvents.length}</span>
                </div>
                {yearEvents.length > 0 && (
                  <div className="text-sm text-gray-600">
                    Nhấp vào các điểm đánh dấu để tìm hiểu thêm về từng sự kiện
                  </div>
                )}
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
              <div className="h-[600px] md:h-[700px]">
                <InteractiveMap events={yearEvents} selectedYear={selectedYear} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section id="quiz" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full mb-4">
              <Trophy className="w-4 h-4" />
              <span>Kiểm Tra Kiến Thức</span>
            </div>
            <h2 className="text-4xl text-gray-800 mb-4">
              Bài Trắc Nghiệm Lịch Sử
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Thử thách bản thân với các câu hỏi về những sự kiện lớn, nhân vật quan trọng 
              và những thời khắc đáng nhớ trong lịch sử Việt Nam từ 1945-1975.
            </p>
          </div>

          <QuizSection />
        </div>
      </section>

      {/* Chatbot Section */}
      <section id="chat" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
              <MessageSquare className="w-4 h-4" />
              <span>Trợ Lý AI</span>
            </div>
            <h2 className="text-4xl text-gray-800 mb-4">
              Hỏi Đáp Cùng AI Lịch Sử
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Có câu hỏi về giai đoạn cách mạng Việt Nam? Trợ lý AI của chúng tôi 
              được đào tạo với dữ liệu lịch sử từ 1945-1975 và có thể giúp trả lời câu hỏi 
              hoặc phân tích hình ảnh lịch sử.
            </p>
          </div>

          <ChatBot />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-lg mb-4">Về Dự Án</h3>
                <p className="text-gray-400 text-sm">
                  Nguồn tài liệu giáo dục khám phá con đường giành độc lập 
                  và thống nhất của Việt Nam từ 1945-1975, tập trung vào vai trò 
                  của Đảng Cộng sản Việt Nam.
                </p>
              </div>
              <div>
                <h3 className="text-lg mb-4">Các Giai Đoạn Chính</h3>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Cách mạng Tháng Tám (1945)</li>
                  <li>• Kháng chiến chống Pháp (1946-1954)</li>
                  <li>• Kháng chiến chống Mỹ (1955-1975)</li>
                  <li>• Thống nhất đất nước (1975)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg mb-4">Tài Nguyên</h3>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Bản đồ dòng thời gian tương tác</li>
                  <li>• Bài trắc nghiệm lịch sử</li>
                  <li>• Trợ lý AI hỏi đáp</li>
                  <li>• Công cụ phân tích hình ảnh</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
              <p>
                Nguồn tài liệu giáo dục về lịch sử cách mạng Việt Nam (1945-1975)
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

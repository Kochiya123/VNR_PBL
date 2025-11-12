import React, { useState, useRef, useEffect } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

interface TimelineSliderProps {
  minYear: number;
  maxYear: number;
  currentYear: number;
  onYearChange: (year: number) => void;
}

export const TimelineSlider: React.FC<TimelineSliderProps> = ({
  minYear,
  maxYear,
  currentYear,
  onYearChange
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  // fixed marker step; do not auto-adjust

  const handleDrag = (clientX: number) => {
    if (!sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    const year = Math.round(minYear + percentage * (maxYear - minYear));
    onYearChange(year);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleDrag(e.clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      handleDrag(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    handleDrag(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && e.touches.length > 0) {
      handleDrag(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  const percentage = ((currentYear - minYear) / (maxYear - minYear)) * 100;

  const handlePrevYear = () => {
    if (currentYear > minYear) {
      onYearChange(currentYear - 1);
    }
  };

  const handleNextYear = () => {
    if (currentYear < maxYear) {
      onYearChange(currentYear + 1);
    }
  };

  // Generate year markers with fixed step
  const yearMarkers: { year: number; pos: number }[] = [];
  const step = 5;
  for (let year = minYear; year <= maxYear; year += step) {
    const pos = ((year - minYear) / (maxYear - minYear)) * 100;
    yearMarkers.push({ year, pos });
  }
  // Ensure last year is included
  if (maxYear % step !== 0) {
    yearMarkers.push({ year: maxYear, pos: 100 });
  }

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-red-700" />
          <h3 className="text-lg text-gray-800">Dòng thời gian: 1945 - 1975</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevYear}
            disabled={currentYear <= minYear}
            className="p-2 rounded-lg bg-red-700 text-white hover:bg-red-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous year"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="px-4 py-2 bg-red-700 text-white rounded-lg min-w-[80px] text-center">
            {currentYear}
          </div>
          <button
            onClick={handleNextYear}
            disabled={currentYear >= maxYear}
            className="p-2 rounded-lg bg-red-700 text-white hover:bg-red-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            aria-label="Next year"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="relative">
        {/* Slider Track */}
        <div
          ref={sliderRef}
          className="relative h-3 bg-gray-200 rounded-full cursor-pointer"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* Progress */}
          <div
            className="absolute h-full bg-gradient-to-r from-red-700 to-red-600 rounded-full transition-all"
            style={{ width: `${percentage}%` }}
          />

          {/* Thumb */}
          <div
            className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-white border-4 border-red-700 rounded-full shadow-lg cursor-grab active:cursor-grabbing transition-transform hover:scale-110"
            style={{ left: `${percentage}%` }}
          />
        </div>

        {/* Year Markers */}
        <div className="relative mt-2 mb-12 min-h-[18px] select-none">
          {yearMarkers.map(({ year, pos }) => (
            <div
              key={year}
              className="absolute transform -translate-x-1/2"
              style={{ left: `${pos}%` }}
            >
              <div className="w-px h-2 bg-gray-400 mx-auto mb-1"></div>
              <span className="text-[10px] md:text-xs text-gray-600 whitespace-nowrap">{year}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="relative mt-12">
        <p className="text-xs text-gray-500 text-center">
          Kéo thanh trượt hoặc dùng nút mũi tên để khám phá các sự kiện từ 1945 đến 1975
        </p>
      </div>
    </div>
  );
};

import React, { useState, useEffect,useRef } from 'react';
import { HistoricalEvent } from '../utils/historicalData';
import { MapPin, Info } from 'lucide-react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";


interface InteractiveMapProps {
  events: HistoricalEvent[];
  selectedYear: number;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ events, selectedYear }) => {
  const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent | null>(null);
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);

  // Convert lat/lng to map position (Vietnam roughly spans 8-23°N, 102-110°E)
  const latToY = (lat: number) => {
    const minLat = 8;
    const maxLat = 24;
    return ((maxLat - lat) / (maxLat - minLat)) * 100;
  };

  const lngToX = (lng: number) => {
    const minLng = 102;
    const maxLng = 110;
    return ((lng - minLng) / (maxLng - minLng)) * 100;
  };

  const getMarkerColor = (significance: string) => {
    switch (significance) {
      case 'critical':
        return 'bg-red-600';
      case 'major':
        return 'bg-orange-500';
      case 'important':
        return 'bg-yellow-500';
      default:
        return 'bg-blue-500';
    }
  };

  const getMarkerSize = (significance: string) => {
    switch (significance) {
      case 'critical':
        return 'w-6 h-6';
      case 'major':
        return 'w-5 h-5';
      case 'important':
        return 'w-4 h-4';
      default:
        return 'w-4 h-4';
    }
  };
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<maptilersdk.Map | null>(null);
  const markersRef = useRef<maptilersdk.Marker[]>([]);
  const vietnamCenter = { lng: 105.8, lat: 16.2 }; // central Vietnam
  const zoom = 6; // country-level
  const pitch = 60;
  const bearing = 20;
  maptilersdk.config.apiKey = 'jcmVafcUwfzyvMikku9V';

  useEffect(() => {
  if (map.current) return; // stops map from intializing more than once
  if (!mapContainer.current) return;

  map.current = new maptilersdk.Map({
    container: mapContainer.current as unknown as HTMLElement,
    style: maptilersdk.MapStyle.BACKDROP,
    center: [vietnamCenter.lng, vietnamCenter.lat],
    zoom: zoom,
    pitch: pitch,
    bearing: bearing
  });

  map.current.on('load', () => {
    // Add 3D terrain using MapTiler Terrain RGB v2
    const terrainUrl = `https://api.maptiler.com/tiles/terrain-rgb-v2/tiles.json?key=${maptilersdk.config.apiKey}`;
    if (!map.current?.getSource('terrain')) {
      map.current?.addSource('terrain', {
        type: 'raster-dem',
        url: terrainUrl,
        tileSize: 512
      } as any);
    }
    map.current?.setTerrain({ source: 'terrain', exaggeration: 1.5 });

    // Add realistic sky
    if (!map.current?.getLayer('sky')) {
      map.current?.addLayer({
        id: 'sky',
        type: 'sky',
        paint: {
          'sky-type': 'atmosphere',
          'sky-atmosphere-sun': [0.0, 0.0],
          'sky-atmosphere-sun-intensity': 15
        }
      } as any);
    }

    // Navigation controls
    map.current?.addControl(new maptilersdk.NavigationControl(), 'top-right');
  });

}, [vietnamCenter.lng, vietnamCenter.lat, zoom, pitch, bearing]);

  // Sync timeline with markers on map
  useEffect(() => {
    if (!map.current) return;
    const createCategoryMarkerElement = (event: HistoricalEvent) => {
      const category = event.category || 'other';
      const isCritical = event.significance === 'critical';
      const baseSize = getMarkerSize(event.significance);
      const color = getMarkerColor(event.significance);

      // Wrapper container
      const wrapper = document.createElement('div');
      wrapper.style.display = 'grid';
      wrapper.style.placeItems = 'center';

      // Optional ping effect for critical events
      if (isCritical) {
        const ping = document.createElement('div');
        ping.className = ['rounded-full border-2 border-white shadow-md cursor-pointer animate-ping', color, baseSize].join(' ');
        ping.style.opacity = '0.8';
        ping.style.transform = 'scale(1.2)';
        wrapper.appendChild(ping);
      }

      // Core marker node by category
      const node = document.createElement('div');
      node.className = 'flex items-center justify-center';
      node.style.width = '28px';
      node.style.height = '28px';
      node.title = event.title;
      if (event.animationClass) {
        wrapper.className = event.animationClass;
      }

      // If placeholder is provided, render it; otherwise render default category SVG
      if (event.placeholderType && event.placeholderValue) {
        if (event.placeholderType === 'image') {
          const img = document.createElement('img');
          img.src = event.placeholderValue;
          img.alt = event.title;
          img.style.width = '28px';
          img.style.height = '28px';
          img.style.objectFit = 'cover';
          img.style.borderRadius = category === 'other' ? '50%' : '8px';
          img.className = 'border-2 border-white shadow-md';
          node.appendChild(img);
        } else if (event.placeholderType === 'emoji') {
          const span = document.createElement('span');
          span.textContent = event.placeholderValue;
          span.style.fontSize = '18px';
          node.className += ' bg-white/90 rounded-full border-2 border-white shadow-md';
          node.appendChild(span);
        } else if (event.placeholderType === 'text') {
          const span = document.createElement('span');
          span.textContent = event.placeholderValue;
          span.style.fontSize = '12px';
          span.style.fontWeight = '600';
          node.className += ' bg-white/90 rounded-full border-2 border-white shadow-md';
          node.appendChild(span);
        }
      } else {
        // Build simple SVG per category
        const svgNS = 'http://www.w3.org/2000/svg';
        const svg = document.createElementNS(svgNS, 'svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('width', '24');
        svg.setAttribute('height', '24');

        const makePath = (d: string, fill: string, stroke: string) => {
          const p = document.createElementNS(svgNS, 'path');
          p.setAttribute('d', d);
          p.setAttribute('fill', fill);
          p.setAttribute('stroke', stroke);
          p.setAttribute('stroke-width', '1.5');
          return p;
        };

        const fillBySig: Record<string, string> = {
          'bg-red-600': '#dc2626',
          'bg-orange-500': '#f97316',
          'bg-yellow-500': '#eab308',
          'bg-blue-500': '#3b82f6'
        };
        const fill = fillBySig[color] || '#3b82f6';

        switch (category) {
          case 'party': {
            const circle = makePath('M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z', fill, '#ffffff');
            const star = makePath('M12 6l2.12 4.3 4.75.69-3.43 3.34.81 4.74L12 16.9 7.75 19.07l.81-4.74-3.43-3.34 4.75-.69L12 6z', '#ffffff', 'none');
            svg.appendChild(circle);
            svg.appendChild(star);
            break;
          }
          case 'war': {
            const tri = makePath('M12 3l9 16H3l9-16z', fill, '#ffffff');
            const ex = makePath('M12 8v5m0 3h.01', '#ffffff', '#ffffff');
            svg.appendChild(tri);
            svg.appendChild(ex);
            break;
          }
          case 'diplomacy': {
            const outer = makePath('M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z', fill, '#ffffff');
            const inner = document.createElementNS(svgNS, 'circle');
            inner.setAttribute('cx', '12'); inner.setAttribute('cy', '12'); inner.setAttribute('r', '4');
            inner.setAttribute('fill', '#ffffff'); inner.setAttribute('opacity', '0.85');
            svg.appendChild(outer);
            svg.appendChild(inner);
            break;
          }
          case 'culture': {
            const diamond = makePath('M12 3l7 9-7 9-7-9 7-9z', fill, '#ffffff');
            svg.appendChild(diamond);
            break;
          }
          default: {
            const pin = makePath('M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z', fill, '#ffffff');
            const dot = document.createElementNS(svgNS, 'circle');
            dot.setAttribute('cx', '12'); dot.setAttribute('cy', '10'); dot.setAttribute('r', '2.5');
            dot.setAttribute('fill', '#ffffff');
            svg.appendChild(pin);
            svg.appendChild(dot);
          }
        }

        node.appendChild(svg);
      }
      wrapper.appendChild(node);
      return wrapper;
    };
    // Clear old markers
    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];
    // Filter events up to selectedYear
    const visibleEvents = events.filter((e) => e.year === selectedYear);
    visibleEvents.forEach((event) => {
      const wrapper = createCategoryMarkerElement(event);
      // Interactions
      wrapper.addEventListener('mouseenter', () => setHoveredEvent(event.id));
      wrapper.addEventListener('mouseleave', () => setHoveredEvent(null));
      wrapper.addEventListener('click', () => setSelectedEvent(event));
      const marker = new maptilersdk.Marker({ element: wrapper, anchor: 'bottom' })
        .setLngLat([event.location.lng, event.location.lat])
        .addTo(map.current as maptilersdk.Map);
      markersRef.current.push(marker);
    });
  }, [events, selectedYear]);

  return (
    <div className="relative w-full h-full">
      {/* Map Container with 3D perspective */}
      
      <div ref={mapContainer} className="w-full h-[600px] md:h-[700px]" />
      
      {/* Event Details Panel */}
      {selectedEvent && (
        <div className="absolute bottom-4 right-4 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden z-30">
          <div className="bg-gradient-to-r from-red-700 to-red-600 text-white p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{selectedEvent.location.name}</span>
                </div>
                <h3 className="text-lg">{selectedEvent.title}</h3>
                <p className="text-sm opacity-90">
                  {new Date(selectedEvent.year, selectedEvent.month - 1).toLocaleDateString('en-US', { 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </p>
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-sm text-gray-700">{selectedEvent.description}</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        /* Simple bounce for future marker animations */
        @keyframes vh-bounce-kf {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .vh-bounce {
          animation: vh-bounce-kf 1s ease-in-out infinite;
          will-change: transform;
        }
        /* Spin using global keyframes if present (fallback to custom) */
        @keyframes vh-spin-kf {
          to { transform: rotate(360deg); }
        }
        .vh-spin {
          animation: vh-spin-kf 1s linear infinite;
          will-change: transform;
        }
        /* Ping helper if you want to apply on the wrapper directly */
        @keyframes vh-ping-kf {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .vh-ping {
          position: relative;
        }
        .vh-ping::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: currentColor;
          opacity: .75;
          animation: vh-ping-kf 1s cubic-bezier(0, 0, .2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

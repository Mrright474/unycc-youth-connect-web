
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { countries } from '@/data/countries';
import { countryCoordinates } from '@/data/countryCoordinates';

interface MapProps {
  selectedCountry?: string;
}

const Map = ({ selectedCountry }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<mapboxgl.Marker[]>([]);
  
  useEffect(() => {
    if (!mapContainer.current) return;

    // Replace this with your Mapbox public token
    mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      projection: 'globe',
      zoom: 1.5,
      center: [0, 20],
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      // Add markers for each country that has coordinates
      countries.forEach(country => {
        const coords = countryCoordinates[country.code];
        if (coords) {
          const marker = new mapboxgl.Marker({
            color: selectedCountry === country.code ? '#FF0000' : '#666666'
          })
            .setLngLat([coords.lng, coords.lat])
            .setPopup(new mapboxgl.Popup().setHTML(`<h3>${country.name}</h3>`))
            .addTo(map.current!);
          
          markers.current.push(marker);
        }
      });
    });

    return () => {
      markers.current.forEach(marker => marker.remove());
      map.current?.remove();
    };
  }, [selectedCountry]);

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default Map;

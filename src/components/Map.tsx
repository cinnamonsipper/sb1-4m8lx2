import React from 'react';
import { useMapStore } from '../store/useMapStore';
import { MapPin } from 'lucide-react';

export function Map() {
  const { locations, routes } = useMapStore();

  return (
    <div className="relative w-full h-[600px] bg-gray-100 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-2">
          <MapPin className="w-8 h-8 text-blue-600 mx-auto" />
          <p className="text-gray-600">Interactive map will be integrated here</p>
          <p className="text-sm text-gray-500">
            {locations.length} locations • {routes.length} routes
          </p>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { useMapStore } from '../store/useMapStore';
import { Factory, Building2, Trash2 } from 'lucide-react';

export function LocationList() {
  const { locations, removeLocation } = useMapStore();

  const manufacturers = locations.filter(loc => loc.type === 'manufacturer');
  const buyers = locations.filter(loc => loc.type === 'buyer');

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-6">Locations</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Factory className="w-5 h-5 text-blue-600" />
            Scrap Producers ({manufacturers.length})
          </h3>
          <div className="space-y-2">
            {manufacturers.map((location) => (
              <div
                key={location.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium">{location.name}</p>
                  <p className="text-sm text-gray-600">
                    {location.latitude.toFixed(4)}, {location.longitude.toFixed(4)}
                  </p>
                </div>
                <button
                  onClick={() => removeLocation(location.id)}
                  className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-green-600" />
            Scrap Consumers ({buyers.length})
          </h3>
          <div className="space-y-2">
            {buyers.map((location) => (
              <div
                key={location.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium">{location.name}</p>
                  <p className="text-sm text-gray-600">
                    {location.latitude.toFixed(4)}, {location.longitude.toFixed(4)}
                  </p>
                </div>
                <button
                  onClick={() => removeLocation(location.id)}
                  className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
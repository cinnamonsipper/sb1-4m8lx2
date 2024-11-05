import React from 'react';
import { useMapStore } from '../store/useMapStore';
import { Truck, Zap } from 'lucide-react';

export function CarrierList() {
  const { carriers } = useMapStore();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4">Available Carriers</h2>
      <div className="space-y-4">
        {carriers.map((carrier) => (
          <div
            key={carrier.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center gap-3">
              {carrier.type === 'tech' ? (
                <Zap className="w-5 h-5 text-purple-600" />
              ) : (
                <Truck className="w-5 h-5 text-blue-600" />
              )}
              <div>
                <h3 className="font-semibold">{carrier.name}</h3>
                <p className="text-sm text-gray-600">
                  {carrier.serviceAreas.length} service areas
                </p>
              </div>
            </div>
            <span className="px-3 py-1 text-sm rounded-full bg-gray-200">
              {carrier.type}
            </span>
          </div>
        ))}
        {carriers.length === 0 && (
          <p className="text-gray-500 text-center py-4">No carriers available</p>
        )}
      </div>
    </div>
  );
}
import React from 'react';
import { useMapStore } from '../store/useMapStore';
import { Map as MapIcon, TrendingUp, Truck } from 'lucide-react';
import { DataImport } from './DataImport';

export function DataPanel() {
  const { locations, carriers, routes } = useMapStore();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Logistics Dashboard</h2>
        <DataImport />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <MapIcon className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold">Locations</h3>
          </div>
          <p className="text-2xl font-bold">{locations.length}</p>
          <p className="text-sm text-gray-600">
            {locations.filter(l => l.type === 'manufacturer').length} producers,{' '}
            {locations.filter(l => l.type === 'buyer').length} consumers
          </p>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Truck className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold">Carriers</h3>
          </div>
          <p className="text-2xl font-bold">{carriers.length}</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-purple-600" />
            <h3 className="font-semibold">Routes</h3>
          </div>
          <p className="text-2xl font-bold">{routes.length}</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Coverage Analysis</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span>Tech-enabled Carriers</span>
            <span className="font-semibold">
              {carriers.filter(c => c.type === 'tech').length}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span>Traditional Carriers</span>
            <span className="font-semibold">
              {carriers.filter(c => c.type === 'traditional').length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
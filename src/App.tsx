import React from 'react';
import { DataPanel } from './components/DataPanel';
import { Map } from './components/Map';
import { CarrierList } from './components/CarrierList';
import { LocationList } from './components/LocationList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <DataPanel />
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <Map />
          </div>
          <div className="space-y-8">
            <LocationList />
            <CarrierList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
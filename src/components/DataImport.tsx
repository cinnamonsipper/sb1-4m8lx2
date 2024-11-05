import React from 'react';
import { Upload, AlertCircle } from 'lucide-react';
import Papa from 'papaparse';
import { v4 as uuidv4 } from 'uuid';
import { useMapStore } from '../store/useMapStore';
import { Location } from '../types';

export function DataImport() {
  const { addLocation } = useMapStore();
  const [error, setError] = React.useState<string>('');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      complete: (results) => {
        try {
          results.data.forEach((row: any) => {
            if (row.name && row.type && row.latitude && row.longitude) {
              const location: Location = {
                id: uuidv4(),
                name: row.name,
                type: row.type === 'manufacturer' ? 'manufacturer' : 'buyer',
                latitude: parseFloat(row.latitude),
                longitude: parseFloat(row.longitude)
              };
              addLocation(location);
            }
          });
          setError('');
        } catch (err) {
          setError('Error parsing file. Please check the format.');
        }
      },
      error: (error) => {
        setError(error.message);
      }
    });
    event.target.value = '';
  };

  return (
    <div className="space-y-4">
      <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-colors w-fit">
        <Upload className="w-5 h-5" />
        Import Location Data
        <input
          type="file"
          accept=".csv"
          className="hidden"
          onChange={handleFileUpload}
        />
      </label>
      {error && (
        <div className="flex items-center gap-2 text-red-600 text-sm">
          <AlertCircle className="w-4 h-4" />
          {error}
        </div>
      )}
      <div className="text-sm text-gray-600">
        Expected CSV format:
        <pre className="mt-1 p-2 bg-gray-50 rounded-md">
          name,type,latitude,longitude
          Acme Recycling,manufacturer,40.7128,-74.0060
          Green Buyers Inc,buyer,34.0522,-118.2437
        </pre>
      </div>
    </div>
  );
}
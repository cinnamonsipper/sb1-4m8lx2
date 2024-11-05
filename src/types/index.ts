export interface Location {
  id: string;
  name: string;
  type: 'manufacturer' | 'buyer';
  latitude: number;
  longitude: number;
}

export interface Carrier {
  id: string;
  name: string;
  type: 'tech' | 'traditional';
  serviceAreas: string[];
}

export interface Route {
  id: string;
  origin: Location;
  destination: Location;
  carrier: Carrier;
  distance: number;
  estimatedTime: number;
}
import { create } from 'zustand';
import { Location, Carrier, Route } from '../types';

interface MapStore {
  locations: Location[];
  carriers: Carrier[];
  routes: Route[];
  addLocation: (location: Location) => void;
  addCarrier: (carrier: Carrier) => void;
  addRoute: (route: Route) => void;
  removeLocation: (id: string) => void;
  removeCarrier: (id: string) => void;
  removeRoute: (id: string) => void;
}

export const useMapStore = create<MapStore>((set) => ({
  locations: [],
  carriers: [],
  routes: [],
  
  addLocation: (location) =>
    set((state) => ({ locations: [...state.locations, location] })),
    
  addCarrier: (carrier) =>
    set((state) => ({ carriers: [...state.carriers, carrier] })),
    
  addRoute: (route) =>
    set((state) => ({ routes: [...state.routes, route] })),
    
  removeLocation: (id) =>
    set((state) => ({
      locations: state.locations.filter((location) => location.id !== id),
    })),
    
  removeCarrier: (id) =>
    set((state) => ({
      carriers: state.carriers.filter((carrier) => carrier.id !== id),
    })),
    
  removeRoute: (id) =>
    set((state) => ({
      routes: state.routes.filter((route) => route.id !== id),
    })),
}));
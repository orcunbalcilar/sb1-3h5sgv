import { Observable } from '@nativescript/core';
import { Flight, Airport } from '../models/flight';

export class FlightService extends Observable {
  private airports: Airport[] = [
    { code: 'JFK', city: 'New York', name: 'John F. Kennedy International' },
    { code: 'LAX', city: 'Los Angeles', name: 'Los Angeles International' },
    { code: 'ORD', city: 'Chicago', name: "O'Hare International" },
    { code: 'LHR', city: 'London', name: 'Heathrow' },
  ];

  private flights: Flight[] = [
    {
      id: '1',
      from: 'JFK',
      to: 'LAX',
      departureDate: new Date(2024, 3, 15, 10, 30),
      arrivalDate: new Date(2024, 3, 15, 13, 45),
      price: 299.99,
      airline: 'SkyWings',
      flightNumber: 'SW123'
    },
    {
      id: '2',
      from: 'LAX',
      to: 'ORD',
      departureDate: new Date(2024, 3, 15, 14, 30),
      arrivalDate: new Date(2024, 3, 15, 20, 15),
      price: 199.99,
      airline: 'SkyWings',
      flightNumber: 'SW456'
    }
  ];

  getAirports(): Airport[] {
    return this.airports;
  }

  searchFlights(from: string, to: string, date: Date): Flight[] {
    return this.flights.filter(flight => 
      flight.from === from && 
      flight.to === to && 
      flight.departureDate.toDateString() === date.toDateString()
    );
  }
}
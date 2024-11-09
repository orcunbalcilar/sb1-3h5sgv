import { Observable } from '@nativescript/core';
import { FlightService } from '../services/flight-service';
import { Flight, Airport } from '../models/flight';

export class SearchViewModel extends Observable {
  private flightService: FlightService;
  private _flights: Flight[] = [];
  private _airports: Airport[] = [];
  private _selectedFromAirport: string = '';
  private _selectedToAirport: string = '';
  private _selectedDate: Date = new Date();

  constructor() {
    super();
    this.flightService = new FlightService();
    this._airports = this.flightService.getAirports();
  }

  get flights(): Flight[] {
    return this._flights;
  }

  get airports(): Airport[] {
    return this._airports;
  }

  set selectedFromAirport(value: string) {
    if (this._selectedFromAirport !== value) {
      this._selectedFromAirport = value;
      this.notifyPropertyChange('selectedFromAirport', value);
    }
  }

  set selectedToAirport(value: string) {
    if (this._selectedToAirport !== value) {
      this._selectedToAirport = value;
      this.notifyPropertyChange('selectedToAirport', value);
    }
  }

  set selectedDate(value: Date) {
    if (this._selectedDate !== value) {
      this._selectedDate = value;
      this.notifyPropertyChange('selectedDate', value);
    }
  }

  searchFlights() {
    this._flights = this.flightService.searchFlights(
      this._selectedFromAirport,
      this._selectedToAirport,
      this._selectedDate
    );
    this.notifyPropertyChange('flights', this._flights);
  }
}
export interface Flight {
  id: string;
  from: string;
  to: string;
  departureDate: Date;
  arrivalDate: Date;
  price: number;
  airline: string;
  flightNumber: string;
}

export interface Airport {
  code: string;
  city: string;
  name: string;
}
export interface Hotel {
  id: string;
  name: string;
  description: string;
  amenities: string[];
  paymentInfo: string;
  images: string[];
  contact?: string; // Optional contact number
}

export interface Place {
  id: string;
  name: string;
  description: string;
  hotels: Hotel[];
}

export interface Car {
    id: string;
    name: string; // e.g., "Toyota Innova Crysta"
    type: 'SUV' | 'Sedan' | 'Hatchback' | 'Luxury';
    capacity: number; // Number of passengers
    features: string[]; // e.g., ["AC", "Music System", "Spacious Luggage"]
    pricePerDay: number;
    image: string; // URL to car image
    contactInfo: string; // Phone number or contact details for booking
    bookingInfo: string; // Information about booking process, pickup/drop
    driverProvided: boolean; // Indicates if a driver is included
}

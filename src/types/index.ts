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

import type { Car } from '@/types';

export const cars: Car[] = [
  {
    id: 'innova-crysta',
    name: 'Toyota Innova Crysta',
    type: 'SUV',
    capacity: 7,
    features: ['AC', 'Music System', 'Spacious Luggage', 'Comfortable Seating'],
    pricePerDay: 4500,
    image: 'https://picsum.photos/seed/innovaCrysta/600/400',
    contactInfo: 'Contact us at 555-123-4567 for booking.',
    bookingInfo: 'Driver included. Pickup and drop service available within Gangtok. Bookings confirmed via phone. Payment directly to the driver/office.',
    driverProvided: true,
  },
  {
    id: 'swift-dzire',
    name: 'Maruti Swift Dzire',
    type: 'Sedan',
    capacity: 4,
    features: ['AC', 'Music System', 'Compact Luggage Space'],
    pricePerDay: 3000,
    image: 'https://picsum.photos/seed/swiftDzire/600/400',
    contactInfo: 'Call 555-987-6543 to book.',
    bookingInfo: 'Driver included. Ideal for city tours and nearby places. Pickup/drop included. Payment directly to the driver.',
    driverProvided: true,
  },
  {
    id: 'wagonr',
    name: 'Maruti WagonR',
    type: 'Hatchback',
    capacity: 4,
    features: ['AC', 'Music System', 'Good for Hills'],
    pricePerDay: 2800,
    image: 'https://picsum.photos/seed/wagonR/600/400',
    contactInfo: 'Book via phone: 555-111-2222.',
    bookingInfo: 'Driver included. Suitable for smaller groups and budget travel. Pickup/drop available. Payment directly to the driver.',
    driverProvided: true,
  },
    {
    id: 'mahindra-xuv500',
    name: 'Mahindra XUV500',
    type: 'SUV',
    capacity: 7,
    features: ['AC', 'Music System', 'Sunroof', 'Hill Assist'],
    pricePerDay: 5000,
    image: 'https://picsum.photos/seed/xuv500/600/400',
    contactInfo: 'Call us at 555-333-4444 for availability.',
    bookingInfo: 'Driver included. Great for long distances and comfortable travel. Pickup and drop service available. Bookings confirmed via phone. Payment directly to the driver/office.',
    driverProvided: true,
  },
];

export const getCarById = (id: string): Car | undefined => {
  return cars.find((car) => car.id === id);
};

import type { Place, Hotel } from '@/types';

export const places: Place[] = [
  {
    id: 'gangtok',
    name: 'Gangtok',
    description: 'The vibrant capital city, known for its monasteries, viewpoints, and bustling markets.',
    hotels: [
      {
        id: 'hotel-tashi-deleg',
        name: 'Hotel Tashi Delek',
        description: 'A classic hotel offering stunning views of Kanchenjunga.',
        amenities: ['Restaurant', 'Bar', 'Room Service', 'Wi-Fi'],
        paymentInfo: 'Payment accepted at the hotel counter (Cash/Card).',
        images: [
          'https://picsum.photos/seed/tashidelek1/600/400',
          'https://picsum.photos/seed/tashidelek2/600/400',
          'https://picsum.photos/seed/tashidelek3/600/400',
        ],
        contact: '123-456-7890'
      },
      {
        id: 'mayfair-spa-resort',
        name: 'Mayfair Spa Resort & Casino',
        description: 'Luxury resort with extensive amenities including a spa and casino.',
        amenities: ['Spa', 'Casino', 'Swimming Pool', 'Multiple Restaurants', 'Wi-Fi', 'Gym'],
        paymentInfo: 'Payment accepted at the hotel counter or via bank transfer (details on request).',
        images: [
          'https://picsum.photos/seed/mayfair1/600/400',
          'https://picsum.photos/seed/mayfair2/600/400',
        ],
        contact: '987-654-3210'
      },
    ],
  },
  {
    id: 'pelling',
    name: 'Pelling',
    description: 'Famous for its breathtaking views of the Kanchenjunga range and serene monasteries.',
    hotels: [
      {
        id: 'summit-newa-regency',
        name: 'The Elgin Mount Pandim',
        description: 'Heritage hotel offering panoramic mountain vistas and warm hospitality.',
        amenities: ['Restaurant', 'Bar', 'Garden', 'Room Service'],
        paymentInfo: 'Payment accepted at the hotel counter (Cash/Card).',
        images: [
          'https://picsum.photos/seed/elgin1/600/400',
          'https://picsum.photos/seed/elgin2/600/400',
        ],
        contact: '111-222-3333'
      },
      {
        id: 'norbu-ghang-resort',
        name: 'Norbu Ghang Resort',
        description: 'A comfortable resort with traditional Sikkimese architecture.',
        amenities: ['Restaurant', 'Wi-Fi', 'Bonfire arrangements'],
        paymentInfo: 'Payment accepted at the hotel counter (Cash preferred).',
        images: [
          'https://picsum.photos/seed/norbu1/600/400',
          'https://picsum.photos/seed/norbu2/600/400',
          'https://picsum.photos/seed/norbu3/600/400',
        ],
        contact: '444-555-6666'
      },
    ],
  },
  {
    id: 'lachung',
    name: 'Lachung',
    description: 'A picturesque mountain village near the Tibetan border, gateway to Yumthang Valley.',
    hotels: [
      {
        id: 'yarlam-resort',
        name: 'Yarlam Resort',
        description: 'Offers comfortable stays with basic amenities amidst nature.',
        amenities: ['Restaurant', 'Heated Rooms (chargeable)', 'Room Service'],
        paymentInfo: 'Payment accepted at the hotel counter (Cash only). Limited connectivity.',
        images: [
          'https://picsum.photos/seed/yarlam1/600/400',
          'https://picsum.photos/seed/yarlam2/600/400',
        ],
        contact: '777-888-9999'
      },
       {
        id: 'apple-valley-inn',
        name: 'Apple Valley Inn',
        description: 'Cozy inn providing essential comforts for exploring North Sikkim.',
        amenities: ['Basic Restaurant', 'Hot Water', 'Travel Desk'],
        paymentInfo: 'Payment accepted at the hotel counter (Cash strongly preferred).',
        images: [
          'https://picsum.photos/seed/appleinn1/600/400',
        ],
        contact: '000-111-2222'
      },
    ],
  },
];

export const getPlaceById = (id: string): Place | undefined => {
  return places.find((place) => place.id === id);
};

export const getHotelById = (placeId: string, hotelId: string): Hotel | undefined => {
    const place = getPlaceById(placeId);
    return place?.hotels.find((hotel) => hotel.id === hotelId);
}

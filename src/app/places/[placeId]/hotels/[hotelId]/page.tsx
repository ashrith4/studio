'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getHotelById } from '@/data/sikkimData';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Info, CheckCircle, ArrowLeft } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function HotelDetailPage() {
  const params = useParams();
  const placeId = params.placeId as string;
  const hotelId = params.hotelId as string;
  const hotel = getHotelById(placeId, hotelId);

  if (!hotel) {
    return <div className="text-center py-10">Hotel not found. <Link href={`/places/${placeId}`} className="text-primary hover:underline">Go back to place</Link></div>;
  }

  return (
    <div className="space-y-8">
       <Link href={`/places/${placeId}`} className="inline-flex items-center gap-2 text-primary hover:underline mb-4">
        <ArrowLeft size={16} />
        Back to Hotels in {placeId.charAt(0).toUpperCase() + placeId.slice(1)}
      </Link>

      <Card className="overflow-hidden shadow-lg">
        <CardHeader className="pb-4">
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary">{hotel.name}</CardTitle>
          <CardDescription className="text-base md:text-lg">{hotel.description}</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Image Carousel */}
           {hotel.images && hotel.images.length > 0 && (
              <div className="rounded-lg overflow-hidden border">
                 <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    loop={true}
                    className="h-64 md:h-96" // Adjust height as needed
                 >
                    {hotel.images.map((imgSrc, index) => (
                    <SwiperSlide key={index}>
                        <Image
                        src={imgSrc}
                        alt={`${hotel.name} - Image ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                         className="transition-transform duration-500 ease-in-out hover:scale-105"
                        />
                    </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            )}


          <Separator />

          {/* Amenities Section */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-secondary">Amenities</h3>
            <div className="flex flex-wrap gap-3">
              {hotel.amenities.map((amenity, index) => (
                <Badge key={index} variant="outline" className="flex items-center gap-1.5 text-sm py-1 px-3 border-emerald-500 text-emerald-700 bg-emerald-50">
                    <CheckCircle size={14} className="text-emerald-600"/>
                  {amenity}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Payment and Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div>
                <h3 className="text-xl font-semibold mb-3 text-secondary">Payment Information</h3>
                 <div className="flex items-start gap-2 text-muted-foreground">
                    <Info size={18} className="mt-0.5 shrink-0 text-accent"/>
                    <p>{hotel.paymentInfo}</p>
                 </div>
             </div>
             {hotel.contact && (
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-secondary">Contact Details</h3>
                     <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone size={18} className="shrink-0 text-accent"/>
                        <p>Phone: <a href={`tel:${hotel.contact}`} className="text-primary hover:underline">{hotel.contact}</a></p>
                    </div>
                 </div>
             )}
          </div>

        </CardContent>
      </Card>
    </div>
  );
}

// Optional: Generate static paths if you know all place and hotel IDs beforehand
// export async function generateStaticParams() {
//   const { places } = await import('@/data/sikkimData');
//   const paths = places.flatMap(place =>
//     place.hotels.map(hotel => ({
//       placeId: place.id,
//       hotelId: hotel.id,
//     }))
//   );
//   return paths;
// }

'use client'; // Needed for potential client-side interactions, though data fetching is static-like

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getPlaceById } from '@/data/sikkimData';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BedDouble, Utensils, Wifi, Info, Phone } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Separator } from '@/components/ui/separator';

export default function PlacePage() {
  const params = useParams();
  const placeId = params.placeId as string;
  const place = getPlaceById(placeId);

  if (!place) {
    return <div className="text-center py-10">Place not found. <Link href="/" className="text-primary hover:underline">Go back home</Link></div>;
  }

  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-2">{place.name}</h1>
        <p className="text-lg text-muted-foreground">{place.description}</p>
      </section>

      <Separator />

      <section>
        <h2 className="text-3xl font-semibold mb-6 text-secondary">Hotels in {place.name}</h2>
        {place.hotels.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {place.hotels.map((hotel) => (
              <Card key={hotel.id} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out rounded-lg border">
                 {/* Image Carousel Placeholder - Using first image for now */}
                 <div className="relative w-full h-48">
                    <Image
                      src={hotel.images[0]}
                      alt={`Image of ${hotel.name}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                 </div>

                <CardHeader className="pb-2">
                   <Link href={`/places/${placeId}/hotels/${hotel.id}`} className="hover:text-primary transition-colors">
                     <CardTitle className="text-xl font-semibold">{hotel.name}</CardTitle>
                  </Link>
                  <CardDescription className="text-sm">{hotel.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-grow flex flex-col justify-between pt-2">
                  <div>
                    <h4 className="font-medium text-sm mb-2 text-secondary">Amenities:</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {hotel.amenities.map((amenity, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-emerald-100 text-emerald-800 border-emerald-300">
                            {/* Basic Icon mapping */}
                            {amenity.toLowerCase().includes('restaurant') && <Utensils className="h-3 w-3 mr-1"/>}
                            {amenity.toLowerCase().includes('wi-fi') && <Wifi className="h-3 w-3 mr-1"/>}
                            {amenity.toLowerCase().includes('room service') && <BedDouble className="h-3 w-3 mr-1"/>}
                           {amenity}
                        </Badge>
                      ))}
                    </div>
                     <div className="flex items-start gap-2 text-sm text-muted-foreground mb-2">
                        <Info size={16} className="mt-0.5 shrink-0" />
                        <span>{hotel.paymentInfo}</span>
                    </div>
                     {hotel.contact && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Phone size={16} className="shrink-0"/>
                            <span>Contact: {hotel.contact}</span>
                        </div>
                    )}
                  </div>

                   <Link href={`/places/${placeId}/hotels/${hotel.id}`} className="mt-4 block text-center">
                        <span className="text-primary hover:underline font-medium text-sm">View Details & Photos</span>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No hotels listed for this place yet.</p>
        )}
      </section>
       <div className="text-center mt-8">
            <Link href="/" className="text-primary hover:underline">&larr; Back to all places</Link>
       </div>
    </div>
  );
}

// Optional: Generate static paths if you know all place IDs beforehand
// export async function generateStaticParams() {
//   const { places } = await import('@/data/sikkimData'); // Adjust path as needed
//   return places.map((place) => ({
//     placeId: place.id,
//   }));
// }

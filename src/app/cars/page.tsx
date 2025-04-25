'use client';

import Image from 'next/image';
import { cars } from '@/data/carData'; // Import car data
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Info, CheckCircle, Users, Snowflake, Music, IndianRupee, UserCheck } from 'lucide-react'; // Import relevant icons
import { Separator } from '@/components/ui/separator';

export default function CarsPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-2">Car Rentals in Sikkim</h1>
        <p className="text-lg text-muted-foreground">Explore Sikkim at your own pace. We offer reliable cars with experienced drivers, including pickup and drop services.</p>
      </section>

      <Separator />

      <section>
        <h2 className="text-3xl font-semibold mb-6 text-secondary">Available Vehicles</h2>
        {cars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cars.map((car) => (
              <Card key={car.id} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out rounded-lg border">
                 <div className="relative w-full h-56 md:h-64"> {/* Increased height for car images */}
                    <Image
                      src={car.image}
                      alt={`Image of ${car.name}`}
                      layout="fill"
                      objectFit="cover"
                       className="transition-transform duration-300 group-hover:scale-105"
                    />
                 </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-semibold text-primary">{car.name}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground pt-1">
                     <Badge variant="secondary" className="flex items-center gap-1">
                        <Users size={14}/> {car.capacity} Seater
                     </Badge>
                      <Badge variant="outline">{car.type}</Badge>
                     {car.driverProvided && (
                        <Badge variant="outline" className="flex items-center gap-1 text-emerald-700 border-emerald-300 bg-emerald-50">
                            <UserCheck size={14} /> Driver Included
                        </Badge>
                      )}
                  </div>
                </CardHeader>

                <CardContent className="flex-grow flex flex-col justify-between pt-2">
                  <div>
                    <h4 className="font-medium text-sm mb-2 text-secondary">Features:</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {car.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs flex items-center gap-1">
                          {feature.toLowerCase().includes('ac') && <Snowflake size={12} />}
                          {feature.toLowerCase().includes('music') && <Music size={12} />}
                          {feature}
                        </Badge>
                      ))}
                    </div>

                     <Separator className="my-3"/>

                     <div className="mb-3">
                        <h4 className="font-medium text-sm mb-1 text-secondary">Pricing:</h4>
                         <div className="flex items-center gap-1 text-lg font-semibold text-primary">
                            <IndianRupee size={18}/> {car.pricePerDay.toLocaleString()} <span className="text-sm font-normal text-muted-foreground">/ day</span>
                        </div>
                     </div>


                     <div className="flex items-start gap-2 text-sm text-muted-foreground mb-2">
                        <Info size={16} className="mt-0.5 shrink-0 text-accent" />
                        <span>{car.bookingInfo}</span>
                    </div>
                     <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone size={16} className="shrink-0 text-accent"/>
                        <span>{car.contactInfo}</span>
                    </div>
                  </div>

                   {/* Removed View Details button as all details are on the card */}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No cars listed currently. Please check back later or contact us directly.</p>
        )}
      </section>
    </div>
  );
}

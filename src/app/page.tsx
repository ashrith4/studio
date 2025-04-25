import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, MountainSnow, Trees, Car } from 'lucide-react'; // Added Car icon
import { places } from '@/data/sikkimData';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Sikkim Overview Section */}
      <section className="relative rounded-lg overflow-hidden shadow-lg">
        <Image
          src="https://picsum.photos/seed/sikkimHero/1200/500"
          alt="Panoramic view of Sikkim mountains"
          width={1200}
          height={500}
          className="w-full h-[300px] md:h-[500px] object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">Welcome to Sikkim!</h1>
          <p className="text-lg md:text-xl max-w-3xl drop-shadow-sm">
            Nestled in the Himalayas, Sikkim is a land of breathtaking landscapes, vibrant culture, and serene monasteries. Explore snow-capped peaks, lush valleys, and unique biodiversity.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 items-center text-sm md:text-base"> {/* Added flex-wrap */}
             <span className="flex items-center gap-1 bg-black/50 px-3 py-1 rounded-full"><MountainSnow className="h-4 w-4" /> Himalayas</span>
             <span className="flex items-center gap-1 bg-black/50 px-3 py-1 rounded-full"><Trees className="h-4 w-4" /> Rich Flora & Fauna</span>
             <span className="flex items-center gap-1 bg-black/50 px-3 py-1 rounded-full">🧘 Serene Monasteries</span>
          </div>
        </div>
      </section>

       {/* Car Rental Promo Section */}
      <section className="bg-accent/10 p-6 rounded-lg shadow-sm border border-accent/30 text-center">
          <h3 className="text-2xl font-semibold mb-3 text-secondary flex items-center justify-center gap-2">
              <Car className="h-6 w-6 text-primary"/> Need Transportation?
          </h3>
          <p className="text-muted-foreground mb-4">
            Explore Sikkim comfortably with our reliable car rental service. We provide cars with experienced drivers and pickup/drop facilities.
          </p>
          <Link href="/cars" passHref>
            <Button variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90">
              View Available Cars
            </Button>
          </Link>
      </section>


      {/* Places Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center text-secondary">Explore Places in Sikkim</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {places.map((place) => (
            <Card key={place.id} className="hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <MapPin className="h-5 w-5" />
                  {place.name}
                </CardTitle>
                <CardDescription>{place.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                 {/* Placeholder image for the place */}
                 <Image
                    src={`https://picsum.photos/seed/${place.id}/400/200`}
                    alt={`Image of ${place.name}`}
                    width={400}
                    height={200}
                    className="rounded-md mb-4 w-full h-40 object-cover"
                  />
                <Link href={`/places/${place.id}`} passHref className="mt-auto">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                    View Hotels in {place.name}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Travel Tips Section */}
      <section className="bg-muted p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold mb-4 text-secondary">Travel Tips for Sikkim</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Best time to visit: March-May (Spring) & October-Mid-December (Autumn).</li>
              <li>Permits: Certain areas (like North Sikkim, Nathula Pass) require permits. Arrange these in advance through registered travel agents.</li>
              <li>Acclimatization: Crucial for high-altitude areas like North Sikkim. Ascend gradually.</li>
              <li>Connectivity: Network coverage can be patchy in remote areas.</li>
              <li>Respect Local Culture: Dress modestly when visiting monasteries and respect local customs.</li>
              <li>Transportation: Book vehicles in advance, especially during peak season. Shared taxis are common, but private rentals offer more flexibility.</li> {/* Added transport tip */}
          </ul>
      </section>

    </div>
  );
}

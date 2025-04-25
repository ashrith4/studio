import Link from 'next/link';
import { Mountain, Car } from 'lucide-react'; // Added Car icon
import { Button } from '@/components/ui/button'; // Import Button for consistent styling

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center"> {/* Adjusted padding */}
        <Link href="/" className="flex items-center gap-2 text-xl md:text-2xl font-bold hover:opacity-90 transition-opacity">
          <Mountain className="h-7 w-7 md:h-8 md:w-8" />
          Sikkim Getaways
        </Link>
        <nav>
          <Button variant="ghost" asChild className="text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground px-3 py-1.5 md:px-4 md:py-2">
            <Link href="/cars" className="flex items-center gap-1.5 text-sm md:text-base">
              <Car className="h-4 w-4 md:h-5 md:w-5" />
              Car Rentals
            </Link>
          </Button>
          {/* Placeholder for potential future navigation */}
          {/* <Link href="/about" className="hover:underline ml-4">About</Link> */}
        </nav>
      </div>
    </header>
  );
}

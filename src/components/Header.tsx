import Link from 'next/link';
import { Mountain } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold hover:opacity-90 transition-opacity">
          <Mountain className="h-8 w-8" />
          Sikkim Getaways
        </Link>
        {/* Placeholder for potential future navigation */}
        {/* <nav>
          <Link href="/about" className="hover:underline">About</Link>
        </nav> */}
      </div>
    </header>
  );
}

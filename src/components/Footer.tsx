export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary text-secondary-foreground py-6 mt-12">
      <div className="container mx-auto px-4 text-center text-sm">
        <p>&copy; {currentYear} Sikkim Getaways. All rights reserved.</p>
        <p className="mt-1">Discover the wonders of Sikkim.</p>
      </div>
    </footer>
  );
}

import { personalInfo } from '@/data/portfolio-data';
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="flex items-center justify-center text-sm">
          Made with <Heart className="w-4 h-4 mx-1 text-red-500 fill-red-500" /> by {personalInfo.name}
        </p>
        <p className="text-sm mt-1">
          &copy; {currentYear} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Feather } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggleButton } from '@/components/theme-toggle-button';
import { personalInfo } from '@/data/portfolio-data';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const listItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 120,
      },
    }),
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="#hero" passHref legacyBehavior>
            <a className="flex items-center space-x-2 text-2xl font-extrabold hover:opacity-80 transition-opacity" style={{ color: '#f97316' }}>
              <Feather className="h-7 w-7" style={{ color: '#f97316' }} />
              <span className="ukr-pop font-extrabold italic">UKR</span>
            </a>
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, i) => (
              <motion.div key={item.name} custom={i} variants={listItemVariants} initial="hidden" animate="visible">
                <Button variant="ghost" asChild className="text-black hover:text-orange-500">
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              </motion.div>
            ))}
            <div className="ml-2" style={{ color: '#000' }}>
              <ThemeToggleButton />
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <div style={{ color: '#000' }}>
              <ThemeToggleButton />
            </div>
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="ml-2 text-black">
              {isOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-black" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-md shadow-lg pb-4"
        >
          <ul className="flex flex-col items-center space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Button variant="ghost" asChild onClick={() => setIsOpen(false)} className="w-full text-center py-3">
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      <style jsx global>{`
        .ukr-pop {
          animation: ukrPopColor 4s linear infinite;
          transition: color 0.5s;
        }
        @keyframes ukrPopColor {
          0%   { color: #f97316; }
          25%  { color: #38bdf8; }
          50%  { color: #34d399; }
          75%  { color: #f472b6; }
          100% { color: #f97316; }
        }
      `}</style>
    </motion.nav>
  );
}

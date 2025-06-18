"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown, FileText } from 'lucide-react';
import { personalInfo } from '@/data/portfolio-data';

export function HeroSection() {
  return (
    <section 
      id="hero" 
      className="hero w-full min-h-[450px] relative flex items-center justify-center overflow-hidden"
      style={{ fontFamily: 'Lato, Arial, sans-serif', backgroundColor: '#d9edfd' }}
    >
      {/* Parallax Layers */}
      <div className="parallax-layer layer-6 absolute bottom-0 left-0 w-full h-full" style={{ background: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/24650/6.png) 0 100% repeat-x', backgroundSize: 'auto 222px', animation: 'parallax_fg linear 120s infinite both', zIndex: 1 }} />
      <div className="parallax-layer layer-5 absolute bottom-0 left-0 w-full h-full" style={{ background: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/24650/5.png) 0 100% repeat-x', backgroundSize: 'auto 311px', animation: 'parallax_fg linear 95s infinite both', zIndex: 1 }} />
      <div className="parallax-layer layer-4 absolute bottom-0 left-0 w-full h-full" style={{ background: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/24650/4.png) 0 100% repeat-x', backgroundSize: 'auto 468px', animation: 'parallax_fg linear 75s infinite both', zIndex: 1 }} />
      <div className="parallax-layer bike-1 absolute bottom-[100px] left-0 w-full h-full" style={{ background: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/24650/bike.png) 0 100% no-repeat', backgroundSize: 'auto 75px', animation: 'parallax_bike linear 10s infinite both', zIndex: 2 }} />
      <div className="parallax-layer bike-2 absolute bottom-[100px] left-0 w-full h-full" style={{ background: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/24650/bike.png) 0 100% no-repeat', backgroundSize: 'auto 75px', animation: 'parallax_bike linear 15s infinite both', zIndex: 2 }} />
      <div className="parallax-layer layer-3 absolute bottom-0 left-0 w-full h-full" style={{ background: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/24650/3.png) 0 100% repeat-x', backgroundSize: 'auto 158px', animation: 'parallax_fg linear 55s infinite both', zIndex: 1 }} />
      <div className="parallax-layer layer-2 absolute bottom-0 left-0 w-full h-full" style={{ background: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/24650/2.png) 0 100% repeat-x', backgroundSize: 'auto 145px', animation: 'parallax_fg linear 30s infinite both', zIndex: 1 }} />
      <div className="parallax-layer layer-1 absolute bottom-0 left-0 w-full h-full" style={{ background: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/24650/1.png) 0 100% repeat-x', backgroundSize: 'auto 136px', animation: 'parallax_fg linear 20s infinite both', zIndex: 1 }} />
      {/* Hero Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight" style={{ color: '#12212f', fontFamily: 'Lato, Arial, sans-serif', textShadow: '0 4px 24px rgba(18,33,47,0.10)' }}>{personalInfo.name}</h1>
        <p className="text-xl md:text-2xl font-semibold mb-2" style={{ color: '#12212f', fontFamily: 'Lato, Arial, sans-serif', textShadow: '0 2px 8px rgba(18,33,47,0.10)' }}>{personalInfo.title}</p>
        <p className="text-lg md:text-xl mb-8" style={{ color: '#12212f', fontFamily: 'Lato, Arial, sans-serif', textShadow: '0 1px 4px rgba(18,33,47,0.08)' }}>{personalInfo.bio}</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button size="lg" asChild className="rounded-full px-10 py-4 text-lg font-bold shadow-lg bg-gradient-to-r from-blue-500 to-green-400 text-white border-0 hover:from-blue-600 hover:to-green-500 transition-all duration-300">
            <Link href="#projects">
              <ArrowDown className="mr-2 h-5 w-5" /> View Projects
            </Link>
          </Button>
          <Button size="lg" asChild className="rounded-full px-10 py-4 text-lg font-bold shadow-lg bg-gray-800 text-white border-0 hover:bg-gray-700 transition-all duration-300">
            <Link href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-5 w-5" /> Download Resume
            </Link>
          </Button>
        </div>
      </div>
      <style jsx global>{`
        @keyframes parallax_fg {
          0% { background-position: 2765px 100%; }
          100% { background-position: 550px 100%; }
        }
        @keyframes parallax_bike {
          0% { background-position: -300px 100%; }
          100% { background-position: 2000px 100%; }
        }
      `}</style>
    </section>
  );
}

// Removed previous comments about keyframes for spin-slow

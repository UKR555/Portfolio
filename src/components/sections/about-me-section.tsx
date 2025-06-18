"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { personalInfo } from '@/data/portfolio-data';

export function AboutMeSection() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="about" className="bg-secondary dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Card className="overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2 gap-0 items-center">
              <motion.div 
                className="relative h-80 md:h-full w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/about-me-image.png"
                    alt={personalInfo.name}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="transition-transform duration-500 hover:scale-105"
                    data-ai-hint="illustrated portrait"
                    priority
                    unoptimized
                  />
                </motion.div>
              </motion.div>
              <div className="p-8 md:p-12">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <motion.div
                    custom={0}
                    variants={textVariants}
                  >
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-3xl md:text-4xl font-headline text-primary">About Me</CardTitle>
                    </CardHeader>
                  </motion.div>
                  <motion.div
                    custom={1}
                    variants={textVariants}
                  >
                    <CardContent className="p-0">
                      <p className="text-lg text-foreground leading-relaxed">
                        {personalInfo.aboutMe}
                      </p>
                    </CardContent>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

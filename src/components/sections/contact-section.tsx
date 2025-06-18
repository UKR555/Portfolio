"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Linkedin, Github, Twitter, Phone } from 'lucide-react';
import { personalInfo } from '@/data/portfolio-data';

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: [0, 10, -10, 0],
    transition: { duration: 0.3 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

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

export function ContactSection() {
  return (
    <section id="contact" className="bg-secondary dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-headline font-bold text-center mb-12 text-primary"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="max-w-lg mx-auto shadow-xl">
            <CardHeader>
              <motion.div
                custom={0}
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <CardTitle className="text-center text-2xl">Let&apos;s Connect!</CardTitle>
              </motion.div>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <motion.p 
                className="text-muted-foreground"
                custom={1}
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out!
              </motion.p>
              
              <motion.div 
                className="space-y-3"
                custom={2}
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="link" asChild className="text-lg text-primary hover:underline">
                    <Link href={`mailto:${personalInfo.email}`}>
                      <Mail className="mr-2 h-5 w-5" /> {personalInfo.email}
                    </Link>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="link" asChild className="text-lg text-primary hover:underline">
                    <Link href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-5 w-5" /> LinkedIn Profile
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div 
                className="flex justify-center space-x-4 pt-4"
                custom={3}
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={iconVariants} whileHover="hover">
                  <Button variant="outline" size="icon" asChild>
                    <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="h-6 w-6" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div variants={iconVariants} whileHover="hover">
                  <Button variant="outline" size="icon" asChild>
                    <Link href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="h-6 w-6" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div variants={iconVariants} whileHover="hover">
                  <Button variant="outline" size="icon" asChild>
                    <Link href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                      <Twitter className="h-6 w-6" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
        {/* 
          If a contact form is desired later:
          It would involve react-hook-form, zod for validation, and a server action or API endpoint.
          For now, direct links are simpler and fulfill the request for "email & LinkedIn links".
        */}
      </div>
    </section>
  );
}

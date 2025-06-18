"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { personalInfo } from '@/data/portfolio-data';

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

export function ResumeSection() {
  return (
    <section id="resume" className="bg-background">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-headline font-bold mb-8 text-primary"
            custom={0}
            variants={textVariants}
          >
            My Resume
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            custom={1}
            variants={textVariants}
          >
            Interested in learning more about my professional experience? Download my resume to get a comprehensive overview of my skills, achievements, and qualifications.
          </motion.p>
          <motion.div
            custom={2}
            variants={textVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" asChild className="shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Link href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" download>
                <Download className="mr-2 h-5 w-5" /> Download Resume (PDF)
              </Link>
            </Button>
          </motion.div>
        </motion.div>
        {/* Optionally, a brief timeline or achievements can be added here */}
        {/* For example:
        <div className="mt-12 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Key Achievements</h3>
          <ul className="text-left space-y-4">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span>Developed and launched X project, resulting in Y% improvement.</span>
            </li>
            <li className="flex items-start">
              <Award className="h-5 w-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
              <span>Received Z award for outstanding performance in ...</span>
            </li>
          </ul>
        </div>
        */}
      </div>
    </section>
  );
}

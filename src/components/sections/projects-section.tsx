"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Code2, Brain, Cloud, FileCode, Database, Smartphone, GitMerge, Layers } from 'lucide-react';
import { projectsData } from '@/data/portfolio-data';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
  hover: {
    y: -10,
    scale: 1.02,
    boxShadow: "0px 15px 25px rgba(0,0,0,0.15)",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const imageVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Map project titles to Lucide icons
const projectIcons: Record<string, any> = {
  'Plant Disease Detection': Brain,
  'Quiz Application': FileCode,
  'Customer Churn Prediction': Database,
  'FoodCycle Robot': Cloud,
  'FoodCycle Bot': Cloud,
  'DAN - Donation App': GitMerge,
  'Portfolio Website (This one!)': Layers,
};

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-secondary dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-headline font-bold text-center mb-12 text-primary"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => {
            const Icon = projectIcons[project.title] || Code2;
            return (
              <motion.div
                key={project.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.2 }}
                className="h-full"
              >
                <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  {/* Neon Icon instead of Image */}
                  <div className="flex justify-center items-center pt-8 pb-2">
                    <span className="rounded-full p-4" style={{
                      background: 'radial-gradient(circle, rgba(249,115,22,0.25) 0%, rgba(59,130,246,0.10) 100%)',
                      boxShadow: '0 0 24px 6px #f97316, 0 0 48px 12px #38bdf8',
                    }}>
                      <Icon className="h-14 w-14 text-orange-400 drop-shadow-[0_0_12px_#f97316]" />
                    </span>
                  </div>
                  <CardHeader>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <CardDescription className="text-sm h-20 overflow-y-auto">{project.description}</CardDescription>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="flex-grow" />
                  <CardFooter className="flex justify-end space-x-2">
                    {project.liveDemoUrl && (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button variant="outline" asChild>
                          <Link href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                          </Link>
                        </Button>
                      </motion.div>
                    )}
                    {project.githubUrl && (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button variant="default" asChild>
                          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" /> GitHub
                          </Link>
                        </Button>
                      </motion.div>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

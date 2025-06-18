"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { skillsData, type SkillCategory } from '@/data/portfolio-data';
import { cn } from '@/lib/utils';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
  hover: {
    scale: 1.05,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const progressVariants = {
  hidden: { width: 0 },
  visible: (level: number) => ({
    width: `${level}%`,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.5
    }
  })
};

const categoryVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export function SkillsSection() {
  return (
    <section id="skills" className="bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-headline font-bold text-center mb-12 text-primary"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        
        <div className="space-y-12">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              custom={categoryIndex}
              variants={categoryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.h3 
                className="text-2xl font-bold text-center mb-8 text-secondary-foreground border-b-2 border-primary pb-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                {category.title}
              </motion.h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    custom={skillIndex}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, amount: 0.2 }}
                    className="h-full"
                  >
                    <Card className="text-center h-full flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardHeader className="pb-2">
                        {skill.icon && (
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <skill.icon className="mx-auto h-10 w-10 text-primary mb-2" />
                          </motion.div>
                        )}
                        <CardTitle className="text-lg font-medium">{skill.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        {skill.level && (
                          <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={skill.level}
                            variants={progressVariants}
                          >
                            <Progress value={skill.level} aria-label={`${skill.name} proficiency ${skill.level}%`} className="h-2" />
                          </motion.div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaFileExcel, FaFileWord, FaFilePowerpoint } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb } from 'react-icons/si';

const skillCategories = {
  'Programming Languages': [
    { name: 'C', icon: FaReact,  },
    { name: 'Java', icon: FaReact,  },
    { name: 'Python', icon: FaPython, },
    { name: 'JavaScript', icon: FaReact, level: 85 },
  ],
  'Frontend Development': [
    { name: 'HTML', icon: FaReact, },
    { name: 'CSS', icon: FaReact, level: 90 },
    { name: 'React.js', icon: FaReact, level: 90 },
    { name: 'Next.js', icon: SiNextdotjs, level: 85 },
  ],
  'Backend & Tools': [
    
    { name: 'Supabase', icon: FaDatabase, level: 70 },
    { name: 'Firebase', icon: SiMongodb, level: 40 },
    { name: 'Git', icon: FaDatabase, level: 80 },
    { name: 'VS Code', icon: FaDatabase, level: 90 },
  ],
  
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-accent-color-soft dark:bg-accent-color/30 px-8 py-3 rounded-xl shadow-lg mb-4">
            <h2 className="text-5xl font-bold text-gray-800 dark:text-white glow-text">Skills</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technical expertise and tools I use to bring ideas to life
          </p>
        </motion.div>

        {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="text-3xl font-semibold text-gray-800 dark:text-white mb-8"
            >
              {category}
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1, type: 'spring' }}
                  viewport={{ once: true, amount: 0.4 }}
                  whileHover={{ y: -10, scale: 1.08, rotate: 0 }}
                  className="card p-6 text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="text-4xl text-accent-color mb-4 flex justify-center"
                  >
                    <skill.icon />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">{skill.name}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb } from 'react-icons/si';

const skills = [
  { name: 'C', icon: FaReact, level: 80 },
  { name: 'C++', icon: FaReact, level: 85 },
  { name: 'Python', icon: FaPython, level: 90 },
  { name: 'JavaScript', icon: FaReact, level: 85 },
  { name: 'HTML', icon: FaReact, level: 90 },
  { name: 'CSS', icon: FaReact, level: 90 },
  { name: 'React.js', icon: FaReact, level: 90 },
  { name: 'Next.js', icon: SiNextdotjs, level: 85 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
  { name: 'FastAPI', icon: FaNodeJs, level: 70 },
  { name: 'TensorFlow (learning)', icon: FaPython, level: 50 },
  { name: 'Framer Motion', icon: FaReact, level: 80 },
  { name: 'Supabase', icon: FaDatabase, level: 70 },
  { name: 'Git', icon: FaDatabase, level: 85 },
  { name: 'Firebase', icon: SiMongodb, level: 80 },
  { name: 'VS Code', icon: FaDatabase, level: 90 },
  { name: 'PyCharm', icon: FaDatabase, level: 80 },
  { name: 'Web Development', icon: FaReact, level: 90 },
  { name: 'Machine Learning (beginner)', icon: FaPython, level: 60 },
  { name: 'IoT (project-based)', icon: FaNodeJs, level: 70 },
  { name: 'Web3 (exploring)', icon: FaReact, level: 50 },
  { name: 'DSA (C++)', icon: FaReact, level: 75 },
  { name: 'Event Management', icon: FaReact, level: 90 },
  { name: 'Communication', icon: FaReact, level: 90 },
  { name: 'Fast Typing', icon: FaReact, level: 95 },
  { name: 'Public Speaking', icon: FaReact, level: 85 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 glow-text">Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technical expertise and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-lg text-center hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl text-blue-500 mb-4 flex justify-center">
                <skill.icon />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{skill.name}</h3>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-blue-500 h-2.5 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
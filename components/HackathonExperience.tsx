'use client';

import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward } from 'react-icons/fa';

interface Hackathon {
  title: string;
  date: string;
  position: string;
  description: string;
  icon: typeof FaTrophy;
}

const hackathons: Hackathon[] = [
  {
    title: "Annual Tech Fest Hackathon",
    date: "2023",
    position: "1st Place",
    description: "Developed an AI-powered healthcare solution for early disease detection",
    icon: FaTrophy
  },
  {
    title: "National IoT Challenge",
    date: "2023",
    position: "2nd Place",
    description: "Created a smart home automation system with voice control",
    icon: FaMedal
  },
  {
    title: "Startup Weekend",
    date: "2022",
    position: "Best Innovation",
    description: "Pitched and developed a sustainable energy management platform",
    icon: FaAward
  }
];

export default function HackathonExperience() {
  return (
    <section id="hackathons" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 glow-text">Hackathon Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing my competitive spirit and innovative thinking
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 border-l-2 border-blue-500 last:border-l-0"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                <hackathon.icon className="text-white text-sm" />
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{hackathon.title}</h3>
                  <span className="text-blue-500 font-semibold">{hackathon.position}</span>
                </div>
                <div className="text-gray-400 text-sm mb-4">{hackathon.date}</div>
                <p className="text-gray-300">{hackathon.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
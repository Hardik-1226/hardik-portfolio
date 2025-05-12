'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Achievement {
  title: string;
  description: string;
  image: string;
  date: string;
}

const achievements: Achievement[] = [
  {
    title: "Winner – IIIT Delhi National Hackathon",
    description: "Secured 1st place among 50+ teams for AI Scheme Recommender.",
    image: "/20250221_165439.jpg",
    date: "2024"
  },
  {
    title: "PR Team Member – Abhyudaya Club, GL Bajaj",
    description: "Active member of the public relations team, organizing and promoting tech events.",
    image: "/IMG_9021[1].PNG",
    date: "2024"
  },
  {
    title: "💻 Gesture-Controlled Cursor System (Mini Project)",
    description: "Built a Python-based system that uses real-time motion data from an ADXL345 sensor to control the computer cursor, leveraging libraries like pyserial, pyautogui, and pynput—eliminating the need for a physical mouse.",
    image: "/Screenshot 2025-05-12 222601.png",
    date: "2023"
  },
  {
    title: "🎓 My Academic Achievements",
    description: "I've always been dedicated to my studies and passionate about technology, scoring 90% in Class 10th, 86% in Class 12th (PCM), and securing 90+ percentile in JEE Mains, which helped me get into a reputed engineering college.",
    image: "/profile.png",
    date: "2024"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-accent-color-soft dark:bg-accent-color/30 px-8 py-3 rounded-xl shadow-lg mb-4">
            <h2 className="text-4xl font-bold glow-text">Achievements</h2>
          </div>
          <p className="max-w-2xl mx-auto">
            Recognition and accomplishments that showcase my dedication to technology and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: index * 0.1, type: 'spring' }}
              viewport={{ once: true, amount: 0.4 }}
              className="card rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={achievement.image}
                  alt={achievement.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

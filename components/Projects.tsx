'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  techStack?: { label: string; items: string[] }[];
}

const projects: Project[] = [
  {
    title: "AI Scheme Recommender (Winner - IIIT Delhi Hackathon)",
    description: "Built an AI-based agent that recommends government schemes based on a user profile. Integrated voice assistant, FastAPI backend, and Supabase (attempted). Won first prize among 50+ teams.",
    image: "/Screenshot 2025-05-12 222925.png",
    technologies: ["AI", "FastAPI", "Supabase", "Voice Assistant"],
    githubUrl: "https://github.com/hardikvarshney5/ai-scheme-recommender",
    liveUrl: "#"
  },
  {
    title: "SpendWise – Budgeting Tool for Students",
    description: "Web app to help students track and manage spending. Included expense insights, budget planning, and visual charts. Featured in college hackathon.",
    image: "/Screenshot 2025-05-09 201944.png",
    technologies: ["React", "Charts", "Budgeting"],
    githubUrl: "",
    liveUrl: "https://coding-panda.vercel.app/"
  },
  {
    title: "SunShare – Community Solar Investment Platform",
    description: "Built for a hackathon around sustainability. Users can buy shares in solar projects and track energy savings. INR-based financial visualization included.",
    image: "/HomePageSunShare.png",
    technologies: ["Web3", "Sustainability", "Finance"],
    githubUrl: "https://github.com/hardikvarshney5/sunshare",
    liveUrl: "https://eagle-bitz-f64p.vercel.app/"
  },
  {
    title: "Gesture-Based Cursor Control for Wearable Devices",
    description: "Designed and developed a gesture-controlled system that enables users to operate a computer cursor using wrist and hand movements—ideal for smartwatches and compact wearables. This project replaces traditional input devices like a mouse by capturing real-time motion data through the ADXL345 sensor and mapping it to cursor coordinates. Key Features: Real-time cursor movement via wrist gestures Smooth X-Y axis tracking with minimal latency Compact design tailored for wearable integration Future scope includes gesture-based typing (virtual keyboard)",
    image: "/Screenshot 2025-05-12 222037.png",
    technologies: ["AI", "Career Mapping"],
    githubUrl: "https://github.com/hardikvarshney5/ai-career-mapping",
    liveUrl: "#",
    techStack: [
      { label: 'Hardware', items: ['ADXL345', 'Arduino Uno/Nano'] },
      { label: 'Languages & Tools', items: ['C/C++', 'Python', 'Arduino IDE'] },
      { label: 'Python Libraries', items: ['pyserial', 'pyautogui', 'pynput', 'opencv-python', 'matplotlib (for visualization)'] },
    ],
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-accent-color-soft dark:bg-accent-color/30 px-8 py-3 rounded-xl shadow-lg mb-4">
            <h2 className="text-5xl font-bold text-gray-800 dark:text-white glow-text">Projects</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing my technical expertise through real-world applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1, type: 'spring' }}
              viewport={{ once: true, amount: 0.4 }}
              whileHover={{ y: -10, scale: 1.08, rotate: 0 }}
              className="card overflow-hidden group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative h-48 w-full overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                {project.techStack && (
                  <div className="text-left text-sm mb-4 mt-2 bg-white/80 dark:bg-[#223] border border-accent-color/40 dark:border-cyan-400/30 px-4 py-2 rounded-lg shadow">
                    <div className="font-semibold mb-1">Tech Stack:</div>
                    <ul className="list-disc list-inside space-y-1">
                      {project.techStack.map((section: any) => (
                        <li key={section.label}>
                          <span className="font-semibold">{section.label}:</span> {section.items.join(', ')}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mb-4">
                  <div className="inline-flex flex-row flex-wrap items-center px-3 py-2 rounded-lg shadow bg-gradient-to-r from-cyan-100 via-blue-100 to-accent-color-soft dark:from-[#223] dark:via-[#234] dark:to-cyan-900 border border-accent-color/40 dark:border-cyan-400/30">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-accent-color rounded-full text-sm font-semibold bg-white/60 dark:bg-[#223]${idx !== 0 ? ' border-l border-accent-color/30 dark:border-cyan-400/20 ml-2' : ''}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-accent-color transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub className="text-xl" />
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-accent-color transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaExternalLinkAlt className="text-xl" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
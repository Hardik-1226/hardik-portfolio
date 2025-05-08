'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: 'AI Scheme Recommender',
    description: 'A voice-enabled AI assistant that helps users find and understand government schemes based on their profile and needs.',
    image: '/projects/scheme-recommender.jpg',
    tags: ['AI', 'Voice Assistant', 'Python', 'FastAPI'],
    link: '#'
  },
  {
    title: 'SpendWise',
    description: 'A comprehensive budgeting tool designed specifically for students to track expenses and manage finances effectively.',
    image: '/projects/spendwise.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: '#'
  },
  {
    title: 'SunShare',
    description: 'A community-driven platform for solar energy investment and sharing, promoting sustainable energy solutions.',
    image: '/projects/sunshare.jpg',
    tags: ['Web3', 'Solidity', 'React', 'Blockchain'],
    link: '#'
  },
  {
    title: 'Smart Helmet',
    description: 'An IoT-based smart helmet with gesture recognition for hands-free control and enhanced safety features.',
    image: '/projects/smart-helmet.jpg',
    tags: ['IoT', 'Arduino', 'Python', 'Computer Vision'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.link}
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
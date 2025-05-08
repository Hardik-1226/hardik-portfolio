'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            About Me
          </h2>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate B.Tech student at GL Bajaj Institute of Technology and Management,
              deeply interested in cutting-edge technologies and their real-world applications.
              My journey in tech has been driven by a curiosity to solve complex problems and
              create meaningful solutions.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Currently, I'm focusing on:
            </p>
            
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Mastering Machine Learning and AI concepts</li>
              <li>Building IoT projects for smart solutions</li>
              <li>Contributing to Web3 and blockchain development</li>
              <li>Preparing for competitive exams (SSC CGL, ISRO, DRDO)</li>
            </ul>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-6">
              I believe in continuous learning and applying my knowledge to create
              impactful solutions. My experience in hackathons has taught me the
              importance of rapid prototyping and teamwork in solving real-world
              challenges.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
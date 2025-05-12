'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaLanguage, FaLightbulb, FaCode, FaLaptopCode, FaRobot } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex justify-center mb-16">
            <div className="inline-block bg-accent-color-soft dark:bg-accent-color/30 px-8 py-3 rounded-xl shadow-lg">
              <h2 className="text-5xl font-bold text-center text-gray-800 dark:text-white glow-text">About Me</h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  I'm a B.Tech student from GL Bajaj Institute of Technology and Management, deeply passionate about using technology to solve real-world problems. From winning national hackathons to building AI and IoT-based solutions, I actively seek innovation through code.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm currently exploring Web Development, AI/ML, IoT, Web3, and preparing for SSC CGL, ISRO, and DRDO. I enjoy public speaking, organizing events, and building things that matter.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="card p-6 flex items-start space-x-4"
              >
                <FaGraduationCap className="text-2xl text-accent-color flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-1">Education</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    GL Bajaj Institute of Technology and Management, Noida<br />
                    B.Tech (2nd Year, 4th Semester)
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="card p-6 flex items-start space-x-4"
              >
                <FaMapMarkerAlt className="text-2xl text-accent-color flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-1">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Gr, Noida, Uttar Pradesh, India
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="card p-6 flex items-start space-x-4"
              >
                <FaLanguage className="text-2xl text-accent-color flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-1">Languages</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    English, Hindi
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="card p-6 flex items-start space-x-4"
              >
                <FaLightbulb className="text-2xl text-accent-color flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-1">Goal</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    "To create innovative solutions that make a positive impact on society through technology."
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              whileHover={{ y: -10 }}
              className="card p-6 text-center"
            >
              <FaCode className="text-4xl text-accent-color mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building modern, responsive web applications with React and Next.js
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="card p-6 text-center"
            >
              <FaRobot className="text-4xl text-accent-color mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">AI/ML</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Developing intelligent solutions using Python and modern AI frameworks
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="card p-6 text-center"
            >
              <FaLaptopCode className="text-4xl text-accent-color mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Problem Solving</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Creating efficient solutions through DSA and algorithmic thinking
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 

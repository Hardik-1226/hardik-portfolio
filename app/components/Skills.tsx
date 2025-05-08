'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['C', 'C++', 'Python', 'JavaScript'],
    color: 'bg-blue-500'
  },
  {
    title: 'Web Development',
    skills: ['HTML', 'CSS', 'React', 'Next.js', 'Tailwind CSS'],
    color: 'bg-green-500'
  },
  {
    title: 'Backend & Database',
    skills: ['FastAPI', 'Supabase', 'Node.js'],
    color: 'bg-purple-500'
  },
  {
    title: 'AI & ML',
    skills: ['TensorFlow', 'Machine Learning', 'Deep Learning'],
    color: 'bg-red-500'
  },
  {
    title: 'Tools & Others',
    skills: ['Git', 'VS Code', 'IoT', 'Web3', 'DSA'],
    color: 'bg-yellow-500'
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <h3 className={`text-xl font-semibold mb-4 ${category.color} text-white px-4 py-2 rounded-lg inline-block`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
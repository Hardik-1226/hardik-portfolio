'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import HackathonExperience from '../components/HackathonExperience'
import Achievements from '../components/Achievements'
import MusicPlayer from '../components/MusicPlayer'
import AIBioChatBox from '../components/AIBioChatBox'

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [parallax, setParallax] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact']
      const scrollPosition = window.scrollY + 100

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })

      setIsScrolled(window.scrollY > 50)
      setParallax(window.scrollY * 0.4)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ]

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/hardikvarshney5', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/hardikvarshney5/', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/hardikvarshney5', label: 'Twitter' },
    { icon: FaInstagram, href: 'https://instagram.com/hardik_varshney26', label: 'Instagram' },
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Parallax background */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
          background: theme === 'dark'
            ? 'linear-gradient(120deg, #0f2027 0%, #2c5364 100%)'
            : 'linear-gradient(120deg, #f8fafc 0%, #e0eafc 100%)',
          backgroundPosition: `center ${parallax}px`,
          backgroundAttachment: 'fixed',
          transition: 'background 0.3s',
        }}
      />
      
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div
              className="text-xl font-bold text-accent-color tracking-widest select-none cursor-pointer"
              onClick={() => window.location.reload()}
            >
              MY PORTFOLIO
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`nav-link ${
                    activeSection === item.id
                      ? 'text-accent-color'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon text-gray-600 dark:text-gray-300 hover:text-accent-color"
                  >
                    <social.icon className="text-xl" />
                  </a>
                ))}
              </div>

              <motion.button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <div className="pt-16">
        <section id="home" className="relative">
          <div className="bg-gradient"></div>
          <Hero />
        </section>
        <section id="about" className="relative">
          <div className="bg-gradient"></div>
          <About />
        </section>
        <section id="projects" className="relative">
          <div className="bg-gradient"></div>
          <Projects />
        </section>
        <section id="skills" className="relative">
          <div className="bg-gradient"></div>
          <Skills />
        </section>
        <section id="hackathon-experience" className="relative">
          <div className="bg-gradient"></div>
          <HackathonExperience />
        </section>
        <section id="achievements" className="relative">
          <div className="bg-gradient"></div>
          <Achievements />
        </section>
        <section id="contact" className="relative">
          <div className="bg-gradient"></div>
          <Contact />
        </section>
        <section id="music-player" className="relative">
          <div className="bg-gradient"></div>
          <MusicPlayer />
        </section>
        <section id="ai-bio-chat-box" className="relative">
          <div className="bg-gradient"></div>
          <AIBioChatBox />
        </section>
      </div>
    </main>
  )
} 
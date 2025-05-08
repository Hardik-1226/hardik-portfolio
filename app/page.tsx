'use client'

import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from './components/Projects'
import HackathonExperience from '../components/HackathonExperience'
import Contact from '../components/Contact'
import MusicPlayer from '../components/MusicPlayer'
import Achievements from '../components/Achievements'

export default function Home() {
  const { theme, setTheme } = useTheme()

  return (
    <main className="min-h-screen bg-black">
      {/* Theme Toggle */}
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="fixed top-4 right-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-800 z-50"
      >
        {theme === 'dark' ? (
          <SunIcon className="h-6 w-6 text-yellow-500" />
        ) : (
          <MoonIcon className="h-6 w-6 text-gray-700" />
        )}
      </button>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <HackathonExperience />
      <Achievements />
      <Contact />
      <MusicPlayer />
    </main>
  )
} 
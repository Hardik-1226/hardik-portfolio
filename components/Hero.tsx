'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center"
          >
            <div className="mb-6">
              <TypeAnimation
                sequence={['Hi, 
                           I\'m Hardik Varshney👋', 2050]}
                wrapper="h1"
                speed={25}
                className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white glow-text"
                repeat={Infinity}
              />
            </div>

            <div className="h-12 mb-6">
              <TypeAnimation
                sequence={[
                  'AI/ML Enthusiast',
                  2000,
                  'Web Developer',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                wrapper="span"
                speed={40}
                className="text-xl md:text-2xl font-semibold text-accent-color"
                repeat={Infinity}
              />
            </div>

            <motion.p
              className="text-base md:text-lg mb-8 text-gray-600 dark:text-gray-300 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I build intelligent tools that matter. Passionate about creating solutions that make a difference.
            </motion.p>

            {/* Buttons and Socials Centered Column */}
            <div className="flex flex-col items-center w-full mb-12">
              <motion.div
                className="flex flex-col gap-4 mb-4 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <a
                  href="#contact"
                  className="bg-accent-color-soft text-gray-800 dark:text-white px-6 py-3 rounded-lg font-semibold hover-effect"
                >
                  Contact Me
                </a>
              </motion.div>
              <div className="flex flex-row items-center justify-center gap-6 mb-4">
                <a
                  href="https://github.com/Hardik-1226"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-600 dark:text-gray-300 hover:text-accent-color transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/hardik-varshney-83052127b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-600 dark:text-gray-300 hover:text-accent-color transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://x.com/H_var25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-600 dark:text-gray-300 hover:text-accent-color transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://instagram.com/hardik_varshney26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-600 dark:text-gray-300 hover:text-accent-color transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden md:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto flex items-center justify-center">
              <div className="absolute inset-0 bg-accent-color-soft rounded-full opacity-20 blur-3xl"></div>
              <div
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-accent-color-soft cursor-pointer"
                style={{ perspective: '1200px', width: '100%', height: '100%', position: 'relative' }}
                onClick={() => setFlipped(f => !f)}
                title="Click to flip!"
              >
                <motion.div
                  style={{ width: '100%', height: '100%', position: 'relative', transformStyle: 'preserve-3d' }}
                  animate={{ rotateY: flipped ? 180 : 0 }}
                  transition={{ duration: 0.7, ease: 'easeInOut' }}
                  className="w-full h-full"
                >
                  {/* Front Side */}
                  <div style={{ backfaceVisibility: 'hidden', position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                    <img
                      src="/20250208_134325.jpg"
                      alt="Hardik Varshney"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  {/* Back Side */}
                  <div style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(34,255,255,0.12)' }}>
                    <div className="flex flex-col items-center justify-center w-full h-full">
                      <img src="/ChatGPT Image May 12, 2025, 09_45_34 PM.png" alt="Fun Side" className="w-2/3 h-2/3 object-cover rounded-full mb-4" />
                      
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

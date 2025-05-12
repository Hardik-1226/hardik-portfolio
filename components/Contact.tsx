'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';

// Gradient text utility
const gradientHeading = 'bg-gradient-to-r from-blue-500 via-cyan-400 to-accent-color bg-clip-text text-transparent drop-shadow-lg';

export default function Contact() {
  const [email, setEmail] = useState('hardikvarshney5@gmail.com');
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error' | 'loading'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const payload = {
      name: data.get('name'),
      email: data.get('email'),
      message: data.get('message'),
    };
    try {
      const res = await fetch('https://formspree.io/f/mdkgwzrr', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form),
      });
      if (res.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-accent-color-soft dark:bg-accent-color/30 px-8 py-3 rounded-xl shadow-lg mb-4">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white glow-text">Get in Touch</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let's connect and discuss how we can work together
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-accent-color text-xl" />
                  <span className="text-gray-600 dark:text-gray-300">{email}</span>
                </div>
                <button
                  onClick={copyEmail}
                  className="text-sm px-3 py-1 rounded bg-accent-color-soft text-gray-800 dark:text-white hover-effect"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>

              <div className="pt-6">
                <h4 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Connect with me</h4>
                <div className="flex space-x-6">
                  <a
                    href="https://github.com/Hardik-1226"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-accent-color transition-colors"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                  <a
                    href="https://linkedin.com/in/hardik-varshney-83052127b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-accent-color transition-colors"
                  >
                    <FaLinkedin className="text-2xl" />
                  </a>
                  <a
                    href="https://x.com/H_var25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-accent-color transition-colors"
                  >
                    <FaTwitter className="text-2xl" />
                  </a>
                  <a
                    href="https://instagram.com/hardik_varshney26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-accent-color transition-colors"
                  >
                    <FaInstagram className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-600 dark:text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-accent-color text-gray-800 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-600 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-accent-color text-gray-800 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-600 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-accent-color text-gray-800 dark:text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent-color text-white px-6 py-3 rounded-lg font-semibold hover-effect"
              >
                Send Message
              </button>
              {formStatus === 'success' && (
                <div className="text-green-600 font-semibold mt-2">Message sent successfully!</div>
              )}
              {formStatus === 'error' && (
                <div className="text-red-600 font-semibold mt-2">Something went wrong. Please try again.</div>
              )}
              {formStatus === 'loading' && (
                <div className="text-blue-500 font-semibold mt-2">Sending...</div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
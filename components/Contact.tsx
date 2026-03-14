'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted! (This is a demo - no actual email will be sent)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Get In Touch</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            Reach out regarding any potential opportunities or collaborations.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
        
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-2xl mr-3">📧</span>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">Email</p>
                  <a href="mailto:bbecze242@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                    bbecze242@gmail.com
                  </a>
                </div>
              </div>                           
              
              <div className="flex items-start">
                <span className="text-2xl mr-3">📍</span>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">Location</p>
                  <p className="text-slate-600 dark:text-slate-400">San Diego, CA</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Social Links
            </h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/benjamin-becze-307b541b6/" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <span className="text-2xl">💼</span> LinkedIn
              </a>
              <a href="https://github.com/Benjamin242" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <span className="text-2xl">🐙</span> GitHub
              </a>            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


import React from 'react';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to collaborate on your next AI project? Get in touch and let's build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="fade-in-delay-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 clean-card">
                <Mail className="w-6 h-6 text-gray-600" />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-600">hello@lekhanstudio.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 clean-card">
                <Github className="w-6 h-6 text-gray-600" />
                <div>
                  <p className="font-medium text-gray-900">GitHub</p>
                  <p className="text-gray-600">@lekhanstudio</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 clean-card">
                <Linkedin className="w-6 h-6 text-gray-600" />
                <div>
                  <p className="font-medium text-gray-900">LinkedIn</p>
                  <p className="text-gray-600">Lekhan Studio</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 mb-4">Follow My Journey</h4>
              <div className="flex space-x-4">
                <Twitter className="w-8 h-8 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
                <Github className="w-8 h-8 text-gray-400 hover:text-gray-700 cursor-pointer transition-colors" />
                <Linkedin className="w-8 h-8 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>

          <div className="fade-in-delay-2">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { FaYoutube } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import extendlogo from '../../assets/extendlogo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Courses', href: '/courses' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Certificate Verification', href: '/certificate-verification' }
  ];

  const courses = [
    { name: 'RS-CIT', href: '/courses/RS-CIT' },
    { name: 'Web Development', href: '/courses/RCWDPHP' },
    { name: 'Digital Marketing', href: '/courses/RCDM' },
    { name: 'Graphic Design', href: '/courses/RCGD' }
  ];

  const support = [
    { name: 'Help Center', href: '/help' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'FAQ', href: '/faq' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#footer-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <img src={logo} alt="BMS Academy" className="h-12 w-12" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <img src={extendlogo} alt="BMS Academy" className="h-8" />
                <span className="text-xs text-gray-400 font-medium">Excellence in Education</span>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering learners worldwide with quality education and practical skills for success in the digital age.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/bmsittraining" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all transform hover:scale-110"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.youtube.com/@bmsacademy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-all transform hover:scale-110"
              >
                <FaYoutube size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-400 transition-all transform hover:scale-110"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all transform hover:scale-110"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Popular Courses</h3>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <Link 
                    to={course.href} 
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>1st Floor, Park Plaza</p>
                  <p>BMS ACADEMY, Goner Rd</p>
                  <p>Jaipur, Rajasthan 302031</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a href="tel:9660038052" className="text-gray-300 hover:text-white transition-colors">
                  +91 96600 38052
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <a href="mailto:info@bmsacademy.com" className="text-gray-300 hover:text-white transition-colors">
                  info@bmsacademy.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 mb-12 border border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">Subscribe to our newsletter for the latest courses and updates</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} BMS Academy. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
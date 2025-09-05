import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, BookOpen, Users, Award, Search, Bell } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import extendlogo from '../../assets/extendlogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showCoursesDropdown, setShowCoursesDropdown] = useState(false);
  const [coursesData, setCoursesData] = useState([]);
  const [coursesLoading, setCoursesLoading] = useState(true);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/courses`);
        if (response.ok) {
          const data = await response.json();
          setCoursesData(data);
        }
        setCoursesLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setCoursesLoading(false);
      }
    };
    fetchCourses();
  }, []);

  return (
    <>
      {/* Top notification bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Bell className="w-4 h-4 mr-1" />
              New batch starting soon! Limited seats available
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span>📞 +91 98765 43210</span>
            <Link to="/dashboard-login" className="hover:underline">Admin</Link>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                <img src={logo} alt="BMS Academy" className="h-12 w-12" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <img src={extendlogo} alt="BMS Academy" className="h-8" />
                <span className="text-xs text-gray-500 font-medium">Excellence in Education</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Home
              </Link>

              {/* Courses Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setShowCoursesDropdown(true)}
                onMouseLeave={() => setShowCoursesDropdown(false)}
              >
                <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Courses
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>

                {showCoursesDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 p-6">
                    <div className="grid grid-cols-1 gap-4">
                      {coursesLoading ? (
                        <div className="space-y-3">
                          {[1, 2, 3].map(i => (
                            <div key={i} className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
                          ))}
                        </div>
                      ) : (
                        coursesData.slice(0, 4).map((category, idx) => (
                          <div key={idx} className="p-3 rounded-lg hover:bg-gray-50 transition-colors">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                                <BookOpen className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900">{category.category}</h4>
                                <p className="text-sm text-gray-500">{category.courses.length} courses</p>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <Link 
                        to="/courses" 
                        className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
                      >
                        View All Courses
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contact
              </Link>
              <Link to="/certificate-verification" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Verify Certificate
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              <Link to="/" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
                Home
              </Link>
              <Link to="/courses" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
                Courses
              </Link>
              <Link to="/about" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
                About
              </Link>
              <Link to="/contact" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
                Contact
              </Link>
              <Link to="/certificate-verification" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
                Verify Certificate
              </Link>
              <div className="pt-4">
                <Link 
                  to="/contact"
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
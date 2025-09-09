import { useState, useEffect } from 'react';
import { Menu, X, User, LogOut, ChevronDown, ChevronRight, BookOpen, Users, Clock, Code, Calculator, Palette, Globe, Monitor, TrendingUp, Bell, Search } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import extendlogo from '../../assets/extendlogo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showCoursesDropdown, setShowCoursesDropdown] = useState(false);
    const [showStudentCornerDropdown, setShowStudentCornerDropdown] = useState(false);
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const [dropdownTimeout, setDropdownTimeout] = useState(null);
    const [hoveredCourse, setHoveredCourse] = useState(null);
    const [coursesData, setCoursesData] = useState([]);
    const [coursesLoading, setCoursesLoading] = useState(true);
    const [showSearchModal, setShowSearchModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    // Icon mapping for categories
    const categoryIcons = {
        "IT & Digital Literacy": <Monitor className="w-4 h-4" />,
        "Programming & Development": <Code className="w-4 h-4" />,
        "Accounting & Finance": <Calculator className="w-4 h-4" />,
        "Digital Marketing & Graphics": <TrendingUp className="w-4 h-4" />,
        "Design": <Palette className="w-4 h-4" />,
        "Business": <Globe className="w-4 h-4" />
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('token') || localStorage.getItem('userToken');
        setIsLoggedIn(!!token);
    }, []);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/courses`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch courses: ${response.status} ${response.statusText}`);
                }

                const contentType = response.headers.get('content-type');
                if (!contentType || !contentType.includes('application/json')) {
                    throw new Error('Backend server is not responding with JSON. Please ensure the backend is running.');
                }

                const data = await response.json();

                const transformedData = data.map(category => ({
                    category: category.category,
                    icon: categoryIcons[category.category] || <BookOpen className="w-4 h-4" />,
                    courses: category.courses
                }));

                setCoursesData(transformedData);
                setCoursesLoading(false);
            } catch (error) {
                console.error('Error fetching courses:', error);
                setCoursesData([]);
                setCoursesLoading(false);
            }
        };

        fetchCourses();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userToken');
        setIsLoggedIn(false);
        navigate('/');
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/courses?search=${encodeURIComponent(searchQuery)}`);
            setShowSearchModal(false);
            setSearchQuery('');
        }
    };

    return (
        <>
            {/* Top Bar */}
            <div className="w-full bg-gradient-to-r from-teal-700 to-teal-600 text-white text-sm">
                <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap justify-between items-center gap-y-2">
                    <div className="flex flex-wrap items-center gap-4">
                        <span className="flex items-center gap-1">
                            <span role="img" aria-label="phone">📞</span> +91 9660038052
                        </span>
                        <span className="flex items-center gap-1">
                            <span role="img" aria-label="email">✉️</span> info@bmsacademy.com
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <a href="https://www.facebook.com/bmsittraining" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.youtube.com/@bmsacademy" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors">
                            <FaYoutube />
                        </a>
                        <div className="h-4 w-px bg-white/30 mx-2"></div>
                        {isLoggedIn ? (
                            <button onClick={handleLogout} className="hover:underline text-xs">
                                Logout
                            </button>
                        ) : (
                            <>
                                <Link to="/login" className="hover:underline text-xs">Login</Link>
                                <Link to="/register" className="hover:underline text-xs">Register</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link to="/" className="flex items-center space-x-2">
                            <img src={logo} alt="BMS Academy Logo" className="h-10 w-10" />
                            <img src={extendlogo} alt="BMS Academy" className="h-8" />
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center space-x-8">
                            <Link to="/" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                                Home
                            </Link>

                            {/* Courses Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => {
                                    if (dropdownTimeout) clearTimeout(dropdownTimeout);
                                    setShowCoursesDropdown(true);
                                }}
                                onMouseLeave={() => {
                                    const timeout = setTimeout(() => {
                                        setShowCoursesDropdown(false);
                                    }, 200);
                                    setDropdownTimeout(timeout);
                                }}
                            >
                                <Link
                                    to="/courses"
                                    className="text-gray-700 hover:text-teal-600 font-medium flex items-center transition-colors"
                                >
                                    Courses
                                    <ChevronDown size={16} className="ml-1" />
                                </Link>

                                {showCoursesDropdown && (
                                    <div className="absolute left-1/2 top-full mt-2 transform -translate-x-1/2 w-[90vw] max-w-6xl bg-white rounded-xl shadow-2xl z-50 p-0 flex border border-gray-100 overflow-hidden">
                                        {/* Categories Sidebar */}
                                        <div className="w-2/5 bg-gradient-to-b from-slate-50 to-slate-100 border-r border-slate-200">
                                            <div className="p-4 border-b border-slate-200 bg-white">
                                                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                                                    <BookOpen className="w-5 h-5 text-teal-600" />
                                                    Course Categories
                                                </h3>
                                            </div>
                                            <div className="p-2">
                                                {coursesLoading ? (
                                                    <div className="space-y-2">
                                                        {[1, 2, 3, 4].map((i) => (
                                                            <div key={i} className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <ul className="space-y-1">
                                                        {coursesData.map((cat, idx) => (
                                                            <li
                                                                key={idx}
                                                                onMouseEnter={() => setActiveCategoryIndex(idx)}
                                                                className={`group cursor-pointer transition-all duration-200 ease-in-out rounded-lg ${
                                                                    activeCategoryIndex === idx
                                                                        ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-md transform scale-[1.02]'
                                                                        : 'text-slate-700 hover:bg-white hover:shadow-sm'
                                                                }`}
                                                            >
                                                                <div className="flex items-center justify-between px-4 py-3">
                                                                    <div className="flex items-center gap-3">
                                                                        <div className={`transition-colors duration-200 ${
                                                                            activeCategoryIndex === idx ? 'text-white' : 'text-teal-600'
                                                                        }`}>
                                                                            {cat.icon}
                                                                        </div>
                                                                        <span className="font-medium text-sm">{cat.category}</span>
                                                                    </div>
                                                                    <ChevronRight className={`w-4 h-4 transition-all duration-200 ${
                                                                        activeCategoryIndex === idx
                                                                            ? 'text-white transform rotate-90'
                                                                            : 'text-slate-400 group-hover:text-slate-600'
                                                                    }`} />
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>

                                        {/* Courses Panel */}
                                        <div className="w-3/5 bg-white">
                                            {coursesLoading ? (
                                                <div className="p-4">
                                                    <div className="h-6 bg-gray-200 rounded w-1/2 mb-4 animate-pulse"></div>
                                                    <div className="space-y-3">
                                                        {[1, 2, 3, 4].map((i) => (
                                                            <div key={i} className="h-16 bg-gray-200 rounded animate-pulse"></div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ) : coursesData[activeCategoryIndex] && (
                                                <>
                                                    <div className="p-4 border-b border-slate-100 bg-gradient-to-r from-orange-50 to-amber-50">
                                                        <div className="flex items-center gap-3 mb-2">
                                                            <div className="text-orange-600">
                                                                {coursesData[activeCategoryIndex].icon}
                                                            </div>
                                                            <h4 className="text-lg font-bold text-orange-700">
                                                                {coursesData[activeCategoryIndex].category}
                                                            </h4>
                                                        </div>
                                                        <p className="text-sm text-orange-600">
                                                            {coursesData[activeCategoryIndex].courses.length} courses available
                                                        </p>
                                                    </div>

                                                    <div className="p-4 max-h-96 overflow-y-auto">
                                                        <ul className="space-y-3">
                                                            {coursesData[activeCategoryIndex].courses.map((course, i) => (
                                                                <li
                                                                    key={i}
                                                                    onMouseEnter={() => setHoveredCourse(i)}
                                                                    onMouseLeave={() => setHoveredCourse(null)}
                                                                    className="group"
                                                                >
                                                                    <Link
                                                                        to={`/courses/${course.courseCode}`}
                                                                        className={`block p-3 rounded-lg border transition-all duration-200 ${
                                                                            hoveredCourse === i
                                                                                ? 'border-teal-200 bg-gradient-to-r from-teal-50 to-cyan-50 shadow-md transform translate-x-1'
                                                                                : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50'
                                                                        }`}
                                                                    >
                                                                        <div className="flex items-start justify-between">
                                                                            <div className="flex-1">
                                                                                <h5 className={`font-semibold text-sm transition-colors duration-200 ${
                                                                                    hoveredCourse === i ? 'text-teal-700' : 'text-slate-800 group-hover:text-teal-600'
                                                                                }`}>
                                                                                    {course.courseName}
                                                                                </h5>
                                                                                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                                                                                    {course.details}
                                                                                </p>
                                                                                <div className="flex items-center gap-4 mt-2 text-xs text-slate-500">
                                                                                    <span className="flex items-center gap-1">
                                                                                        <Users className="w-3 h-3" />
                                                                                        {course.students?.toLocaleString() || 'N/A'} students
                                                                                    </span>
                                                                                    <span className="flex items-center gap-1">
                                                                                        <Clock className="w-3 h-3" />
                                                                                        {course.duration}
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            <ChevronRight className={`w-4 h-4 transition-all duration-200 ${
                                                                                hoveredCourse === i
                                                                                    ? 'text-teal-600 transform translate-x-1'
                                                                                    : 'text-slate-400 group-hover:text-slate-600'
                                                                            }`} />
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Link to="/about" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                                About
                            </Link>

                            <Link to="/activities" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                                Activities
                            </Link>

                            <Link to="/blog" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                                Blog
                            </Link>

                            {/* Student Corner Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => {
                                    if (dropdownTimeout) clearTimeout(dropdownTimeout);
                                    setShowStudentCornerDropdown(true);
                                }}
                                onMouseLeave={() => {
                                    const timeout = setTimeout(() => {
                                        setShowStudentCornerDropdown(false);
                                    }, 200);
                                    setDropdownTimeout(timeout);
                                }}
                            >
                                <button className="text-gray-700 hover:text-teal-600 font-medium flex items-center transition-colors">
                                    Student Corner
                                    <ChevronDown size={16} className="ml-1" />
                                </button>

                                {showStudentCornerDropdown && (
                                    <div className="absolute left-1/2 top-full mt-3 transform -translate-x-1/2 z-50">
                                        <div className="absolute top-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-l border-t border-gray-200 z-[-1]" />
                                        <div className="w-[300px] bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                                            <ul className="divide-y divide-gray-200">
                                                <li>
                                                    <Link
                                                        to="/certificate-verification"
                                                        className="block px-5 py-4 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-150"
                                                    >
                                                        🎓 Certificate Verification
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/offers-and-schemes"
                                                        className="block px-5 py-4 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-150"
                                                    >
                                                        💡 Offers and Schemes
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/faq"
                                                        className="block px-5 py-4 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-150"
                                                    >
                                                        ❓ FAQ
                                                    </Link>
                                                </li>
                                                {isLoggedIn && (
                                                    <li>
                                                        <Link
                                                            to="/user-dashboard"
                                                            className="block px-5 py-4 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-150"
                                                        >
                                                            📊 My Dashboard
                                                        </Link>
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Link to="/contact" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                                Contact
                            </Link>
                        </div>

                        {/* Right Side Actions */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <button
                                onClick={() => setShowSearchModal(true)}
                                className="p-2 text-gray-600 hover:text-teal-600 transition-colors"
                            >
                                <Search className="w-5 h-5" />
                            </button>

                            {isLoggedIn ? (
                                <div className="flex items-center space-x-3">
                                    <Link
                                        to="/user-dashboard"
                                        className="flex items-center space-x-2 text-gray-700 hover:text-teal-600 transition-colors"
                                    >
                                        <User className="w-5 h-5" />
                                        <span className="font-medium">Dashboard</span>
                                    </Link>
                                </div>
                            ) : (
                                <div className="flex items-center space-x-3">
                                    <Link
                                        to="/login"
                                        className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="bg-teal-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center">
                            <button
                                onClick={toggleMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-teal-600 hover:bg-gray-100 focus:outline-none"
                            >
                                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg border-t">
                            <Link to="/" className="text-gray-700 hover:bg-teal-50 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium">
                                Home
                            </Link>
                            <Link to="/courses" className="text-gray-700 hover:bg-teal-50 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium">
                                Courses
                            </Link>
                            <Link to="/about" className="text-gray-700 hover:bg-teal-50 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium">
                                About
                            </Link>
                            <Link to="/activities" className="text-gray-700 hover:bg-teal-50 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium">
                                Activities
                            </Link>
                            <Link to="/blog" className="text-gray-700 hover:bg-teal-50 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium">
                                Blog
                            </Link>
                            <Link to="/certificate-verification" className="text-gray-700 hover:bg-teal-50 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium">
                                Certificate Verification
                            </Link>
                            <Link to="/offers-and-schemes" className="text-gray-700 hover:bg-teal-50 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium">
                                Offers & Schemes
                            </Link>
                            <Link to="/faq" className="text-gray-700 hover:bg-teal-50 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium">
                                FAQ
                            </Link>
                            <Link to="/contact" className="text-gray-700 hover:bg-teal-50 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium">
                                Contact
                            </Link>

                            <div className="border-t border-gray-200 pt-4 pb-2">
                                {isLoggedIn ? (
                                    <>
                                        <Link to="/user-dashboard" className="flex items-center text-gray-700 hover:bg-teal-50 hover:text-teal-600 px-3 py-2 rounded-md text-base font-medium">
                                            <User size={18} className="mr-2" />
                                            Dashboard
                                        </Link>
                                        <button onClick={handleLogout} className="flex w-full items-center text-gray-700 hover:bg-red-50 hover:text-red-600 px-3 py-2 rounded-md text-base font-medium">
                                            <LogOut size={18} className="mr-2" />
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/login" className="block text-gray-700 hover:bg-teal-50 hover:text-teal-600 px-3 py-2 rounded-md text-base font-medium">
                                            Login
                                        </Link>
                                        <Link to="/register" className="block bg-teal-600 hover:bg-teal-700 text-white mt-2 px-3 py-2 rounded-md text-base font-medium text-center">
                                            Get Started
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Search Modal */}
            {showSearchModal && (
                <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4">
                        <form onSubmit={handleSearch} className="p-6">
                            <div className="flex items-center space-x-4">
                                <Search className="w-6 h-6 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search courses, topics, or instructors..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="flex-1 text-lg border-none outline-none"
                                    autoFocus
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowSearchModal(false)}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                            <div className="mt-4 flex justify-end space-x-3">
                                <button
                                    type="button"
                                    onClick={() => setShowSearchModal(false)}
                                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
                                >
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
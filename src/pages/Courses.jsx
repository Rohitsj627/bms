import React, { useState, useEffect } from 'react';
import { Search, Star, Users, Clock, BookOpen, Award, Filter, Grid, List } from 'lucide-react';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';
import EnrollmentForm from '../components/EnrollmentForm';

export default function Courses() {
  const [allCourses, setAllCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [viewMode, setViewMode] = useState('grid');

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/courses`);
        if (!res.ok) {
          throw new Error(`Failed to fetch courses: ${res.status} ${res.statusText}`);
        }
        
        const contentType = res.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Backend server is not responding with JSON. Please ensure the backend is running.');
        }
        
        const data = await res.json();
        const flattened = data.flatMap(group =>
          group.courses.map(course => ({
            ...course,
            category: group.category
          }))
        );

        setAllCourses(flattened);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching courses:', err);
        setError(err.message || 'Failed to connect to backend. Please ensure the backend server is running.');
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  const categoryList = ['All', ...new Set(allCourses.map(course => course.category))];

  const filteredCourses = allCourses.filter(course => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = course.courseName?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { icon: BookOpen, label: "Total Courses", value: `${allCourses.length}` },
    {
      icon: Users,
      label: "Active Students",
      value: allCourses.reduce((sum, course) => sum + (course.students || 0), 0).toLocaleString()
    },
    {
      icon: Star,
      label: "5-Star Reviews",
      value: allCourses.reduce((sum, course) => (course.rating >= 4.5 ? sum + 1 : sum), 0).toLocaleString()
    },
    {
      icon: Award,
      label: "Certified Instructors",
      value: "25+"
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section Skeleton */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="h-12 bg-white/20 rounded w-96 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-white/20 rounded w-128 mx-auto animate-pulse"></div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Stats Skeleton */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-lg animate-pulse">
                <div className="w-12 h-12 bg-gray-200 rounded-xl mb-4"></div>
                <div className="h-8 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
          
          {/* Courses Grid Skeleton */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😞</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Explore Our <span className="text-yellow-400">Courses</span>
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
            Discover industry-leading courses designed to accelerate your career and unlock your potential
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 -mt-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categoryList.map((cat, i) => (
                  <option key={i} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2 bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-full transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-white shadow-sm text-blue-600' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-full transition-all ${
                  viewMode === 'list' 
                    ? 'bg-white shadow-sm text-blue-600' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredCourses.length}</span> courses
            {selectedCategory !== 'All' && (
              <span> in <span className="font-semibold text-blue-600">{selectedCategory}</span></span>
            )}
          </p>
        </div>

        {/* Courses Grid/List */}
        <div className={`${
          viewMode === 'grid' 
            ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' 
            : 'space-y-6'
        } mb-16`}>
          {filteredCourses.map((course, i) => (
            <div 
              key={i} 
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1 ${
                viewMode === 'list' ? 'flex' : 'flex flex-col'
              }`}
            >
              <Link to={`/courses/${course.courseCode}`} className={viewMode === 'list' ? 'w-80 flex-shrink-0' : ''}>
                <img
                  src={course.image}
                  alt={course.courseName}
                  className={`object-cover ${
                    viewMode === 'list' ? 'w-full h-full' : 'w-full h-48'
                  }`}
                />
              </Link>
              
              <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : 'flex flex-col flex-1'}`}>
                <div className="flex justify-between items-start mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    {course.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{course.rating || '4.8'}</span>
                  </div>
                </div>

                <Link to={`/courses/${course.courseCode}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    {course.courseName}
                  </h3>
                </Link>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {course.subtitle || course.details}
                </p>

                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration || 'N/A'}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students || 0} students</span>
                  </div>
                </div>

                <div className={`${viewMode === 'list' ? 'flex items-center justify-between' : 'mt-auto'}`}>
                  <div className="flex items-center space-x-2">
                    {course.fees?.discounted && course.fees.discounted !== course.fees?.original ? (
                      <>
                        <span className="text-2xl font-bold text-gray-900">
                          ₹{course.fees.discounted.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          ₹{course.fees.original?.toLocaleString()}
                        </span>
                      </>
                    ) : (
                      <span className="text-2xl font-bold text-gray-900">
                        ₹{course.fees?.original?.toLocaleString() || 'Free'}
                      </span>
                    )}
                  </div>

                  <button 
                    onClick={() => {
                      setSelectedCourseId(course.courseCode);
                      setIsModalOpen(true);
                    }} 
                    className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 ${
                      viewMode === 'list' ? 'px-6 py-2' : 'w-full py-3 mt-4'
                    }`}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Can't find what you're looking for?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Contact our team to learn more about our courses or request a custom training program for your organization.
          </p>
          <Link to="/contact">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <EnrollmentForm courseId={selectedCourseId} onClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
}
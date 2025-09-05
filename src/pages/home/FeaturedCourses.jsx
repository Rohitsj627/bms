import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Clock, ArrowRight, BookOpen, Award, TrendingUp } from 'lucide-react';

const FeaturedCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/courses`);
        if (response.ok) {
          const data = await response.json();
          const flattenedCourses = data.flatMap(category =>
            category.courses.map(course => ({
              ...course,
              category: category.category
            }))
          );
          setCourses(flattenedCourses);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const categories = ['All', ...new Set(courses.map(course => course.category))];
  const filteredCourses = selectedCategory === 'All' 
    ? courses.slice(0, 6) 
    : courses.filter(course => course.category === selectedCategory).slice(0, 6);

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-12 bg-gray-200 rounded w-96 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-128 mx-auto animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="bg-gray-200 rounded-2xl h-96 animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30 -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-100 to-yellow-100 rounded-full blur-3xl opacity-30 translate-y-48 -translate-x-48"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Featured Courses</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Master <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">In-Demand Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully curated selection of courses designed by industry experts
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredCourses.map((course, index) => (
            <div 
              key={course.courseCode}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Course Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.courseName}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                  {course.category}
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-medium">{course.rating || '4.8'}</span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students?.toLocaleString() || '0'}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-xs text-green-600 font-medium">Popular</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {course.courseName}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {course.subtitle || course.details}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.skills?.slice(0, 3).map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
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
                  
                  <Link 
                    to={`/courses/${course.courseCode}`}
                    className="group/btn inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
                  >
                    <span>Enroll</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Courses CTA */}
        <div className="text-center">
          <Link 
            to="/courses"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>View All Courses</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
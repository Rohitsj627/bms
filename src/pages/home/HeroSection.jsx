import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Star, Users, Award, ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Transform Your Future",
      subtitle: "with Industry-Leading Courses",
      description: "Join thousands of students who have advanced their careers with our expert-led training programs",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      stats: { students: "15K+", courses: "50+", rating: "4.9" }
    },
    {
      title: "Master New Skills",
      subtitle: "Learn from Industry Experts",
      description: "Get hands-on experience with real-world projects and personalized mentorship",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      stats: { students: "15K+", courses: "50+", rating: "4.9" }
    },
    {
      title: "Advance Your Career",
      subtitle: "with Certified Programs",
      description: "Earn industry-recognized certifications that employers value and trust",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      stats: { students: "15K+", courses: "50+", rating: "4.9" }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-400/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={currentSlideData.image}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-30 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">🎉 New Batch Starting Soon!</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  {currentSlideData.title}
                </span>
              </h1>
              <h2 className="text-3xl lg:text-4xl font-semibold text-blue-200">
                {currentSlideData.subtitle}
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                {currentSlideData.description}
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{currentSlideData.stats.students}</div>
                <div className="text-sm text-gray-300">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{currentSlideData.stats.courses}</div>
                <div className="text-sm text-gray-300">Courses</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1">
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  <span className="text-3xl font-bold text-white">{currentSlideData.stats.rating}</span>
                </div>
                <div className="text-sm text-gray-300">Rating</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/courses"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore Courses
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-8">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-sm text-gray-300">Certified Programs</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-green-400" />
                <span className="text-sm text-gray-300">Expert Instructors</span>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Elements */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white">Quick Start</h3>
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                      <span className="text-white">Choose your course</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                      <span className="text-white">Start learning immediately</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                      <span className="text-white">Get certified</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-4 shadow-lg animate-bounce">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">94%</div>
                  <div className="text-xs">Success Rate</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-4 shadow-lg animate-pulse">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-xs">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-white w-8' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
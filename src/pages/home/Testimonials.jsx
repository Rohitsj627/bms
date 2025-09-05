import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/testimonials`);
        if (response.ok) {
          const data = await response.json();
          setTestimonials(data);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="h-8 bg-white/20 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-12 bg-white/20 rounded w-96 mx-auto mb-8 animate-pulse"></div>
            <div className="h-32 bg-white/20 rounded-2xl animate-pulse"></div>
          </div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-48 translate-y-48"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 text-yellow-400" />
            <span>Student Success Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our <span className="text-yellow-400">Students Say</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Real stories from real students who transformed their careers with BMS Academy
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl">
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="text-center mb-8">
              <p className="text-xl lg:text-2xl text-white leading-relaxed mb-8 italic">
                "{currentTestimonial.text}"
              </p>

              {/* Rating */}
              <div className="flex justify-center items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-6 h-6 ${
                      i < currentTestimonial.rating 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-400'
                    }`} 
                  />
                ))}
              </div>

              {/* Student Info */}
              <div className="text-center">
                <h4 className="text-2xl font-bold text-white mb-2">
                  {currentTestimonial.name}
                </h4>
                <p className="text-blue-200 text-lg">
                  {currentTestimonial.role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-yellow-400 w-8' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${
                      i < testimonial.rating 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-400'
                    }`} 
                  />
                ))}
              </div>
              <p className="text-white text-sm mb-4 line-clamp-3">
                "{testimonial.text}"
              </p>
              <div>
                <h5 className="text-white font-semibold">{testimonial.name}</h5>
                <p className="text-blue-200 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
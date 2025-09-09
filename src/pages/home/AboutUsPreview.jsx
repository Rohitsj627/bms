import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Target, Heart } from 'lucide-react';

const AboutUsPreview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 text-teal-800 font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              About BMS Academy
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Empowering Careers Since 2022
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              BMS Academy is a premier IT training institute dedicated to providing 
              world-class education and practical skills that transform careers. 
              We bridge the gap between academic learning and industry requirements.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600 text-sm">
                    To provide accessible, high-quality technical education that empowers individuals to achieve their career goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-600 text-sm">
                    To be the leading institute for practical IT education, creating skilled professionals for the digital economy.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-colors"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                  alt="Students learning"
                  className="rounded-2xl shadow-lg"
                />
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Users className="w-8 h-8 text-teal-600 mr-3" />
                    <div>
                      <div className="text-2xl font-bold text-gray-900">50K+</div>
                      <div className="text-gray-600 text-sm">Students Trained</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 pt-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Award className="w-8 h-8 text-orange-600 mr-3" />
                    <div>
                      <div className="text-2xl font-bold text-gray-900">150+</div>
                      <div className="text-gray-600 text-sm">Courses Available</div>
                    </div>
                  </div>
                </div>
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                  alt="Training facility"
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-100 rounded-full opacity-50"></div>
          </div>
        </div>

        {/* Team Highlight */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Meet Our Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                alt="Mr. B.M. Sharma"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Mr. B.M. Sharma</h4>
              <p className="text-teal-600 font-medium mb-3">Founder & Director</p>
              <p className="text-gray-600 text-sm">
                "Our vision is to make technical education accessible and practical for every learner."
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <img
                src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg"
                alt="Mrs. Rekha Sharma"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Mrs. Rekha Sharma</h4>
              <p className="text-teal-600 font-medium mb-3">Training Head</p>
              <p className="text-gray-600 text-sm">
                "We combine industry knowledge with modern teaching methods to prepare students for success."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPreview;
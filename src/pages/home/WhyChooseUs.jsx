import { Award, Users, Clock, Shield, Zap, Heart } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "Industry-Recognized Certificates",
      description: "Earn certificates that are valued and trusted by top employers worldwide",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of real-world experience",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description: "Study at your own pace with 24/7 access to course materials and support",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50"
    },
    {
      icon: Shield,
      title: "Job Guarantee",
      description: "Get placed in top companies or get your money back with our job guarantee program",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Zap,
      title: "Hands-on Projects",
      description: "Build real-world projects that showcase your skills to potential employers",
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-50"
    },
    {
      icon: Heart,
      title: "Lifetime Support",
      description: "Join our community and get lifetime access to updates and career support",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            <span>Why Choose BMS Academy</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Your Success is <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Priority</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing you with the best learning experience and ensuring your career success
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of successful students who have advanced their careers with BMS Academy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
                Start Learning Today
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
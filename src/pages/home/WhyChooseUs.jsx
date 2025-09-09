import { Award, Users, Clock, Headphones, Target, Shield, Zap, Globe } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: 'Industry-Recognized Certifications',
      description: 'Get certified by leading organizations and boost your career prospects with globally recognized credentials.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of real-world experience and proven teaching expertise.',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Clock,
      title: 'Flexible Learning',
      description: 'Study at your own pace with flexible schedules, weekend batches, and both online and offline options.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Get round-the-clock support from our dedicated team to help you succeed in your learning journey.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      icon: Target,
      title: 'Practical Training',
      description: 'Hands-on projects and real-world scenarios to ensure you gain practical skills that employers value.',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: Shield,
      title: 'Job Placement Assistance',
      description: 'Comprehensive career support including resume building, interview preparation, and job placement assistance.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    },
    {
      icon: Zap,
      title: 'Latest Technology',
      description: 'Stay ahead with cutting-edge curriculum updated regularly to match industry trends and demands.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Join a worldwide network of learners and professionals to expand your connections and opportunities.',
      color: 'text-teal-600',
      bgColor: 'bg-teal-100'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 text-teal-800 font-medium mb-4">
            <Target className="w-4 h-4 mr-2" />
            Why Choose BMS Academy
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Success is Our Priority
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive training solutions designed to help you achieve your career goals 
            with the support and resources you need to succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.bgColor} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 ${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Benefits Section */}
        <div className="mt-20 bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Offline Learning Advantages
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Face-to-Face Interaction</h4>
                    <p className="text-gray-600">Direct communication with instructors and peers for better understanding</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Hands-on Lab Sessions</h4>
                    <p className="text-gray-600">Access to fully equipped labs with latest software and hardware</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Networking Opportunities</h4>
                    <p className="text-gray-600">Build valuable connections with classmates and industry professionals</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Structured Learning Environment</h4>
                    <p className="text-gray-600">Dedicated learning space free from home distractions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                alt="Students in classroom"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">95%</div>
                  <div className="text-sm text-gray-600">Job Placement Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
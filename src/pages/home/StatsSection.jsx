import { useState, useEffect } from 'react';
import { Users, BookOpen, Award, TrendingUp, Globe, Clock } from 'lucide-react';

const StatsSection = () => {
  const [stats, setStats] = useState({
    students: 0,
    courses: 0,
    instructors: 0,
    completion: 0
  });

  const finalStats = {
    students: 15420,
    courses: 50,
    instructors: 25,
    completion: 94
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const counters = Object.keys(finalStats).map(key => {
      const increment = finalStats[key] / steps;
      let current = 0;
      
      return setInterval(() => {
        current += increment;
        if (current >= finalStats[key]) {
          current = finalStats[key];
          clearInterval(counters.find(c => c === counters[counters.indexOf(counters.find(c => c === counters[0]))]));
        }
        setStats(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepDuration);
    });

    return () => counters.forEach(clearInterval);
  }, []);

  const statsData = [
    {
      icon: Users,
      value: stats.students.toLocaleString(),
      label: "Active Students",
      suffix: "+",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: BookOpen,
      value: stats.courses,
      label: "Expert Courses",
      suffix: "+",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Award,
      value: stats.instructors,
      label: "Expert Instructors",
      suffix: "+",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50"
    },
    {
      icon: TrendingUp,
      value: stats.completion,
      label: "Success Rate",
      suffix: "%",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50"
    }
  ];

  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Students from 50+ countries"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Certificates valued by employers"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 transform rotate-12 scale-150"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4" />
            <span>Our Impact</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trusted by <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Thousands</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join a community of learners who have transformed their careers with our comprehensive training programs
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative">
                  <div className={`w-16 h-16 ${stat.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`}></div>
              </div>
            );
          })}
        </div>

        {/* Features Row */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
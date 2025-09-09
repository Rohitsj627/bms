import { useEffect, useState } from 'react';
import { Users, BookOpen, Award, TrendingUp } from 'lucide-react';

const StatsSection = () => {
  const [stats, setStats] = useState({
    students: 0,
    courses: 0,
    certificates: 0,
    successRate: 0
  });

  const finalStats = {
    students: 50000,
    courses: 150,
    certificates: 45000,
    successRate: 95
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setStats({
        students: Math.floor(finalStats.students * progress),
        courses: Math.floor(finalStats.courses * progress),
        certificates: Math.floor(finalStats.certificates * progress),
        successRate: Math.floor(finalStats.successRate * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setStats(finalStats);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const statsData = [
    {
      icon: Users,
      value: stats.students.toLocaleString() + '+',
      label: 'Students Trained',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: BookOpen,
      value: stats.courses + '+',
      label: 'Courses Available',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Award,
      value: stats.certificates.toLocaleString() + '+',
      label: 'Certificates Issued',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: TrendingUp,
      value: stats.successRate + '%',
      label: 'Success Rate',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of successful students who have transformed their careers with BMS Academy
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.bgColor} rounded-full mb-4`}>
                  <IconComponent className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
import { Award, Shield, Star, Zap } from 'lucide-react';

const PartnersSection = () => {
  const partners = [
    {
      name: 'Tally Education Pvt. Ltd.',
      logo: 'https://via.placeholder.com/120x60/0066CC/FFFFFF?text=TALLY',
      description: 'Official Tally Partner'
    },
    {
      name: 'RKCL',
      logo: 'https://via.placeholder.com/120x60/FF6B35/FFFFFF?text=RKCL',
      description: 'RS-CIT & RS-CFA Authorized'
    },
    {
      name: 'Certiport',
      logo: 'https://via.placeholder.com/120x60/28A745/FFFFFF?text=CERTIPORT',
      description: 'Testing Center'
    },
    {
      name: 'Microsoft',
      logo: 'https://via.placeholder.com/120x60/0078D4/FFFFFF?text=MICROSOFT',
      description: 'Authorized Partner'
    },
    {
      name: 'Autodesk',
      logo: 'https://via.placeholder.com/120x60/FF7F00/FFFFFF?text=AUTODESK',
      description: 'Certified Partner'
    },
    {
      name: 'IC3 Certification',
      logo: 'https://via.placeholder.com/120x60/6F42C1/FFFFFF?text=IC3',
      description: 'Digital Literacy'
    }
  ];

  const certifications = [
    {
      icon: Award,
      title: 'Industry Recognized',
      description: 'Certificates valued by top employers',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Shield,
      title: 'Verified Credentials',
      description: 'Blockchain-secured certificates',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Star,
      title: 'Global Standards',
      description: 'International quality benchmarks',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: Zap,
      title: 'Career Boost',
      description: 'Immediate impact on career growth',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partners Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium mb-4">
            <Shield className="w-4 h-4 mr-2" />
            Trusted Partners
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Official Partners & Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We partner with leading technology companies and certification bodies to provide 
            you with industry-recognized credentials that employers trust.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-12 object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">
                {partner.name}
              </h3>
              <p className="text-xs text-gray-600">
                {partner.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certification Benefits */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Our Certifications Matter
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our partnerships ensure that your certifications are recognized and valued 
              by employers worldwide, giving you a competitive edge in the job market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${cert.bgColor} rounded-2xl mb-4`}>
                    <IconComponent className={`w-8 h-8 ${cert.color}`} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-gray-600">
                    {cert.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">45,000+</div>
              <div className="text-gray-600">Certificates Issued</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Employer Recognition</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-gray-600">Salary Increase</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="newsletter-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#newsletter-grid)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Mail className="w-10 h-10 text-white" />
          </div>

          {/* Content */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Stay Updated with <span className="text-yellow-400">Latest Courses</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get notified about new courses, special offers, and career tips delivered straight to your inbox
          </p>

          {/* Newsletter Form */}
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
              <p className="text-blue-100 text-sm mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </form>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-blue-100">
                  You've successfully subscribed to our newsletter. Check your inbox for a welcome email!
                </p>
              </div>
            </div>
          )}

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Exclusive Content</h4>
              <p className="text-blue-100 text-sm">Get access to premium resources and insider tips</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Special Offers</h4>
              <p className="text-blue-100 text-sm">Be the first to know about discounts and promotions</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Career Tips</h4>
              <p className="text-blue-100 text-sm">Weekly insights to accelerate your professional growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
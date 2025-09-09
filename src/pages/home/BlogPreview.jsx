import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

const BlogPreview = () => {
  // Mock blog data - in a real app, this would come from an API
  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Programming Languages to Learn in 2024',
      excerpt: 'Discover the most in-demand programming languages that will boost your career prospects in the coming year.',
      author: 'Rajesh Sharma',
      date: '2024-01-15',
      category: 'Programming',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
      slug: 'top-10-programming-languages-2024'
    },
    {
      id: 2,
      title: 'Digital Marketing Trends That Will Dominate 2024',
      excerpt: 'Stay ahead of the curve with these emerging digital marketing trends and strategies for business growth.',
      author: 'Priya Patel',
      date: '2024-01-12',
      category: 'Digital Marketing',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
      slug: 'digital-marketing-trends-2024'
    },
    {
      id: 3,
      title: 'How to Build a Successful Career in Data Science',
      excerpt: 'A comprehensive guide to starting and advancing your career in the rapidly growing field of data science.',
      author: 'Dr. Amit Kumar',
      date: '2024-01-10',
      category: 'Data Science',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
      slug: 'career-in-data-science'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-800 font-medium mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Latest Insights
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            From Our Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights from the world of technology and professional development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                  <User className="w-4 h-4 mr-1" />
                  <span>{post.author}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View All Articles
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Industry Insights
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest articles, course updates, 
            and career tips delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <button className="px-8 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
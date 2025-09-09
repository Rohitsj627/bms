import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, User, Search, Tag, ArrowRight } from 'lucide-react';
import Header from '../components/common/Header';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  // Mock blog data - in a real app, this would come from an API
  const mockPosts = [
    {
      id: 1,
      title: 'Top 10 Programming Languages to Learn in 2024',
      excerpt: 'Discover the most in-demand programming languages that will boost your career prospects in the coming year. From Python to JavaScript, we cover the languages that matter most.',
      content: 'Full article content here...',
      author: 'Rajesh Sharma',
      date: '2024-01-15',
      category: 'Programming',
      tags: ['Programming', 'Career', 'Technology'],
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
      slug: 'top-10-programming-languages-2024',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'Digital Marketing Trends That Will Dominate 2024',
      excerpt: 'Stay ahead of the curve with these emerging digital marketing trends and strategies for business growth. Learn about AI-powered marketing, voice search optimization, and more.',
      content: 'Full article content here...',
      author: 'Priya Patel',
      date: '2024-01-12',
      category: 'Digital Marketing',
      tags: ['Digital Marketing', 'Trends', 'Business'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
      slug: 'digital-marketing-trends-2024',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'How to Build a Successful Career in Data Science',
      excerpt: 'A comprehensive guide to starting and advancing your career in the rapidly growing field of data science. Learn about essential skills, career paths, and industry insights.',
      content: 'Full article content here...',
      author: 'Dr. Amit Kumar',
      date: '2024-01-10',
      category: 'Data Science',
      tags: ['Data Science', 'Career', 'Analytics'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
      slug: 'career-in-data-science',
      readTime: '10 min read'
    },
    {
      id: 4,
      title: 'The Future of Web Development: What to Expect',
      excerpt: 'Explore the latest trends and technologies shaping the future of web development. From progressive web apps to serverless architecture.',
      content: 'Full article content here...',
      author: 'Sarah Johnson',
      date: '2024-01-08',
      category: 'Web Development',
      tags: ['Web Development', 'Technology', 'Future'],
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
      slug: 'future-of-web-development',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'Mastering Cloud Computing: A Beginner\'s Guide',
      excerpt: 'Get started with cloud computing and learn about the major platforms, services, and career opportunities in this growing field.',
      content: 'Full article content here...',
      author: 'Michael Chen',
      date: '2024-01-05',
      category: 'Cloud Computing',
      tags: ['Cloud Computing', 'AWS', 'Career'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
      slug: 'mastering-cloud-computing',
      readTime: '9 min read'
    },
    {
      id: 6,
      title: 'Cybersecurity Best Practices for Small Businesses',
      excerpt: 'Learn essential cybersecurity practices to protect your business from threats. A practical guide for small business owners and IT professionals.',
      content: 'Full article content here...',
      author: 'Lisa Rodriguez',
      date: '2024-01-03',
      category: 'Cybersecurity',
      tags: ['Cybersecurity', 'Business', 'Security'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
      slug: 'cybersecurity-best-practices',
      readTime: '5 min read'
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setPosts(mockPosts);
      setFilteredPosts(mockPosts);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = posts;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredPosts(filtered);
  }, [posts, selectedCategory, searchTerm]);

  const categories = ['All', ...new Set(posts.map(post => post.category))];
  const featuredPost = posts[0];

  return (
    <>
      <Helmet>
        <title>Blog - BMS Academy | Latest Tech Insights & Career Tips</title>
        <meta name="description" content="Stay updated with the latest technology trends, career advice, and industry insights from BMS Academy experts." />
      </Helmet>

      <Header
        image="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
        heading="BMS Academy Blog"
        subheading="Stay updated with the latest trends, tips, and insights from the world of technology"
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-sm font-medium mb-4">
                    <Tag className="w-3 h-3 mr-1" />
                    Featured Post
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center text-gray-500 mb-6">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{new Date(featuredPost.date).toLocaleDateString()}</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-colors"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
                <div>
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                <div className="w-full h-48 bg-gray-300"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-6 bg-gray-300 rounded w-full mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
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
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {filteredPosts.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Blog;
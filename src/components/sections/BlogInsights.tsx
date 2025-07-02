import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Calendar, 
  Clock, 
  Tag, 
  Search, 
  Filter,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Star,
  Eye
} from 'lucide-react';
import { DotMatrixBackground } from '../effects/DotMatrixBackground';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  publishDate: string;
  readTime: string;
  views: number;
  featured: boolean;
  tags: string[];
  author: string;
  gradient: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'terraform-vs-cdk',
    title: 'Terraform vs CDK: Choosing the Right IaC Tool',
    excerpt: 'A comprehensive comparison of Terraform and AWS CDK for infrastructure as code, covering syntax, ecosystem, and real-world use cases.',
    category: 'Infrastructure',
    publishDate: '2024-12-15',
    readTime: '8 min',
    views: 2847,
    featured: true,
    tags: ['Terraform', 'AWS CDK', 'IaC', 'DevOps'],
    author: 'DevOps Engineer',
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    id: 'llms-infrastructure-automation',
    title: 'Leveraging LLMs for Infrastructure Automation',
    excerpt: 'How Large Language Models are revolutionizing infrastructure automation, from code generation to intelligent monitoring and self-healing systems.',
    category: 'AI/ML',
    publishDate: '2024-12-10',
    readTime: '12 min',
    views: 3921,
    featured: true,
    tags: ['LLM', 'AI', 'Automation', 'Infrastructure'],
    author: 'DevOps Engineer',
    gradient: 'from-purple-500/20 to-pink-500/20'
  },
  {
    id: 'cicd-antipatterns',
    title: 'Common CI/CD Anti-Patterns and How to Avoid Them',
    excerpt: 'Identifying and fixing the most common CI/CD pipeline mistakes that slow down deployments and compromise system reliability.',
    category: 'CI/CD',
    publishDate: '2024-12-05',
    readTime: '10 min',
    views: 1653,
    featured: false,
    tags: ['CI/CD', 'DevOps', 'Best Practices', 'Automation'],
    author: 'DevOps Engineer',
    gradient: 'from-green-500/20 to-emerald-500/20'
  },
  {
    id: 'kubernetes-security-hardening',
    title: 'Kubernetes Security Hardening: A Complete Guide',
    excerpt: 'Essential security practices for Kubernetes clusters, from RBAC configuration to network policies and runtime security monitoring.',
    category: 'Security',
    publishDate: '2024-11-28',
    readTime: '15 min',
    views: 4205,
    featured: false,
    tags: ['Kubernetes', 'Security', 'RBAC', 'Network Policies'],
    author: 'DevOps Engineer',
    gradient: 'from-red-500/20 to-orange-500/20'
  },
  {
    id: 'serverless-monitoring-observability',
    title: 'Serverless Monitoring and Observability Best Practices',
    excerpt: 'Comprehensive guide to monitoring serverless applications, including distributed tracing, metrics collection, and alerting strategies.',
    category: 'Monitoring',
    publishDate: '2024-11-20',
    readTime: '11 min',
    views: 2134,
    featured: false,
    tags: ['Serverless', 'Monitoring', 'Observability', 'AWS Lambda'],
    author: 'DevOps Engineer',
    gradient: 'from-yellow-500/20 to-orange-500/20'
  },
  {
    id: 'gitops-workflow-optimization',
    title: 'GitOps Workflow Optimization for Enterprise Teams',
    excerpt: 'Scaling GitOps practices for large enterprise environments, including branching strategies, security considerations, and automation.',
    category: 'GitOps',
    publishDate: '2024-11-15',
    readTime: '9 min',
    views: 1876,
    featured: false,
    tags: ['GitOps', 'Enterprise', 'Automation', 'Git'],
    author: 'DevOps Engineer',
    gradient: 'from-indigo-500/20 to-purple-500/20'
  }
];

const categories = ['All', 'Infrastructure', 'AI/ML', 'CI/CD', 'Security', 'Monitoring', 'GitOps'];

export const BlogInsights: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [visiblePosts, setVisiblePosts] = useState(4);
  const [sortBy, setSortBy] = useState<'date' | 'views' | 'readTime'>('date');
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredPosts = blogPosts
    .filter(post => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'views':
          return b.views - a.views;
        case 'readTime':
          return parseInt(a.readTime) - parseInt(b.readTime);
        case 'date':
        default:
          return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      }
    });

  const featuredPost = filteredPosts.find(post => post.featured) || filteredPosts[0];
  const regularPosts = filteredPosts.filter(post => !post.featured || post.id !== featuredPost?.id);
  const displayedPosts = regularPosts.slice(0, visiblePosts);

  const loadMore = () => {
    setVisiblePosts(prev => Math.min(prev + 3, regularPosts.length));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  useEffect(() => {
    setVisiblePosts(4);
  }, [selectedCategory, searchTerm, sortBy]);

  return (
    <section id="blog-insights" className="relative py-20 bg-[#121212] overflow-hidden">
      {/* Dot Matrix Background */}
      <DotMatrixBackground className="opacity-20" />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#121212]/50 to-[#121212]" />
      <div className="absolute inset-0 bg-gradient-radial from-primary-500/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 backdrop-blur-sm border border-primary-500/20 rounded-full text-sm text-primary-400 mb-6"
          >
            <BookOpen size={16} className="animate-pulse" />
            Technical Insights & Knowledge Sharing
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Blog &
            <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Insights
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Deep dives into DevOps practices, cloud architecture patterns, and emerging technologies 
            that are shaping the future of infrastructure.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 space-y-6"
        >
          {/* Search and Sort */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none transition-colors"
              />
            </div>
            
            <div className="flex items-center gap-3">
              <Filter size={16} className="text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'date' | 'views' | 'readTime')}
                className="bg-gray-900/50 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:border-primary-500 focus:outline-none"
              >
                <option value="date">Latest</option>
                <option value="views">Most Viewed</option>
                <option value="readTime">Quick Reads</option>
              </select>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-primary-500/30 transition-all duration-300 group">
              {/* Featured Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="flex items-center gap-1 px-3 py-1 bg-primary-500 text-white text-sm font-bold rounded-full">
                  <Star size={14} />
                  Featured
                </span>
              </div>

              {/* Dot Matrix Overlay */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-300">
                <DotMatrixBackground />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    {/* Category and Meta */}
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-primary-500/20 text-primary-400 text-sm rounded-full">
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {formatDate(featuredPost.publishDate)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {featuredPost.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye size={14} />
                          {formatViews(featuredPost.views)}
                        </span>
                      </div>
                    </div>

                    {/* Title and Excerpt */}
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors duration-300">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-700 hover:border-primary-500/50 transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More Button */}
                    <motion.button
                      className="bg-gradient-to-r from-primary-500 to-purple-500 hover:from-primary-400 hover:to-purple-400 text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-primary-500/25 transition-all duration-300 flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read Full Article
                      <ArrowRight size={20} />
                    </motion.button>
                  </div>

                  {/* Visual Element */}
                  <div className="relative">
                    <motion.div
                      className={`w-full h-64 lg:h-80 bg-gradient-to-br ${featuredPost.gradient} rounded-lg border border-gray-700 flex items-center justify-center`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <TrendingUp size={64} className="text-white/20" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="group relative"
            >
              {/* Blog Card */}
              <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-primary-500/30 transition-all duration-300">
                {/* Dot Matrix Overlay */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-300">
                  <DotMatrixBackground />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col">
                  {/* Category and Meta */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Eye size={12} />
                      {formatViews(post.views)}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-300 text-sm mb-4 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-700">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {formatDate(post.publishDate)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visiblePosts < regularPosts.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={loadMore}
              className="bg-gradient-to-r from-primary-500 to-purple-500 hover:from-primary-400 hover:to-purple-400 text-white px-8 py-3 rounded-lg font-medium shadow-lg shadow-primary-500/25 transition-all duration-300 flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Articles
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-500/20 rounded-xl p-8 backdrop-blur-sm">
            <BookOpen size={48} className="text-primary-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest Insights
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get notified when I publish new articles about DevOps, cloud architecture, 
              and emerging technologies. No spam, just valuable content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none transition-colors"
              />
              <motion.button
                className="bg-gradient-to-r from-primary-500 to-purple-500 hover:from-primary-400 hover:to-purple-400 text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-primary-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};
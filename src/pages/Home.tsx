import { motion } from 'framer-motion'
import { Sparkles, Zap, Users, TrendingUp } from 'lucide-react'
import { useTools } from '../context/ToolContext'
import ToolCard from '../components/ToolCard'

const Home = () => {
  const { getFilteredTools, selectedCategory, setSelectedCategory, tools } = useTools()
  const filteredTools = getFilteredTools()
  
  const categories = ['All', ...Array.from(new Set(tools.map(tool => tool.category)))]

  const stats = [
    { icon: Zap, value: '1', label: 'AI Tool' },
    { icon: Users, value: '100%', label: 'Secure' },
    { icon: TrendingUp, value: 'Real-time', label: 'Generation' },
  ]

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-6xl mb-6"
          >
            ✨
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Welcome to{' '}
            <span className="gradient-text">Vibe AI Hub</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your secure and reliable password generation tool. 
            Create strong, customizable passwords with ease and confidence.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 px-8 py-4 rounded-lg text-lg font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 mx-auto"
          >
            <Sparkles className="w-5 h-5" />
            <span>Explore AI Tools</span>
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="glass-effect rounded-xl p-6 text-center"
            >
              <stat.icon className="w-8 h-8 text-primary-400 mx-auto mb-2" />
              <div className="text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Secure <span className="gradient-text">Password Generator</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Generate strong, secure passwords with customizable options. Perfect for protecting your online accounts.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool, index) => (
            <ToolCard key={tool.id} tool={tool} index={index} />
          ))}
        </div>

        {filteredTools.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No tools found</h3>
            <p className="text-gray-300">Try adjusting your search or category filter.</p>
          </motion.div>
        )}
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                About <span className="gradient-text">Password Generator</span>
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                We're passionate about online security. Our password generator creates strong, secure passwords 
                to help protect your digital life with customizable options for all your needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span className="text-gray-300">Customizable password length and character sets</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                  <span className="text-gray-300">Real-time password strength indicator</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span className="text-gray-300">One-click copy to clipboard functionality</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="text-8xl mb-4"
              >
                🚀
              </motion.div>
              <p className="text-gray-300 text-lg">
                Generate secure passwords instantly with our reliable and user-friendly tool
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Home 
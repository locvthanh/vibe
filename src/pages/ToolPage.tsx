import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, CheckCircle } from 'lucide-react'
import { useTools } from '../context/ToolContext'

const ToolPage = () => {
  const { toolId } = useParams<{ toolId: string }>()
  const { tools } = useTools()
  
  const tool = tools.find(t => t.id === toolId)

  if (!tool) {
    return (
      <div className="text-center py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-effect rounded-xl p-12 max-w-md mx-auto"
        >
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold mb-4">Tool Not Found</h2>
          <p className="text-gray-300 mb-6">
            The AI tool you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 px-6 py-3 rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8"
      >
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Tools</span>
        </Link>
      </motion.div>

      {/* Tool Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-effect rounded-2xl p-8 mb-8"
      >
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="text-6xl">{tool.icon}</div>
            <div>
              <h1 className="text-4xl font-bold mb-2">{tool.name}</h1>
              <p className="text-gray-300 text-lg">{tool.description}</p>
            </div>
          </div>
          <div className="text-right">
            <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
              {tool.category}
            </span>
            <div className="mt-2">
              <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                tool.status === 'active' ? 'bg-green-500/20 text-green-400' :
                tool.status === 'beta' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-blue-500/20 text-blue-400'
              }`}>
                {tool.status === 'active' ? 'Active' :
                 tool.status === 'beta' ? 'Beta' : 'Coming Soon'}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Features</h3>
            <div className="space-y-3">
              {tool.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Start</h3>
            <div className="space-y-4">
              <p className="text-gray-300">
                Ready to get started with {tool.name}? Click the button below to access the tool.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 px-6 py-3 rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch {tool.name}</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Additional Information */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-effect rounded-2xl p-8"
      >
        <h3 className="text-2xl font-bold mb-6">About {tool.name}</h3>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-4">
            {tool.name} is designed to help you achieve more with the power of artificial intelligence. 
            Whether you're a professional looking to streamline your workflow or a creative individual 
            seeking new ways to express your ideas, this tool provides the capabilities you need.
          </p>
          <p className="text-gray-300">
            Our AI-powered platform continuously learns and improves, ensuring you always have access 
            to the latest advancements in artificial intelligence technology.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default ToolPage 
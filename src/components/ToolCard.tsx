import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Clock, TestTube } from 'lucide-react'
import { Tool } from '../context/ToolContext'

interface ToolCardProps {
  tool: Tool
  index: number
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, index }) => {
  const getStatusIcon = () => {
    switch (tool.status) {
      case 'active':
        return <Zap className="w-4 h-4 text-green-400" />
      case 'beta':
        return <TestTube className="w-4 h-4 text-yellow-400" />
      case 'coming-soon':
        return <Clock className="w-4 h-4 text-blue-400" />
      default:
        return null
    }
  }

  const getStatusText = () => {
    switch (tool.status) {
      case 'active':
        return 'Active'
      case 'beta':
        return 'Beta'
      case 'coming-soon':
        return 'Coming Soon'
      default:
        return ''
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="tool-card group"
    >
      <Link to={tool.url || `/tool/${tool.id}`}>
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl">{tool.icon}</div>
          <div className="flex items-center space-x-1 text-xs">
            {getStatusIcon()}
            <span className="text-gray-300">{getStatusText()}</span>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-2 group-hover:gradient-text transition-all duration-300">
          {tool.name}
        </h3>

        <p className="text-gray-300 mb-4 line-clamp-2">
          {tool.description}
        </p>

        <div className="mb-4">
          <span className="inline-block px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300">
            {tool.category}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {tool.features.slice(0, 2).map((feature, idx) => (
              <span
                key={idx}
                className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded"
              >
                {feature}
              </span>
            ))}
            {tool.features.length > 2 && (
              <span className="text-xs text-gray-500">+{tool.features.length - 2} more</span>
            )}
          </div>

          <motion.div
            whileHover={{ x: 5 }}
            className="text-primary-400 group-hover:text-primary-300 transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ToolCard 
import React, { createContext, useContext, useState, ReactNode } from 'react'

export interface Tool {
  id: string
  name: string
  description: string
  category: string
  icon: string
  color: string
  status: 'active' | 'beta' | 'coming-soon'
  features: string[]
  url?: string
}

interface ToolContextType {
  tools: Tool[]
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
  getToolsByCategory: (category: string) => Tool[]
  getFilteredTools: () => Tool[]
}

const ToolContext = createContext<ToolContextType | undefined>(undefined)

const defaultTools: Tool[] = [
  {
    id: 'text-generator',
    name: 'AI Text Generator',
    description: 'Generate creative and engaging content with advanced AI',
    category: 'Content Creation',
    icon: '📝',
    color: 'primary',
    status: 'active',
    features: ['Creative writing', 'Blog posts', 'Social media content', 'Email templates'],
    url: '/tool/text-generator'
  },
  {
    id: 'image-generator',
    name: 'AI Image Creator',
    description: 'Transform your ideas into stunning visual art',
    category: 'Visual Arts',
    icon: '🎨',
    color: 'secondary',
    status: 'active',
    features: ['Digital art', 'Illustrations', 'Photo editing', 'Logo design'],
    url: '/tool/image-generator'
  },
  {
    id: 'code-assistant',
    name: 'Code Assistant',
    description: 'Get intelligent help with your programming tasks',
    category: 'Development',
    icon: '💻',
    color: 'primary',
    status: 'active',
    features: ['Code review', 'Bug fixing', 'Documentation', 'Best practices'],
    url: '/tool/code-assistant'
  },
  {
    id: 'data-analyzer',
    name: 'Data Analyzer',
    description: 'Unlock insights from your data with AI-powered analysis',
    category: 'Analytics',
    icon: '📊',
    color: 'secondary',
    status: 'beta',
    features: ['Data visualization', 'Trend analysis', 'Predictions', 'Reports'],
    url: '/tool/data-analyzer'
  },
  {
    id: 'voice-assistant',
    name: 'Voice Assistant',
    description: 'Interact with AI through natural voice commands',
    category: 'Communication',
    icon: '🎤',
    color: 'primary',
    status: 'coming-soon',
    features: ['Voice commands', 'Speech recognition', 'Text-to-speech', 'Conversation'],
    url: '/tool/voice-assistant'
  },
  {
    id: 'translation-tool',
    name: 'AI Translator',
    description: 'Break language barriers with intelligent translation',
    category: 'Communication',
    icon: '🌐',
    color: 'secondary',
    status: 'active',
    features: ['Multi-language support', 'Real-time translation', 'Document translation', 'Voice translation'],
    url: '/tool/translation-tool'
  }
]

export const ToolProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const getToolsByCategory = (category: string) => {
    if (category === 'All') return defaultTools
    return defaultTools.filter(tool => tool.category === category)
  }

  const getFilteredTools = () => {
    let filtered = defaultTools

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(tool => tool.category === selectedCategory)
    }

    if (searchQuery) {
      filtered = filtered.filter(tool =>
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    return filtered
  }

  const value: ToolContextType = {
    tools: defaultTools,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    getToolsByCategory,
    getFilteredTools
  }

  return (
    <ToolContext.Provider value={value}>
      {children}
    </ToolContext.Provider>
  )
}

export const useTools = () => {
  const context = useContext(ToolContext)
  if (context === undefined) {
    throw new Error('useTools must be used within a ToolProvider')
  }
  return context
} 
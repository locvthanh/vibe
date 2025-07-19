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
    id: 'password-generator',
    name: 'Password Generator',
    description: 'Generate secure, random passwords with customizable options',
    category: 'Security',
    icon: '🔐',
    color: 'primary',
    status: 'active',
    features: ['Customizable length', 'Include symbols', 'Include numbers', 'Include uppercase', 'Copy to clipboard'],
    url: '/tool/password-generator'
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
import React, { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Copy, RefreshCw, CheckCircle } from 'lucide-react'

interface PasswordOptions {
  length: number
  includeUppercase: boolean
  includeLowercase: boolean
  includeNumbers: boolean
  includeSymbols: boolean
}

const PasswordGenerator: React.FC = () => {
  const [password, setPassword] = useState('')
  const [copied, setCopied] = useState(false)
  const [options, setOptions] = useState<PasswordOptions>({
    length: 16,
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true
  })

  const generatePassword = useCallback(() => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?'

    let chars = ''
    if (options.includeUppercase) chars += uppercase
    if (options.includeLowercase) chars += lowercase
    if (options.includeNumbers) chars += numbers
    if (options.includeSymbols) chars += symbols

    if (chars === '') {
      setPassword('')
      return
    }

    let generatedPassword = ''
    for (let i = 0; i < options.length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length)
      generatedPassword += chars[randomIndex]
    }

    setPassword(generatedPassword)
    setCopied(false)
  }, [options])

  const copyToClipboard = async () => {
    if (password) {
      try {
        await navigator.clipboard.writeText(password)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error('Failed to copy password:', err)
      }
    }
  }

  const updateOption = (key: keyof PasswordOptions, value: boolean | number) => {
    setOptions(prev => ({ ...prev, [key]: value }))
  }

  // Generate password on component mount and when options change
  React.useEffect(() => {
    generatePassword()
  }, [generatePassword])

  const getPasswordStrength = () => {
    if (!password) return { score: 0, label: '', color: '' }
    
    let score = 0
    if (options.includeUppercase && /[A-Z]/.test(password)) score++
    if (options.includeLowercase && /[a-z]/.test(password)) score++
    if (options.includeNumbers && /\d/.test(password)) score++
    if (options.includeSymbols && /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password)) score++
    if (password.length >= 12) score++
    if (password.length >= 16) score++

    if (score <= 2) return { score, label: 'Weak', color: 'text-red-400' }
    if (score <= 4) return { score, label: 'Fair', color: 'text-yellow-400' }
    if (score <= 5) return { score, label: 'Good', color: 'text-blue-400' }
    return { score, label: 'Strong', color: 'text-green-400' }
  }

  const strength = getPasswordStrength()

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Generated Password Display */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-effect rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Generated Password</h3>
          <div className="flex items-center space-x-2">
            <span className={`text-sm ${strength.color}`}>
              {strength.label}
            </span>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((level) => (
                <div
                  key={level}
                  className={`w-2 h-2 rounded-full ${
                    level <= strength.score
                      ? strength.score <= 2 ? 'bg-red-400' :
                        strength.score <= 4 ? 'bg-yellow-400' :
                        strength.score <= 5 ? 'bg-blue-400' : 'bg-green-400'
                      : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="flex-1 bg-white/5 rounded-lg p-4 font-mono text-lg break-all">
            {password || 'Click generate to create a password'}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={copyToClipboard}
            disabled={!password}
            className="p-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {copied ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
          </motion.button>
        </div>
        
        {copied && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-400 text-sm mt-2 text-center"
          >
            Password copied to clipboard!
          </motion.p>
        )}
      </motion.div>

      {/* Password Options */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-effect rounded-xl p-6"
      >
        <h3 className="text-lg font-semibold mb-4">Password Options</h3>
        
        <div className="space-y-4">
          {/* Length Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium">Length: {options.length}</label>
            </div>
            <input
              type="range"
              min="8"
              max="64"
              value={options.length}
              onChange={(e) => updateOption('length', parseInt(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>8</span>
              <span>64</span>
            </div>
          </div>

          {/* Character Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={options.includeUppercase}
                onChange={(e) => updateOption('includeUppercase', e.target.checked)}
                className="w-4 h-4 text-primary-500 bg-white/10 border-gray-600 rounded focus:ring-primary-500"
              />
              <span className="text-sm">Include Uppercase (A-Z)</span>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={options.includeLowercase}
                onChange={(e) => updateOption('includeLowercase', e.target.checked)}
                className="w-4 h-4 text-primary-500 bg-white/10 border-gray-600 rounded focus:ring-primary-500"
              />
              <span className="text-sm">Include Lowercase (a-z)</span>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={options.includeNumbers}
                onChange={(e) => updateOption('includeNumbers', e.target.checked)}
                className="w-4 h-4 text-primary-500 bg-white/10 border-gray-600 rounded focus:ring-primary-500"
              />
              <span className="text-sm">Include Numbers (0-9)</span>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={options.includeSymbols}
                onChange={(e) => updateOption('includeSymbols', e.target.checked)}
                className="w-4 h-4 text-primary-500 bg-white/10 border-gray-600 rounded focus:ring-primary-500"
              />
              <span className="text-sm">Include Symbols (!@#$%^&*)</span>
            </label>
          </div>
        </div>
      </motion.div>

      {/* Generate Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={generatePassword}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 px-8 py-4 rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 text-lg font-semibold"
        >
          <RefreshCw className="w-5 h-5" />
          <span>Generate New Password</span>
        </motion.button>
      </motion.div>

      {/* Security Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-effect rounded-xl p-6"
      >
        <h3 className="text-lg font-semibold mb-4">Security Tips</h3>
        <ul className="space-y-2 text-sm text-gray-300">
          <li>• Use at least 12 characters for better security</li>
          <li>• Include a mix of uppercase, lowercase, numbers, and symbols</li>
          <li>• Avoid using personal information like names or birthdays</li>
          <li>• Use different passwords for each account</li>
          <li>• Consider using a password manager for better security</li>
        </ul>
      </motion.div>
    </div>
  )
}

export default PasswordGenerator
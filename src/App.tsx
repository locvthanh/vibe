import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Home from './pages/Home'
import ToolPage from './pages/ToolPage'
import { ToolProvider } from './context/ToolContext'

function App() {
  return (
    <ToolProvider>
      <div className="min-h-screen">
        <Header />
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 py-8"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tool/:toolId" element={<ToolPage />} />
          </Routes>
        </motion.main>
      </div>
    </ToolProvider>
  )
}

export default App 
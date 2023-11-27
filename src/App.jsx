import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout'
import NoPage from './components/noPage/NoPage'

import { AnimatePresence } from 'framer-motion'
import Home from './components/pages/home/Home'

function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App

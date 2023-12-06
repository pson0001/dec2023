import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout'
import NoPage from './components/noPage/NoPage'

import { AnimatePresence } from 'framer-motion'
import Home from './components/pages/home/Home'
import About from './components/pages/about/About'
import StudentPortal from './components/pages/projects/StudentPortal'
import CourseMapper from './components/pages/projects/CourseMapper'
import Peerview from './components/pages/projects/Peerview'
import Library from './components/pages/projects/Library'

function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/monash-student-portal" element={<StudentPortal />} />
          <Route path="/monash-course-mapper" element={<CourseMapper />} />
          <Route path="/monash-peerview" element={<Peerview />} />
          <Route path="/monash-react-component-library" element={<Library />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App

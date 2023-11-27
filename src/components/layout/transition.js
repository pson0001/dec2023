import { motion } from 'framer-motion'
import c from './layout.module.scss'

const transition = (Component) => {
  return () => (
    <>
      <Component />
      <motion.div
        className={c.slideIn}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
      <motion.div
        className={c.slideOut}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  )
}
export default transition

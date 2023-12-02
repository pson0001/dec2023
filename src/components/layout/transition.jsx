import { motion } from 'framer-motion'

const transition = (Component) => {
  return () => (
    <>
      <motion.div
        // className={c.slideIn}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Component />
      </motion.div>
    </>
  )
}
export default transition

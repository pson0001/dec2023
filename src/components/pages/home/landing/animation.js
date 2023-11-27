const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }

export const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.02,
      staggerDirection: 1,
    },
  },
}

export const item = {
  hidden: { y: '150%' },
  visible: {
    y: 0,
    transition: { duration: 0.2, ...transition },
  },
}
export const itemLabel = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,

    transition: { delay: 1.4, duration: 0.2, ...transition },
  },
}

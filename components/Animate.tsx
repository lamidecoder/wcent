'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode, CSSProperties } from 'react'

const T = { duration: 0.75, ease: 'easeOut' as const }

export function FadeUp({ children, delay = 0, style, className }: { children: ReactNode; delay?: number; style?: CSSProperties; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ ...T, delay }} style={style} className={className}>{children}</motion.div>
  )
}

export function FadeIn({ children, delay = 0, style, className }: { children: ReactNode; delay?: number; style?: CSSProperties; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1, delay }} style={style} className={className}>{children}</motion.div>
  )
}

export function SlideIn({ children, delay = 0, from = 'left', style, className }: { children: ReactNode; delay?: number; from?: 'left' | 'right'; style?: CSSProperties; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: from === 'left' ? -44 : 44 }} animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }} style={style} className={className}>{children}</motion.div>
  )
}

export function Stagger({ children, style, className }: { children: ReactNode; style?: CSSProperties; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      style={style} className={className}>{children}</motion.div>
  )
}

export function Item({ children, style, className }: { children: ReactNode; style?: CSSProperties; className?: string }) {
  return (
    <motion.div variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } } }}
      style={style} className={className}>{children}</motion.div>
  )
}

export function ScaleIn({ children, delay = 0, style, className }: { children: ReactNode; delay?: number; style?: CSSProperties; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, scale: 0.93 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }} style={style} className={className}>{children}</motion.div>
  )
}

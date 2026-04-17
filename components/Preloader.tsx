'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
  const [phase, setPhase] = useState<string>('loading')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Animate progress bar
    const start = Date.now()
    const duration = 2200
    const tick = () => {
      const elapsed = Date.now() - start
      const p = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(p)
      if (p < 100) {
        requestAnimationFrame(tick)
      } else {
        setTimeout(() => setPhase('reveal'), 200)
        setTimeout(() => setPhase('done'), 1100)
      }
    }
    requestAnimationFrame(tick)
  }, [])

  return (
    <AnimatePresence mode='wait'>
      {phase !== 'done' && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: '#081B15',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Animated background grid */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(rgba(201,168,76,0.07) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }} />

          {/* Outer glow ring */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.35, 0.15] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ width: 340, height: 340, borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,169,100,0.15) 0%, transparent 70%)' }}
            />
          </div>

          {/* 3D rotating cube */}
          <div style={{ marginBottom: 48, perspective: '600px' }}>
            <motion.div
              animate={{ rotateY: [0, 360], rotateX: [15, 15] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              style={{ width: 80, height: 80, position: 'relative', transformStyle: 'preserve-3d' }}
            >
              {/* All 6 faces */}
              {[
                { transform: 'translateZ(40px)',                    bg: 'rgba(201,168,76,0.9)' },
                { transform: 'rotateY(180deg) translateZ(40px)',    bg: 'rgba(201,168,76,0.6)' },
                { transform: 'rotateY(90deg) translateZ(40px)',     bg: 'rgba(201,168,76,0.75)' },
                { transform: 'rotateY(-90deg) translateZ(40px)',    bg: 'rgba(201,168,76,0.75)' },
                { transform: 'rotateX(90deg) translateZ(40px)',     bg: 'rgba(201,168,76,0.5)' },
                { transform: 'rotateX(-90deg) translateZ(40px)',    bg: 'rgba(201,168,76,0.5)' },
              ].map((face, i) => (
                <div key={i} style={{
                  position: 'absolute', width: 80, height: 80,
                  background: face.bg,
                  border: '1px solid rgba(232,192,106,0.6)',
                  transform: face.transform,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backfaceVisibility: 'visible',
                  boxShadow: 'inset 0 0 20px rgba(255,255,255,0.1)',
                }}>
                  {i === 0 && (
                    <span style={{ fontFamily: 'Fraunces, serif', fontSize: 36, fontWeight: 600, color: '#081B15', lineHeight: 1 }}>W</span>
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: 36 }}
          >
            <div style={{ fontFamily: 'Fraunces, serif', fontSize: '2rem', fontWeight: 300, color: '#fff', letterSpacing: '.08em', lineHeight: 1.1 }}>
              Withcent
            </div>
            <div style={{ fontSize: '.6rem', color: '#c9a84c', letterSpacing: '.42em', textTransform: 'uppercase', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, marginTop: 4 }}>
              Global
            </div>
          </motion.div>

          {/* Progress bar */}
          <div style={{ width: 200, position: 'relative' }}>
            <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.08)', position: 'relative', overflow: 'hidden' }}>
              <motion.div
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, #c9a84c, #f5d980, #c9a84c)',
                  backgroundSize: '200% 100%',
                  width: `${progress}%`,
                  transition: 'width 0.05s linear',
                }}
                animate={{ backgroundPosition: ['0% center', '200% center'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
              <span style={{ fontSize: 10, color: '#334155', fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '.12em', textTransform: 'uppercase' }}>
                Loading
              </span>
              <span style={{ fontSize: 10, color: '#c9a84c', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
                {progress}%
              </span>
            </div>
          </div>

          {/* Curtain reveal - slides up on exit */}
          <AnimatePresence>
            {phase === 'reveal' && (
              <motion.div
                key="curtain"
                initial={{ y: 0 }}
                animate={{ y: '-100%' }}
                transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
                style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(160deg, #081B15 0%, #0F3D2E 100%)',
                  zIndex: 10,
                }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react'

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/universities', label: 'Universities' },
  { href: '/blog', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      {/* Top announcement bar */}
      <div style={{
        background: '#040b16',
        borderBottom: '1px solid rgba(201,168,76,.08)',
        position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 1000, display: 'none',
      }} className="topbar-desktop">
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 32px', height: 36, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 11, color: '#475569', fontStyle: 'italic', fontFamily: 'Cormorant Garamond, serif' }}>
            British Council Trained · Contracted Education Advisor · Est. 2010
          </span>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="tel:+2349083353549" style={{ fontSize: 11, color: '#475569', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5, transition: 'color .2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#c9a84c')}
              onMouseLeave={e => (e.currentTarget.style.color = '#475569')}>
              <Phone size={10} /> +234 908 335 3549
            </a>
            <a href="mailto:info@wcent.co.uk" style={{ fontSize: 11, color: '#475569', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5, transition: 'color .2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#c9a84c')}
              onMouseLeave={e => (e.currentTarget.style.color = '#475569')}>
              <Mail size={10} /> info@wcent.co.uk
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <motion.nav
        className="nav-root"
        style={{ top: 0 }}
        animate={{
          background: scrolled ? 'rgba(7,16,31,0.97)' : 'rgba(7,16,31,0)',
          backdropFilter: scrolled ? 'blur(24px)' : 'blur(0px)',
          borderBottom: scrolled ? '1px solid rgba(201,168,76,0.1)' : '1px solid transparent',
        }}
        transition={{ duration: 0.35 }}
      >
        <div className="nav-inner">
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', flexShrink: 0 }}>
            <motion.div
              style={{ position: 'relative', width: 40, height: 40, border: '1px solid #c9a84c', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
              whileHover={{ scale: 1.05 }}
            >
              <span style={{ fontFamily: 'Cormorant Garamond, serif', color: '#c9a84c', fontSize: 22, fontWeight: 600, lineHeight: 1 }}>W</span>
              <div style={{ position: 'absolute', bottom: -3, right: -3, width: 8, height: 8, background: '#c9a84c', opacity: 0.6 }} />
            </motion.div>
            <div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', color: '#fff', fontSize: 17, fontWeight: 600, lineHeight: 1.15, letterSpacing: '.01em' }}>Withcent</div>
              <div style={{ fontSize: 8, color: '#c9a84c', letterSpacing: '.32em', textTransform: 'uppercase', fontWeight: 700 }}>Nigeria</div>
            </div>
          </Link>

          {/* Desktop links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="desktop-nav">
            {LINKS.map(l => {
              const active = pathname === l.href
              return (
                <Link key={l.href} href={l.href} style={{ position: 'relative', padding: '8px 14px', textDecoration: 'none', fontSize: 13, fontWeight: 500, color: active ? '#c9a84c' : '#cbd5e1', transition: 'color .2s', letterSpacing: '.01em', fontFamily: 'DM Sans, sans-serif' }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.color = '#fff' }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.color = '#cbd5e1' }}>
                  {l.label}
                  {active && (
                    <motion.div layoutId="nav-active" style={{ position: 'absolute', bottom: 0, left: 14, right: 14, height: 1, background: '#c9a84c' }} />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* CTA + burger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
            <Link href="/contact" className="btn-primary desktop-cta" style={{ padding: '10px 24px', fontSize: '.68rem' }}>Apply Now</Link>
            <button onClick={() => setOpen(!open)} className="mobile-burger"
              style={{ background: 'none', border: '1px solid rgba(255,255,255,.15)', color: '#fff', cursor: 'pointer', padding: '8px 10px', lineHeight: 0, display: 'none' }}>
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              style={{ overflow: 'hidden', background: '#07101f', borderTop: '1px solid rgba(255,255,255,.07)' }}
            >
              <div style={{ padding: '20px 20px 28px' }}>
                {LINKS.map((l, i) => (
                  <motion.div key={l.href} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                    <Link href={l.href}
                      style={{ display: 'block', padding: '13px 0', borderBottom: '1px solid rgba(255,255,255,.05)', fontSize: 15, fontWeight: 500, color: pathname === l.href ? '#c9a84c' : '#94a3b8', textDecoration: 'none' }}>
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} style={{ marginTop: 20 }}>
                  <Link href="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
                    Apply Now — Free Consultation
                  </Link>
                </motion.div>
                <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,.05)', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <a href="tel:+2349083353549" style={{ fontSize: 12, color: '#475569', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Phone size={13} color="#c9a84c" /> +234 908 335 3549
                  </a>
                  <a href="mailto:info@wcent.co.uk" style={{ fontSize: 12, color: '#475569', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Mail size={13} color="#c9a84c" /> info@wcent.co.uk
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Responsive show/hide rules */}
      <style>{`
        .topbar-desktop { display: none !important; }
        @media (min-width: 900px) {
          .topbar-desktop { display: flex !important; }
          nav.nav-root { top: 36px !important; }
          .mobile-burger { display: none !important; }
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: inline-flex !important; }
        }
        @media (max-width: 899px) {
          nav.nav-root { top: 0 !important; }
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-burger { display: flex !important; }
        }
      `}</style>
    </>
  )
}

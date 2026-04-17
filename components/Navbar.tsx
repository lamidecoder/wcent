'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail } from 'lucide-react'

const LINKS = [
  { href: '/',             label: 'Home' },
  { href: '/services',     label: 'Services' },
  { href: '/about',        label: 'About' },
  { href: '/universities', label: 'Universities' },
  { href: '/blog',         label: 'Resources' },
  { href: '/contact',      label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const pathname = usePathname()
  const isHome   = pathname === '/'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  const solid = scrolled || !isHome

  return (
    <>
      {/* Top bar */}
      <div style={{ background: '#040e09', borderBottom: '1px solid rgba(200,169,100,.1)', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }} className="topbar-desktop">
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 32px', height: 34, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 11, color: '#8aab9a', fontStyle: 'italic', fontFamily: 'Fraunces, serif', letterSpacing: '.02em' }}>
            British Council Trained · Contracted Education Advisor · Est. 2010
          </span>
          <div style={{ display: 'flex', gap: 22 }}>
            <a href="tel:+2349083353549" style={{ fontSize: 11, color: '#8aab9a', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5, transition: 'color .2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#C8A964')}
              onMouseLeave={e => (e.currentTarget.style.color = '#8aab9a')}>
              <Phone size={10} /> +234 908 335 3549
            </a>
            <a href="mailto:info@wcent.co.uk" style={{ fontSize: 11, color: '#8aab9a', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5, transition: 'color .2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#C8A964')}
              onMouseLeave={e => (e.currentTarget.style.color = '#8aab9a')}>
              <Mail size={10} /> info@wcent.co.uk
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <motion.nav className="nav-root" style={{ top: 0 }}
        animate={{
          background: solid ? 'rgba(8,27,21,0.97)' : 'rgba(8,27,21,0)',
          backdropFilter: solid ? 'blur(24px)' : 'blur(0px)',
          borderBottom: solid ? '1px solid rgba(200,169,100,0.1)' : '1px solid transparent',
        }}
        transition={{ duration: 0.35 }}>
        <div className="nav-inner">
          {/* Logo — chevron + Withcent + GLOBAL */}
          <Link href="/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', gap: 0 }}>
            <svg width="26" height="16" viewBox="0 0 26 16" fill="none">
              <polyline points="1,13 13,2 25,13" stroke="#C8A964" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="4,17 13,8 22,17" stroke="#C8A964" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity="0.55"/>
            </svg>
            <div style={{ fontFamily: 'Fraunces, serif', color: '#F5F1E6', fontSize: 19, fontWeight: 400, lineHeight: 1, marginTop: 2, letterSpacing: '.01em' }}>Withcent</div>
            <div style={{ width: 38, height: 1, background: '#C8A964', opacity: .65, marginTop: 3 }} />
            <div style={{ fontSize: 7.5, color: '#C8A964', letterSpacing: '.4em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', fontWeight: 600, marginTop: 3 }}>Global</div>
          </Link>

          {/* Desktop links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="desktop-nav">
            {LINKS.map(l => {
              const active = pathname === l.href
              return (
                <Link key={l.href} href={l.href}
                  style={{ position: 'relative', padding: '8px 13px', textDecoration: 'none', fontSize: 13, fontWeight: 500, color: active ? '#C8A964' : '#a8c4b4', transition: 'color .2s', fontFamily: 'Inter, sans-serif' }}
                  onMouseEnter={e => { if (!active)(e.currentTarget as HTMLElement).style.color = '#F5F1E6' }}
                  onMouseLeave={e => { if (!active)(e.currentTarget as HTMLElement).style.color = '#a8c4b4' }}>
                  {l.label}
                  {active && <motion.div layoutId="nav-ul" style={{ position: 'absolute', bottom: 2, left: 13, right: 13, height: 1, background: '#C8A964' }} />}
                </Link>
              )
            })}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            <Link href="/contact" className="btn-primary desktop-cta" style={{ padding: '9px 20px', fontSize: '.67rem' }}>Apply Now</Link>
            <button onClick={() => setOpen(!open)} className="mobile-burger"
              style={{ background: 'none', border: '1px solid rgba(200,169,100,.25)', color: '#F5F1E6', cursor: 'pointer', padding: '7px 9px', lineHeight: 0, display: 'none' }}>
              {open ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              style={{ overflow: 'hidden', background: '#081B15', borderTop: '1px solid rgba(255,255,255,.06)' }}>
              <div style={{ padding: '18px 20px 24px' }}>
                {LINKS.map((l, i) => (
                  <motion.div key={l.href} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                    <Link href={l.href}
                      style={{ display: 'block', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,.05)', fontSize: 15, fontWeight: 500, color: pathname === l.href ? '#C8A964' : '#8aab9a', textDecoration: 'none', fontFamily: 'Inter, sans-serif' }}>
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }} style={{ marginTop: 18 }}>
                  <Link href="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>Apply Now — Free Consultation</Link>
                </motion.div>
                <div style={{ marginTop: 18, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,.05)', display: 'flex', flexDirection: 'column', gap: 9 }}>
                  <a href="tel:+2349083353549" style={{ fontSize: 12, color: '#6b8e7f', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 7 }}><Phone size={12} color="#C8A964" /> +234 908 335 3549</a>
                  <a href="mailto:info@wcent.co.uk" style={{ fontSize: 12, color: '#6b8e7f', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 7 }}><Mail size={12} color="#C8A964" /> info@wcent.co.uk</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <style>{`
        .topbar-desktop{display:none!important}
        @media(min-width:900px){
          .topbar-desktop{display:flex!important}
          nav.nav-root{top:34px!important}
          .mobile-burger{display:none!important}
          .desktop-nav{display:flex!important}
          .desktop-cta{display:inline-flex!important}
        }
        @media(max-width:899px){
          nav.nav-root{top:0!important}
          .desktop-nav{display:none!important}
          .desktop-cta{display:none!important}
          .mobile-burger{display:flex!important}
        }
      `}</style>
    </>
  )
}
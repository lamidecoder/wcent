'use client'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#040e09', borderTop: '1px solid rgba(200,169,100,.08)' }}>

      {/* ── CTA band ── */}
      <div style={{ background: 'linear-gradient(135deg,#0F3D2E 0%,#081B15 100%)', borderBottom: '1px solid rgba(200,169,100,.1)', padding: '3rem 0' }}>
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <p style={{ fontSize: '.6rem', fontWeight: 700, letterSpacing: '.28em', textTransform: 'uppercase', color: '#C8A964', fontFamily: 'Inter, sans-serif', marginBottom: 8 }}>Ready to Begin?</p>
            <h3 className="fd" style={{ fontSize: 'clamp(1.4rem,3vw,2.2rem)', fontWeight: 300, color: '#F5F1E6', lineHeight: 1.2 }}>
              Your journey starts with <em style={{ color: '#C8A964' }}>one conversation.</em>
            </h3>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>Book Free Consultation</Link>
            <a href="tel:+2349083353549" className="btn-ghost" style={{ whiteSpace: 'nowrap' }}>Call Us Now</a>
          </div>
        </div>
      </div>

      {/* ── Main body ── */}
      <div className="wrap" style={{ paddingTop: '3.5rem', paddingBottom: '1.5rem' }}>
        <div className="col-footer">

          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', textDecoration: 'none', marginBottom: 18 }}>
              <svg width="24" height="15" viewBox="0 0 24 15" fill="none" style={{ marginBottom: 4 }}>
                <polyline points="1,12 12,2 23,12" stroke="#C8A964" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="3.5,15 12,7 20.5,15" stroke="#C8A964" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity=".55"/>
              </svg>
              <div style={{ fontFamily: 'Fraunces, serif', color: '#F5F1E6', fontSize: 17, fontWeight: 400, lineHeight: 1.2 }}>Withcent</div>
              <div style={{ width: 32, height: 1, background: '#C8A964', opacity: .55, marginTop: 3 }} />
              <div style={{ fontSize: 7.5, color: '#C8A964', letterSpacing: '.4em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', fontWeight: 600, marginTop: 3 }}>Global</div>
            </Link>

            <p style={{ fontSize: 12.5, lineHeight: 1.8, color: '#4d7060', marginBottom: 20, maxWidth: 220, fontFamily: 'Inter, sans-serif' }}>
              Guiding ambitious Nigerian students to world-class universities in the UK, Canada, and USA since 2010.
            </p>

            {/* British Council certification badge */}
            <div style={{ background: 'rgba(200,169,100,.05)', border: '1px solid rgba(200,169,100,.14)', padding: '14px 16px', marginBottom: 14, maxWidth: 230 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 9 }}>
                <div style={{ width: 34, height: 34, background: '#10b4a0', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                    <circle cx="5" cy="7" r="4.5" fill="white" opacity=".9"/>
                    <circle cx="11" cy="7" r="4.5" fill="white" opacity=".55"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 9, fontWeight: 800, color: '#F5F1E6', letterSpacing: '.07em', fontFamily: 'Inter, sans-serif', lineHeight: 1.3 }}>BRITISH COUNCIL</div>
                  <div style={{ fontSize: 8, color: '#C8A964', letterSpacing: '.1em', fontFamily: 'Inter, sans-serif', marginTop: 1 }}>Certified Agent</div>
                </div>
              </div>
              <div style={{ fontSize: 10.5, color: '#6b8e7f', fontFamily: 'Inter, sans-serif', lineHeight: 1.55 }}>
                UK Agent Quality Framework member. Trained and certified since 2010.
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 18, height: 18, background: 'rgba(200,169,100,.08)', border: '1px solid rgba(200,169,100,.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
                  <polyline points="1,6 5,1 9,6" stroke="#C8A964" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span style={{ fontSize: 10, color: '#2d4f3d', fontFamily: 'Inter, sans-serif', letterSpacing: '.04em' }}>WEBA Member · Est. 2010</span>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.24em', textTransform: 'uppercase', color: '#6b8e7f', marginBottom: 18, fontFamily: 'Inter, sans-serif' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[['/', 'Home'],['/services','Services'],['/about','About Us'],['/universities','Partner Universities'],['/blog','Resources'],['/about#careers','Careers'],['/contact','Contact']].map(([h,l])=>(
                <li key={h}>
                  <Link href={h} style={{ fontSize: 12.5, color: '#4d7060', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'Inter, sans-serif', transition: 'color .2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#C8A964')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#4d7060')}>
                    <ArrowRight size={9} style={{ opacity: .3 }} />{l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.24em', textTransform: 'uppercase', color: '#6b8e7f', marginBottom: 18, fontFamily: 'Inter, sans-serif' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Education Counselling','University Placement','Visa Application','Course Selection','Accommodation Advice','Pre-Departure Support','Post-Enrolment Help'].map(s=>(
                <li key={s}>
                  <Link href="/services" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5, color: '#4d7060', textDecoration: 'none', fontFamily: 'Inter, sans-serif', transition: 'color .2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#C8A964')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#4d7060')}>
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#C8A964', opacity: .4, flexShrink: 0 }} />{s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.24em', textTransform: 'uppercase', color: '#6b8e7f', marginBottom: 18, fontFamily: 'Inter, sans-serif' }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
              <div style={{ display: 'flex', gap: 10, fontSize: 12.5, color: '#4d7060', fontFamily: 'Inter, sans-serif', alignItems: 'flex-start' }}>
                <MapPin size={13} style={{ color: '#C8A964', flexShrink: 0, marginTop: 2 }} />
                <span style={{ lineHeight: 1.65 }}>144, Oko Ogba Road, Off Airport Road, Benin City, Nigeria</span>
              </div>
              <a href="tel:+2349083353549" style={{ display: 'flex', gap: 10, fontSize: 12.5, color: '#4d7060', textDecoration: 'none', fontFamily: 'Inter, sans-serif', alignItems: 'center', transition: 'color .2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C8A964')}
                onMouseLeave={e => (e.currentTarget.style.color = '#4d7060')}>
                <Phone size={13} style={{ color: '#C8A964', flexShrink: 0 }} />+234 908 335 3549
              </a>
              <a href="mailto:info@wcent.co.uk" style={{ display: 'flex', gap: 10, fontSize: 12.5, color: '#4d7060', textDecoration: 'none', fontFamily: 'Inter, sans-serif', alignItems: 'center', transition: 'color .2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C8A964')}
                onMouseLeave={e => (e.currentTarget.style.color = '#4d7060')}>
                <Mail size={13} style={{ color: '#C8A964', flexShrink: 0 }} />info@wcent.co.uk
              </a>
              <div style={{ display: 'flex', gap: 10, fontSize: 12.5, color: '#4d7060', fontFamily: 'Inter, sans-serif', alignItems: 'center' }}>
                <Clock size={13} style={{ color: '#C8A964', flexShrink: 0 }} />Mon–Fri: 09:00–17:30
              </div>

              {/* Mini stats */}
              <div style={{ marginTop: 6, paddingTop: 14, borderTop: '1px solid rgba(200,169,100,.08)', display: 'flex' }}>
                {[{n:'3,000+',l:'Students'},{n:'10+',l:'Years'},{n:'20+',l:'Partners'}].map((s,i)=>(
                  <div key={s.l} style={{ flex: 1, textAlign: 'center', borderRight: i < 2 ? '1px solid rgba(200,169,100,.08)' : 'none', padding: '0 6px' }}>
                    <div className="fd" style={{ fontSize: '1.1rem', fontWeight: 300, color: '#C8A964', lineHeight: 1 }}>{s.n}</div>
                    <div style={{ fontSize: '.55rem', color: '#2d4f3d', letterSpacing: '.1em', textTransform: 'uppercase', marginTop: 4, fontFamily: 'Inter, sans-serif' }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ height: 1, background: 'linear-gradient(90deg,transparent,rgba(200,169,100,.14),transparent)', margin: '2rem 0 1.5rem' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 11, color: '#1a3326', fontFamily: 'Inter, sans-serif' }}>
            © {new Date().getFullYear()} Withcent Global. All Rights Reserved.
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 10, color: '#1a3326', fontStyle: 'italic', fontFamily: 'Fraunces, serif' }}>Where ambition meets admission.</span>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <polyline points="1,7 6,1 11,7" stroke="#C8A964" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity=".4"/>
            </svg>
          </div>
          <div style={{ display: 'flex', gap: 16, fontSize: 11, color: '#1a3326', fontFamily: 'Inter, sans-serif' }}>
            <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
            <span style={{ cursor: 'pointer' }}>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#040e09', borderTop: '1px solid rgba(200,169,100,.08)' }}>
      <div className="wrap" style={{ paddingTop: '4.5rem', paddingBottom: '2rem' }}>
        <div className="col-footer">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: 18, gap: 0 }}>
              <svg width="24" height="15" viewBox="0 0 24 15" fill="none" style={{ marginBottom: 4 }}>
                <polyline points="1,12 12,2 23,12" stroke="#C8A964" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="3.5,15 12,7 20.5,15" stroke="#C8A964" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity=".55"/>
              </svg>
              <div style={{ fontFamily: 'Fraunces, serif', color: '#F5F1E6', fontSize: 16, fontWeight: 400, lineHeight: 1.2 }}>Withcent</div>
              <div style={{ width: 32, height: 1, background: '#C8A964', opacity: .55, marginTop: 3 }} />
              <div style={{ fontSize: 7.5, color: '#C8A964', letterSpacing: '.38em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', fontWeight: 600, marginTop: 3 }}>Global</div>
            </div>
            <p style={{ fontSize: 12.5, lineHeight: 1.8, color: '#4d7060', marginBottom: 14, maxWidth: 240, fontFamily: 'Inter, sans-serif' }}>
              Guiding ambitious Nigerian students to world-class universities in the UK, Canada, and USA since 2010.
            </p>
            <div style={{ fontSize: 10, color: '#2d4f3d', letterSpacing: '.06em', fontFamily: 'Inter, sans-serif' }}>
              Member of <span style={{ color: '#C8A964' }}>WEBA</span> — World Educate Business Association
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase', color: '#8aab9a', marginBottom: 16, fontFamily: 'Inter, sans-serif' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[['/', 'Home'],['/services','Services'],['/about','About Us'],['/universities','Partner Universities'],['/blog','Resources'],['/about#careers','Careers'],['/contact','Contact']].map(([h,l])=>(
                <li key={h}><Link href={h} style={{ fontSize: 12, color: '#4d7060', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'Inter, sans-serif' }}><ArrowRight size={8} style={{ opacity: .3 }} />{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase', color: '#8aab9a', marginBottom: 16, fontFamily: 'Inter, sans-serif' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {['Education Counselling','University Placement','Visa Application','Course Selection','Accommodation Advice','Pre-Departure Support','Post-Enrolment Help'].map(s=>(
                <li key={s} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#4d7060', fontFamily: 'Inter, sans-serif' }}>
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#C8A964', opacity: .5, flexShrink: 0 }} />{s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase', color: '#8aab9a', marginBottom: 16, fontFamily: 'Inter, sans-serif' }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', gap: 9, fontSize: 12, color: '#4d7060', fontFamily: 'Inter, sans-serif' }}><MapPin size={12} style={{ color: '#C8A964', flexShrink: 0, marginTop: 1 }} /><span>144, Oko Ogba Road, Off Airport Road, Benin City, Nigeria</span></div>
              <div style={{ display: 'flex', gap: 9, fontSize: 12, fontFamily: 'Inter, sans-serif' }}><Phone size={12} style={{ color: '#C8A964', flexShrink: 0 }} /><a href="tel:+2349083353549" style={{ color: '#4d7060', textDecoration: 'none' }}>+234 908 335 3549</a></div>
              <div style={{ display: 'flex', gap: 9, fontSize: 12, fontFamily: 'Inter, sans-serif' }}><Mail size={12} style={{ color: '#C8A964', flexShrink: 0 }} /><a href="mailto:info@wcent.co.uk" style={{ color: '#4d7060', textDecoration: 'none' }}>info@wcent.co.uk</a></div>
              <div style={{ display: 'flex', gap: 9, fontSize: 12, color: '#4d7060', fontFamily: 'Inter, sans-serif' }}><Clock size={12} style={{ color: '#C8A964', flexShrink: 0 }} /><span>Mon–Fri: 09:00–17:30</span></div>
            </div>
            <Link href="/contact" className="btn-primary" style={{ marginTop: 18, width: '100%', justifyContent: 'center', fontSize: '.65rem', padding: '11px 0', display: 'flex' }}>
              Book Free Consultation
            </Link>
          </div>
        </div>

        <div className="divider" style={{ marginBottom: 18 }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
          <span style={{ fontSize: 11, color: '#1a3326', fontFamily: 'Inter, sans-serif' }}>© {new Date().getFullYear()} Withcent Global. All Rights Reserved.</span>
          <div style={{ display: 'flex', gap: 16, fontSize: 11, color: '#1a3326', fontFamily: 'Inter, sans-serif' }}>
            <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
            <span style={{ cursor: 'pointer' }}>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
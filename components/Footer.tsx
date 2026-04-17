import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background:'#040b16', borderTop:'1px solid rgba(201,168,76,.08)' }}>
      <div className="wrap" style={{ paddingTop:'4.5rem', paddingBottom:'2rem' }}>
        <div className="col-footer">

          {/* Brand */}
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:11, marginBottom:16 }}>
              <div style={{ position:'relative', width:36, height:36, border:'1px solid #c9a84c', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                <span className="fd" style={{ color:'#c9a84c', fontSize:18, fontWeight:600 }}>W</span>
                <div style={{ position:'absolute', bottom:-3, right:-3, width:7, height:7, background:'#c9a84c', opacity:.55 }} />
              </div>
              <div>
                <div className="fd" style={{ color:'#fff', fontSize:16, fontWeight:600, lineHeight:1.2 }}>Withcent Nigeria</div>
                <div style={{ fontSize:8, color:'#c9a84c', letterSpacing:'.32em', textTransform:'uppercase', fontWeight:700 }}>Est. 2010</div>
              </div>
            </div>
            <p style={{ fontSize:12, lineHeight:1.8, color:'#94a3b8', marginBottom:16, maxWidth:240 }}>
              Bridging ambitious Nigerian students with world-class universities in the UK, Canada, and USA since 2010.
            </p>
            <div style={{ fontSize:10, color:'#64748b', letterSpacing:'.06em', marginBottom:14, fontFamily:'Space Grotesk,sans-serif' }}>
              Member of <span style={{ color:'#c9a84c' }}>WEBA</span> — World Educate Business Association
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 style={{ fontSize:9, fontWeight:700, letterSpacing:'.22em', textTransform:'uppercase', color:'#fff', marginBottom:16, fontFamily:'Space Grotesk,sans-serif' }}>Navigation</h4>
            <ul style={{ listStyle:'none', padding:0, display:'flex', flexDirection:'column', gap:9 }}>
              {[['/', 'Home'],['/services','Services'],['/about','About Us'],['/universities','Partner Universities'],['/blog','Resources'],['/about#careers','Careers'],['/contact','Contact']].map(([h,l])=>(
                <li key={h}><Link href={h} style={{ fontSize:12, color:'#94a3b8', textDecoration:'none', display:'flex', alignItems:'center', gap:5 }}><ArrowRight size={9} style={{ opacity:.3 }} />{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize:9, fontWeight:700, letterSpacing:'.22em', textTransform:'uppercase', color:'#fff', marginBottom:16, fontFamily:'Space Grotesk,sans-serif' }}>Services</h4>
            <ul style={{ listStyle:'none', padding:0, display:'flex', flexDirection:'column', gap:9 }}>
              {['Education Counselling','University Placement','Visa Application','Course Selection','Accommodation','Pre-Departure Support','Post-Enrolment Help'].map(s=>(
                <li key={s} style={{ display:'flex', alignItems:'center', gap:6, fontSize:12, color:'#94a3b8' }}>
                  <span style={{ width:4, height:4, borderRadius:'50%', background:'#c9a84c', opacity:.5, flexShrink:0 }} />{s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize:9, fontWeight:700, letterSpacing:'.22em', textTransform:'uppercase', color:'#fff', marginBottom:16, fontFamily:'Space Grotesk,sans-serif' }}>Contact Us</h4>
            <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
              <div style={{ display:'flex', gap:9, fontSize:12, color:'#94a3b8' }}><MapPin size={13} style={{ color:'#c9a84c', flexShrink:0, marginTop:1 }} /><span>144, Oko Ogba Road, Off Airport Road, Benin City, Nigeria</span></div>
              <div style={{ display:'flex', gap:9, fontSize:12 }}><Phone size={13} style={{ color:'#c9a84c', flexShrink:0 }} /><a href="tel:+2349083353549" style={{ color:'#94a3b8', textDecoration:'none' }}>+234 908 335 3549</a></div>
              <div style={{ display:'flex', gap:9, fontSize:12 }}><Mail size={13} style={{ color:'#c9a84c', flexShrink:0 }} /><a href="mailto:info@wcent.co.uk" style={{ color:'#94a3b8', textDecoration:'none' }}>info@wcent.co.uk</a></div>
              <div style={{ display:'flex', gap:9, fontSize:12, color:'#94a3b8' }}><Clock size={13} style={{ color:'#c9a84c', flexShrink:0 }} /><span>Mon–Fri: 09:00–17:30</span></div>
            </div>
            <Link href="/contact" className="btn-primary" style={{ marginTop:18, width:'100%', justifyContent:'center', fontSize:'.65rem', padding:'11px 0', display:'flex' }}>
              Book Free Consultation
            </Link>
          </div>
        </div>

        <div className="divider" style={{ marginBottom:20 }} />
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:10 }}>
          <span style={{ fontSize:11, color:'#64748b' }}>© {new Date().getFullYear()} Withcent Nigeria. All Rights Reserved.</span>
          <div style={{ display:'flex', gap:16, fontSize:11, color:'#64748b' }}>
            <span style={{ cursor:'pointer' }}>Privacy Policy</span>
            <span style={{ cursor:'pointer' }}>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
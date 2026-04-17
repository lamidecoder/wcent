'use client'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'
import { FadeUp, SlideIn } from '@/components/Animate'
import Img from '@/components/Img'

export default function ContactPage() {
  return (<>
    <section className="page-hero"><div className="wrap" style={{ position:'relative', zIndex:1, textAlign:'center' }}>
      <FadeUp>
        <p className="eyebrow" style={{ marginBottom:14 }}>Get In Touch</p>
        <h1 className="fd" style={{ fontSize:'clamp(2.5rem,5vw,4.5rem)', fontWeight:300, color:'#fff', lineHeight:1.1 }}>Let&apos;s Start Your <em style={{ color:'#c9a84c' }}>Journey</em></h1>
      </FadeUp>
    </div></section>

    <section className="section-darker"><div className="wrap">
      <div className="col-contact">
        <SlideIn>
          <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
            {[
              { Icon:MapPin, l:'Address', v:'144, Oko Ogba Road, Off Airport Road, Benin City, Nigeria' },
              { Icon:Phone,  l:'Phone',   v:'+234 908 335 3549', h:'tel:+2349083353549' },
              { Icon:Mail,   l:'Email',   v:'info@wcent.co.uk',  h:'mailto:info@wcent.co.uk' },
            ].map(({ Icon, l, v, h }, i) => (
              <div key={i} className="glass" style={{ padding:16, display:'flex', gap:12 }}>
                <div style={{ width:36, height:36, background:'rgba(201,168,76,.1)', border:'1px solid rgba(201,168,76,.25)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <Icon size={14} color="#c9a84c" />
                </div>
                <div>
                  <p style={{ fontSize:9, color:'#475569', letterSpacing:'.15em', textTransform:'uppercase', marginBottom:3, fontFamily:'Space Grotesk,sans-serif' }}>{l}</p>
                  {h ? <a href={h} style={{ fontSize:12, fontWeight:600, color:'#e2e8f0', textDecoration:'none' }}>{v}</a>
                     : <p style={{ fontSize:12, fontWeight:600, color:'#e2e8f0' }}>{v}</p>}
                </div>
              </div>
            ))}
            <div style={{ background:'#0c1828', padding:18, border:'1px solid rgba(255,255,255,.07)' }}>
              <div style={{ display:'flex', gap:10 }}>
                <Clock size={14} color="#c9a84c" style={{ flexShrink:0, marginTop:2 }} />
                <div>
                  <p style={{ color:'#fff', fontWeight:600, fontSize:12, marginBottom:10, fontFamily:'Space Grotesk,sans-serif' }}>Office Hours</p>
                  {[['Monday – Friday','09:00 – 17:30', true],['Saturday','Closed',false],['Sunday','Closed',false]].map(([d,t,a])=>(
                    <div key={String(d)} style={{ display:'flex', justifyContent:'space-between', gap:20, fontSize:11, color:'#475569', marginBottom:6 }}>
                      <span>{d}</span><span style={{ color:a?'#c9a84c':'#1e293b' }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ position:'relative', height:150, overflow:'hidden' }}>
              <Img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=70" alt="Benin City" fill />
              <div style={{ position:'absolute', inset:0, background:'rgba(7,16,31,.6)' }} />
              <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center' }}>
                <div>
                  <p className="eyebrow" style={{ fontSize:'.5rem', marginBottom:4 }}>Our Office</p>
                  <p className="fd" style={{ color:'#fff', fontSize:'1rem', fontWeight:300 }}>Benin City, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </SlideIn>

        <FadeUp>
          <div style={{ background:'#07101f', padding:'36px 32px', border:'1px solid rgba(255,255,255,.07)' }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:24 }}>
              <MessageSquare size={17} color="#c9a84c" />
              <h3 className="fd" style={{ fontSize:'1.5rem', fontWeight:500, color:'#fff' }}>Send Us a Message</h3>
            </div>
            <form style={{ display:'flex', flexDirection:'column', gap:14 }}>
              <div className="col-form-2">
                <div><label style={{ fontSize:10, color:'#475569', letterSpacing:'.14em', textTransform:'uppercase', display:'block', marginBottom:6, fontFamily:'Space Grotesk,sans-serif' }}>Full Name *</label><input className="field" placeholder="Your full name" /></div>
                <div><label style={{ fontSize:10, color:'#475569', letterSpacing:'.14em', textTransform:'uppercase', display:'block', marginBottom:6, fontFamily:'Space Grotesk,sans-serif' }}>Email *</label><input type="email" className="field" placeholder="you@email.com" /></div>
              </div>
              <div><label style={{ fontSize:10, color:'#475569', letterSpacing:'.14em', textTransform:'uppercase', display:'block', marginBottom:6, fontFamily:'Space Grotesk,sans-serif' }}>Phone *</label><input type="tel" className="field" placeholder="+234..." /></div>
              <div>
                <label style={{ fontSize:10, color:'#475569', letterSpacing:'.14em', textTransform:'uppercase', display:'block', marginBottom:8, fontFamily:'Space Grotesk,sans-serif' }}>How Can We Help? *</label>
                <div className="col-2">
                  {['Assessment of Qualifications','Admission Guide (UK & Canada)','Student Visa Application','Post-Enrolment Support','Flight Booking & Pickup','Other (specify below)'].map(opt=>(
                    <label key={opt} style={{ display:'flex', alignItems:'center', gap:7, fontSize:12, color:'#64748b', cursor:'pointer' }}>
                      <input type="checkbox" style={{ accentColor:'#c9a84c', width:13, height:13 }} />{opt}
                    </label>
                  ))}
                </div>
              </div>
              <div><label style={{ fontSize:10, color:'#475569', letterSpacing:'.14em', textTransform:'uppercase', display:'block', marginBottom:6, fontFamily:'Space Grotesk,sans-serif' }}>Message *</label><textarea className="field" rows={4} placeholder="Tell us more about your situation..." /></div>
              <label style={{ display:'flex', alignItems:'center', gap:8, fontSize:11, color:'#475569', cursor:'pointer' }}>
                <input type="checkbox" style={{ accentColor:'#c9a84c' }} />I would like to receive updates from Withcent Nigeria
              </label>
              <button type="submit" className="btn-primary" style={{ width:'100%', justifyContent:'center', marginTop:4 }}>Send Message</button>
            </form>
          </div>
        </FadeUp>
      </div>
    </div></section>
  </>)
}
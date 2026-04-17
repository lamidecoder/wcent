'use client'
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'
import { FadeUp, SlideIn } from '@/components/Animate'
import Img from '@/components/Img'
import Link from 'next/link'

export default function ContactPage() {
  return (<>
    <section className="page-hero">
      <div className="wrap" style={{ position:'relative', zIndex:1, textAlign:'center' }}>
        <FadeUp>
          <p className="eyebrow" style={{ marginBottom:14 }}>Get In Touch</p>
          <h1 className="fd" style={{ fontSize:'clamp(2.2rem,5vw,4.2rem)', fontWeight:300, color:'#F5F1E6', lineHeight:1.1 }}>
            Let&apos;s Start Your <em style={{ color:'#C8A964' }}>Ascent</em>
          </h1>
        </FadeUp>
      </div>
    </section>

    <section className="pad-section bg-ivory">
      <div className="wrap">
        <div className="col-contact">

          {/* Info sidebar */}
          <SlideIn>
            <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
              {[
                { Icon:MapPin, l:'Address', v:'144, Oko Ogba Road, Off Airport Road, Benin City, Nigeria' },
                { Icon:Phone,  l:'Phone',   v:'+234 908 335 3549', h:'tel:+2349083353549' },
                { Icon:Mail,   l:'Email',   v:'info@wcent.co.uk',  h:'mailto:info@wcent.co.uk' },
              ].map(({Icon,l,v,h},i)=>(
                <div key={i} className="hover-card" style={{ background:'white', border:'1px solid rgba(15,61,46,.1)', padding:'14px 16px', display:'flex', gap:12 }}>
                  <div style={{ width:36, height:36, background:'rgba(15,61,46,.07)', border:'1px solid rgba(15,61,46,.1)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <Icon size={14} color="#0F3D2E" />
                  </div>
                  <div>
                    <p style={{ fontSize:9, color:'#8aab9a', letterSpacing:'.18em', textTransform:'uppercase', marginBottom:4, fontFamily:'Inter,sans-serif', fontWeight:700 }}>{l}</p>
                    {h
                      ? <a href={h} style={{ fontSize:13, fontWeight:600, color:'#0F3D2E', textDecoration:'none', fontFamily:'Inter,sans-serif' }}>{v}</a>
                      : <p style={{ fontSize:13, fontWeight:600, color:'#0F3D2E', fontFamily:'Inter,sans-serif' }}>{v}</p>}
                  </div>
                </div>
              ))}

              <div style={{ background:'#0F3D2E', padding:'18px 20px' }}>
                <div style={{ display:'flex', gap:10 }}>
                  <Clock size={14} color="#C8A964" style={{ flexShrink:0, marginTop:2 }} />
                  <div>
                    <p style={{ color:'#F5F1E6', fontWeight:600, fontSize:13, marginBottom:10, fontFamily:'Inter,sans-serif' }}>Office Hours</p>
                    {[['Monday – Friday','09:00 – 17:30',true],['Saturday','Closed',false],['Sunday','Closed',false]].map(([d,t,a])=>(
                      <div key={String(d)} style={{ display:'flex', justifyContent:'space-between', gap:20, fontSize:12, color:'#6b8e7f', marginBottom:6, fontFamily:'Inter,sans-serif' }}>
                        <span>{d}</span><span style={{ color:a?'#C8A964':'#2d4f3d' }}>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ position:'relative', height:130, overflow:'hidden' }}>
                <Img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=70" alt="Benin City" fill />
                <div style={{ position:'absolute', inset:0, background:'rgba(15,61,46,.62)' }} />
                <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center' }}>
                  <div>
                    <p className="eyebrow" style={{ fontSize:'.5rem', marginBottom:4 }}>Our Office</p>
                    <p className="fd" style={{ color:'#F5F1E6', fontSize:'.95rem', fontWeight:300 }}>Benin City, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
          </SlideIn>

          {/* Form */}
          <FadeUp>
            <div style={{ background:'white', padding:'36px 28px', border:'1px solid rgba(15,61,46,.1)', boxShadow:'0 8px 32px rgba(15,61,46,.06)' }}>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:26 }}>
                <MessageSquare size={18} color="#0F3D2E" />
                <h3 className="fd" style={{ fontSize:'1.5rem', fontWeight:500, color:'#0F3D2E' }}>Send Us a Message</h3>
              </div>
              <form style={{ display:'flex', flexDirection:'column', gap:14 }}>
                <div className="col-form-2">
                  <div><label style={{ fontSize:10, fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', display:'block', marginBottom:6, fontFamily:'Inter,sans-serif', color:'#6b8e7f' }}>Full Name *</label><input className="field-light" placeholder="Your full name" /></div>
                  <div><label style={{ fontSize:10, fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', display:'block', marginBottom:6, fontFamily:'Inter,sans-serif', color:'#6b8e7f' }}>Email *</label><input type="email" className="field-light" placeholder="you@email.com" /></div>
                </div>
                <div><label style={{ fontSize:10, fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', display:'block', marginBottom:6, fontFamily:'Inter,sans-serif', color:'#6b8e7f' }}>Phone *</label><input type="tel" className="field-light" placeholder="+234..." /></div>
                <div>
                  <label style={{ fontSize:10, fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', display:'block', marginBottom:8, fontFamily:'Inter,sans-serif', color:'#6b8e7f' }}>How Can We Help? *</label>
                  <div className="col-2" style={{ gap:8 }}>
                    {['Assessment of Qualifications','Admission Guide (UK & Canada)','Student Visa Application','Post-Enrolment Support','Flight Booking & Pickup','Other (specify below)'].map(opt=>(
                      <label key={opt} style={{ display:'flex', alignItems:'center', gap:7, fontSize:12.5, color:'#4d6b5a', cursor:'pointer', fontFamily:'Inter,sans-serif' }}>
                        <input type="checkbox" style={{ accentColor:'#0F3D2E', width:13, height:13 }} />{opt}
                      </label>
                    ))}
                  </div>
                </div>
                <div><label style={{ fontSize:10, fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', display:'block', marginBottom:6, fontFamily:'Inter,sans-serif', color:'#6b8e7f' }}>Message *</label><textarea className="field-light" style={{ resize:'vertical' }} rows={4} placeholder="Tell us more about your situation..." /></div>
                <label style={{ display:'flex', alignItems:'center', gap:8, fontSize:12, color:'#6b8e7f', cursor:'pointer', fontFamily:'Inter,sans-serif' }}>
                  <input type="checkbox" style={{ accentColor:'#0F3D2E' }} />I would like to receive updates from Withcent Global
                </label>
                <button type="submit" className="btn-forest" style={{ width:'100%', justifyContent:'center', marginTop:4 }}>Send Message</button>
              </form>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  </>)
}
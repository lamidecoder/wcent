'use client'
import Link from 'next/link'
import { CheckCircle, Target, Heart, Users } from 'lucide-react'
import { FadeUp, SlideIn, Stagger, Item } from '@/components/Animate'
import Img from '@/components/Img'

export default function AboutPage() {
  return (<>
    <section className="page-hero"><div className="wrap" style={{ position:'relative', zIndex:1, textAlign:'center' }}>
      <FadeUp>
        <p className="eyebrow" style={{ marginBottom:14 }}>Our Story</p>
        <h1 className="fd" style={{ fontSize:'clamp(2.5rem,5vw,4.5rem)', fontWeight:300, color:'#fff', lineHeight:1.1 }}>About <em style={{ color:'#c9a84c' }}>Withcent Nigeria</em></h1>
      </FadeUp>
    </div></section>

    <section className="section-darker"><div className="wrap">
      <div className="col-about">
        <SlideIn>
          <div style={{ position:'relative' }}>
            <div style={{ position:'relative', height:480 }}>
              <Img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80" alt="Office" fill />
              <div style={{ position:'absolute', inset:0, background:'rgba(7,16,31,.18)' }} />
            </div>
            <div style={{ position:'absolute', bottom:-20, right:-16, background:'linear-gradient(135deg,#c9a84c,#e2c06a)', padding:'18px 24px', boxShadow:'0 16px 48px rgba(201,168,76,.35)', zIndex:2 }}>
              <div className="fd" style={{ color:'#07101f', fontSize:'2.6rem', fontWeight:300, lineHeight:1 }}>2010</div>
              <div style={{ color:'#07101f', fontSize:'.58rem', letterSpacing:'.2em', textTransform:'uppercase', fontWeight:700, marginTop:4, fontFamily:'Space Grotesk,sans-serif' }}>Year Founded</div>
            </div>
          </div>
        </SlideIn>
        <SlideIn from="right">
          <p className="eyebrow" style={{ marginBottom:14 }}>Our Foundation</p>
          <h2 className="fd" style={{ fontSize:'clamp(1.8rem,3.5vw,3rem)', fontWeight:300, color:'#fff', lineHeight:1.18, marginBottom:20 }}>Built on First-Hand<br /><em style={{ color:'#c9a84c' }}>Experience</em></h2>
          <div style={{ display:'flex', flexDirection:'column', gap:14, color:'#64748b', fontSize:13, lineHeight:1.85 }}>
            <p>Withcent Nigeria was established in 2010 in Abuja to meet the growing demand for overseas university education, duly incorporated in Nigeria.</p>
            <p>Our founders are British Council trained agents with 10+ years' experience who themselves studied in the UK — gaining first-hand knowledge of the challenges Nigerian students face abroad.</p>
            <p>Those experiences became the incentive to establish Withcent Ventures — to assist students in adapting to life and study in a different culture.</p>
          </div>
          <div className="col-2" style={{ marginTop:24 }}>
            {['Abuja Founded','Incorporated in Nigeria','British Council Trained','WEBA Member'].map(b=>(
              <div key={b} style={{ display:'flex', alignItems:'center', gap:8, fontSize:12, color:'#94a3b8' }}>
                <CheckCircle size={13} color="#c9a84c" style={{ flexShrink:0 }} />{b}
              </div>
            ))}
          </div>
        </SlideIn>
      </div>

      <Stagger className="col-3">
        {[
          { Icon:Target, t:'Our Mission', d:'To provide prompt, efficient, reliable and high-quality services for every student seeking educational advancement abroad.' },
          { Icon:Heart,  t:'Our Values',  d:'We value diversity, inclusion, and genuine care for every client. We treat students as family — not transactions.' },
          { Icon:Users,  t:'Our Vision',  d:'To be Nigeria\'s foremost education advisory firm, recognised for integrity, expertise, and transformative outcomes.' },
        ].map(({ Icon, t, d }, i) => (
          <Item key={i}>
            <div className="glass" style={{ padding:32, textAlign:'center' }}>
              <div style={{ width:50, height:50, margin:'0 auto 18px', background:'rgba(201,168,76,.1)', border:'1px solid rgba(201,168,76,.25)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <Icon size={20} color="#c9a84c" />
              </div>
              <h3 className="fd" style={{ fontSize:'1.35rem', color:'#fff', marginBottom:10, fontWeight:500 }}>{t}</h3>
              <p style={{ color:'#64748b', fontSize:13, lineHeight:1.7 }}>{d}</p>
            </div>
          </Item>
        ))}
      </Stagger>
    </div></section>

    <section className="section-dark"><div className="wrap" style={{ maxWidth:760, margin:'0 auto' }}>
      <FadeUp style={{ textAlign:'center' }}>
        <p className="eyebrow" style={{ marginBottom:14 }}>The Experts</p>
        <h2 className="fd" style={{ fontSize:'clamp(1.8rem,4vw,3rem)', fontWeight:300, color:'#fff', marginBottom:44 }}>Meet Our <em style={{ color:'#c9a84c' }}>Team</em></h2>
        <div style={{ background:'#0c1828', padding:'36px 32px', borderLeft:'3px solid #c9a84c', textAlign:'left' }}>
          <p style={{ color:'#64748b', fontSize:13, lineHeight:1.85, marginBottom:16 }}>Our team consists of experienced education counsellors ready to advise students on courses and career opportunities based on their background, interests, and aspirations.</p>
          <p style={{ color:'#64748b', fontSize:13, lineHeight:1.85 }}>Having a broad network with education providers, we suggest a wide range of study options to meet each student&apos;s individual needs.</p>
          <div className="col-3" style={{ marginTop:36, borderTop:'1px solid rgba(255,255,255,.06)', paddingTop:28 }}>
            {[{ n:'10+', l:'Years Experience' }, { n:'500+', l:'Students Helped' }, { n:'20+', l:'Partner Unis' }].map((s,i)=>(
              <div key={s.l} style={{ textAlign:'center', borderRight:i<2?'1px solid rgba(255,255,255,.06)':'none', padding:'0 16px' }}>
                <div className="fd" style={{ fontSize:'2.2rem', fontWeight:300, color:'#c9a84c', lineHeight:1 }}>{s.n}</div>
                <div style={{ fontSize:'.58rem', color:'#334155', letterSpacing:'.15em', textTransform:'uppercase', marginTop:7, fontFamily:'Space Grotesk,sans-serif' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>
    </div></section>

    <section id="careers" className="section-mid"><div className="wrap">
      <div className="col-2-wide">
        <SlideIn>
          <p className="eyebrow" style={{ marginBottom:14 }}>Join Our Team</p>
          <h2 className="fd" style={{ fontSize:'clamp(1.8rem,3.5vw,3rem)', fontWeight:300, color:'#fff', lineHeight:1.18, marginBottom:14 }}>Are You Good at<br /><em style={{ color:'#c9a84c' }}>What You Do?</em></h2>
          <p style={{ color:'#64748b', fontSize:13, lineHeight:1.8, marginBottom:22 }}>We are always looking for talented, purpose-driven people passionate about education.</p>
          {['Collaborative work environment', 'Competitive compensation', 'Real impact on students\' futures', 'Dynamic, growing organisation'].map(b=>(
            <div key={b} style={{ display:'flex', alignItems:'center', gap:8, fontSize:12, color:'#94a3b8', marginBottom:10 }}>
              <CheckCircle size={13} color="#c9a84c" style={{ flexShrink:0 }} />{b}
            </div>
          ))}
        </SlideIn>
        <FadeUp>
          <div style={{ background:'#07101f', padding:32, border:'1px solid rgba(255,255,255,.07)' }}>
            <h3 style={{ fontWeight:600, color:'#fff', marginBottom:22, fontFamily:'Space Grotesk,sans-serif' }}>Career Application</h3>
            <form style={{ display:'flex', flexDirection:'column', gap:14 }}>
              <div className="col-form-2">
                <div><label style={{ fontSize:10, color:'#475569', letterSpacing:'.14em', textTransform:'uppercase', display:'block', marginBottom:6, fontFamily:'Space Grotesk,sans-serif' }}>Full Name *</label><input className="field" placeholder="Your name" /></div>
                <div><label style={{ fontSize:10, color:'#475569', letterSpacing:'.14em', textTransform:'uppercase', display:'block', marginBottom:6, fontFamily:'Space Grotesk,sans-serif' }}>Email *</label><input type="email" className="field" placeholder="you@email.com" /></div>
              </div>
              <div><label style={{ fontSize:10, color:'#475569', letterSpacing:'.14em', textTransform:'uppercase', display:'block', marginBottom:6, fontFamily:'Space Grotesk,sans-serif' }}>Phone *</label><input className="field" placeholder="+234..." /></div>
              <div><label style={{ fontSize:10, color:'#475569', letterSpacing:'.14em', textTransform:'uppercase', display:'block', marginBottom:6, fontFamily:'Space Grotesk,sans-serif' }}>Position Applied For *</label><input className="field" placeholder="e.g. Education Counsellor" /></div>
              <div>
                <label style={{ fontSize:10, color:'#475569', letterSpacing:'.14em', textTransform:'uppercase', display:'block', marginBottom:6, fontFamily:'Space Grotesk,sans-serif' }}>Qualification *</label>
                <select className="field" style={{ appearance:'none' }}>
                  <option value="">Select qualification</option>
                  {['O Level','Diploma','BSC','PGD','MSC','PHD','Others'].map(q=><option key={q}>{q}</option>)}
                </select>
              </div>
              <div><label style={{ fontSize:10, color:'#475569', letterSpacing:'.14em', textTransform:'uppercase', display:'block', marginBottom:6, fontFamily:'Space Grotesk,sans-serif' }}>Your Experience *</label><textarea className="field" rows={4} placeholder="Tell us about your experience..." /></div>
              <button type="submit" className="btn-primary" style={{ width:'100%', justifyContent:'center' }}>Submit Application</button>
            </form>
          </div>
        </FadeUp>
      </div>
    </div></section>
  </>)
}
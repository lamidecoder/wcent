'use client'
import { CheckCircle, Target, Heart, Users } from 'lucide-react'
import { FadeUp, SlideIn, Stagger, Item } from '@/components/Animate'
import Img from '@/components/Img'
import Link from 'next/link'

export default function AboutPage() {
  return (<>
    <section className="page-hero">
      <div className="wrap" style={{ position:'relative', zIndex:1, textAlign:'center' }}>
        <FadeUp>
          <p className="eyebrow" style={{ marginBottom:14 }}>Our Story</p>
          <h1 className="fd" style={{ fontSize:'clamp(2.2rem,5vw,4.2rem)', fontWeight:300, color:'#F5F1E6', lineHeight:1.1 }}>
            About <em style={{ color:'#C8A964' }}>Withcent Global</em>
          </h1>
        </FadeUp>
      </div>
    </section>

    {/* Story */}
    <section className="pad-section bg-ivory">
      <div className="wrap">
        <div className="col-about">
          <SlideIn>
            <div style={{ position:'relative' }}>
              <div style={{ position:'relative', height:460 }}>
                <Img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80" alt="Withcent office" fill />
                <div style={{ position:'absolute', inset:0, background:'rgba(15,61,46,.15)' }} />
              </div>
              <div style={{ position:'absolute', bottom:-18, right:-12, background:'linear-gradient(135deg,#C8A964,#dfc07a)', padding:'16px 22px', boxShadow:'0 14px 40px rgba(200,169,100,.28)', zIndex:2 }}>
                <div className="fd" style={{ color:'#081B15', fontSize:'2.2rem', fontWeight:300, lineHeight:1 }}>2010</div>
                <div style={{ color:'#081B15', fontSize:'.54rem', letterSpacing:'.22em', textTransform:'uppercase', fontWeight:700, marginTop:4, fontFamily:'Inter,sans-serif' }}>Year Founded</div>
              </div>
            </div>
          </SlideIn>
          <SlideIn from="right">
            <p className="eyebrow" style={{ marginBottom:14 }}>Our Foundation</p>
            <h2 className="fd" style={{ fontSize:'clamp(1.7rem,3.5vw,2.8rem)', fontWeight:300, color:'#0F3D2E', lineHeight:1.2, marginBottom:20 }}>
              Built on First-Hand<br /><em style={{ color:'#C8A964' }}>Experience</em>
            </h2>
            {['Withcent Global was established in 2010 in Abuja, Nigeria to meet the growing demand for overseas university education, duly incorporated in Nigeria.',
              'Our founders are British Council trained agents with 10+ years\' experience who themselves studied in the UK — gaining first-hand knowledge of the challenges Nigerian students face abroad.',
              'Those experiences became the incentive to establish Withcent Global — to guide students in adapting to life and study in a different culture.'].map((p,i)=>(
              <p key={i} style={{ color:'#4d6b5a', fontSize:13.5, lineHeight:1.82, fontFamily:'Inter,sans-serif', marginBottom:12 }}>{p}</p>
            ))}
            <div className="col-2" style={{ gap:10, marginTop:6 }}>
              {['Abuja Founded','Incorporated in Nigeria','British Council Trained','WEBA Member'].map(b=>(
                <div key={b} style={{ display:'flex', alignItems:'center', gap:8, fontSize:12.5, color:'#3d5a4a', fontFamily:'Inter,sans-serif' }}>
                  <CheckCircle size={13} color="#0F3D2E" style={{ flexShrink:0 }} />{b}
                </div>
              ))}
            </div>
          </SlideIn>
        </div>

        {/* Values */}
        <Stagger className="col-3" style={{ marginTop:'3.5rem' }}>
          {[
            { Icon:Target, t:'Our Mission', d:'To provide prompt, efficient, reliable and high-quality services for every student seeking educational advancement abroad.' },
            { Icon:Heart,  t:'Our Values',  d:'We value diversity, inclusion, and genuine care for every client. We treat students as partners — not transactions.' },
            { Icon:Users,  t:'Our Vision',  d:'To be Africa\'s foremost education advisory firm, recognised for integrity, expertise, and transformative outcomes.' },
          ].map(({Icon,t,d},i)=>(
            <Item key={i}>
              <div className="lcard hover-card" style={{ textAlign:'center' }}>
                <div style={{ width:48, height:48, margin:'0 auto 16px', background:'rgba(15,61,46,.07)', border:'1px solid rgba(15,61,46,.12)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <Icon size={20} color="#0F3D2E" />
                </div>
                <h3 className="fd" style={{ fontSize:'1.3rem', color:'#0F3D2E', marginBottom:10, fontWeight:500 }}>{t}</h3>
                <p style={{ color:'#4d6b5a', fontSize:13, lineHeight:1.75, fontFamily:'Inter,sans-serif' }}>{d}</p>
              </div>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>

    {/* Team */}
    <section className="pad-section bg-forest">
      <div className="wrap" style={{ maxWidth:720, margin:'0 auto' }}>
        <FadeUp style={{ textAlign:'center' }}>
          <p className="eyebrow" style={{ marginBottom:14 }}>The Experts</p>
          <h2 className="fd" style={{ fontSize:'clamp(1.8rem,4vw,3rem)', fontWeight:300, color:'#F5F1E6', marginBottom:36 }}>
            Meet Our <em style={{ color:'#C8A964' }}>Team</em>
          </h2>
          <div style={{ background:'rgba(245,241,230,.04)', padding:'32px 28px', borderLeft:'3px solid #C8A964', textAlign:'left' }}>
            <p style={{ color:'#a8c4b4', fontSize:14, lineHeight:1.85, marginBottom:14, fontFamily:'Inter,sans-serif' }}>Our team consists of experienced education counsellors ready to advise students on courses and career opportunities based on their educational background, interests, aptitude, and aspirations.</p>
            <p style={{ color:'#a8c4b4', fontSize:14, lineHeight:1.85, fontFamily:'Inter,sans-serif' }}>Having a broad network with education providers, we suggest a wide range of study options to meet each student&apos;s individual needs. We adapt quickly and are people, culture, and language-friendly.</p>
            <div className="col-3" style={{ marginTop:28, borderTop:'1px solid rgba(245,241,230,.07)', paddingTop:24 }}>
              {[{n:'10+',l:'Years Experience'},{n:'500+',l:'Students Helped'},{n:'20+',l:'Partner Unis'}].map((s,i)=>(
                <div key={s.l} style={{ textAlign:'center', borderRight:i<2?'1px solid rgba(245,241,230,.07)':'none', padding:'0 10px' }}>
                  <div className="fd" style={{ fontSize:'2rem', fontWeight:300, color:'#C8A964', lineHeight:1 }}>{s.n}</div>
                  <div style={{ fontSize:'.58rem', color:'#6b8e7f', letterSpacing:'.15em', textTransform:'uppercase', marginTop:6, fontFamily:'Inter,sans-serif' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>

    {/* Careers */}
    <section id="careers" className="pad-section bg-ivory">
      <div className="wrap">
        <div className="col-2-wide">
          <SlideIn>
            <p className="eyebrow" style={{ marginBottom:14 }}>Join Our Team</p>
            <h2 className="fd" style={{ fontSize:'clamp(1.7rem,3.5vw,2.8rem)', fontWeight:300, color:'#0F3D2E', lineHeight:1.2, marginBottom:14 }}>
              Are You Good at<br /><em style={{ color:'#C8A964' }}>What You Do?</em>
            </h2>
            <p style={{ color:'#4d6b5a', fontSize:14, lineHeight:1.8, marginBottom:22, fontFamily:'Inter,sans-serif' }}>We are always looking for talented, purpose-driven people passionate about education and student success.</p>
            {['Collaborative work environment','Competitive compensation','Real impact on students\' futures','Dynamic, growing organisation'].map(b=>(
              <div key={b} style={{ display:'flex', alignItems:'center', gap:8, fontSize:13, color:'#3d5a4a', marginBottom:11, fontFamily:'Inter,sans-serif' }}>
                <CheckCircle size={13} color="#0F3D2E" style={{ flexShrink:0 }} />{b}
              </div>
            ))}
          </SlideIn>
          <FadeUp>
            <div style={{ background:'white', padding:'32px 28px', border:'1px solid rgba(15,61,46,.1)', boxShadow:'0 8px 32px rgba(15,61,46,.06)' }}>
              <h3 className="fd" style={{ fontWeight:500, color:'#0F3D2E', marginBottom:22, fontSize:'1.4rem' }}>Career Application</h3>
              <form style={{ display:'flex', flexDirection:'column', gap:13 }}>
                <div className="col-form-2">
                  <div><label style={{ fontSize:10, fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', display:'block', marginBottom:6, fontFamily:'Inter,sans-serif', color:'#6b8e7f' }}>Full Name *</label><input className="field-light" placeholder="Your name" /></div>
                  <div><label style={{ fontSize:10, fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', display:'block', marginBottom:6, fontFamily:'Inter,sans-serif', color:'#6b8e7f' }}>Email *</label><input type="email" className="field-light" placeholder="you@email.com" /></div>
                </div>
                <div><label style={{ fontSize:10, fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', display:'block', marginBottom:6, fontFamily:'Inter,sans-serif', color:'#6b8e7f' }}>Phone *</label><input className="field-light" placeholder="+234..." /></div>
                <div><label style={{ fontSize:10, fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', display:'block', marginBottom:6, fontFamily:'Inter,sans-serif', color:'#6b8e7f' }}>Position Applied For *</label><input className="field-light" placeholder="e.g. Education Counsellor" /></div>
                <div>
                  <label style={{ fontSize:10, fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', display:'block', marginBottom:6, fontFamily:'Inter,sans-serif', color:'#6b8e7f' }}>Qualification *</label>
                  <select className="field-light" style={{ appearance:'none' }}>
                    <option value="">Select qualification</option>
                    {['O Level','Diploma','BSC','PGD','MSC','PHD','Others'].map(q=><option key={q}>{q}</option>)}
                  </select>
                </div>
                <div><label style={{ fontSize:10, fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', display:'block', marginBottom:6, fontFamily:'Inter,sans-serif', color:'#6b8e7f' }}>Your Experience *</label><textarea className="field-light" style={{ resize:'vertical' }} rows={4} placeholder="Tell us about your relevant experience..." /></div>
                <button type="submit" className="btn-forest" style={{ width:'100%', justifyContent:'center' }}>Submit Application</button>
              </form>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  </>)
}
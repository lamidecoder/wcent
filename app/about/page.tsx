'use client'
import Link from 'next/link'
import { CheckCircle, Target, Heart, Users } from 'lucide-react'
import { FadeUp, SlideIn, Stagger, Item } from '@/components/Animate'
import Img from '@/components/Img'

const LABEL = { fontSize: 10, fontWeight: 700 as const, letterSpacing: '.18em', textTransform: 'uppercase' as const, display: 'block', marginBottom: 6, fontFamily: 'Inter, sans-serif', color: '#6b8e7f' }
const FIELD_LIGHT = { width: '100%', background: 'white', border: '1px solid rgba(15,61,46,.15)', padding: '12px 15px', fontFamily: 'Inter, sans-serif', fontSize: '.875rem', color: '#0F3D2E', outline: 'none' }

export default function AboutPage() {
  return (<>
    {/* Hero */}
    <section className="page-hero">
      <div className="wrap" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <FadeUp>
          <p className="eyebrow" style={{ marginBottom: 14 }}>Our Story</p>
          <h1 className="fd" style={{ fontSize: 'clamp(2.4rem,5vw,4.2rem)', fontWeight: 300, color: '#F5F1E6', lineHeight: 1.1 }}>
            About <em style={{ color: '#C8A964' }}>Withcent Global</em>
          </h1>
        </FadeUp>
      </div>
    </section>

    {/* Story */}
    <section style={{ background: '#F5F1E6', padding: '5.5rem 0' }}>
      <div className="wrap">
        <div className="col-about">
          <SlideIn>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'relative', height: 480 }}>
                <Img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80" alt="Withcent office" fill />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,61,46,.15)' }} />
              </div>
              <div style={{ position: 'absolute', bottom: -20, right: -16, background: 'linear-gradient(135deg,#C8A964,#dfc07a)', padding: '18px 24px', boxShadow: '0 16px 48px rgba(200,169,100,.3)', zIndex: 2 }}>
                <div className="fd" style={{ color: '#081B15', fontSize: '2.6rem', fontWeight: 300, lineHeight: 1 }}>2010</div>
                <div style={{ color: '#081B15', fontSize: '.58rem', letterSpacing: '.2em', textTransform: 'uppercase', fontWeight: 700, marginTop: 4, fontFamily: 'Inter, sans-serif' }}>Year Founded</div>
              </div>
            </div>
          </SlideIn>

          <SlideIn from="right">
            <p className="eyebrow" style={{ marginBottom: 14 }}>Our Foundation</p>
            <h2 className="fd" style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)', fontWeight: 300, color: '#0F3D2E', lineHeight: 1.2, marginBottom: 20 }}>
              Built on First-Hand<br /><em style={{ color: '#C8A964' }}>Experience</em>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
              {[
                'Withcent Global was established in 2010 in Abuja, Nigeria to meet the growing demand for overseas university education, duly incorporated in Nigeria.',
                'Our founders are British Council trained agents with 10+ years\' experience who themselves studied in the UK — gaining first-hand knowledge of the challenges Nigerian students face abroad.',
                'Those experiences became the incentive to establish Withcent Global — to guide students in adapting to life and study in a different culture.',
              ].map((p, i) => (
                <p key={i} style={{ color: '#4d6b5a', fontSize: 13.5, lineHeight: 1.85, fontFamily: 'Inter, sans-serif' }}>{p}</p>
              ))}
            </div>
            <div className="col-2">
              {['Abuja Founded', 'Incorporated in Nigeria', 'British Council Trained', 'WEBA Member'].map(b => (
                <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12.5, color: '#3d5a4a', fontFamily: 'Inter, sans-serif' }}>
                  <CheckCircle size={13} color="#0F3D2E" style={{ flexShrink: 0 }} />{b}
                </div>
              ))}
            </div>
          </SlideIn>
        </div>

        {/* Values */}
        <Stagger className="col-3">
          {[
            { Icon: Target, t: 'Our Mission', d: 'To provide prompt, efficient, reliable and high-quality services for every student seeking educational advancement abroad.' },
            { Icon: Heart,  t: 'Our Values',  d: 'We value diversity, inclusion, and genuine care for every client. We treat students as partners — not transactions.' },
            { Icon: Users,  t: 'Our Vision',  d: 'To be Africa\'s foremost education advisory firm, recognised for integrity, expertise, and transformative student outcomes.' },
          ].map(({ Icon, t, d }, i) => (
            <Item key={i}>
              <div style={{ background: 'white', border: '1px solid rgba(15,61,46,.1)', padding: 32, textAlign: 'center', transition: 'all .35s ease' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-5px)'; el.style.boxShadow = '0 20px 50px rgba(15,61,46,.1)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'none' }}>
                <div style={{ width: 50, height: 50, margin: '0 auto 18px', background: 'rgba(15,61,46,.07)', border: '1px solid rgba(15,61,46,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={20} color="#0F3D2E" />
                </div>
                <h3 className="fd" style={{ fontSize: '1.35rem', color: '#0F3D2E', marginBottom: 10, fontWeight: 500 }}>{t}</h3>
                <p style={{ color: '#4d6b5a', fontSize: 13, lineHeight: 1.75, fontFamily: 'Inter, sans-serif' }}>{d}</p>
              </div>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>

    {/* Team */}
    <section style={{ background: '#0F3D2E', padding: '5.5rem 0' }}>
      <div className="wrap" style={{ maxWidth: 760, margin: '0 auto' }}>
        <FadeUp style={{ textAlign: 'center' }}>
          <p className="eyebrow" style={{ marginBottom: 14 }}>The Experts</p>
          <h2 className="fd" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 300, color: '#F5F1E6', marginBottom: 44 }}>
            Meet Our <em style={{ color: '#C8A964' }}>Team</em>
          </h2>
          <div style={{ background: 'rgba(245,241,230,.05)', padding: '36px 32px', borderLeft: '3px solid #C8A964', textAlign: 'left', outline: '1px solid rgba(200,169,100,.12)' }}>
            <p style={{ color: '#a8c4b4', fontSize: 14, lineHeight: 1.88, marginBottom: 16, fontFamily: 'Inter, sans-serif' }}>
              Our team consists of experienced education counsellors ready to advise students on courses and career opportunities based on their educational background, interests, aptitude, and aspirations.
            </p>
            <p style={{ color: '#a8c4b4', fontSize: 14, lineHeight: 1.88, fontFamily: 'Inter, sans-serif' }}>
              Having a broad network with education providers, we suggest a wide range of study options to meet each student&apos;s individual needs. We adapt quickly, understand our environment, and are people, culture, and language-friendly.
            </p>
            <div className="col-3" style={{ marginTop: 36, borderTop: '1px solid rgba(245,241,230,.08)', paddingTop: 28 }}>
              {[{ n: '10+', l: 'Years Experience' }, { n: '500+', l: 'Students Helped' }, { n: '20+', l: 'Partner Unis' }].map((s, i) => (
                <div key={s.l} style={{ textAlign: 'center', borderRight: i < 2 ? '1px solid rgba(245,241,230,.08)' : 'none', padding: '0 16px' }}>
                  <div className="fd" style={{ fontSize: '2.2rem', fontWeight: 300, color: '#C8A964', lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontSize: '.6rem', color: '#6b8e7f', letterSpacing: '.15em', textTransform: 'uppercase', marginTop: 7, fontFamily: 'Inter, sans-serif' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>

    {/* Careers */}
    <section id="careers" style={{ background: '#F5F1E6', padding: '5.5rem 0' }}>
      <div className="wrap">
        <div className="col-2-wide">
          <SlideIn>
            <p className="eyebrow" style={{ marginBottom: 14 }}>Join Our Team</p>
            <h2 className="fd" style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)', fontWeight: 300, color: '#0F3D2E', lineHeight: 1.2, marginBottom: 14 }}>
              Are You Good at<br /><em style={{ color: '#C8A964' }}>What You Do?</em>
            </h2>
            <p style={{ color: '#4d6b5a', fontSize: 14, lineHeight: 1.8, marginBottom: 24, fontFamily: 'Inter, sans-serif' }}>
              We are always looking for talented, purpose-driven people passionate about education and student success.
            </p>
            {['Collaborative work environment', 'Competitive compensation', 'Real impact on students\' futures', 'Dynamic, growing organisation'].map(b => (
              <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#3d5a4a', marginBottom: 11, fontFamily: 'Inter, sans-serif' }}>
                <CheckCircle size={13} color="#0F3D2E" style={{ flexShrink: 0 }} />{b}
              </div>
            ))}
          </SlideIn>

          <FadeUp>
            <div style={{ background: 'white', padding: '36px 32px', border: '1px solid rgba(15,61,46,.1)', boxShadow: '0 8px 32px rgba(15,61,46,.06)' }}>
              <h3 className="fd" style={{ fontWeight: 500, color: '#0F3D2E', marginBottom: 24, fontSize: '1.5rem' }}>Career Application</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div className="col-form-2">
                  <div><label style={LABEL}>Full Name *</label><input style={FIELD_LIGHT} placeholder="Your name" /></div>
                  <div><label style={LABEL}>Email *</label><input type="email" style={FIELD_LIGHT} placeholder="you@email.com" /></div>
                </div>
                <div><label style={LABEL}>Phone *</label><input style={FIELD_LIGHT} placeholder="+234..." /></div>
                <div><label style={LABEL}>Position Applied For *</label><input style={FIELD_LIGHT} placeholder="e.g. Education Counsellor" /></div>
                <div>
                  <label style={LABEL}>Qualification *</label>
                  <select style={{ ...FIELD_LIGHT, appearance: 'none' }}>
                    <option value="">Select qualification</option>
                    {['O Level', 'Diploma', 'BSC', 'PGD', 'MSC', 'PHD', 'Others'].map(q => <option key={q}>{q}</option>)}
                  </select>
                </div>
                <div><label style={LABEL}>Your Experience *</label><textarea style={{ ...FIELD_LIGHT, resize: 'vertical' }} rows={4} placeholder="Tell us about your relevant experience..." /></div>
                <button type="submit" className="btn-forest" style={{ width: '100%', justifyContent: 'center' }}>Submit Application</button>
              </form>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  </>)
}
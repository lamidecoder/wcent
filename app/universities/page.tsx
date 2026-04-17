'use client'
import Link from 'next/link'
import { MapPin, ExternalLink } from 'lucide-react'
import { FadeUp, SlideIn, Stagger, Item } from '@/components/Animate'
import Img from '@/components/Img'

const UNIS = [
  { name:'University of Wolverhampton', loc:'West Midlands, UK', country:'UK', badge:'Primary Partner', year:'1992', img:'https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80', progs:['Business','Engineering','Health','Law','Computing'], desc:'Our flagship UK partner — hundreds of Nigerian students placed successfully.' },
  { name:'University of Hertfordshire',  loc:'Hatfield, UK',      country:'UK', badge:'Partner',         year:'1952', img:'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=700&q=80', progs:['Business','Media','Life Sciences','Education'], desc:'Renowned for business, media and life sciences programmes.' },
  { name:'Coventry University',          loc:'Coventry, UK',       country:'UK', badge:'Partner',         year:'1843', img:'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=700&q=80', progs:['Engineering','Business','Computing','Health'], desc:'Award-winning modern university with strong industry links.' },
  { name:'University of East London',    loc:'London, UK',         country:'UK', badge:'Partner',         year:'1898', img:'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=700&q=80', progs:['Social Sciences','Arts','Business','Psychology'], desc:'Located in the heart of Europe\'s greatest city.' },
  { name:'York St John University',      loc:'York, UK',           country:'UK', badge:'Partner',         year:'1841', img:'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=700&q=80', progs:['Education','Psychology','Sport','Arts'], desc:'Historic institution with excellent pastoral care and support.' },
  { name:'Algonquin College',            loc:'Ottawa, Canada',     country:'CA', badge:'Canada Partner',  year:'1967', img:'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=700&q=80', progs:['Technology','Business','Health','Media'], desc:'Premier Canadian college for tech, business and health programmes.' },
]

export default function UniversitiesPage() {
  return (<>
    {/* Hero */}
    <section className="page-hero">
      <div className="wrap" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <FadeUp>
          <p className="eyebrow" style={{ marginBottom: 14 }}>Where You Can Rise</p>
          <h1 className="fd" style={{ fontSize: 'clamp(2.4rem,5vw,4.2rem)', fontWeight: 300, color: '#F5F1E6', lineHeight: 1.1 }}>
            Partner <em style={{ color: '#C8A964' }}>Universities</em>
          </h1>
        </FadeUp>
      </div>
    </section>

    {/* University grid */}
    <section style={{ background: '#F5F1E6', padding: '5.5rem 0' }}>
      <div className="wrap">
        {(['UK', 'CA'] as const).map(country => (
          <div key={country} style={{ marginBottom: 60 }}>
            <FadeUp style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
              <div style={{ width: 44, height: 1, background: 'linear-gradient(90deg,#0F3D2E,#C8A964)' }} />
              <p className="eyebrow">{country === 'UK' ? 'United Kingdom' : 'Canada'}</p>
            </FadeUp>

            <Stagger className="col-services">
              {UNIS.filter(u => u.country === country).map((u, i) => (
                <Item key={i}>
                  <div style={{ background: 'white', border: '1px solid rgba(15,61,46,.1)', overflow: 'hidden', transition: 'all .35s ease' }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-5px)'; el.style.boxShadow = '0 20px 50px rgba(15,61,46,.1)'; el.style.borderColor = 'rgba(200,169,100,.3)' }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'none'; el.style.borderColor = 'rgba(15,61,46,.1)' }}>
                    {/* Image */}
                    <div style={{ position: 'relative', height: 190, overflow: 'hidden' }}>
                      <Img src={u.img} alt={u.name} fill />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(8,27,21,.88) 0%,transparent 52%)' }} />
                      <div style={{ position: 'absolute', top: 12, left: 12 }}>
                        <span style={{ background: 'linear-gradient(135deg,#C8A964,#dfc07a)', color: '#081B15', fontSize: '.56rem', fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', padding: '4px 10px', fontFamily: 'Inter, sans-serif' }}>{u.badge}</span>
                      </div>
                      <div style={{ position: 'absolute', bottom: 14, left: 14, right: 14 }}>
                        <h3 className="fd" style={{ color: '#F5F1E6', fontSize: '1.05rem', fontWeight: 500, lineHeight: 1.3 }}>{u.name}</h3>
                      </div>
                    </div>
                    {/* Content */}
                    <div style={{ padding: '16px 18px 20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                        <span style={{ fontSize: 11.5, color: '#6b8e7f', display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'Inter, sans-serif' }}>
                          <MapPin size={10} color="#C8A964" />{u.loc}
                        </span>
                        <span style={{ fontSize: 10.5, color: '#8aab9a', fontFamily: 'Inter, sans-serif' }}>Est. {u.year}</span>
                      </div>
                      <p style={{ color: '#4d6b5a', fontSize: 12.5, lineHeight: 1.65, marginBottom: 12, fontFamily: 'Inter, sans-serif' }}>{u.desc}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 14 }}>
                        {u.progs.slice(0, 4).map(p => (
                          <span key={p} style={{ background: 'rgba(15,61,46,.07)', color: '#3d5a4a', fontSize: '.6rem', padding: '3px 9px', fontWeight: 600, fontFamily: 'Inter, sans-serif', border: '1px solid rgba(15,61,46,.1)' }}>{p}</span>
                        ))}
                      </div>
                      <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: '#0F3D2E', fontSize: '.65rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none', fontFamily: 'Inter, sans-serif' }}>
                        Apply Now <ExternalLink size={10} />
                      </Link>
                    </div>
                  </div>
                </Item>
              ))}
            </Stagger>
          </div>
        ))}
      </div>
    </section>

    {/* Wolverhampton feature */}
    <section style={{ background: '#0F3D2E', padding: '5.5rem 0' }}>
      <div className="wrap">
        <div className="col-2-wide">
          <SlideIn>
            <div style={{ position: 'relative', height: 420 }}>
              <Img src="https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=80" alt="University of Wolverhampton" fill />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right,transparent,rgba(15,61,46,.25))' }} />
            </div>
          </SlideIn>
          <SlideIn from="right">
            <span style={{ background: 'linear-gradient(135deg,#C8A964,#dfc07a)', color: '#081B15', fontSize: '.58rem', fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', padding: '5px 12px', display: 'inline-block', marginBottom: 20, fontFamily: 'Inter, sans-serif' }}>
              Primary Partner
            </span>
            <h2 className="fd" style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)', fontWeight: 300, color: '#F5F1E6', lineHeight: 1.2, marginBottom: 16 }}>
              University of<br /><em style={{ color: '#C8A964' }}>Wolverhampton</em>
            </h2>
            <p style={{ color: '#a8c4b4', fontSize: 13.5, lineHeight: 1.88, marginBottom: 14, fontFamily: 'Inter, sans-serif' }}>
              A public research university in the West Midlands, England. As our primary partner institution, we have placed hundreds of Nigerian students who have gone on to thrive academically and professionally.
            </p>
            <p style={{ color: '#a8c4b4', fontSize: 13.5, lineHeight: 1.88, marginBottom: 32, fontFamily: 'Inter, sans-serif' }}>
              Our close relationship means we have deep knowledge of their admissions processes, scholarship opportunities, and student support systems.
            </p>
            <Link href="/contact" className="btn-primary">Apply to Wolverhampton</Link>
          </SlideIn>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section style={{ background: '#F5F1E6', padding: '5rem 0', textAlign: 'center' }}>
      <div className="wrap" style={{ maxWidth: 560 }}>
        <FadeUp>
          <p className="eyebrow" style={{ marginBottom: 14 }}>Not Sure Where to Apply?</p>
          <h2 className="fd" style={{ fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 300, color: '#0F3D2E', marginBottom: 12, lineHeight: 1.2 }}>
            Let Us Find the <em style={{ color: '#C8A964' }}>Perfect Match</em>
          </h2>
          <p style={{ color: '#4d6b5a', fontSize: 14, lineHeight: 1.8, marginBottom: 28, fontFamily: 'Inter, sans-serif' }}>
            Free personalised assessment based on your profile, goals, and budget.
          </p>
          <Link href="/contact" className="btn-forest">Get a Free Assessment</Link>
        </FadeUp>
      </div>
    </section>
  </>)
}
'use client'
import Link from 'next/link'
import { MapPin, ExternalLink } from 'lucide-react'
import { FadeUp, SlideIn, Stagger, Item } from '@/components/Animate'
import Img from '@/components/Img'

const UNIS = [
  { name:'University of Wolverhampton', loc:'West Midlands, UK', country:'UK', badge:'Primary Partner', year:'1992', img:'https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80', progs:['Business','Engineering','Health','Law','Computing'], desc:'Our flagship UK partner — hundreds of Nigerians placed successfully.' },
  { name:'University of Hertfordshire',  loc:'Hatfield, UK',      country:'UK', badge:'Partner',         year:'1952', img:'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=700&q=80', progs:['Business','Media','Life Sciences','Education'], desc:'Renowned for business, media and life sciences programmes.' },
  { name:'Coventry University',          loc:'Coventry, UK',       country:'UK', badge:'Partner',         year:'1843', img:'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=700&q=80', progs:['Engineering','Business','Computing','Health'], desc:'Award-winning university with strong industry partnerships.' },
  { name:'University of East London',    loc:'London, UK',         country:'UK', badge:'Partner',         year:'1898', img:'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=700&q=80', progs:['Social Sciences','Arts','Business','Psychology'], desc:'Located in the heart of Europe\'s greatest city.' },
  { name:'York St John University',      loc:'York, UK',           country:'UK', badge:'Partner',         year:'1841', img:'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=700&q=80', progs:['Education','Psychology','Sport','Arts'], desc:'Historic institution with excellent pastoral care.' },
  { name:'Algonquin College',            loc:'Ottawa, Canada',     country:'CA', badge:'Canada Partner',  year:'1967', img:'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=700&q=80', progs:['Technology','Business','Health','Media'], desc:'Premier Canadian college for tech, business and health.' },
]

export default function UniversitiesPage() {
  return (<>
    <section className="page-hero"><div className="wrap" style={{ position:'relative', zIndex:1, textAlign:'center' }}>
      <FadeUp>
        <p className="eyebrow" style={{ marginBottom:14 }}>Where You Can Go</p>
        <h1 className="fd" style={{ fontSize:'clamp(2.5rem,5vw,4.5rem)', fontWeight:300, color:'#fff', lineHeight:1.1 }}>Partner <em style={{ color:'#c9a84c' }}>Universities</em></h1>
      </FadeUp>
    </div></section>

    <section className="section-darker"><div className="wrap">
      {(['UK','CA'] as const).map(country=>(
        <div key={country} style={{ marginBottom:56 }}>
          <FadeUp style={{ display:'flex', alignItems:'center', gap:14, marginBottom:28 }}>
            <div className="gold-line" />
            <p className="eyebrow">{country==='UK'?'United Kingdom':'Canada'}</p>
          </FadeUp>
          <Stagger className="col-services">
            {UNIS.filter(u=>u.country===country).map((u,i)=>(
              <Item key={i}>
                <div className="glass" style={{ overflow:'hidden' }}>
                  <div style={{ position:'relative', height:190, overflow:'hidden' }}>
                    <Img src={u.img} alt={u.name} fill />
                    <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(7,16,31,.88) 0%,transparent 52%)' }} />
                    <div style={{ position:'absolute', top:12, left:12 }}><span className="badge">{u.badge}</span></div>
                    <div style={{ position:'absolute', bottom:13, left:14, right:14 }}>
                      <h3 className="fd" style={{ color:'#fff', fontSize:'1.05rem', fontWeight:500, lineHeight:1.3 }}>{u.name}</h3>
                    </div>
                  </div>
                  <div style={{ padding:'14px 16px 18px' }}>
                    <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:9, flexWrap:'wrap', gap:4 }}>
                      <span style={{ fontSize:11, color:'#64748b', display:'flex', alignItems:'center', gap:4 }}><MapPin size={9} color="#c9a84c"/>{u.loc}</span>
                      <span style={{ fontSize:10, color:'#334155', fontFamily:'Space Grotesk,sans-serif' }}>Est. {u.year}</span>
                    </div>
                    <p style={{ color:'#64748b', fontSize:12, lineHeight:1.6, marginBottom:11 }}>{u.desc}</p>
                    <div style={{ display:'flex', flexWrap:'wrap', gap:5, marginBottom:13 }}>
                      {u.progs.slice(0,3).map(p=>(
                        <span key={p} style={{ background:'rgba(201,168,76,.1)', color:'#c9a84c', fontSize:'.56rem', padding:'3px 8px', fontWeight:600, fontFamily:'Space Grotesk,sans-serif', border:'1px solid rgba(201,168,76,.2)' }}>{p}</span>
                      ))}
                    </div>
                    <Link href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:4, color:'#c9a84c', fontSize:'.62rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', textDecoration:'none', fontFamily:'Space Grotesk,sans-serif' }}>
                      Apply Now <ExternalLink size={10}/>
                    </Link>
                  </div>
                </div>
              </Item>
            ))}
          </Stagger>
        </div>
      ))}
    </div></section>

    <section className="section-dark"><div className="wrap">
      <div className="col-2-wide">
        <SlideIn>
          <div style={{ position:'relative', height:400 }}>
            <Img src="https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=80" alt="University of Wolverhampton" fill />
          </div>
        </SlideIn>
        <SlideIn from="right">
          <span className="badge" style={{ marginBottom:18, display:'inline-block' }}>Primary Partner</span>
          <h2 className="fd" style={{ fontSize:'clamp(1.8rem,3.5vw,3rem)', fontWeight:300, color:'#fff', lineHeight:1.18, marginBottom:16 }}>University of<br /><em style={{ color:'#c9a84c' }}>Wolverhampton</em></h2>
          <p style={{ color:'#64748b', fontSize:13, lineHeight:1.85, marginBottom:14 }}>A public research university in the West Midlands. As our primary partner, we have placed hundreds of Nigerian students who have gone on to thrive academically and professionally.</p>
          <p style={{ color:'#64748b', fontSize:13, lineHeight:1.85, marginBottom:28 }}>We have deep knowledge of their admissions, scholarship opportunities, and student support systems.</p>
          <Link href="/contact" className="btn-primary">Apply to Wolverhampton</Link>
        </SlideIn>
      </div>
    </div></section>

    <section style={{ background:'#0c1828', padding:'4.5rem 0', textAlign:'center' }}><div className="wrap" style={{ maxWidth:540 }}>
      <FadeUp>
        <p className="eyebrow" style={{ marginBottom:14 }}>Not Sure Where to Apply?</p>
        <h2 className="fd" style={{ fontSize:'clamp(1.8rem,3vw,2.8rem)', fontWeight:300, color:'#fff', marginBottom:10 }}>Let Us Find the <em style={{ color:'#c9a84c' }}>Perfect Match</em></h2>
        <p style={{ color:'#64748b', fontSize:13, lineHeight:1.8, marginBottom:24 }}>Free personalised assessment based on your profile, goals, and budget.</p>
        <Link href="/contact" className="btn-primary">Get a Free Assessment</Link>
      </FadeUp>
    </div></section>
  </>)
}
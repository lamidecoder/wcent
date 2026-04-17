'use client'
import Link from 'next/link'
import { GraduationCap, Globe, FileCheck, BookOpen, Home as HomeIcon, Plane, Users, CheckCircle, ArrowRight, LucideIcon } from 'lucide-react'
import { FadeUp, SlideIn, Stagger, Item } from '@/components/Animate'
import Img from '@/components/Img'

function SvcCard({ Icon, tag, title, desc, pts }: { Icon: LucideIcon; tag: string; title: string; desc: string; pts: string[] }) {
  return (
    <div className="glass" style={{ padding:28 }}>
      <div style={{ display:'flex', alignItems:'flex-start', gap:14, marginBottom:18 }}>
        <div className="icon-sq" style={{ flexShrink:0 }}><Icon size={19} color="#c9a84c" /></div>
        <div>
          <p className="eyebrow" style={{ fontSize:'.52rem', marginBottom:3 }}>{tag}</p>
          <h2 className="fd" style={{ fontSize:'1.4rem', fontWeight:500, color:'#fff' }}>{title}</h2>
        </div>
      </div>
      <p style={{ color:'#64748b', fontSize:13, lineHeight:1.72, marginBottom:18 }}>{desc}</p>
      <div className="col-2">
        {pts.map(p => (
          <div key={p} style={{ display:'flex', alignItems:'center', gap:6, fontSize:11, color:'#64748b' }}>
            <CheckCircle size={10} color="#c9a84c" style={{ flexShrink:0 }} />{p}
          </div>
        ))}
      </div>
    </div>
  )
}

const SVCS = [
  { Icon:GraduationCap, tag:'Core',      title:'Education Counselling',   desc:'British Council trained advisors with 10+ years experience providing personalised academic guidance.', pts:['One-on-one sessions','Career pathway planning','Academic assessment','BC-trained staff'] },
  { Icon:Globe,          tag:'Placement', title:'University Placement',    desc:'We match you to the right institution across our network of 20+ accredited universities.',           pts:['UK, Canada & US','20+ institutions','Conditional offers','Course comparison'] },
  { Icon:FileCheck,      tag:'Visa',      title:'Visa Application Guide',  desc:'Step-by-step guidance through every visa requirement to reduce risk of delays or refusals.',         pts:['Eligibility check','Document checklist','Application review','Interview prep'] },
  { Icon:BookOpen,       tag:'Academic',  title:'Course Selection',        desc:'Tailored course recommendations matched to your grades, budget, interests, and career timeline.',     pts:['Programme shortlist','Entry requirements','Personal statement','Deadline tracking'] },
  { Icon:HomeIcon,       tag:'Housing',   title:'Accommodation Advice',    desc:'Trusted housing options near your campus — student halls, private rentals, and homestays.',          pts:['University halls','Private rentals','Cost of living','Neighbourhood guide'] },
  { Icon:Plane,          tag:'Travel',    title:'Pre-Departure & Arrival', desc:'Flight bookings, airport pickup, pre-departure orientation, and cultural briefings.',                 pts:['Flight booking','Airport pickup','Pre-departure brief','Cultural orientation'] },
  { Icon:Users,          tag:'Ongoing',   title:'Post-Enrolment Support',  desc:'We remain your point of contact throughout your study journey — long after enrolment.',              pts:['In-country contact','Issue resolution','Academic check-ins','Alumni network'] },
]

export default function ServicesPage() {
  return (<>
    <section className="page-hero"><div className="wrap" style={{ position:'relative', zIndex:1, textAlign:'center' }}>
      <FadeUp>
        <p className="eyebrow" style={{ marginBottom:14 }}>What We Do</p>
        <h1 className="fd" style={{ fontSize:'clamp(2.5rem,5vw,4.5rem)', fontWeight:300, color:'#fff', lineHeight:1.1 }}>Our <em style={{ color:'#c9a84c' }}>Services</em></h1>
        <p style={{ color:'#64748b', maxWidth:500, margin:'14px auto 0', fontSize:14, lineHeight:1.8 }}>End-to-end support for every step of your overseas education journey.</p>
      </FadeUp>
    </div></section>

    <section className="section-darker"><div className="wrap">
      <Stagger className="col-2">
        {SVCS.map((s,i) => <Item key={i}><SvcCard {...s} /></Item>)}
      </Stagger>
    </div></section>

    <section className="section-dark"><div className="wrap">
      <div className="col-2-wide">
        <SlideIn>
          <p className="eyebrow" style={{ marginBottom:14 }}>Our Capabilities</p>
          <h2 className="fd" style={{ fontSize:'clamp(1.8rem,4vw,3rem)', fontWeight:300, color:'#fff', lineHeight:1.18, marginBottom:28 }}>Designed Around the<br /><em style={{ color:'#c9a84c' }}>Student Experience</em></h2>
          {[
            { n:'01', t:'Comprehensive Advice', d:'Holistic guidance for the full duration of your studies in UK, Canada, and USA.' },
            { n:'02', t:'Purpose-Driven Team',  d:'We adapt quickly, understand diverse environments, and are culture and language-friendly.' },
            { n:'03', t:'Trust in Education',   d:'We believe deeply in the value of international education and convey that trust to every student.' },
          ].map(c => (
            <div key={c.n} style={{ display:'flex', gap:16, marginBottom:22 }}>
              <span className="fd" style={{ color:'#c9a84c', fontSize:'1.7rem', fontWeight:300, flexShrink:0, lineHeight:1 }}>{c.n}</span>
              <div>
                <h3 style={{ color:'#fff', fontWeight:600, marginBottom:5, fontSize:'.9rem', fontFamily:'Space Grotesk,sans-serif' }}>{c.t}</h3>
                <p style={{ color:'#475569', fontSize:13, lineHeight:1.7 }}>{c.d}</p>
              </div>
            </div>
          ))}
        </SlideIn>
        <SlideIn from="right">
          <div style={{ position:'relative', height:440 }}>
            <Img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80" alt="Counselling" fill />
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(7,16,31,.35),transparent 50%)' }} />
          </div>
        </SlideIn>
      </div>
    </div></section>

    <section style={{ background:'#0c1828', padding:'4.5rem 0', textAlign:'center' }}><div className="wrap" style={{ maxWidth:540 }}>
      <FadeUp>
        <p className="eyebrow" style={{ marginBottom:14 }}>Get Started</p>
        <h2 className="fd" style={{ fontSize:'clamp(1.8rem,3vw,2.8rem)', fontWeight:300, color:'#fff', marginBottom:10 }}>Ready to Explore Your <em style={{ color:'#c9a84c' }}>Options?</em></h2>
        <p style={{ color:'#64748b', fontSize:13, lineHeight:1.8, marginBottom:24 }}>Speak directly with one of our advisors — completely free.</p>
        <Link href="/contact" className="btn-primary">Book Free Consultation</Link>
      </FadeUp>
    </div></section>
  </>)
}
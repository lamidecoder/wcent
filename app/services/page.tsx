'use client'
import Link from 'next/link'
import { GraduationCap, Globe, FileCheck, BookOpen, Home as HomeIcon, Plane, Users, CheckCircle, ArrowRight, LucideIcon } from 'lucide-react'
import { FadeUp, SlideIn, Stagger, Item } from '@/components/Animate'
import Img from '@/components/Img'

function SvcCard({ Icon, tag, title, desc, pts }: { Icon: LucideIcon; tag: string; title: string; desc: string; pts: string[] }) {
  return (
    <div style={{
      background: 'white',
      border: '1px solid rgba(15,61,46,.1)',
      padding: '32px 28px',
      transition: 'all .35s cubic-bezier(.4,0,.2,1)',
    }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(-5px)'
        el.style.boxShadow = '0 20px 56px rgba(15,61,46,.1)'
        el.style.borderColor = 'rgba(200,169,100,.3)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = 'none'
        el.style.borderColor = 'rgba(15,61,46,.1)'
      }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid rgba(15,61,46,.07)' }}>
        <div style={{
          width: 46, height: 46, flexShrink: 0,
          background: 'rgba(15,61,46,.07)',
          border: '1px solid rgba(15,61,46,.12)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon size={20} color="#0F3D2E" />
        </div>
        <div style={{ paddingTop: 2 }}>
          <p style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '.28em', textTransform: 'uppercase', color: '#C8A964', fontFamily: 'Inter, sans-serif', marginBottom: 5 }}>{tag}</p>
          <h2 className="fd" style={{ fontSize: '1.45rem', fontWeight: 500, color: '#0F3D2E', lineHeight: 1.2 }}>{title}</h2>
        </div>
      </div>
      {/* Body */}
      <p style={{ color: '#4d6b5a', fontSize: 13.5, lineHeight: 1.8, marginBottom: 20, fontFamily: 'Inter, sans-serif' }}>{desc}</p>
      {/* Points */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px' }}>
        {pts.map(p => (
          <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 12.5, color: '#3d5a4a', fontFamily: 'Inter, sans-serif' }}>
            <CheckCircle size={12} color="#0F3D2E" style={{ flexShrink: 0 }} />{p}
          </div>
        ))}
      </div>
    </div>
  )
}

const SVCS = [
  { Icon: GraduationCap, tag: 'Core',      title: 'Education Counselling',   desc: 'British Council trained advisors with 10+ years experience providing personalised academic guidance. One counsellor, with you from first meeting to enrolment.',   pts: ['One-on-one sessions', 'Career pathway planning', 'Academic assessment', 'BC-trained staff'] },
  { Icon: Globe,          tag: 'Placement', title: 'University Placement',    desc: 'We match you to the right institution across 20+ accredited universities in the UK, Canada, and USA — based on your grades, goals, and budget.',                     pts: ['UK, Canada & US placements', '20+ partner institutions', 'Conditional offer support', 'Course comparison'] },
  { Icon: FileCheck,      tag: 'Visa',      title: 'Visa Application Guide',  desc: 'From eligibility to submission — we manage every step so your student visa application is precise, complete, and submitted on time with no delays.',                   pts: ['Eligibility assessment', 'Document checklist', 'Application review', 'Interview preparation'] },
  { Icon: BookOpen,       tag: 'Academic',  title: 'Course Selection',        desc: 'Expert course recommendations matched carefully to your grades, ambitions, timeline, and career trajectory — across hundreds of programmes.',                            pts: ['Programme shortlisting', 'Entry requirements match', 'Personal statement', 'Deadline management'] },
  { Icon: HomeIcon,       tag: 'Housing',   title: 'Accommodation Advice',    desc: 'Trusted housing options near your campus — student halls, private rentals, and homestay arrangements — all vetted and recommended by our team.',                        pts: ['University halls', 'Private rentals', 'Cost of living guide', 'Neighbourhood tips'] },
  { Icon: Plane,          tag: 'Travel',    title: 'Pre-Departure & Arrival', desc: 'Flight bookings, airport pickup coordination, pre-departure orientation, and cultural briefings — so you arrive at your destination confident and prepared.',             pts: ['Flight booking assistance', 'Airport pickup', 'Pre-departure briefing', 'Cultural orientation'] },
  { Icon: Users,          tag: 'Ongoing',   title: 'Post-Enrolment Support',  desc: 'Our relationship does not end at enrolment. We remain your point of contact throughout your study journey — available to resolve issues and provide guidance.',          pts: ['In-country contact', 'Issue resolution', 'Academic check-ins', 'Alumni network access'] },
]

export default function ServicesPage() {
  return (<>
    {/* Page Hero */}
    <section className="page-hero">
      <div className="wrap" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <FadeUp>
          <p className="eyebrow" style={{ marginBottom: 14 }}>What We Do</p>
          <h1 className="fd" style={{ fontSize: 'clamp(2.4rem,5vw,4.2rem)', fontWeight: 300, color: '#F5F1E6', lineHeight: 1.1, marginBottom: 16 }}>
            Our <em style={{ color: '#C8A964' }}>Services</em>
          </h1>
          <p style={{ color: '#8aab9a', maxWidth: 520, margin: '0 auto', fontSize: 15, lineHeight: 1.8, fontFamily: 'Inter, sans-serif' }}>
            End-to-end support for every step of your overseas education journey.
          </p>
        </FadeUp>
      </div>
    </section>

    {/* Services Grid */}
    <section style={{ background: '#F5F1E6', padding: '5rem 0' }}>
      <div className="wrap">
        <Stagger style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="col-2">
          {SVCS.map((s, i) => <Item key={i}><SvcCard {...s} /></Item>)}
        </Stagger>
      </div>
    </section>

    {/* Capabilities */}
    <section style={{ background: '#0F3D2E', padding: '5.5rem 0' }}>
      <div className="wrap">
        <div className="col-2-wide">
          <SlideIn>
            <p className="eyebrow" style={{ marginBottom: 14 }}>Our Capabilities</p>
            <h2 className="fd" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 300, color: '#F5F1E6', lineHeight: 1.2, marginBottom: 40 }}>
              Designed Around the<br /><em style={{ color: '#C8A964' }}>Student Experience</em>
            </h2>
            {[
              { n: '01', t: 'Comprehensive Advice', d: 'Holistic guidance for the full duration of your studies in the UK, Canada, and USA — from first enquiry to graduation.' },
              { n: '02', t: 'Purpose-Driven Team',  d: 'We adapt quickly, understand diverse environments, and are people, culture, and language-friendly.' },
              { n: '03', t: 'Trust in Education',   d: 'We believe deeply in the value of international education and convey that trust to every student we work with.' },
            ].map(c => (
              <div key={c.n} style={{ display: 'flex', gap: 20, marginBottom: 28, paddingBottom: 28, borderBottom: '1px solid rgba(245,241,230,.07)' }}>
                <span className="fd" style={{ color: '#C8A964', fontSize: '2rem', fontWeight: 300, flexShrink: 0, lineHeight: 1, minWidth: 40 }}>{c.n}</span>
                <div>
                  <h3 style={{ color: '#F5F1E6', fontWeight: 600, marginBottom: 7, fontSize: '1rem', fontFamily: 'Inter, sans-serif' }}>{c.t}</h3>
                  <p style={{ color: '#8aab9a', fontSize: 13.5, lineHeight: 1.75, fontFamily: 'Inter, sans-serif' }}>{c.d}</p>
                </div>
              </div>
            ))}
          </SlideIn>
          <SlideIn from="right">
            <div style={{ position: 'relative', height: 480 }}>
              <Img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80" alt="Student counselling session" fill />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(15,61,46,.4),transparent 55%)' }} />
            </div>
          </SlideIn>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section style={{ background: '#081B15', padding: '5rem 0', textAlign: 'center' }}>
      <div className="wrap" style={{ maxWidth: 560 }}>
        <FadeUp>
          <p className="eyebrow" style={{ marginBottom: 14 }}>Get Started</p>
          <h2 className="fd" style={{ fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 300, color: '#F5F1E6', marginBottom: 12, lineHeight: 1.2 }}>
            Ready to Explore Your <em style={{ color: '#C8A964' }}>Options?</em>
          </h2>
          <p style={{ color: '#6b8e7f', fontSize: 14, lineHeight: 1.8, marginBottom: 28, fontFamily: 'Inter, sans-serif' }}>
            Speak directly with one of our advisors — completely free.
          </p>
          <Link href="/contact" className="btn-primary">Book Free Consultation</Link>
        </FadeUp>
      </div>
    </section>
  </>)
}
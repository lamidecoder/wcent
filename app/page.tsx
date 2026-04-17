'use client'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Globe, FileCheck, BookOpen, Home as HomeIcon, Plane, CheckCircle, Star, ArrowRight, ChevronDown, Users, TrendingUp, MapPin, Play, Sparkles } from 'lucide-react'
import { FadeUp, FadeIn, SlideIn, Stagger, Item } from '@/components/Animate'
import Img from '@/components/Img'

const SERVICES = [
  { Icon: GraduationCap, title: 'Education Counselling',    desc: 'Personalised guidance from British Council-trained advisors. One counsellor, with you from first meeting to enrolment.' },
  { Icon: Globe,          title: 'University Placement',     desc: 'We match you to the right institution across 20+ accredited universities in the UK, Canada, and USA.' },
  { Icon: FileCheck,      title: 'Visa Application Guide',   desc: 'From eligibility to submission. We manage every step so your application is precise and on time.' },
  { Icon: BookOpen,       title: 'Course Selection',         desc: 'Expert course recommendations matched to your grades, ambitions, and career timeline.' },
  { Icon: HomeIcon,       title: 'Accommodation Advice',     desc: 'Trusted housing options near your campus: halls, private rentals, and homestay arrangements.' },
  { Icon: Plane,          title: 'Pre-Departure & Arrival',  desc: 'Flight bookings, airport pickup, cultural briefing, and orientation, so you arrive ready.' },
]

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY  = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const heroOp = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section ref={heroRef} className="chevron-pattern" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', background: '#081B15' }}>
        <motion.div style={{ position: 'absolute', inset: 0, y: heroY, overflow: 'hidden' }}>
          <Img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=80" alt="" fill style={{ opacity: .14 }} priority />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg,rgba(8,27,21,.97) 0%,rgba(15,61,46,.88) 55%,rgba(8,27,21,.95) 100%)' }} />
        </motion.div>

        {/* Gold glow */}
        <div style={{ position: 'absolute', top: '20%', right: '8%', width: 460, height: 460, borderRadius: '50%', background: 'radial-gradient(circle,rgba(200,169,100,.07) 0%,transparent 65%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

        <motion.div style={{ opacity: heroOp, position: 'relative', zIndex: 1, width: '100%' }}>
          <div className="wrap" style={{ paddingTop: 150, paddingBottom: 100 }}>
            <div className="hero-grid">

              {/* LEFT */}
              <div>
                <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
                  <span style={{ width: 24, height: 1, background: '#C8A964', display: 'inline-block' }} />
                  <span className="eyebrow">Contracted Education Advisor · Est. 2010</span>
                  <span style={{ width: 24, height: 1, background: '#C8A964', display: 'inline-block' }} />
                </motion.div>

                <motion.h1 className="fd" initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .08 }}
                  style={{ fontSize: 'clamp(2.8rem,5.5vw,5.4rem)', fontWeight: 300, lineHeight: 1.08, color: '#F5F1E6', marginBottom: 8 }}>
                  Where <em style={{ color: '#C8A964' }}>ambition</em>
                </motion.h1>
                <motion.h1 className="fd" initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .16 }}
                  style={{ fontSize: 'clamp(2.8rem,5.5vw,5.4rem)', fontWeight: 300, lineHeight: 1.08, color: '#F5F1E6', marginBottom: 28 }}>
                  meets <em style={{ color: '#C8A964' }}>admission.</em>
                </motion.h1>

                <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .28 }}
                  style={{ color: '#8aab9a', fontSize: '1rem', lineHeight: 1.85, maxWidth: 480, marginBottom: 36 }}>
                  Withcent Global guides ambitious students from Africa to the world&apos;s most respected institutions, helping you secure your place at a world-class institution.
                </motion.p>

                <motion.div className="btn-row" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .36 }}
                  style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 52 }}>
                  <Link href="/contact" className="btn-primary pulse"><Sparkles size={13} /> Begin Your Journey</Link>
                  <Link href="/services" className="btn-ghost">Our Services <ArrowRight size={12} /></Link>
                </motion.div>

                {/* Stats */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8, delay: .5 }}
                  style={{ borderTop: '1px solid rgba(200,169,100,.15)', paddingTop: 28 }}>
                  <div style={{ display: 'flex', gap: 0 }}>
                    {[
                      { n: '3,000+', l: 'Students Placed',  Icon: Users },
                      { n: '10+',    l: 'Years Experience',  Icon: TrendingUp },
                      { n: '20+',    l: 'Partner Universities', Icon: GraduationCap },
                    ].map((s, i) => (
                      <div key={s.l} style={{ textAlign: 'center', borderRight: i < 2 ? '1px solid rgba(200,169,100,.12)' : 'none', padding: '0 14px', flex: 1 }}>
                        <s.Icon size={13} color="#C8A964" style={{ margin: '0 auto 6px', display: 'block' }} />
                        <div className="fd" style={{ fontSize: 'clamp(1.4rem,3.5vw,1.9rem)', fontWeight: 300, color: '#C8A964', lineHeight: 1 }}>{s.n}</div>
                        <div style={{ fontSize: '.52rem', color: '#4d7060', letterSpacing: '.12em', textTransform: 'uppercase', marginTop: 5, fontFamily: 'Inter, sans-serif' }}>{s.l}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* RIGHT */}
              <FadeIn delay={.32} className="hero-img-hide">
                <div className="float" style={{ position: 'relative', height: 520 }}>
                  <div style={{ position: 'absolute', top: 0, left: 40, right: 0, height: 380, overflow: 'hidden' }}>
                    <Img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2013/08/08/11/wolverhampton.jpg?width=1200" alt="University campus" fill priority />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom,transparent 50%,rgba(8,27,21,.9) 100%)' }} />
                  </div>
                  <div style={{ position: 'absolute', bottom: 60, left: 0, width: 160, height: 130, overflow: 'hidden', border: '2px solid rgba(200,169,100,.4)', zIndex: 2 }}>
                    <Img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&q=80" alt="Counselling" fill />
                  </div>
                  {/* Double chevron badge */}
                  <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ position: 'absolute', top: -12, right: -12, background: '#0F3D2E', border: '1px solid rgba(200,169,100,.4)', padding: '12px 14px', boxShadow: '0 14px 40px rgba(15,61,46,.4)', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                    <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
                      <polyline points="1,11 11,2 21,11" stroke="#C8A964" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="3,14 11,7 19,14" stroke="#C8A964" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity=".6"/>
                    </svg>
                  </motion.div>
                  {/* Quote */}
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    style={{ position: 'absolute', bottom: 0, right: 0, left: 40, background: 'rgba(8,27,21,.92)', backdropFilter: 'blur(14px)', padding: '14px 18px', borderLeft: '2px solid #C8A964', zIndex: 4 }}>
                    <p className="fd" style={{ color: '#F5F1E6', fontStyle: 'italic', fontSize: 13, lineHeight: 1.5 }}>&ldquo;The journey up begins with someone beside you.&rdquo;</p>
                    <p style={{ color: '#C8A964', fontSize: '.55rem', letterSpacing: '.22em', textTransform: 'uppercase', marginTop: 7, fontFamily: 'Inter, sans-serif' }}>Withcent Global</p>
                  </motion.div>
                  {/* Uni badge */}
                  <div style={{ position: 'absolute', top: 295, left: -8, background: '#F5F1E6', padding: '9px 13px', display: 'flex', alignItems: 'center', gap: 9, boxShadow: '0 10px 36px rgba(0,0,0,.22)', zIndex: 3 }}>
                    <div style={{ width: 32, height: 32, background: '#0F3D2E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <GraduationCap color="#C8A964" size={15} />
                    </div>
                    <div>
                      <div style={{ fontSize: '.72rem', fontWeight: 700, color: '#0F3D2E', lineHeight: 1.2, fontFamily: 'Inter, sans-serif' }}>University of</div>
                      <div style={{ fontSize: '.58rem', color: '#C8A964', fontWeight: 700, letterSpacing: '.06em', fontFamily: 'Inter, sans-serif' }}>Wolverhampton Partner</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </motion.div>

        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.8, repeat: Infinity }}
          style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, zIndex: 2 }}>
          <span style={{ fontSize: '.55rem', color: '#2d4f3d', letterSpacing: '.28em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}>Scroll</span>
          <ChevronDown size={15} color="#2d4f3d" />
        </motion.div>
      </section>

      {/* ═══ PARTNER UNIVERSITIES ═══ */}
      <section className="section-forest">
        <div className="wrap">
          <FadeUp style={{ textAlign: 'center', marginBottom: 48 }}>
            <p className="eyebrow" style={{ marginBottom: 14 }}>Trusted Partner Institutions</p>
            <h2 className="fd" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 300, color: '#F5F1E6', lineHeight: 1.2 }}>
              Where Our Students <em style={{ color: '#C8A964' }}>Rise</em>
            </h2>
            <div className="gold-line" style={{ margin: '14px auto 0' }} />
          </FadeUp>
          <Stagger className="col-services">
            {[
              { name: 'University of Wolverhampton', loc: 'West Midlands, UK', badge: 'Primary Partner', img: 'https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80', desc: 'Our flagship UK partner. Hundreds of Nigerians placed successfully.' },
              { name: 'Coventry University',          loc: 'Coventry, UK',      badge: 'Partner',         img: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=700&q=80', desc: 'Award-winning modern university with strong industry links.' },
              { name: 'University of Hertfordshire',  loc: 'Hatfield, UK',      badge: 'Partner',         img: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=700&q=80', desc: 'Renowned for business, media, and life sciences.' },
              { name: 'University of East London',    loc: 'London, UK',        badge: 'Partner',         img: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=700&q=80', desc: 'Located in the heart of Europe\'s greatest city.' },
              { name: 'York St John University',      loc: 'York, UK',          badge: 'Partner',         img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=700&q=80', desc: 'Historic institution with excellent pastoral care.' },
              { name: 'Algonquin College',            loc: 'Ottawa, Canada',    badge: 'Canada Partner',  img: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=700&q=80', desc: 'Premier Canadian college for tech, business and health.' },
            ].map((u, i) => (
              <Item key={i}>
                <motion.div className="glass" style={{ overflow: 'hidden' }} whileHover={{ y: -5 }}>
                  <div style={{ position: 'relative', height: 175, overflow: 'hidden' }}>
                    <Img src={u.img} alt={u.name} fill />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(8,27,21,.9) 0%,transparent 52%)' }} />
                    <div style={{ position: 'absolute', top: 10, left: 10 }}><span className="badge">{u.badge}</span></div>
                    <div style={{ position: 'absolute', bottom: 10, left: 13, right: 13 }}>
                      <h3 className="fd" style={{ color: '#F5F1E6', fontSize: '1rem', fontWeight: 400, lineHeight: 1.3 }}>{u.name}</h3>
                    </div>
                  </div>
                  <div style={{ padding: '12px 14px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: '#6b8e7f', marginBottom: 7 }}>
                      <MapPin size={9} color="#C8A964" />{u.loc}
                    </div>
                    <p style={{ color: '#6b8e7f', fontSize: 12, lineHeight: 1.6, marginBottom: 11 }}>{u.desc}</p>
                    <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: '#C8A964', fontSize: '.62rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none', fontFamily: 'Inter, sans-serif' }}>
                      Apply Now <ArrowRight size={10} />
                    </Link>
                  </div>
                </motion.div>
              </Item>
            ))}
          </Stagger>
          <FadeUp style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/universities" className="btn-ghost">View All Partners <ArrowRight size={12} /></Link>
          </FadeUp>
        </div>
      </section>

      {/* ═══ BRAND STORY / VIDEO ═══ */}
      <section className="section-ivory">
        <div className="wrap">
          <div className="col-2-wide">
            <SlideIn>
              <p className="eyebrow" style={{ marginBottom: 14, color: '#0F3D2E' }}>Every Student, A Partner In Ascent</p>
              <h2 className="fd" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 300, color: '#0F3D2E', lineHeight: 1.18, marginBottom: 18 }}>
                Founded on the <em style={{ color: '#C8A964', fontStyle: 'italic' }}>belief</em> that ascent is never a solo climb.
              </h2>
              <p style={{ color: '#4d7060', fontSize: 14, lineHeight: 1.85, marginBottom: 28, borderLeft: '2px solid #C8A964', paddingLeft: 16 }}>
                Withcent Global guides ambitious students from Africa to the world&apos;s most respected institutions, helping every student secure their place at a world-class institution.
              </p>
              <p style={{ color: '#6b8e7f', fontSize: 13.5, lineHeight: 1.85, marginBottom: 32 }}>
                From first course-match to visa stamp, we bring clarity, care, and credibility to a process that too often delivers the opposite. Admissions become less about luck — more about what&apos;s earned.
              </p>
              <div className="col-img-4">
                {[
                  { img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&q=75', cap: 'Campus Life' },
                  { img: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&q=75', cap: 'Counselling' },
                  { img: 'https://cdn-wlvacuk.terminalfour.net/media/img2.jpg', cap: 'University' },
                  { img: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=400&q=75', cap: 'Graduation' },
                ].map((p, i) => (
                  <motion.div key={i} whileHover={{ scale: 1.03 }} style={{ position: 'relative', height: 95, overflow: 'hidden', cursor: 'pointer' }}>
                    <Img src={p.img} alt={p.cap} fill />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,27,21,.4)' }} />
                    <div style={{ position: 'absolute', bottom: 5, left: 7, fontSize: 9, color: '#F5F1E6', fontWeight: 500, fontFamily: 'Inter, sans-serif', letterSpacing: '.06em' }}>{p.cap}</div>
                  </motion.div>
                ))}
              </div>
              <Link href="/contact" className="btn-forest">Begin Your Journey <ArrowRight size={13} /></Link>
            </SlideIn>
            <SlideIn from="right">
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'relative', overflow: 'hidden', background: '#081B15' }}>
                  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                    <iframe
                      src="https://www.youtube.com/embed/w0okE_Det0A?rel=0&modestbranding=1"
                      title="Life as a Nigerian Student in the UK"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                    />
                  </div>
                  <div style={{ padding: '12px 16px', background: '#081B15', borderTop: '1px solid rgba(200,169,100,.1)' }}>
                    <p className="fd" style={{ color: '#F5F1E6', fontSize: 14, fontStyle: 'italic' }}>Life as a Nigerian Student in the UK</p>
                    <p style={{ color: '#C8A964', fontSize: '.55rem', letterSpacing: '.18em', textTransform: 'uppercase', marginTop: 4, fontFamily: 'Inter, sans-serif' }}>Click to watch</p>
                  </div>
                </div>
                <div className="col-vid-3">
                  {[
                    { img: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=300&q=70', label: 'UK Life' },
                    { img: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=300&q=70', label: 'Campus' },
                    { img: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=300&q=70', label: 'London' },
                  ].map((v, i) => (
                    <div key={i} style={{ position: 'relative', height: 78, overflow: 'hidden' }}>
                      <Img src={v.img} alt={v.label} fill />
                      <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,61,46,.5)' }} />
                      <div style={{ position: 'absolute', bottom: 4, left: 6, fontSize: 8.5, color: '#C8A964', fontWeight: 700, fontFamily: 'Inter, sans-serif', letterSpacing: '.07em', textTransform: 'uppercase' }}>{v.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="section-white">
        <div className="wrap">
          <FadeUp style={{ textAlign: 'center', marginBottom: 52 }}>
            <p className="eyebrow" style={{ marginBottom: 14 }}>What We Offer</p>
            <h2 className="fd" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 300, color: '#0F3D2E', lineHeight: 1.15 }}>
              One partner. One plan.<br /><em style={{ color: '#C8A964' }}>One clear path upward.</em>
            </h2>
            <div className="gold-line" style={{ margin: '14px auto 0', background: 'linear-gradient(90deg,#0F3D2E,#C8A964)' }} />
          </FadeUp>
          <Stagger className="col-services">
            {SERVICES.map(({ Icon, title, desc }) => (
              <Item key={title}>
                <motion.div className="card-ivory" style={{ padding: 28 }} whileHover={{ y: -5 }}>
                  <div className="icon-sq" style={{ marginBottom: 18, background: 'rgba(15,61,46,.08)', border: '1px solid rgba(15,61,46,.14)' }}>
                    <Icon size={19} color="#0F3D2E" />
                  </div>
                  <h3 style={{ fontWeight: 600, color: '#0F3D2E', marginBottom: 9, fontSize: '1rem', fontFamily: 'Inter, sans-serif' }}>{title}</h3>
                  <p style={{ color: '#6b8e7f', fontSize: 13, lineHeight: 1.75, marginBottom: 16 }}>{desc}</p>
                  <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: '#C8A964', fontSize: '.62rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none', fontFamily: 'Inter, sans-serif' }}>
                    Learn More <ArrowRight size={10} />
                  </Link>
                </motion.div>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ═══ WHY WITHCENT ═══ */}
      <section className="section-ink" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: 0, top: 0, width: '44%', height: '100%', opacity: .12 }}>
          <Img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900&q=60" alt="" fill />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,#081B15 52%,rgba(8,27,21,.55) 100%)', pointerEvents: 'none' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 580 }}>
            <SlideIn>
              <p className="eyebrow" style={{ marginBottom: 14 }}>Why Choose Us</p>
              <h2 className="fd" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 300, color: '#F5F1E6', lineHeight: 1.2, marginBottom: 16 }}>
                Ascent is never<br /><em style={{ color: '#C8A964' }}>a solo climb.</em>
              </h2>
              <p style={{ color: '#6b8e7f', fontSize: 14, lineHeight: 1.85, marginBottom: 36 }}>
                Our founders personally studied in the UK and know every challenge Nigerian students face abroad. That lived experience is the heartbeat of everything we do.
              </p>
            </SlideIn>
            <Stagger style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40 }}>
              {[
                'British Council trained & certified education advisors',
                'Over 10 years of proven placement track record',
                'One dedicated advisor, with you from first call to graduation',
                'In-country support network in the UK, Canada & USA',
                'Member of WEBA: World Educate Business Association',
                'Free initial consultation, no commitment required',
              ].map(p => (
                <Item key={p}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                    <CheckCircle size={15} color="#C8A964" style={{ flexShrink: 0 }} />
                    <span style={{ color: '#8aab9a', fontSize: 13, fontFamily: 'Inter, sans-serif' }}>{p}</span>
                  </div>
                </Item>
              ))}
            </Stagger>
            <FadeUp><Link href="/about" className="btn-primary">Meet Our Team <ArrowRight size={12} /></Link></FadeUp>
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section style={{ background: '#0F3D2E', padding: '4rem 0' }}>
        <div className="wrap">
          <Stagger className="col-stats">
            {[
              { n: '3,000+', l: 'Students Placed',     sub: 'And growing' },
              { n: '10+',  l: 'Years Experience',     sub: 'Since 2010' },
              { n: '3',    l: 'Continents',           sub: 'UK · CA · USA' },
              { n: '20+',  l: 'Partner Universities', sub: 'Expanding network' },
            ].map((s, i) => (
              <Item key={s.l}>
                <div style={{ textAlign: 'center', padding: '0 14px', borderRight: i < 3 ? '1px solid rgba(200,169,100,.12)' : 'none' }}>
                  <div className="fd" style={{ fontSize: 'clamp(2.4rem,4.5vw,3.6rem)', fontWeight: 300, color: '#C8A964', lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontSize: '.68rem', color: '#F5F1E6', fontWeight: 600, marginTop: 8, fontFamily: 'Inter, sans-serif' }}>{s.l}</div>
                  <div style={{ fontSize: '.56rem', color: '#4d7060', marginTop: 4, letterSpacing: '.08em', fontFamily: 'Inter, sans-serif' }}>{s.sub}</div>
                </div>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section-ivory2">
        <div className="wrap">
          <FadeUp style={{ textAlign: 'center', marginBottom: 48 }}>
            <p className="eyebrow" style={{ marginBottom: 12 }}>Student Stories</p>
            <h2 className="fd" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 300, color: '#0F3D2E' }}>
              Every student, <em style={{ color: '#C8A964' }}>a partner in your journey.</em>
            </h2>
            <div className="gold-line" style={{ margin: '13px auto 0', background: 'linear-gradient(90deg,#0F3D2E,#C8A964)' }} />
          </FadeUp>
          <Stagger className="col-3">
            {[
              { name: 'Mercy Erhabor',  school: 'University of Wolverhampton, UK',  text: 'Without any obstacles I gained admission through Withcent. They are always available, transparent, and genuinely care for their clients. I cannot recommend them enough.', img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=80' },
              { name: 'Tunde Adeleke',  school: 'Coventry University, UK',           text: 'From course selection all the way through to visa approval their support was exceptional at every step. Withcent turned my dream of studying in the UK into reality.', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80' },
              { name: 'Amaka Osei',     school: 'Algonquin College, Canada',         text: 'Withcent simplified everything — applications, visa, accommodation. I was overwhelmed until I found them. Truly outstanding, personalised service.', img: 'https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?w=100&q=80' },
            ].map((t, i) => (
              <Item key={i}>
                <div className="tcard" style={{ borderLeftColor: '#0F3D2E' }}>
                  <div style={{ display: 'flex', gap: 3, marginBottom: 12 }}>
                    {[...Array(5)].map((_, j) => <Star key={j} size={11} color="#C8A964" fill="#C8A964" />)}
                  </div>
                  <p style={{ color: '#4d7060', fontSize: 13, lineHeight: 1.82, marginBottom: 18 }}>&ldquo;{t.text}&rdquo;</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, borderTop: '1px solid #ede9da', paddingTop: 14 }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
                      <Img src={t.img} alt={t.name} fill />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#0F3D2E', fontSize: 13, fontFamily: 'Inter, sans-serif' }}>{t.name}</div>
                      <div style={{ color: '#C8A964', fontSize: 11, marginTop: 1, fontFamily: 'Inter, sans-serif' }}>{t.school}</div>
                    </div>
                  </div>
                </div>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="section-white">
        <div className="wrap">
          <FadeUp style={{ textAlign: 'center', marginBottom: 48 }}>
            <p className="eyebrow" style={{ marginBottom: 12 }}>How It Works</p>
            <h2 className="fd" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 300, color: '#0F3D2E' }}>
              Your journey in <em style={{ color: '#C8A964' }}>4 steps.</em>
            </h2>
          </FadeUp>
          <div className="col-steps">
            <div style={{ position: 'absolute', top: 34, left: '14%', right: '14%', height: 1, background: 'linear-gradient(90deg,transparent,rgba(15,61,46,.2),transparent)' }} className="hero-img-hide" />
            {[
              { n: '01', t: 'Free Consultation', d: 'Meet our advisors to assess your background, goals, and timeline.' },
              { n: '02', t: 'Course Matching',   d: 'We identify universities and programmes that align precisely with your profile.' },
              { n: '03', t: 'Application & Visa',d: 'We prepare applications and guide you through every step of the visa process.' },
              { n: '04', t: 'Arrival & Beyond',  d: 'Pre-departure briefing, pickup coordination, and continuous post-arrival support.' },
            ].map((p, i) => (
              <FadeUp key={p.n} delay={i * .1} style={{ textAlign: 'center' }}>
                <motion.div whileHover={{ scale: 1.05 }}
                  style={{ width: 66, height: 66, margin: '0 auto 18px', border: '1px solid rgba(15,61,46,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F5F1E6', position: 'relative', zIndex: 1 }}>
                  <span className="fd" style={{ color: '#0F3D2E', fontSize: '1.5rem', fontWeight: 400 }}>{p.n}</span>
                </motion.div>
                <h3 style={{ fontWeight: 600, color: '#0F3D2E', marginBottom: 7, fontSize: '.9rem', fontFamily: 'Inter, sans-serif' }}>{p.t}</h3>
                <p style={{ color: '#6b8e7f', fontSize: 12, lineHeight: 1.7, fontFamily: 'Inter, sans-serif' }}>{p.d}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ background: '#081B15', padding: '6rem 0', position: 'relative', overflow: 'hidden', minHeight: 360 }}>
        <div style={{ position: 'absolute', inset: 0, opacity: .12, height: '100%' }}>
          <Img src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1600&q=60" alt="" fill />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,27,21,.86)', pointerEvents: 'none' }} />
        {/* Chevron pattern overlay */}
        <div className="chevron-pattern" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: .6 }} />
        <div className="wrap" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'center' }}>
              <svg width="36" height="22" viewBox="0 0 36 22" fill="none">
                <polyline points="1,17 18,2 35,17" stroke="#C8A964" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="5,22 18,10 31,22" stroke="#C8A964" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity=".55"/>
              </svg>
            </div>
            <p className="eyebrow" style={{ marginBottom: 16 }}>Your Future Is Already Admitted</p>
            <h2 className="fd" style={{ fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 300, color: '#F5F1E6', lineHeight: 1.1, marginBottom: 16 }}>
              Where <em style={{ color: '#C8A964' }}>ambition</em><br />meets <em style={{ color: '#C8A964' }}>admission.</em>
            </h2>
            <p style={{ color: '#6b8e7f', maxWidth: 460, margin: '0 auto 40px', fontSize: 14, lineHeight: 1.85, fontFamily: 'Inter, sans-serif' }}>
              Book a free consultation today. Our advisors are ready to walk beside you, every step of the way.
            </p>
            <div className="btn-row" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary pulse"><Sparkles size={13} /> Book Free Consultation</Link>
              <Link href="/about" className="btn-ghost">Our Story <ArrowRight size={12} /></Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
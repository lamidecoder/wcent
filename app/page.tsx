'use client'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Globe, FileCheck, BookOpen, Home as HomeIcon, Plane, CheckCircle, Star, ArrowRight, ChevronDown, Award, Sparkles, Users, TrendingUp, MapPin, Play } from 'lucide-react'
import { FadeUp, FadeIn, SlideIn, Stagger, Item } from '@/components/Animate'
import Img from '@/components/Img'
import Preloader from '@/components/Preloader'

const SERVICES = [
  { Icon: GraduationCap, title: 'Education Counselling',   desc: 'Personalised guidance from British Council-trained advisors with 10+ years of experience.' },
  { Icon: Globe,          title: 'University Placement',    desc: 'We match you to the perfect institution across our network of 20+ accredited universities.' },
  { Icon: FileCheck,      title: 'Visa Application Guide',  desc: 'Step-by-step visa assistance — documents, timelines, financial proofs, and interview prep.' },
  { Icon: BookOpen,       title: 'Course Selection',        desc: 'Expert course recommendations matched to your grades, budget, and career goals.' },
  { Icon: HomeIcon,       title: 'Accommodation Advice',    desc: 'Trusted housing options near your campus — halls, private rentals, and homestay.' },
  { Icon: Plane,          title: 'Pre-Departure & Arrival', desc: 'Flight bookings, airport pickups, pre-departure orientation to ease the transition.' },
]

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY   = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const heroOp  = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <>
      <Preloader />
      {/* ═══ HERO ═══ */}
      <section ref={heroRef} className="dot-grid" style={{ minHeight:'100vh', display:'flex', alignItems:'center', position:'relative', overflow:'hidden', background:'#07101f' }}>
        <motion.div style={{ position:'absolute', inset:0, y:heroY, overflow:'hidden' }}>
          <Img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80" alt="" fill style={{ opacity:.18 }} priority />
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(160deg,rgba(7,16,31,.97) 0%,rgba(7,16,31,.85) 50%,rgba(12,24,40,.95) 100%)' }} />
        </motion.div>
        <div style={{ position:'absolute', top:'15%', right:'8%', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle,rgba(201,168,76,.07) 0%,transparent 65%)', filter:'blur(40px)', pointerEvents:'none' }} />

        <motion.div style={{ opacity:heroOp, position:'relative', zIndex:1, width:'100%' }}>
          <div className="wrap" style={{ paddingTop:140, paddingBottom:100 }}>
            <div className="hero-grid">

              {/* LEFT */}
              <div>
                <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:.6 }}
                  style={{ display:'inline-flex', alignItems:'center', gap:10, marginBottom:24 }}>
                  <span style={{ width:28, height:1, background:'#c9a84c', display:'inline-block' }} />
                  <span className="eyebrow">Contracted Education Advisor · Est. 2010</span>
                  <span style={{ width:28, height:1, background:'#c9a84c', display:'inline-block' }} />
                </motion.div>

                <motion.h1 className="fd" initial={{ opacity:0, y:36 }} animate={{ opacity:1, y:0 }} transition={{ duration:.8, delay:.08 }}
                  style={{ fontSize:'clamp(2.8rem,5.5vw,5.5rem)', fontWeight:300, lineHeight:1.07, color:'#fff', marginBottom:8 }}>
                  Your Gateway to
                </motion.h1>
                <motion.h1 className="fd gold-text" initial={{ opacity:0, y:36 }} animate={{ opacity:1, y:0 }} transition={{ duration:.8, delay:.16 }}
                  style={{ fontSize:'clamp(2.8rem,5.5vw,5.5rem)', fontWeight:300, lineHeight:1.07, fontStyle:'italic', marginBottom:8 }}>
                  World-Class
                </motion.h1>
                <motion.h1 className="fd" initial={{ opacity:0, y:36 }} animate={{ opacity:1, y:0 }} transition={{ duration:.8, delay:.24 }}
                  style={{ fontSize:'clamp(2.8rem,5.5vw,5.5rem)', fontWeight:300, lineHeight:1.07, color:'#fff', marginBottom:28 }}>
                  Education
                </motion.h1>

                <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:.7, delay:.3 }}
                  style={{ color:'#94a3b8', fontSize:'1rem', lineHeight:1.82, maxWidth:480, marginBottom:36 }}>
                  We guide ambitious Nigerian students into top universities across the UK, Canada, and USA — with personalised counsel, visa support, and lifelong guidance.
                </motion.p>

                <motion.div className="btn-row" initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:.7, delay:.38 }}
                  style={{ display:'flex', gap:14, flexWrap:'wrap', marginBottom:52 }}>
                  <Link href="/contact" className="btn-primary pulse-gold"><Sparkles size={14} /> Start Your Journey</Link>
                  <Link href="/services" className="btn-ghost">Our Services <ArrowRight size={13} /></Link>
                </motion.div>

                <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:.8, delay:.5 }}
                  style={{ borderTop:'1px solid rgba(255,255,255,.08)', paddingTop:28 }}>
                  <div className="col-stats" style={{ maxWidth:400 }}>
                    {[
                      { n:'500+', l:'Students Placed', icon:<Users size={13} color="#c9a84c"/> },
                      { n:'10+',  l:'Years Experience', icon:<TrendingUp size={13} color="#c9a84c"/> },
                      { n:'20+',  l:'Universities', icon:<GraduationCap size={13} color="#c9a84c"/> },
                    ].map((s,i)=>(
                      <div key={s.l} style={{ textAlign:'center', borderRight:i<2?'1px solid rgba(255,255,255,.08)':'none', padding:'0 12px' }}>
                        <div style={{ display:'flex', justifyContent:'center', marginBottom:5 }}>{s.icon}</div>
                        <div className="fd" style={{ fontSize:'2rem', fontWeight:300, color:'#c9a84c', lineHeight:1 }}>{s.n}</div>
                        <div style={{ fontSize:'.58rem', color:'#475569', letterSpacing:'.14em', textTransform:'uppercase', marginTop:5, fontFamily:'Space Grotesk,sans-serif' }}>{s.l}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* RIGHT — image collage, hidden on mobile */}
              <FadeIn delay={.35} className="hero-img-hide">
                <div className="float" style={{ position:'relative', height:520 }}>
                  <div style={{ position:'absolute', top:0, left:40, right:0, height:380, overflow:'hidden' }}>
                    <Img src="https://cdn-wlvacuk.terminalfour.net/media/img2.jpg" alt="University campus" fill priority />
                    <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom,transparent 50%,rgba(7,16,31,.9) 100%)' }} />
                  </div>
                  <div style={{ position:'absolute', bottom:60, left:0, width:160, height:130, overflow:'hidden', border:'2px solid rgba(201,168,76,.4)', zIndex:2 }}>
                    <Img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&q=80" alt="Counselling" fill />
                  </div>
                  <motion.div animate={{ y:[0,-8,0] }} transition={{ duration:3.5, repeat:Infinity, ease:'easeInOut' }}
                    style={{ position:'absolute', top:-14, right:-14, background:'linear-gradient(135deg,#c9a84c,#e2c06a)', padding:14, boxShadow:'0 16px 48px rgba(201,168,76,.45)', zIndex:3 }}>
                    <Award color="#07101f" size={24} />
                  </motion.div>
                  <motion.div animate={{ y:[0,-5,0] }} transition={{ duration:5, repeat:Infinity, ease:'easeInOut', delay:1 }}
                    style={{ position:'absolute', bottom:0, right:0, left:40, background:'rgba(7,16,31,.9)', backdropFilter:'blur(16px)', padding:'16px 20px', borderLeft:'3px solid #c9a84c', zIndex:4 }}>
                    <p className="fd" style={{ color:'#fff', fontStyle:'italic', fontSize:13, lineHeight:1.5 }}>&ldquo;Studying abroad is a life-changing journey&rdquo;</p>
                    <p style={{ color:'#c9a84c', fontSize:'.56rem', letterSpacing:'.22em', textTransform:'uppercase', marginTop:8, fontFamily:'Space Grotesk,sans-serif' }}>Withcent Nigeria</p>
                  </motion.div>
                  <div style={{ position:'absolute', top:300, left:-8, background:'#fff', padding:'10px 14px', display:'flex', alignItems:'center', gap:10, boxShadow:'0 12px 40px rgba(0,0,0,.25)', zIndex:3 }}>
                    <div style={{ width:34, height:34, background:'#07101f', display:'flex', alignItems:'center', justifyContent:'center' }}>
                      <GraduationCap color="#c9a84c" size={16} />
                    </div>
                    <div>
                      <div style={{ fontSize:'.75rem', fontWeight:700, color:'#07101f', lineHeight:1.2 }}>University of</div>
                      <div style={{ fontSize:'.6rem', color:'#c9a84c', fontWeight:800, letterSpacing:'.06em' }}>Wolverhampton Partner</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </motion.div>

        <motion.div animate={{ y:[0,8,0] }} transition={{ duration:1.8, repeat:Infinity }}
          style={{ position:'absolute', bottom:36, left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:6, zIndex:2 }}>
          <span style={{ fontSize:'.56rem', color:'#334155', letterSpacing:'.28em', textTransform:'uppercase', fontFamily:'Space Grotesk,sans-serif' }}>Scroll</span>
          <ChevronDown size={16} color="#334155" />
        </motion.div>
      </section>

      {/* ═══ PARTNER UNIS ═══ */}
      <section className="section-darker">
        <div className="wrap">
          <FadeUp style={{ textAlign:'center', marginBottom:48 }}>
            <p className="eyebrow" style={{ marginBottom:16 }}>Trusted Partner Institutions</p>
            <h2 className="fd" style={{ fontSize:'clamp(1.8rem,4vw,2.8rem)', fontWeight:300, color:'#fff', lineHeight:1.2 }}>
              Where Our Students <em style={{ color:'#c9a84c' }}>Succeed</em>
            </h2>
            <div className="gold-line" style={{ margin:'14px auto 0' }} />
          </FadeUp>

          <Stagger className="col-services">
            {[
              { name:'University of Wolverhampton', loc:'West Midlands, UK', badge:'Primary Partner', img:'https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80', rank:'#1 Rated', desc:'Our flagship UK partner — hundreds of Nigerians placed successfully.' },
              { name:'Coventry University',          loc:'Coventry, UK',       badge:'Partner',         img:'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=700&q=80', rank:'Top 50 UK', desc:'Award-winning modern university with strong industry links.' },
              { name:'University of Hertfordshire',  loc:'Hatfield, UK',       badge:'Partner',         img:'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=700&q=80', rank:'Business Hub', desc:'Renowned for business, media and life sciences.' },
              { name:'University of East London',    loc:'London, UK',         badge:'Partner',         img:'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=700&q=80', rank:'London', desc:'Located in the heart of Europe\'s greatest city.' },
              { name:'York St John University',      loc:'York, UK',           badge:'Partner',         img:'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=700&q=80', rank:'Est. 1841', desc:'Historic institution with excellent pastoral care.' },
              { name:'Algonquin College',            loc:'Ottawa, Canada',     badge:'Canada Partner',  img:'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=700&q=80', rank:'Canada', desc:'Premier Canadian college for tech, business and health.' },
            ].map((u,i)=>(
              <Item key={i}>
                <motion.div className="glass" style={{ overflow:'hidden' }} whileHover={{ y:-6 }}>
                  <div style={{ position:'relative', height:180, overflow:'hidden' }}>
                    <Img src={u.img} alt={u.name} fill />
                    <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(7,16,31,.85) 0%,transparent 55%)' }} />
                    <div style={{ position:'absolute', top:12, left:12 }}><span className="badge">{u.badge}</span></div>
                    <div style={{ position:'absolute', bottom:12, left:14, right:14 }}>
                      <h3 className="fd" style={{ color:'#fff', fontSize:'1.05rem', fontWeight:500, lineHeight:1.3 }}>{u.name}</h3>
                    </div>
                  </div>
                  <div style={{ padding:'14px 16px 18px' }}>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:7 }}>
                      <span style={{ fontSize:11, color:'#64748b', display:'flex', alignItems:'center', gap:4 }}><MapPin size={9} color="#c9a84c" />{u.loc}</span>
                      <span style={{ fontSize:10, color:'#c9a84c', fontWeight:700, fontFamily:'Space Grotesk,sans-serif' }}>{u.rank}</span>
                    </div>
                    <p style={{ color:'#64748b', fontSize:12, lineHeight:1.6, marginBottom:12 }}>{u.desc}</p>
                    <Link href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:4, color:'#c9a84c', fontSize:'.62rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', textDecoration:'none', fontFamily:'Space Grotesk,sans-serif' }}>
                      Apply Now <ArrowRight size={10} />
                    </Link>
                  </div>
                </motion.div>
              </Item>
            ))}
          </Stagger>

          <FadeUp style={{ textAlign:'center', marginTop:44 }}>
            <Link href="/universities" className="btn-ghost">View All Partners <ArrowRight size={13} /></Link>
          </FadeUp>
        </div>
      </section>

      {/* ═══ VIDEO / GALLERY SECTION ═══ */}
      <section className="section-dark" style={{ position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, opacity:.08 }}>
          <Img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1400&q=60" alt="" fill />
        </div>
        <div className="wrap" style={{ position:'relative', zIndex:1 }}>
          <div className="col-2-wide">
            <SlideIn>
              <p className="eyebrow" style={{ marginBottom:16 }}>Student Life Abroad</p>
              <h2 className="fd" style={{ fontSize:'clamp(1.8rem,4vw,3rem)', fontWeight:300, color:'#fff', lineHeight:1.18, marginBottom:20 }}>
                See What Life Looks Like<br /><em style={{ color:'#c9a84c' }}>After We Place You</em>
              </h2>
              <p style={{ color:'#64748b', fontSize:14, lineHeight:1.85, marginBottom:32 }}>
                Thousands of Nigerian students have made the leap. From Benin City to Birmingham — our alumni are thriving.
              </p>
              <div className="col-img-4">
                {[
                  { img:'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&q=75', cap:'Campus Life' },
                  { img:'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&q=75', cap:'Counselling' },
                  { img:'https://static.independent.co.uk/s3fs-public/thumbnails/image/2013/08/08/11/wolverhampton.jpg?quality=75&width=1250&crop=3%3A2%2Csmart&auto=webp', cap:'University' },
                  { img:'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&q=75', cap:'Graduation' },
                ].map((p,i)=>(
                  <motion.div key={i} whileHover={{ scale:1.03 }} style={{ position:'relative', height:100, overflow:'hidden', cursor:'pointer' }}>
                    <Img src={p.img} alt={p.cap} fill />
                    <div style={{ position:'absolute', inset:0, background:'rgba(7,16,31,.45)' }} />
                    <div style={{ position:'absolute', bottom:5, left:7, fontSize:9, color:'#e2e8f0', fontWeight:500, fontFamily:'Space Grotesk,sans-serif', letterSpacing:'.06em' }}>{p.cap}</div>
                  </motion.div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary"><Sparkles size={14} /> Start Your Application</Link>
            </SlideIn>

            <SlideIn from="right">
              <div>
                <div style={{ position:'relative', height:320, overflow:'hidden', background:'#040b16' }}>
                  <Img src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=900&q=70" alt="Study in UK" fill style={{ opacity:.65 }} />
                  <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom,rgba(7,16,31,.3),rgba(7,16,31,.6))' }} />
                  <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <a href="https://www.youtube.com/results?search_query=study+in+uk+nigerian+students" target="_blank" rel="noopener noreferrer">
                      <motion.div whileHover={{ scale:1.1 }} whileTap={{ scale:.95 }}
                        style={{ width:72, height:72, borderRadius:'50%', background:'rgba(201,168,76,.18)', border:'2px solid rgba(201,168,76,.6)', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', backdropFilter:'blur(8px)' }}>
                        <Play color="#c9a84c" size={26} fill="#c9a84c" style={{ marginLeft:4 }} />
                      </motion.div>
                    </a>
                  </div>
                  <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'14px 18px', background:'linear-gradient(transparent,rgba(7,16,31,.9))' }}>
                    <p className="fd" style={{ color:'#fff', fontSize:15, fontStyle:'italic' }}>Life as a Nigerian Student in the UK</p>
                    <p style={{ color:'#c9a84c', fontSize:'.58rem', letterSpacing:'.18em', textTransform:'uppercase', marginTop:4, fontFamily:'Space Grotesk,sans-serif' }}>Watch to learn more</p>
                  </div>
                </div>
                <div className="col-vid-3">
                  {[
                    { img:'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=300&q=70', label:'UK Students' },
                    { img:'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=300&q=70', label:'Campus' },
                    { img:'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=300&q=70', label:'London' },
                  ].map((v,i)=>(
                    <div key={i} style={{ position:'relative', height:80, overflow:'hidden', opacity:.8 }}>
                      <Img src={v.img} alt={v.label} fill />
                      <div style={{ position:'absolute', inset:0, background:'rgba(7,16,31,.4)' }} />
                      <div style={{ position:'absolute', bottom:5, left:7, fontSize:9, color:'#c9a84c', fontWeight:700, fontFamily:'Space Grotesk,sans-serif', letterSpacing:'.07em', textTransform:'uppercase' }}>{v.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="section-light">
        <div className="wrap">
          <FadeUp style={{ textAlign:'center', marginBottom:52 }}>
            <p className="eyebrow" style={{ marginBottom:14 }}>What We Offer</p>
            <h2 className="fd" style={{ fontSize:'clamp(1.8rem,4vw,3rem)', fontWeight:300, color:'#07101f', lineHeight:1.15 }}>
              End-to-End Study Abroad<br /><em style={{ color:'#c9a84c' }}>Support Services</em>
            </h2>
            <div className="gold-line" style={{ margin:'14px auto 0' }} />
          </FadeUp>
          <Stagger className="col-services">
            {SERVICES.map(({Icon,title,desc})=>(
              <Item key={title}>
                <motion.div className="card-light" style={{ padding:28 }} whileHover={{ y:-6 }}>
                  <div className="icon-sq" style={{ marginBottom:18 }}><Icon size={20} color="#c9a84c" /></div>
                  <h3 style={{ fontWeight:600, color:'#07101f', marginBottom:9, fontSize:'1rem' }}>{title}</h3>
                  <p style={{ color:'#64748b', fontSize:13, lineHeight:1.72, marginBottom:16 }}>{desc}</p>
                  <Link href="/services" style={{ display:'inline-flex', alignItems:'center', gap:4, color:'#c9a84c', fontSize:'.65rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', textDecoration:'none', fontFamily:'Space Grotesk,sans-serif' }}>
                    Learn More <ArrowRight size={10} />
                  </Link>
                </motion.div>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ═══ WHY WITHCENT ═══ */}
      <section className="section-dark" style={{ position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', right:0, top:0, width:'45%', height:'100%', opacity:.14 }}>
          <Img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900&q=60" alt="" fill />
        </div>
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(90deg,#07101f 52%,rgba(7,16,31,.5) 100%)', pointerEvents:'none' }} />
        <div className="wrap" style={{ position:'relative', zIndex:1 }}>
          <div style={{ maxWidth:580 }}>
            <SlideIn>
              <p className="eyebrow" style={{ marginBottom:16 }}>Why Choose Us</p>
              <h2 className="fd" style={{ fontSize:'clamp(1.8rem,4vw,3rem)', fontWeight:300, color:'#fff', lineHeight:1.18, marginBottom:18 }}>
                We&apos;ve Walked the Path<br /><em style={{ color:'#c9a84c' }}>So You Don&apos;t Have To</em>
              </h2>
              <p style={{ color:'#64748b', fontSize:14, lineHeight:1.85, marginBottom:36 }}>
                Our founders personally studied in the United Kingdom and experienced every challenge a Nigerian student faces abroad.
              </p>
            </SlideIn>
            <Stagger style={{ display:'flex', flexDirection:'column', gap:13, marginBottom:40 }}>
              {['British Council trained & certified education advisors','Over 10 years of proven placement track record','One dedicated advisor with you from start to finish','In-country support in the UK, Canada & USA','Member of WEBA — World Educate Business Association','Free initial consultation — no commitment required'].map(p=>(
                <Item key={p}>
                  <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                    <CheckCircle size={16} color="#c9a84c" style={{ flexShrink:0 }} />
                    <span style={{ color:'#94a3b8', fontSize:13 }}>{p}</span>
                  </div>
                </Item>
              ))}
            </Stagger>
            <FadeUp><Link href="/about" className="btn-primary">Meet Our Team <ArrowRight size={13} /></Link></FadeUp>
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section style={{ background:'#0c1828', padding:'4rem 0' }}>
        <div className="wrap">
          <Stagger className="col-stats">
            {[
              { n:'500+', l:'Students Placed',    sub:'And counting' },
              { n:'10+',  l:'Years Experience',   sub:'Since 2010' },
              { n:'3',    l:'Continents',          sub:'UK · CA · USA' },
              { n:'20+',  l:'Partner Universities', sub:'Growing network' },
            ].map((s,i)=>(
              <Item key={s.l}>
                <div style={{ textAlign:'center', padding:'0 16px', borderRight:i<3?'1px solid rgba(255,255,255,.06)':'none' }}>
                  <div className="fd" style={{ fontSize:'clamp(2.5rem,5vw,3.8rem)', fontWeight:300, color:'#c9a84c', lineHeight:1 }}>{s.n}</div>
                  <div style={{ fontSize:'.7rem', color:'#e2e8f0', fontWeight:600, marginTop:8, fontFamily:'Space Grotesk,sans-serif' }}>{s.l}</div>
                  <div style={{ fontSize:'.58rem', color:'#334155', marginTop:4, letterSpacing:'.08em', fontFamily:'Space Grotesk,sans-serif' }}>{s.sub}</div>
                </div>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section-light">
        <div className="wrap">
          <FadeUp style={{ textAlign:'center', marginBottom:52 }}>
            <p className="eyebrow" style={{ marginBottom:14 }}>Student Stories</p>
            <h2 className="fd" style={{ fontSize:'clamp(1.8rem,4vw,3rem)', fontWeight:300, color:'#07101f' }}>
              Lives <em style={{ color:'#c9a84c' }}>Transformed</em>
            </h2>
            <div className="gold-line" style={{ margin:'14px auto 0' }} />
          </FadeUp>
          <Stagger className="col-3">
            {[
              { name:'Mercy Erhabor',  school:'University of Wolverhampton, UK',  text:'Without any obstacles I successfully gained admission to the University of Wolverhampton through Withcent. They are always available, transparent, and genuinely care for their clients.', img:'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=80' },
              { name:'Tunde Adeleke',  school:'Coventry University, UK',           text:'From course selection all the way through to visa approval their support was exceptional at every step. Withcent turned my dream of studying in the UK into reality.',                  img:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80' },
              { name:'Amaka Osei',     school:'Algonquin College, Canada',         text:'Withcent simplified everything — applications, visa, accommodation. I was completely overwhelmed until I found them. Truly outstanding personalised service.',                         img:'https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?w=100&q=80' },
            ].map((t,i)=>(
              <Item key={i}>
                <div className="tcard">
                  <div style={{ display:'flex', gap:3, marginBottom:14 }}>
                    {[...Array(5)].map((_,j)=><Star key={j} size={12} color="#c9a84c" fill="#c9a84c" />)}
                  </div>
                  <p style={{ color:'#475569', fontSize:13, lineHeight:1.82, marginBottom:18 }}>&ldquo;{t.text}&rdquo;</p>
                  <div style={{ display:'flex', alignItems:'center', gap:11, borderTop:'1px solid #f1f5f9', paddingTop:14 }}>
                    <div style={{ width:38, height:38, borderRadius:'50%', overflow:'hidden', flexShrink:0, position:'relative' }}>
                      <Img src={t.img} alt={t.name} fill />
                    </div>
                    <div>
                      <div style={{ fontWeight:700, color:'#07101f', fontSize:13 }}>{t.name}</div>
                      <div style={{ color:'#c9a84c', fontSize:11, marginTop:1, fontFamily:'Space Grotesk,sans-serif' }}>{t.school}</div>
                    </div>
                  </div>
                </div>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="section-mid">
        <div className="wrap">
          <FadeUp style={{ textAlign:'center', marginBottom:52 }}>
            <p className="eyebrow" style={{ marginBottom:14 }}>How It Works</p>
            <h2 className="fd" style={{ fontSize:'clamp(1.8rem,4vw,3rem)', fontWeight:300, color:'#fff' }}>
              Your Journey in <em style={{ color:'#c9a84c' }}>4 Simple Steps</em>
            </h2>
          </FadeUp>
          <div className="col-steps">
            <div style={{ position:'absolute', top:36, left:'14%', right:'14%', height:1, background:'linear-gradient(90deg,transparent,rgba(201,168,76,.3),transparent)' }} className="hero-img-hide" />
            {[
              { n:'01', t:'Free Consultation',  d:'Meet our advisors to assess your background and goals.' },
              { n:'02', t:'Course Matching',    d:'We identify universities and programmes for your profile.' },
              { n:'03', t:'Application & Visa', d:'We manage applications and guide you through the visa process.' },
              { n:'04', t:'Arrival & Beyond',   d:'Pre-departure briefing, pickup, and post-arrival support.' },
            ].map((p,i)=>(
              <FadeUp key={p.n} delay={i*.1} style={{ textAlign:'center' }}>
                <motion.div whileHover={{ scale:1.05 }}
                  style={{ width:68, height:68, margin:'0 auto 18px', border:'1px solid rgba(201,168,76,.3)', display:'flex', alignItems:'center', justifyContent:'center', background:'rgba(201,168,76,.04)', position:'relative', zIndex:1 }}>
                  <span className="fd" style={{ color:'#c9a84c', fontSize:'1.5rem', fontWeight:300 }}>{p.n}</span>
                </motion.div>
                <h3 style={{ fontWeight:600, color:'#e2e8f0', marginBottom:7, fontSize:'.9rem', fontFamily:'Space Grotesk,sans-serif' }}>{p.t}</h3>
                <p style={{ color:'#475569', fontSize:12, lineHeight:1.7 }}>{p.d}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ background:'#07101f', padding:'6rem 0', position:'relative', overflow:'hidden', minHeight:360 }}>
        <div style={{ position:'absolute', inset:0, opacity:.13, height:'100%' }}>
          <Img src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1600&q=60" alt="" fill />
        </div>
        <div style={{ position:'absolute', inset:0, background:'rgba(7,16,31,.84)', pointerEvents:'none' }} />
        <div className="wrap" style={{ textAlign:'center', position:'relative', zIndex:1 }}>
          <FadeUp>
            <p className="eyebrow" style={{ marginBottom:18 }}>Ready to Begin?</p>
            <h2 className="fd" style={{ fontSize:'clamp(2.2rem,5vw,4.2rem)', fontWeight:300, color:'#fff', lineHeight:1.1, marginBottom:18 }}>
              Your International Education<br /><em style={{ color:'#c9a84c' }}>Starts With One Step</em>
            </h2>
            <p style={{ color:'#64748b', maxWidth:480, margin:'0 auto 40px', fontSize:14, lineHeight:1.85 }}>
              Book a free consultation today. Our advisors are ready to map out your path to a world-class institution.
            </p>
            <div className="btn-row" style={{ display:'flex', justifyContent:'center', gap:14, flexWrap:'wrap' }}>
              <Link href="/contact" className="btn-primary pulse-gold"><Sparkles size={14} /> Book Free Consultation</Link>
              <Link href="/about" className="btn-ghost">Learn About Us <ArrowRight size={13} /></Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
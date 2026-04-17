'use client'
import Link from 'next/link'
import { Clock, ArrowRight, BookOpen } from 'lucide-react'
import { FadeUp, Stagger, Item } from '@/components/Animate'
import Img from '@/components/Img'

const POSTS = [
  { cat:'Visa Guide',   title:'UK Student Visa 2025: Everything Nigerian Students Need to Know',     excerpt:'A complete breakdown of the application process — documents, timelines, and common mistakes to avoid.',                      img:'https://images.unsplash.com/photo-1569389397653-c04fe624e663?w=800&q=70', read:'8 min', date:'March 2025' },
  { cat:'Study Abroad', title:'Choosing Between the UK and Canada: A Nigerian Student\'s Guide',     excerpt:'We compare costs, lifestyle, post-study work options, and more to help you decide which fits your goals.',                   img:'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&q=70', read:'6 min', date:'Feb 2025' },
  { cat:'Admissions',   title:'How to Write a Winning Personal Statement for UK Universities',       excerpt:'Practical tips from our counsellors on crafting a compelling statement that increases your chances.',                          img:'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=800&q=70', read:'5 min', date:'Jan 2025' },
  { cat:'Finance',      title:'Scholarships for Nigerian Students Studying in the UK in 2025',      excerpt:'From Chevening to Commonwealth — a curated list of funding opportunities for Nigerian applicants.',                          img:'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=70', read:'7 min', date:'Dec 2024' },
  { cat:'Student Life', title:'Your First Month in the UK as a Nigerian Student',                   excerpt:'Culture shock, banking, NHS registration — our alumni share the realities of life in Britain.',                             img:'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=70', read:'6 min', date:'Nov 2024' },
  { cat:'Visa Guide',   title:'Canada Student Permit Guide for Nigerians (2025)',                   excerpt:'Step-by-step instructions on how to apply for a Canadian study permit, including biometrics and IRCC portals.',             img:'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&q=70', read:'9 min', date:'Oct 2024' },
]

export default function BlogPage() {
  return (<>
    <section className="page-hero"><div className="wrap" style={{ position:'relative', zIndex:1, textAlign:'center' }}>
      <FadeUp>
        <p className="eyebrow" style={{ marginBottom:14 }}>Knowledge Hub</p>
        <h1 className="fd" style={{ fontSize:'clamp(2.5rem,5vw,4.5rem)', fontWeight:300, color:'#fff', lineHeight:1.1 }}>Resources & <em style={{ color:'#c9a84c' }}>Insights</em></h1>
      </FadeUp>
    </div></section>

    <section style={{ background:'#040b16', padding:'2rem 0' }}><div className="wrap">
      <div className="col-3">
        {[
          { t:'UK Application Checklist', d:'Download our complete checklist for UK university applications.' },
          { t:'IELTS Preparation Guide',  d:'Everything you need to know to pass IELTS for admission.' },
          { t:'Free Monthly Webinars',    d:'Join our live sessions with education advisors. Register now.' },
        ].map((r,i)=>(
          <div key={i} className="glass" style={{ padding:'13px 16px', display:'flex', gap:11, cursor:'pointer' }}>
            <BookOpen size={15} color="#c9a84c" style={{ flexShrink:0, marginTop:2 }} />
            <div>
              <p style={{ color:'#fff', fontSize:12, fontWeight:600, marginBottom:2, fontFamily:'Space Grotesk,sans-serif' }}>{r.t}</p>
              <p style={{ color:'#475569', fontSize:11 }}>{r.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div></section>

    <section className="section-darker"><div className="wrap">
      <FadeUp style={{ marginBottom:36 }}>
        <p className="eyebrow" style={{ marginBottom:10 }}>Latest Articles</p>
        <h2 className="fd" style={{ fontSize:'clamp(1.8rem,3vw,2.5rem)', fontWeight:300, color:'#fff' }}>Expert Guides & Advice</h2>
      </FadeUp>

      {/* Featured */}
      <div className="col-blog-featured">
        <FadeUp>
          <div className="glass" style={{ overflow:'hidden' }}>
            <div style={{ position:'relative', height:260, overflow:'hidden' }}>
              <Img src={POSTS[0].img} alt={POSTS[0].title} fill />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(7,16,31,.85) 0%,transparent 50%)' }} />
              <div style={{ position:'absolute', top:12, left:12 }}><span className="badge">{POSTS[0].cat}</span></div>
              <div style={{ position:'absolute', bottom:14, left:14, right:14 }}>
                <h3 className="fd" style={{ color:'#fff', fontSize:'1.2rem', fontWeight:500, lineHeight:1.3 }}>{POSTS[0].title}</h3>
              </div>
            </div>
            <div style={{ padding:20 }}>
              <p style={{ color:'#64748b', fontSize:12, lineHeight:1.72, marginBottom:12 }}>{POSTS[0].excerpt}</p>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <span style={{ fontSize:11, color:'#475569', display:'flex', alignItems:'center', gap:4 }}><Clock size={10}/>{POSTS[0].read} · {POSTS[0].date}</span>
                <Link href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:4, color:'#c9a84c', fontSize:'.62rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', textDecoration:'none', fontFamily:'Space Grotesk,sans-serif' }}>Read <ArrowRight size={10}/></Link>
              </div>
            </div>
          </div>
        </FadeUp>

        <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
          {POSTS.slice(1,3).map((p,i)=>(
            <FadeUp key={i} delay={i*.08}>
              <div className="glass" style={{ display:'flex', overflow:'hidden', minHeight:140 }}>
                <div style={{ position:'relative', width:120, flexShrink:0 }}><Img src={p.img} alt={p.title} fill /></div>
                <div style={{ padding:14, display:'flex', flexDirection:'column', justifyContent:'space-between', flex:1 }}>
                  <div>
                    <p className="eyebrow" style={{ fontSize:'.5rem', marginBottom:3 }}>{p.cat}</p>
                    <h3 style={{ fontWeight:600, color:'#e2e8f0', fontSize:12, lineHeight:1.45, marginBottom:5 }}>{p.title}</h3>
                    <p style={{ color:'#64748b', fontSize:11, lineHeight:1.55 }} className="clamp2">{p.excerpt}</p>
                  </div>
                  <Link href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:3, color:'#c9a84c', fontSize:'.58rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', textDecoration:'none', fontFamily:'Space Grotesk,sans-serif', marginTop:8 }}>Read <ArrowRight size={9}/></Link>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      <Stagger className="col-3" style={{ marginTop:0 }}>
        {POSTS.slice(3).map(p=>(
          <Item key={p.title}>
            <div className="glass" style={{ overflow:'hidden' }}>
              <div style={{ position:'relative', height:150, overflow:'hidden' }}>
                <Img src={p.img} alt={p.title} fill />
                <div style={{ position:'absolute', top:10, left:10 }}><span className="badge">{p.cat}</span></div>
              </div>
              <div style={{ padding:16 }}>
                <h3 style={{ fontWeight:600, color:'#e2e8f0', fontSize:12, lineHeight:1.45, marginBottom:7 }}>{p.title}</h3>
                <p style={{ color:'#64748b', fontSize:11, lineHeight:1.6, marginBottom:11 }} className="clamp2">{p.excerpt}</p>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  <span style={{ fontSize:10, color:'#475569', display:'flex', alignItems:'center', gap:3 }}><Clock size={9}/>{p.read}</span>
                  <Link href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:3, color:'#c9a84c', fontSize:'.58rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', textDecoration:'none', fontFamily:'Space Grotesk,sans-serif' }}>Read <ArrowRight size={9}/></Link>
                </div>
              </div>
            </div>
          </Item>
        ))}
      </Stagger>
    </div></section>

    <section className="section-dark" style={{ textAlign:'center' }}><div className="wrap" style={{ maxWidth:520 }}>
      <FadeUp>
        <p className="eyebrow" style={{ marginBottom:14 }}>Still Have Questions?</p>
        <h2 className="fd" style={{ fontSize:'clamp(1.8rem,3vw,2.8rem)', fontWeight:300, color:'#fff', marginBottom:10 }}>Speak to an <em style={{ color:'#c9a84c' }}>Expert Advisor</em></h2>
        <p style={{ color:'#475569', fontSize:13, lineHeight:1.8, marginBottom:24 }}>Nothing beats a one-on-one conversation. Book your free consultation today.</p>
        <Link href="/contact" className="btn-primary">Book Free Consultation</Link>
      </FadeUp>
    </div></section>
  </>)
}
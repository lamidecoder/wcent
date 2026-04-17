'use client'
import Link from 'next/link'
import { Clock, ArrowRight, BookOpen } from 'lucide-react'
import { FadeUp, Stagger, Item } from '@/components/Animate'
import Img from '@/components/Img'

const POSTS = [
  { cat:'Visa Guide',   title:'UK Student Visa 2025: Everything Nigerian Students Need to Know',   excerpt:'A complete breakdown of the application process — documents, timelines, and common mistakes to avoid.',              img:'https://images.unsplash.com/photo-1569389397653-c04fe624e663?w=800&q=70', read:'8 min', date:'March 2025' },
  { cat:'Study Abroad', title:'Choosing Between the UK and Canada: A Nigerian Student\'s Guide',   excerpt:'We compare costs, lifestyle, post-study work options, and more to help you decide which country fits your goals.', img:'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&q=70', read:'6 min', date:'Feb 2025' },
  { cat:'Admissions',   title:'How to Write a Winning Personal Statement for UK Universities',     excerpt:'Practical tips from our counsellors on crafting a compelling statement that increases your chances.',               img:'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=800&q=70', read:'5 min', date:'Jan 2025' },
  { cat:'Finance',      title:'Scholarships for Nigerian Students Studying in the UK in 2025',    excerpt:'From Chevening to Commonwealth — a curated list of funding opportunities for Nigerian applicants.',               img:'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=70', read:'7 min', date:'Dec 2024' },
  { cat:'Student Life', title:'Your First Month in the UK as a Nigerian Student',                 excerpt:'Culture shock, banking, NHS registration — our alumni share the realities of life in Britain.',                  img:'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=70', read:'6 min', date:'Nov 2024' },
  { cat:'Visa Guide',   title:'Canada Student Permit Guide for Nigerians (2025)',                 excerpt:'Step-by-step instructions on how to apply for a Canadian study permit, including biometrics and IRCC portals.',   img:'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&q=70', read:'9 min', date:'Oct 2024' },
]

function PostCard({ p }: { p: typeof POSTS[0] }) {
  return (
    <div className="hover-card" style={{ background:'white', border:'1px solid rgba(15,61,46,.1)', overflow:'hidden' }}>
      <div style={{ position:'relative', height:155, overflow:'hidden' }}>
        <Img src={p.img} alt={p.title} fill />
        <div style={{ position:'absolute', top:10, left:10 }}><span className="tag-pill">{p.cat}</span></div>
      </div>
      <div style={{ padding:'16px 16px 18px' }}>
        <h3 style={{ fontWeight:600, color:'#0F3D2E', fontSize:13, lineHeight:1.5, marginBottom:8, fontFamily:'Inter,sans-serif' }}>{p.title}</h3>
        <p style={{ color:'#4d6b5a', fontSize:12, lineHeight:1.7, marginBottom:14, fontFamily:'Inter,sans-serif' }} className="clamp2">{p.excerpt}</p>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <span style={{ fontSize:11, color:'#8aab9a', display:'flex', alignItems:'center', gap:4, fontFamily:'Inter,sans-serif' }}><Clock size={10}/>{p.read} · {p.date}</span>
          <Link href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:3, color:'#0F3D2E', fontSize:'.62rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', textDecoration:'none', fontFamily:'Inter,sans-serif' }}>Read <ArrowRight size={10}/></Link>
        </div>
      </div>
    </div>
  )
}

export default function BlogPage() {
  return (<>
    <section className="page-hero">
      <div className="wrap" style={{ position:'relative', zIndex:1, textAlign:'center' }}>
        <FadeUp>
          <p className="eyebrow" style={{ marginBottom:14 }}>Knowledge Hub</p>
          <h1 className="fd" style={{ fontSize:'clamp(2.2rem,5vw,4.2rem)', fontWeight:300, color:'#F5F1E6', lineHeight:1.1 }}>
            Resources & <em style={{ color:'#C8A964' }}>Insights</em>
          </h1>
        </FadeUp>
      </div>
    </section>

    {/* Resource strip */}
    <section className="pad-section-sm bg-forest">
      <div className="wrap">
        <div className="col-3">
          {[
            { t:'UK Application Checklist', d:'Download our complete checklist for UK university applications.' },
            { t:'IELTS Preparation Guide',  d:'Everything you need to know to pass IELTS for university admission.' },
            { t:'Free Monthly Webinars',    d:'Join our live sessions with education advisors. Register now.' },
          ].map((r,i)=>(
            <div key={i} className="hover-card-dark" style={{ background:'rgba(245,241,230,.04)', border:'1px solid rgba(200,169,100,.12)', padding:'14px 16px', display:'flex', gap:11, cursor:'pointer' }}>
              <BookOpen size={15} color="#C8A964" style={{ flexShrink:0, marginTop:2 }} />
              <div>
                <p style={{ color:'#F5F1E6', fontSize:12.5, fontWeight:600, marginBottom:3, fontFamily:'Inter,sans-serif' }}>{r.t}</p>
                <p style={{ color:'#6b8e7f', fontSize:11.5, fontFamily:'Inter,sans-serif' }}>{r.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Articles */}
    <section className="pad-section bg-ivory">
      <div className="wrap">
        <FadeUp style={{ marginBottom:32 }}>
          <p className="eyebrow" style={{ marginBottom:10 }}>Latest Articles</p>
          <h2 className="fd" style={{ fontSize:'clamp(1.7rem,3vw,2.5rem)', fontWeight:300, color:'#0F3D2E' }}>Expert Guides & Advice</h2>
        </FadeUp>

        {/* Featured row — uses col-blog-featured which collapses on mobile */}
        <div className="col-blog-featured">
          {/* Big card */}
          <FadeUp>
            <div className="hover-card" style={{ background:'white', border:'1px solid rgba(15,61,46,.1)', overflow:'hidden' }}>
              <div style={{ position:'relative', height:250, overflow:'hidden' }}>
                <Img src={POSTS[0].img} alt={POSTS[0].title} fill />
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(8,27,21,.85) 0%,transparent 50%)' }} />
                <div style={{ position:'absolute', top:13, left:13 }}><span className="tag-pill">{POSTS[0].cat}</span></div>
                <div style={{ position:'absolute', bottom:15, left:15, right:15 }}>
                  <h3 className="fd" style={{ color:'#F5F1E6', fontSize:'1.2rem', fontWeight:500, lineHeight:1.3 }}>{POSTS[0].title}</h3>
                </div>
              </div>
              <div style={{ padding:'18px 18px 20px' }}>
                <p style={{ color:'#4d6b5a', fontSize:13, lineHeight:1.75, marginBottom:14, fontFamily:'Inter,sans-serif' }}>{POSTS[0].excerpt}</p>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  <span style={{ fontSize:11.5, color:'#8aab9a', display:'flex', alignItems:'center', gap:4, fontFamily:'Inter,sans-serif' }}><Clock size={10}/>{POSTS[0].read} · {POSTS[0].date}</span>
                  <Link href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:4, color:'#0F3D2E', fontSize:'.65rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', textDecoration:'none', fontFamily:'Inter,sans-serif' }}>Read <ArrowRight size={10}/></Link>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Two stacked */}
          <div style={{ display:'flex', flexDirection:'column', gap:18 }}>
            {POSTS.slice(1,3).map((p,i)=>(
              <FadeUp key={i} delay={i*.08}>
                <div className="hover-card" style={{ background:'white', border:'1px solid rgba(15,61,46,.1)', display:'flex', overflow:'hidden', minHeight:130 }}>
                  <div style={{ position:'relative', width:110, flexShrink:0 }}><Img src={p.img} alt={p.title} fill /></div>
                  <div style={{ padding:'13px 14px', display:'flex', flexDirection:'column', justifyContent:'space-between', flex:1 }}>
                    <div>
                      <p style={{ fontSize:'.52rem', fontWeight:700, letterSpacing:'.22em', textTransform:'uppercase', color:'#C8A964', fontFamily:'Inter,sans-serif', marginBottom:5 }}>{p.cat}</p>
                      <h3 style={{ fontWeight:600, color:'#0F3D2E', fontSize:12, lineHeight:1.45, marginBottom:5, fontFamily:'Inter,sans-serif' }}>{p.title}</h3>
                      <p style={{ color:'#4d6b5a', fontSize:11, lineHeight:1.6, fontFamily:'Inter,sans-serif' }} className="clamp2">{p.excerpt}</p>
                    </div>
                    <Link href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:3, color:'#0F3D2E', fontSize:'.6rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', textDecoration:'none', fontFamily:'Inter,sans-serif', marginTop:8 }}>Read <ArrowRight size={9}/></Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* Bottom grid */}
        <Stagger className="col-3" style={{ marginTop:24 }}>
          {POSTS.slice(3).map(p=><Item key={p.title}><PostCard p={p} /></Item>)}
        </Stagger>
      </div>
    </section>

    {/* CTA */}
    <section className="pad-section bg-forest" style={{ textAlign:'center' }}>
      <div className="wrap" style={{ maxWidth:520 }}>
        <FadeUp>
          <p className="eyebrow" style={{ marginBottom:14 }}>Still Have Questions?</p>
          <h2 className="fd" style={{ fontSize:'clamp(1.7rem,3vw,2.8rem)', fontWeight:300, color:'#F5F1E6', marginBottom:12, lineHeight:1.2 }}>
            Speak to an <em style={{ color:'#C8A964' }}>Expert Advisor</em>
          </h2>
          <p style={{ color:'#6b8e7f', fontSize:14, lineHeight:1.8, marginBottom:28, fontFamily:'Inter,sans-serif' }}>Nothing beats a one-on-one conversation. Book your free consultation today.</p>
          <Link href="/contact" className="btn-primary">Book Free Consultation</Link>
        </FadeUp>
      </div>
    </section>
  </>)
}
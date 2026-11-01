'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Activity, LayoutDashboard, Search, ScanLine, FilePenLine, Share2, Users, Megaphone, ChartNoAxesCombined, Settings, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
const links = [ ['/', 'Dashboard', LayoutDashboard], ['/keywords', 'Keywords', Search], ['/seo-audit', 'SEO Audit', ScanLine], ['/content-studio', 'Content Studio', FilePenLine], ['/social-media', 'Social Media', Share2], ['/leads', 'Leads', Users], ['/advertising', 'Advertising', Megaphone], ['/analytics', 'Analytics', ChartNoAxesCombined], ['/settings', 'Settings', Settings] ] as const;
export function Shell({ children }: { children: React.ReactNode }) {
 const path = usePathname(); const [open, setOpen] = useState(false);
 return <div className="min-h-screen"><a className="skip-link" href="#main">Skip to content</a>
 <div className="mobile-bar"><Link href="/" className="font-semibold">Reverse Age <span className="text-teal-700">/ Growth</span></Link><button aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="sidebar" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button></div>
 <aside id="sidebar" className={`sidebar ${open ? 'is-open' : ''}`}>
 <Link href="/" className="brand"><span className="brand-icon"><Activity size={24}/></span><span>reverse age<span className="brand-sub">AI GROWTH ENGINE</span></span></Link>
 <div className="workspace-label">WORKSPACE</div><nav aria-label="Main navigation">{links.map(([href,label,Icon])=><Link key={href} href={href} onClick={()=>setOpen(false)} aria-current={path===href?'page':undefined} className={`nav-item ${path===href?'active':''}`}><Icon size={19}/><span>{label}</span>{href==='/'&&<span className="active-dot"/>}</Link>)}</nav>
 <div className="sidebar-bottom"><div className="guardrail"><ShieldCheck size={20}/><strong>Human-led. AI-assisted.</strong><p>You stay in control of every piece of content.</p><Link href="/settings">Explore workspace <ArrowUpRight size={14}/></Link></div><div className="profile"><span className="avatar">RA</span><div><strong>Reverse Age Coach</strong><span>Demo workspace</span></div><span className="profile-dot"/></div></div>
 </aside><div className="main-area"><header className="topbar"><div className="flex items-center gap-2"><span className="text-slate-500">Workspace</span><span className="text-slate-300">/</span><span>{links.find(([href])=>href===path)?.[1]??'Page'}</span></div><span className="demo-pill"><span/> Demonstration mode</span></header><main id="main" tabIndex={-1}>{children}</main><footer>Built for thoughtful growth.<span>Reverse Age Coach · AI Growth Engine</span></footer></div></div>;
}

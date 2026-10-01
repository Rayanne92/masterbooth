'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/images/master-booth-logo.png';
import { Menu, X, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { nav, whatsappUrl } from '@/lib/site';
export function Logo(){return <Link href="/#accueil" className="logo" aria-label="Master Booth, accueil"><Image className="brand-logo" src={logo} alt="Master Booth" sizes="(max-width: 800px) 190px, 220px" priority /></Link>}
export default function Navbar(){ const [open,setOpen]=useState(false); return <header className="header"><div className="container nav-row"><Logo/><nav aria-label="Navigation principale" className="desktop-nav">{nav.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav><a href={whatsappUrl} target="_blank" rel="noreferrer" className="button small nav-cta">Nous contacter <MessageCircle size={16}/></a><button className="menu-toggle" aria-label={open?'Fermer le menu':'Ouvrir le menu'} aria-expanded={open} aria-controls="mobile-nav" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>{open&&<nav id="mobile-nav" className="mobile-nav" aria-label="Navigation mobile" onKeyDown={e=>{if(e.key==='Escape')setOpen(false)}}>{nav.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}<a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={()=>setOpen(false)}>Nous contacter sur WhatsApp</a></nav>}</header>}

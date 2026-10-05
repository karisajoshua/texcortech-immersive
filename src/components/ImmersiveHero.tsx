"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const source=`import { createSystem } from "@/core/system";

const platform = createSystem({
  product: "digital-platform",
  runtime: "edge",
  database: "postgres",
  intelligence: true,
  security: "zero-trust"
});

await platform.connect();
await platform.deploy();`;

const files=["app/","  dashboard.tsx","  api/route.ts","core/","  system.ts"];

export default function ImmersiveHero(){
 const root=useRef<HTMLElement>(null); const [progress,setProgress]=useState(0);
 useEffect(()=>{gsap.registerPlugin(ScrollTrigger);const st=ScrollTrigger.create({trigger:root.current,start:"top top",end:"bottom bottom",scrub:true,onUpdate:s=>setProgress(s.progress)});return()=>st.kill()},[]);
 const typed=source.slice(0,Math.floor(source.length*Math.min(progress*1.55,1)));
 const stage=progress<.22?0:progress<.48?1:progress<.72?2:3;
 return <section ref={root} className="ide-hero">
  <div className="ide-stage">
   <div className="hero-copy ide-copy"><p className="eyebrow">TEXCORTECH / DIGITAL ENGINEERING</p><h1>Systems that<br/><span>move business.</span></h1><p className="lede">We engineer connected digital products—from software to infrastructure, intelligence and security.</p><a className="hero-cta" href="#capabilities">See how we build <b>↘</b></a><div className="scroll-cue">SCROLL TO BUILD <i/></div></div>
   <div className={"ide-window stage-"+stage}>
    <div className="ide-titlebar"><div><i/><i/><i/></div><span>texcortech-system — workspace</span><b>BUILD / 01</b></div>
    <div className="ide-body">
     <aside><strong>EXPLORER</strong><small>TEXCORTECH-SYSTEM</small>{files.map((x,i)=><span key={i} className={i===4?"active":""}>{x}</span>)}</aside>
     <div className="editor"><div className="tabs"><span>system.ts <b>×</b></span></div><div className="code"><div className="lines">{Array.from({length:14},(_,i)=><i key={i}>{i+1}</i>)}</div><pre>{typed}<em className="cursor"/></pre></div>
      <div className={"terminal "+(stage>=2?"show":"")}><div><b>TERMINAL</b><span>PROBLEMS&nbsp;&nbsp; OUTPUT</span></div><p>$ npm run build</p>{stage>=3&&<><p className="dim">Creating optimized production system...</p><p className="success">✓ Software compiled</p><p className="success">✓ Infrastructure connected</p><p className="success">✓ Intelligence online</p><p className="success">✓ Security policies active</p><strong>PRODUCTION READY</strong></>}</div>
     </div>
    </div>
    <div className="ide-status"><span>main*</span><span>TypeScript&nbsp;&nbsp; UTF-8&nbsp;&nbsp; Texcortech Cloud</span></div>
   </div>
   <div className="build-progress"><span>{stage<2?"WRITING SYSTEM":"BUILDING SYSTEM"}</span><i><b style={{width:`${progress*100}%`}}/></i><strong>{Math.round(progress*100).toString().padStart(2,"0")}%</strong></div>
  </div>
 </section>
}
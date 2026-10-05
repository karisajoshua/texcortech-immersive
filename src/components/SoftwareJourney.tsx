"use client";
import {useEffect,useRef,useState} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const labels=[
 ["01","ASSEMBLE","Interface engineering","We translate product requirements into a clear, usable interface—building the components, states and interactions that shape the experience."],
 ["02","CONNECT","Systems integration","The product connects to APIs, databases and business services so information can move reliably through the system in real time."],
 ["03","ADAPT","Responsive experience","The same product adapts intelligently across desktop and mobile, preserving hierarchy, usability and performance on every screen."],
 ["04","SHIP","Production engineering","We test, optimize and harden the completed system, then prepare it for a reliable production deployment."]
];

export default function SoftwareJourney(){
 const root=useRef<HTMLElement>(null); const [progress,setProgress]=useState(0);
 useEffect(()=>{gsap.registerPlugin(ScrollTrigger);const st=ScrollTrigger.create({trigger:root.current,start:"top top",end:"bottom bottom",scrub:true,onUpdate:self=>setProgress(self.progress)});return()=>st.kill()},[]);
 const stage=Math.min(3,Math.floor(progress*4));
 return <section ref={root} id="capabilities" className="software-story"><div className={"software-pin sw-stage-"+stage}>
  <div className="sw-copy"><p className="eyebrow">01 / SOFTWARE ENGINEERING</p><h2>Watch a product<br/><em>come to life.</em></h2><div className="sw-story-nav">{labels.map((item,i)=><div key={item[0]} className={i===stage?"current":i<stage?"complete":""}><span>{item[0]}</span><section><b>{item[1]}</b><small>{item[2]}</small></section><i/></div>)}</div><div className="sw-caption"><b>{labels[stage][0]} / {labels[stage][1]}</b><strong>{labels[stage][2]}</strong><p>{labels[stage][3]}</p></div></div>
  <div className="sw-visual">
   <div className="sw-browser">
    <div className="sw-browserbar"><i/><i/><i/><span>app.texcortech.system</span></div>
    <div className="sw-appnav"><strong>ARC</strong><span className="active">Overview</span><span>Analytics</span><span>Customers</span><span>Automations</span><div className="sw-search">⌕ Search</div><b/></div>
    <div className="sw-dashboard">
     <div className="sw-welcome"><small>OVERVIEW</small><h3>Business at a glance.</h3><button>+ New project</button></div>
     <div className="sw-cards"><article><small>REVENUE</small><strong>$84.2K</strong><em>+12.4%</em></article><article><small>USERS</small><strong>12,480</strong><em>+8.1%</em></article><article><small>CONVERSION</small><strong>4.82%</strong><em>+1.2%</em></article></div>
     <div className="sw-panels"><div className="sw-chart"><small>PERFORMANCE</small><div>{[42,63,48,78,58,88,72,96].map((h,i)=><i key={i} style={{height:h+"%"}}/>)}</div></div><div className="sw-feed"><small>LIVE ACTIVITY</small><p><i/>Payment received</p><p><i/>Account created</p><p><i/>Data synchronized</p></div></div>
    </div>
   </div>
   <div className="sw-code"><span>system.ts</span><code><b>const</b> product = build(<em>connected</em>);</code></div>
   <div className="sw-network"><span>CLIENT</span><i/><span>API</span><i/><span>DATA</span><b>200 OK</b></div>
   <div className="sw-phone"><i/><small>OVERVIEW</small><strong>$84.2K</strong><span/><span/><span/></div>
   <div className="sw-ready"><i>✓</i><div><small>DEPLOYMENT</small><b>Production ready</b></div></div>
   <div className="sw-orbit orbit-a"/><div className="sw-orbit orbit-b"/>
  </div>
  <div className="sw-stage-label"><span>{labels[stage][1]}</span><b>{Math.round(progress*100)}%</b></div>
 </div></section>
}
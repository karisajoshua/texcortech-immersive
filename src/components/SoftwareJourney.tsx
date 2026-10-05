"use client";
import {useEffect,useRef,useState} from "react";
import gsap from "gsap"; import {ScrollTrigger} from "gsap/ScrollTrigger";
const steps=[
 ["01","STRUCTURE","Components become an interface."],
 ["02","CONNECT","APIs and data bring it to life."],
 ["03","RESPOND","The product adapts across devices."],
 ["04","SHIP","A complete system, ready for users."]
];
export default function SoftwareJourney(){
 const root=useRef<HTMLElement>(null);const [p,setP]=useState(0);
 useEffect(()=>{gsap.registerPlugin(ScrollTrigger);const s=ScrollTrigger.create({trigger:root.current,start:"top top",end:"bottom bottom",scrub:true,onUpdate:x=>setP(x.progress)});return()=>s.kill()},[]);
 const n=Math.min(3,Math.floor(p*4));
 return <section ref={root} id="capabilities" className="software-journey"><div className="software-sticky">
  <div className="software-copy"><p className="eyebrow">01 / SOFTWARE ENGINEERING</p><h2>Code becomes<br/><em>product.</em></h2><div className="software-step"><b>{steps[n][0]} / {steps[n][1]}</b><p>{steps[n][2]}</p></div><div className="step-dots">{steps.map((_,i)=><i key={i} className={i<=n?"on":""}/>)}</div></div>
  <div className={"product-stage product-"+n}>
   <div className="mini-code"><div><span>system.ts</span></div><pre><span className="sw-kw">const</span> product = <span className="sw-fn">build</span>{"({"}{"\n"}{"  "}interface: <span className="sw-str">"responsive"</span>,{"\n"}{"  "}api: <span className="sw-str">"connected"</span>,{"\n"}{"  "}status: <span className="sw-str">"production"</span>{"\n"}{"});"}</pre></div>
   <div className="app-shell"><div className="app-bar"><strong>T.</strong><span>Overview</span><span>Activity</span><span>Customers</span><i/></div><div className="app-content"><div className="app-heading"><div><small>OVERVIEW</small><h3>Good morning.</h3></div><button>+ New project</button></div><div className="metric-row"><article><small>REVENUE</small><b>$84,240</b><span>+12.4%</span></article><article><small>ACTIVE USERS</small><b>12,480</b><span>+8.1%</span></article><article><small>CONVERSION</small><b>4.82%</b><span>+1.2%</span></article></div><div className="app-lower"><div className="chart"><small>PERFORMANCE</small><div>{[38,55,43,72,64,84,68,91,78,96].map((h,i)=><i key={i} style={{height:h+"%"}}/>)}</div></div><div className="activity"><small>LIVE ACTIVITY</small><p><i/> Payment received <b>now</b></p><p><i/> New account created <b>2m</b></p><p><i/> API sync complete <b>4m</b></p></div></div></div>
   </div>
   <div className="api-flow"><span>CLIENT</span><i>→</i><span>API</span><i>→</i><span>DATABASE</span><b>200 OK · 42ms</b></div>
   <div className="phone-preview"><div/><small>OVERVIEW</small><strong>$84.2k</strong><span/><span/><span/></div>
   <div className="ship-badge"><i>✓</i><span><small>BUILD STATUS</small><b>Production ready</b></span></div>
  </div>
 </div></section>
}
"use client";
import {useEffect,useRef,useState} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const scenes=[
 {n:"02",tag:"AI & AUTOMATION",title:"Intelligence that acts.",brief:"Signals enter the system, AI interprets intent, and automated workflows turn decisions into action.",metric:"12.4k",label:"events processed"},
 {n:"03",tag:"CLOUD & INFRASTRUCTURE",title:"Built to stay available.",brief:"The product becomes a resilient cloud architecture with observable services, healthy deployments and scalable infrastructure.",metric:"99.99%",label:"service health"},
 {n:"04",tag:"CYBERSECURITY",title:"Trust engineered in.",brief:"Identity, authorization, encryption and threat controls protect every layer before the system reaches the customer.",metric:"0",label:"critical threats"}
];

export default function SystemsJourney(){
 const root=useRef<HTMLElement>(null); const [stage,setStage]=useState(0);
 useEffect(()=>{gsap.registerPlugin(ScrollTrigger);const st=ScrollTrigger.create({trigger:root.current,start:"top top",end:"bottom bottom",scrub:true,onUpdate:s=>setStage(Math.min(2,Math.floor(s.progress*3)))});return()=>st.kill()},[]);
 const scene=scenes[stage];
 return <section ref={root} className="systems-story"><div className={"systems-pin systems-stage-"+stage}>
  <div className="systems-copy"><p className="eyebrow">{scene.n} / {scene.tag}</p><h2>{scene.title}</h2><p>{scene.brief}</p><div className="systems-metric"><strong>{scene.metric}</strong><span>{scene.label}</span></div><div className="systems-tabs">{scenes.map((s,i)=><div key={s.n} className={i===stage?"active":i<stage?"done":""}><b>{s.n}</b><span>{s.tag}</span><i/></div>)}</div></div>
  <div className="systems-visual">
   <div className="sys-shell">
    <div className="sys-top"><span>texcortech / production</span><div><i/><i/><i/></div></div>
    <div className="ai-scene">
     <div className="ai-flow"><article><small>INPUT</small><b>Customer request</b><span>New enterprise onboarding</span></article><i/><article className="ai-core"><small>AI ENGINE</small><b>Intent classified</b><span>Confidence 98.7%</span></article><i/><article><small>ACTION</small><b>Workflow triggered</b><span>6 tasks orchestrated</span></article></div>
     <div className="ai-log"><span><i/>Data validated <b>18ms</b></span><span><i/>Policy matched <b>42ms</b></span><span><i/>CRM synchronized <b>120ms</b></span><span><i/>Team notified <b>done</b></span></div>
    </div>
    <div className="cloud-scene">
     <div className="cloud-map"><div className="cloud-client">CLIENTS</div><i/><div className="cloud-edge">EDGE<br/><small>CDN · WAF</small></div><i/><div className="cloud-cluster"><b>APPLICATION CLUSTER</b><span>API</span><span>WEB</span><span>WORKER</span></div><i/><div className="cloud-data">DATA<br/><small>DB · CACHE</small></div></div>
     <div className="cloud-health"><span><i/>API <b>healthy</b></span><span><i/>Database <b>12ms</b></span><span><i/>Workers <b>8 active</b></span><span><i/>Deploy <b>v2.8.4</b></span></div>
    </div>
    <div className="security-scene">
     <div className="security-console"><div className="sec-head"><div><small>SECURITY POSTURE</small><strong>Protected</strong></div><span><i/> LIVE</span></div><div className="sec-score"><div className="sec-gauge"><strong>98</strong><small>/100</small></div><div><b>Excellent security posture</b><p>Critical controls are active and continuously monitored.</p></div></div><div className="sec-controls"><article><i>✓</i><div><b>Identity</b><span>MFA · SSO</span></div><em>VERIFIED</em></article><article><i>✓</i><div><b>Authorization</b><span>RBAC · Policies</span></div><em>ENFORCED</em></article><article><i>✓</i><div><b>Data protection</b><span>AES-256 · TLS</span></div><em>ENCRYPTED</em></article></div></div>
     <div className="security-events"><div className="sec-event-head"><small>THREAT MONITOR</small><b>0 critical</b></div><p><i/>Suspicious login blocked <span>IP reputation</span><b>BLOCKED</b></p><p><i/>API request inspected <span>WAF policy</span><b>SAFE</b></p><p><i/>Session verified <span>Identity</span><b>PASS</b></p><p><i/>Payload encrypted <span>Data layer</span><b>AES-256</b></p></div>
    </div>
   </div>
   <div className="systems-status"><i/><span>{stage===0?"AUTOMATION RUNNING":stage===1?"ALL SYSTEMS OPERATIONAL":"SYSTEM PROTECTED"}</span></div>
  </div>
 </div></section>
}
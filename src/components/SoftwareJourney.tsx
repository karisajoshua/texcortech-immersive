"use client";
import {useEffect,useRef,useState} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const labels=[
 ["01","OVERVIEW","Executive command center","A unified view of revenue, customers and conversion gives decision-makers the signals that matter immediately."],
 ["02","ANALYTICS","Revenue intelligence","Interactive performance analytics reveal momentum, patterns and business movement without leaving the workspace."],
 ["03","ACTIVITY","Live operations","Real-time events surface payments, customer onboarding and completed workflows as they happen across the platform."],
 ["04","ANYWHERE","Responsive workspace","The same operational intelligence adapts to mobile so teams can stay informed and act from anywhere."]
];

export default function SoftwareJourney(){
 const root=useRef<HTMLElement>(null); const [progress,setProgress]=useState(0);
 useEffect(()=>{gsap.registerPlugin(ScrollTrigger);const st=ScrollTrigger.create({trigger:root.current,start:"top top",end:"bottom bottom",scrub:true,onUpdate:self=>setProgress(self.progress)});return()=>st.kill()},[]);
 const stage=Math.min(3,Math.floor(progress*4));
 return <section ref={root} id="capabilities" className="software-story"><div className={"software-pin sw-stage-"+stage}>
  <div className="sw-copy"><p className="eyebrow">01 / SOFTWARE ENGINEERING</p><h2>Step inside the<br/><em>finished product.</em></h2><div className="sw-story-nav">{labels.map((item,i)=><div key={item[0]} className={i===stage?"current":i<stage?"complete":""}><span>{item[0]}</span><section><b>{item[1]}</b><small>{item[2]}</small></section><i/></div>)}</div><div className="sw-caption"><b>{labels[stage][0]} / {labels[stage][1]}</b><strong>{labels[stage][2]}</strong><p>{labels[stage][3]}</p></div></div>
  <div className="sw-visual">
   <div className="sw-browser">
    <div className="sw-browserbar"><i/><i/><i/><span>app.texcortech.system</span></div>
    <div className="sw-appnav"><strong>ARC</strong><span className="active">Overview</span><span>Analytics</span><span>Customers</span><span>Automations</span><div className="sw-search">⌕ Search</div><b/></div>
    <div className="sw-dashboard">
     <div className="sw-welcome"><div><small>EXECUTIVE OVERVIEW</small><h3>Good morning, Alex.</h3><p>Here is what is happening across your business today.</p></div><button>Export report</button></div>
     <div className={"sw-cards sw-focus-"+stage}>
      <article className="metric-violet"><div><small>NET REVENUE</small><span>↗</span></div><strong>$284,920</strong><em>+18.2% this month</em><i className="sparkline">⌁⌁⌁</i></article>
      <article className="metric-cyan"><div><small>ACTIVE USERS</small><span>◎</span></div><strong>24,892</strong><em>+9.4% this month</em><i className="sparkline">⌁⌁⌁</i></article>
      <article className="metric-green"><div><small>CONVERSION</small><span>◇</span></div><strong>8.74%</strong><em>+2.1% this month</em><i className="sparkline">⌁⌁⌁</i></article>
     </div>
     <div className={"sw-panels sw-focus-"+stage}>
      <div className="sw-chart"><div className="panel-head"><div><small>REVENUE ANALYTICS</small><strong>$284.9K</strong></div><span>Last 7 months</span></div><div className="line-chart"><svg viewBox="0 0 420 90" preserveAspectRatio="none"><defs><linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#6c63ff" stopOpacity=".22"/><stop offset="100%" stopColor="#6c63ff" stopOpacity="0"/></linearGradient></defs><path className="area" d="M0 70 C45 63 65 72 105 52 S165 58 205 37 S270 48 315 24 S370 32 420 12 L420 90 L0 90 Z"/><path className="line" d="M0 70 C45 63 65 72 105 52 S165 58 205 37 S270 48 315 24 S370 32 420 12"/><circle cx="420" cy="12" r="3"/></svg><div className="chart-labels"><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span></div></div></div>
      <div className="sw-sidepanel"><div className="donut-wrap"><small>GOAL PROGRESS</small><div className="donut"><strong>78%</strong></div><p>$284K of $365K</p></div><div className="sw-feed"><small>LIVE ACTIVITY</small><p><i/>Enterprise payment <b>now</b></p><p><i/>Customer onboarded <b>2m</b></p><p><i/>Workflow completed <b>4m</b></p></div></div>
     </div>
    </div>
   </div>
   <div className="sw-code"><span>system.ts</span><code><b>const</b> product = build(<em>connected</em>);</code></div>
   <div className="sw-network"><span>CLIENT</span><i/><span>API</span><i/><span>DATA</span><b>200 OK</b></div>
   <div className={"sw-phone "+(stage===3?"walkthrough-focus":"")}><i/><small>OVERVIEW</small><strong>$84.2K</strong><span/><span/><span/></div>
   <div className={"sw-ready "+(stage===3?"walkthrough-ready":"")}><i>✓</i><div><small>DEPLOYMENT</small><b>Production ready</b></div></div>
   <div className="sw-orbit orbit-a"/><div className="sw-orbit orbit-b"/>
  </div>
  <div className="sw-stage-label"><span>{labels[stage][1]}</span><b>{Math.round(progress*100)}%</b></div>
 </div></section>
}
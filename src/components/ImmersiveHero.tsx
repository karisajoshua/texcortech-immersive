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

const allFiles=["app/","  dashboard.tsx","  api/route.ts","core/","  system.ts"];

export default function ImmersiveHero(){
 const root=useRef<HTMLElement>(null); const [progress,setProgress]=useState(0);
 useEffect(()=>{gsap.registerPlugin(ScrollTrigger);const st=ScrollTrigger.create({trigger:root.current,start:"top top",end:"bottom bottom",scrub:true,onUpdate:s=>setProgress(s.progress)});return()=>st.kill()},[]);
 const stage=progress<.12?0:progress<.28?1:progress<.62?2:progress<.78?3:4;
 const fileCount=stage===0?0:Math.min(allFiles.length,Math.max(1,Math.ceil((progress-.12)/.035)));
 const files=allFiles.slice(0,fileCount);
 const codeProgress=Math.max(0,Math.min(1,(progress-.28)/.34));
 const typed=source.slice(0,Math.floor(source.length*codeProgress));
 const renderCode=(code:string)=>code.split(/("(?:[^"\\]|\\.)*")/g).map((part,i)=>{
   if(part.startsWith('"')) return <span className="tok-string" key={i}>{part}</span>;
   return <span key={i}>{part.split(/\b(import|from|const|await|true|false|createSystem|connect|deploy|product|runtime|database|intelligence|security)\b/g).map((t,j)=>{
     const cls=["import","from","const","await","true","false"].includes(t)?"tok-keyword":["createSystem","connect","deploy"].includes(t)?"tok-function":["product","runtime","database","intelligence","security"].includes(t)?"tok-property":"";
     return cls?<span className={cls} key={j}>{t}</span>:t;
   })}</span>
 });
 const command=progress>.66?"npm run build".slice(0,Math.floor("npm run build".length*Math.min(1,(progress-.66)/.08))):"";
 return <section ref={root} className="ide-hero">
  <div className="ide-stage">
   <div className="hero-copy ide-copy"><p className="eyebrow">TEXCORTECH / DIGITAL ENGINEERING</p><h1>Systems that<br/><span>move business.</span></h1><p className="lede">We engineer connected digital products—from software to infrastructure, intelligence and security.</p><a className="hero-cta" href="#capabilities">See how we build <b>↘</b></a><div className="scroll-cue">SCROLL TO BUILD <i/></div></div>
   <div className={"ide-window stage-"+stage}>
    <div className="ide-titlebar"><div><i/><i/><i/></div><span>{stage===0?"new workspace":stage===1?"texcortech-system — creating project":"texcortech-system — workspace"}</span><b>BUILD / 01</b></div>
    <div className="ide-body">
     <aside><strong>PROJECT</strong>{stage===0?<span className="empty-tree">NO FOLDER OPEN</span>:<><small className="project-root">TEXCORTECH-SYSTEM</small>{files.map((x,i)=><span key={i} className={x.includes("system.ts")&&stage>=2?"active":""}>{x}</span>)}</>}</aside>
     <div className="editor">
      {stage===0?<div className="workspace-start"><div className="workspace-mark">T<span>.</span></div><strong>Start building a system.</strong><p>Create a workspace to begin.</p><div className="new-file-action"><i>＋</i><span>New project</span></div></div>:stage===1?<div className="creating-project"><span className="folder-icon">⌁</span><strong>Creating texcortech-system</strong><p>{files.length} / {allFiles.length} project files initialized</p><div className="create-bar"><i style={{width:`${files.length/allFiles.length*100}%`}}/></div><code>{files[files.length-1]||"initializing..."}</code></div>:<>
       <div className="tabs"><span>system.ts <b>×</b></span></div><div className="code"><div className="lines">{Array.from({length:14},(_,i)=><i key={i}>{i+1}</i>)}</div><pre>{renderCode(typed)}<em className="cursor"/></pre></div>
       <div className={"terminal "+(stage>=3?"show":"")}><div><b>TERMINAL</b><span>PROBLEMS&nbsp;&nbsp; OUTPUT</span></div><p>$ {command}<em className={stage===3?"terminal-cursor":""}/></p>{stage>=4&&<><p className="dim">Creating optimized production system...</p><p className="success">✓ Software compiled</p><p className="success">✓ Infrastructure connected</p><p className="success">✓ Intelligence online</p><p className="success">✓ Security policies active</p><strong>PRODUCTION READY</strong></>}</div>
      </>}
     </div>
    </div>
    <div className="ide-status"><span>{stage===0?"NO WORKSPACE":"main*"}</span><span>{stage<2?"Texcortech Studio":"TypeScript&nbsp;&nbsp; UTF-8&nbsp;&nbsp; Texcortech Cloud"}</span></div>
   </div>
   <div className="build-progress"><span>{stage===0?"START":stage===1?"CREATE":stage===2?"CODE":stage===3?"BUILD":"READY"}</span><i><b style={{width:`${progress*100}%`}}/></i><strong>{Math.round(progress*100).toString().padStart(2,"0")}%</strong></div>
  </div>
 </section>
}
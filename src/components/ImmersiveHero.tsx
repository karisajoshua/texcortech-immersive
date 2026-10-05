"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Line } from "@react-three/drei";
import { useEffect,useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Node({p=[0,0,0] as [number,number,number],hot=false}){return <mesh position={p}><sphereGeometry args={[.075,16,16]}/><meshStandardMaterial color={hot?"#ff6a00":"#9ca3af"} emissive={hot?"#ff4d00":"#111827"} emissiveIntensity={hot?3:.4} metalness={.5}/></mesh>}
function DataPath({points}:{points:[number,number,number][]}){return <Line points={points} color="#ff6a00" lineWidth={.7} transparent opacity={.35}/>}
function InfrastructureEngine(){
 const root=useRef<THREE.Group>(null), cpu=useRef<THREE.Group>(null), cloud=useRef<THREE.Group>(null), ai=useRef<THREE.Group>(null), security=useRef<THREE.Group>(null);
 useFrame((s,d)=>{if(root.current){root.current.rotation.y+=d*.055;root.current.rotation.x=Math.sin(s.clock.elapsedTime*.25)*.035}if(security.current)security.current.rotation.z-=d*.12});
 useEffect(()=>{gsap.registerPlugin(ScrollTrigger);const refs=[cpu,cloud,ai,security];const sceneTriggers=gsap.utils.toArray<HTMLElement>(".scene-trigger"); sceneTriggers.forEach((el,i)=>{const active=refs[i]?.current;if(!active)return;gsap.fromTo(active.scale,{x:1,y:1,z:1},{x:1.65,y:1.65,z:1.65,scrollTrigger:{trigger:el,start:"top 68%",end:"bottom 32%",scrub:true,toggleActions:"play reverse play reverse"}});gsap.to(root.current!.rotation,{y:(i-.8)*.42,x:(i%2?-.12:.18),scrollTrigger:{trigger:el,start:"top bottom",end:"bottom top",scrub:1.2}})});const targets=[[-1.65,.15,.35],[1.65,.65,-.25],[.8,-1.5,.4],[-.65,1.65,-.35]];const ctx=gsap.context(()=>refs.forEach((r,i)=>r.current&&gsap.to(r.current.position,{x:targets[i][0],y:targets[i][1],z:targets[i][2],scrollTrigger:{trigger:"#system-story",start:"18% top",end:"72% bottom",scrub:1.2}})));return()=>ctx.revert()},[]);
 const chips=[[-.58,.58], [.58,.58],[-.58,-.58],[.58,-.58]] as const;
 return <group ref={root} rotation={[.16,-.25,0]} scale={1.05}>
  <group ref={cpu}>
   <mesh><boxGeometry args={[1.75,1.75,.32]}/><meshStandardMaterial color="#0b0d12" metalness={.95} roughness={.18}/></mesh>
   <mesh position={[0,0,.19]}><boxGeometry args={[.88,.88,.12]}/><meshStandardMaterial color="#ff6a00" emissive="#8a2600" emissiveIntensity={1.1} metalness={.85} roughness={.2}/></mesh>
   <mesh position={[0,0,.265]}><boxGeometry args={[.54,.54,.035]}/><meshStandardMaterial color="#171a21" metalness={1} roughness={.1}/></mesh>
   {chips.map(([x,y],i)=><Node key={i} p={[x,y,.22]} hot={i===0}/>)}
  </group>
  <group ref={cloud}>
   {[-.52,0,.52].map((x,i)=><mesh key={i} position={[x,0,i*.12]}><boxGeometry args={[.42,1.42,.46]}/><meshStandardMaterial color="#161a22" metalness={.8} roughness={.25}/></mesh>)}
   {[-.4,0,.4].map((y,i)=><Node key={i} p={[0,y,.36]} hot={i===1}/>)}
  </group>
  <group ref={ai}>{Array.from({length:9}).map((_,i)=>{const a=i/9*Math.PI*2,r=.72+(i%2)*.2;return <Node key={i} p={[Math.cos(a)*r,Math.sin(a)*r,.42]} hot={i%3===0}/>})}<DataPath points={[[-.7,0,.42],[0,.5,.42],[.65,.15,.42],[0,-.6,.42],[-.7,0,.42]]}/></group>
  <group ref={security}><mesh rotation={[0,0,Math.PI/4]}><torusGeometry args={[1.28,.055,12,4]}/><meshStandardMaterial color="#ff6a00" emissive="#6d2100" emissiveIntensity={1.4} metalness={.9}/></mesh><mesh rotation={[0,0,-Math.PI/4]}><torusGeometry args={[1.48,.025,8,4]}/><meshStandardMaterial color="#555b66" metalness={1}/></mesh></group>
  <DataPath points={[[-1.3,0,.05],[1.3,0,.05]]}/><DataPath points={[[0,-1.3,.05],[0,1.3,.05]]}/>
 </group>
}
export default function ImmersiveHero(){
 const root=useRef<HTMLElement>(null);
 useEffect(()=>{gsap.registerPlugin(ScrollTrigger);const ctx=gsap.context(()=>{gsap.to(".hero-copy",{opacity:0,y:-90,scrollTrigger:{trigger:root.current,start:"top top",end:"48% top",scrub:true}});gsap.fromTo(".system-label",{opacity:0},{opacity:1,scrollTrigger:{trigger:root.current,start:"25% top",end:"45% top",scrub:true}})},root);return()=>ctx.revert()},[]);
 return <section ref={root} id="system-story" className="hero persistent-world"><div className="canvas-wrap persistent-canvas" aria-hidden="true"><Canvas dpr={[1,1.5]} camera={{position:[0,0,6.8],fov:38}} gl={{antialias:true,powerPreference:"high-performance"}}><color attach="background" args={["#050608"]}/><fog attach="fog" args={["#050608",8,17]}/><ambientLight intensity={.45}/><directionalLight position={[4,5,6]} intensity={3}/><pointLight position={[-3,-2,4]} color="#ff6a00" intensity={30}/><Stars radius={70} depth={45} count={450} factor={1.4} fade speed={.2}/><Float speed={.7} rotationIntensity={.06} floatIntensity={.18}><InfrastructureEngine/></Float></Canvas></div><div className="system-label"><span>LIVE SYSTEM / 01</span><b>SOFTWARE</b><b>CLOUD</b><b>INTELLIGENCE</b><b>SECURITY</b></div><div className="hero-copy"><p className="eyebrow">TEXCORTECH / DIGITAL ENGINEERING</p><h1>Systems that<br/><span>move business.</span></h1><p className="lede">We engineer connected digital products—from interface to infrastructure, intelligence and security.</p><a className="hero-cta" href="#capabilities">Explore the system <b>↘</b></a><div className="scroll-cue">SCROLL TO DECONSTRUCT <i/></div></div></section>
}
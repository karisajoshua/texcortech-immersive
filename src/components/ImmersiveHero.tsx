"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const modules=[[-2.2,1.25,0],[2.35,1.05,-.2],[-2.4,-1.25,-.5],[2.25,-1.35,.25]] as const;
function SystemCore(){
 const root=useRef<THREE.Group>(null); const nodes=useRef<THREE.Group>(null);
 useFrame((s,d)=>{if(root.current){root.current.rotation.y+=d*.11;root.current.rotation.x=Math.sin(s.clock.elapsedTime*.28)*.08;}});
 useEffect(()=>{gsap.registerPlugin(ScrollTrigger); if(!nodes.current)return; const items=nodes.current.children;
 const ctx=gsap.context(()=>{items.forEach((item,i)=>{gsap.fromTo(item.position,{x:0,y:0,z:0},{x:modules[i][0],y:modules[i][1],z:modules[i][2],scrollTrigger:{trigger:"#system-story",start:"top top",end:"70% bottom",scrub:1}})})}); return()=>ctx.revert();},[]);
 return <group ref={root}><Float speed={1.2} rotationIntensity={.18} floatIntensity={.35}>
  <mesh><icosahedronGeometry args={[1.05,3]}/><meshStandardMaterial color="#0d1017" metalness={.9} roughness={.15}/></mesh>
  <mesh scale={1.08}><icosahedronGeometry args={[1.05,1]}/><meshBasicMaterial color="#ff6a00" wireframe transparent opacity={.7}/></mesh>
 </Float><group ref={nodes}>{modules.map((_,i)=><group key={i}><mesh><boxGeometry args={[.68,.68,.68]}/><meshStandardMaterial color={i===0?"#ff6a00":"#171b24"} metalness={.75} roughness={.2}/></mesh><mesh scale={1.08}><boxGeometry args={[.68,.68,.68]}/><meshBasicMaterial color="#ff8a33" wireframe transparent opacity={.38}/></mesh></group>)}</group></group>
}
export default function ImmersiveHero(){
 const root=useRef<HTMLElement>(null);
 useEffect(()=>{gsap.registerPlugin(ScrollTrigger);const ctx=gsap.context(()=>{gsap.to(".hero-copy",{opacity:0,y:-80,scrollTrigger:{trigger:root.current,start:"top top",end:"55% top",scrub:true}});gsap.from(".chapter-card",{opacity:0,y:70,stagger:.15,scrollTrigger:{trigger:".chapters",start:"top 75%",end:"center 55%",scrub:1}})},root);return()=>ctx.revert()},[]);
 return <section ref={root} id="system-story" className="hero"><div className="canvas-wrap" aria-hidden="true"><Canvas dpr={[1,1.5]} camera={{position:[0,0,6],fov:40}} gl={{antialias:true,powerPreference:"high-performance"}}><color attach="background" args={["#050608"]}/><fog attach="fog" args={["#050608",7,16]}/><ambientLight intensity={.6}/><directionalLight position={[4,5,5]} intensity={2.5}/><pointLight position={[-4,-2,3]} color="#ff6a00" intensity={22}/><Stars radius={70} depth={45} count={700} factor={1.6} fade speed={.25}/><SystemCore/></Canvas></div><div className="hero-copy"><p className="eyebrow">TEXCORTECH / DIGITAL ENGINEERING</p><h1>Systems that<br/><span>move business.</span></h1><p className="lede">We engineer connected digital products—from interface to infrastructure, intelligence and security.</p><a className="hero-cta" href="#capabilities">Explore the system <b>↘</b></a><div className="scroll-cue">SCROLL TO DECONSTRUCT <i/></div></div></section>
}

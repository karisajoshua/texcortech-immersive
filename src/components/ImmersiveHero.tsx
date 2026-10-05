"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Core() {
 const group=useRef<THREE.Group>(null);
 useFrame((state,delta)=>{ if(!group.current)return; group.current.rotation.y+=delta*.18; group.current.rotation.x=Math.sin(state.clock.elapsedTime*.35)*.12; });
 return <Float speed={1.4} rotationIntensity={.35} floatIntensity={.6}><group ref={group}>
  <mesh><icosahedronGeometry args={[1.45,2]}/><meshStandardMaterial color="#111827" metalness={.85} roughness={.18}/></mesh>
  <mesh scale={1.12}><icosahedronGeometry args={[1.45,1]}/><meshBasicMaterial color="#ff6a00" wireframe transparent opacity={.48}/></mesh>
 </group></Float>;
}

export default function ImmersiveHero(){
 const root=useRef<HTMLElement>(null);
 useEffect(()=>{gsap.registerPlugin(ScrollTrigger); const ctx=gsap.context(()=>{gsap.fromTo(".hero-copy",{opacity:1,y:0},{opacity:0,y:-90,scrollTrigger:{trigger:root.current,start:"top top",end:"65% top",scrub:true}});},root); return()=>ctx.revert();},[]);
 return <section ref={root} className="hero"><div className="canvas-wrap" aria-hidden="true"><Canvas dpr={[1,1.75]} camera={{position:[0,0,5],fov:42}} gl={{antialias:true,powerPreference:"high-performance"}}><color attach="background" args={["#050608"]}/><ambientLight intensity={.7}/><directionalLight position={[4,5,4]} intensity={3}/><pointLight position={[-4,-2,2]} color="#ff6a00" intensity={20}/><Stars radius={60} depth={35} count={1000} factor={2} fade speed={.35}/><Core/></Canvas></div><div className="hero-copy"><p className="eyebrow">TEXCORTECH SYSTEMS</p><h1>Engineering<br/><span>digital worlds.</span></h1><p className="lede">We design software, cloud infrastructure, intelligent automation and secure digital systems as one connected experience.</p><div className="scroll-cue">SCROLL TO ENTER <i/></div></div></section>;
}

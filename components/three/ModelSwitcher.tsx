
import React from "react";
import * as THREE from "three";
import MacbookModel14 from "../models/Macbook-14";
import MacbookModel16 from "../models/Macbook-16";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import { PresentationControls } from "@react-three/drei";

type ModelSwitcherProps = {
  scale: number;
  isMobile?: boolean;
};


const ANIMATION_DURATION = 1; 
const OFF_DISTANCE = 5;

const fadeMeshes = (group,opacity) => {
    if(!group) return;
    group.traverse((child) => {
        if(child.isMesh){
            child.material.transparent = true;
            gsap.to(child.material, {opacity,duration:ANIMATION_DURATION})
        };
        })
}

const moveGroup = (group,x) => {
    if(!group) return;
  
    gsap.to(group.position, {x,duration:ANIMATION_DURATION})
}

export default function ModelSwitcher({ scale, isMobile }: ModelSwitcherProps) {
    const smallMacbookRef = React.useRef<THREE.Group>(null);
    const largeMacbookRef = React.useRef<THREE.Group>(null);


    const showLargeMacbook = scale === 0.08 || scale === 0.05;

    useGSAP(() => {
        if(showLargeMacbook){

        
        moveGroup(smallMacbookRef.current, -OFF_DISTANCE);
        moveGroup(largeMacbookRef.current,0);

        fadeMeshes(smallMacbookRef.current,0);
        fadeMeshes(largeMacbookRef.current,1);
        }else {
        moveGroup(smallMacbookRef.current,0);
        moveGroup(largeMacbookRef.current, OFF_DISTANCE);

        fadeMeshes(smallMacbookRef.current,1);
        fadeMeshes(largeMacbookRef.current,0);
        }
    },[scale]);


    const controlsConfig = {
        snap: true,
        speed:1,
        zoom:1,
        
        azimuth: [ -Infinity, Infinity ],
        config: { mass: 1, tension: 0, friction: 26}

    }


  return (
    <>
    <PresentationControls {...controlsConfig}>
        <group ref={largeMacbookRef}>
        <MacbookModel16 scale={isMobile ? 0.05 : 0.08}  />
        </group>
    </PresentationControls>

    <PresentationControls  {...controlsConfig}>
        <group ref={smallMacbookRef}>
        <MacbookModel14 scale={isMobile ? 0.03 : 0.06}  />
        </group>    
    </PresentationControls>
    </>
  );
}

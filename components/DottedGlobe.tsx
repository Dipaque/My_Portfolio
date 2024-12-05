'use client';
import React, { useRef, useMemo } from "react";
import { Canvas, useLoader } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';


const Model = () => {
  const texture = useLoader(TextureLoader, '/earth/textures/Material.001_baseColor.jpg'); // Path to Earth's surface texture
  const radius = 28;

 
  // India's coordinates converted to Cartesian
  const latitude =167.9416;
  const longitude =  223.8083;

  const theta = (90 - latitude) * (Math.PI / 180); // Adjust for 3D globe coordinate system
  const phi = longitude * (Math.PI / 180);

  const x = radius * Math.sin(theta) * Math.cos(phi);
  const y = radius * Math.cos(theta);
  const z = radius * Math.sin(theta) * Math.sin(phi);

  const globeRef = useRef();

  // Use Frame to smoothly adjust the globe to the correct orientation if needed
 

  return (
    <group>
      {/* Sphere */}
      <mesh ref={globeRef} rotation={[-0.9, -2, -0.6]}>
        <sphereGeometry args={[radius, 80, 80,6.29]} />
        <meshStandardMaterial map={texture} bumpScale={0.2} />
      </mesh>
      {/* Marker for India */}
      <mesh position={[x, y, z]}>
        <sphereGeometry args={[0.9, 16, 16]} /> {/* Small sphere as marker */}
        <meshStandardMaterial color="#6e06f2" />
      </mesh>
    </group>
  );
};


const DottedGlobe = () => {
 
  return (
    
     <Canvas camera={{ position: [50, 50, 50], fov: 50 }} >
        <ambientLight intensity={1.8} />
        <directionalLight position={[10, 50, 50]} />
        <OrbitControls 
          enableRotate={true} 
          enableZoom={false}
          target={[0, 0, 0]} // Ensure the controls target the globe's center
        />
      <Environment files={"/earth/dikhololo_night_1k.hdr"} background={false}  />
      <Model />
     
    </Canvas>
  );
};

export default DottedGlobe;
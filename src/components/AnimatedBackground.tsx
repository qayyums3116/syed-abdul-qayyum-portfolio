import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import { Suspense, useEffect, useState } from 'react';
import * as THREE from 'three';

// Floating geometric shapes
const FloatingShape = ({ position, scale, color }: { position: [number, number, number], scale: number, color: string }) => {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} transparent opacity={0.6} />
      </mesh>
    </Float>
  );
};

const ParticleField = () => {
  const points = [];
  const colors = [];
  
  for (let i = 0; i < 100; i++) {
    points.push(
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20
    );
    
    colors.push(
      Math.random(),
      Math.random() * 0.5 + 0.5,
      1
    );
  }
  
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          count={points.length / 3} 
          array={new Float32Array(points)} 
          itemSize={3} 
        />
        <bufferAttribute 
          attach="attributes-color" 
          count={colors.length / 3} 
          array={new Float32Array(colors)} 
          itemSize={3} 
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} vertexColors />
    </points>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4f46e5" />
      
      {/* Floating Shapes */}
      <FloatingShape position={[-5, 2, -3]} scale={0.5} color="#4f46e5" />
      <FloatingShape position={[5, -2, -2]} scale={0.3} color="#06b6d4" />
      <FloatingShape position={[0, 3, -4]} scale={0.4} color="#10b981" />
      <FloatingShape position={[-3, -1, -1]} scale={0.25} color="#8b5cf6" />
      
      {/* Particle Field */}
      <ParticleField />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
};

const AnimatedBackground = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const updateViewport = () => setIsDesktop(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener('change', updateViewport);
    return () => mediaQuery.removeEventListener('change', updateViewport);
  }, []);

  if (!isDesktop) {
    return null;
  }

  return (
    <div className="absolute inset-0 opacity-30">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default AnimatedBackground;
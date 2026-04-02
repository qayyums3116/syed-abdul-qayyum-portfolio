import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const TechLogo = ({ logo, name, index }: { 
  logo: string, 
  name: string,
  index: number 
}) => {
  const meshRef = useRef<THREE.Group>(null);
  const texture = useLoader(THREE.TextureLoader, logo);

  const radius = 14; // wide orbit

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.rotation.y = time * 0.8; // cube spins
      meshRef.current.position.x = Math.cos(time * 0.2 + (index * Math.PI * 2) / 8) * radius;
      meshRef.current.position.z = Math.sin(time * 0.2 + (index * Math.PI * 2) / 8) * radius;
      meshRef.current.position.y = Math.sin(time * 0.5 + index) * 1;
    }
  });

  // Cube materials (logo front + back, dark sides)
  const materials = [
    new THREE.MeshStandardMaterial({ color: '#111' }), // right
    new THREE.MeshStandardMaterial({ color: '#111' }), // left
    new THREE.MeshStandardMaterial({ color: '#111' }), // top
    new THREE.MeshStandardMaterial({ color: '#111' }), // bottom
    new THREE.MeshStandardMaterial({ map: texture, transparent: true }), // front logo
    new THREE.MeshStandardMaterial({ map: texture, transparent: true })  // back logo
  ];

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={0.8}>
      <group ref={meshRef}>
        {/* Logo Cube */}
        <mesh material={materials}>
          <boxGeometry args={[3, 3, 0.6]} />
        </mesh>
        {/* Text below logo */}
        <Text
          position={[0, -2.2, 0]} // just under cube
          fontSize={0.8}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          {name}
        </Text>
      </group>
    </Float>
  );
};

const Scene3D = () => {
  const technologies = [
    { name: 'React', logo: '/React.png' },
    { name: 'HTML5', logo: '/HTML.png' },
    { name: 'CSS3', logo: '/CSS.png' },
    { name: 'JavaScript', logo: '/Javascript.png' },
    { name: 'Tailwind', logo: '/Tailwind.png' },
    { name: 'Vite', logo: '/vite.png' },
    { name: 'Figma', logo: '/Figma.png' },
    { name: 'N8N', logo: '/n8n.png' },
  ];

  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <pointLight position={[0, 0, 10]} intensity={1.2} />

      {technologies.map((tech, index) => (
        <TechLogo key={tech.name} logo={tech.logo} name={tech.name} index={index} />
      ))}
    </>
  );
};

const TechCarousel3D = () => {
  return (
    <section id="tech-stack" className="py-10 sm:py-14 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="hero-text">Tech Stack</span>
          </h2>
          <p className="text-xs xs:text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* 3D Carousel for Desktop */}
        <div className="hidden lg:flex items-center justify-center h-[520px] xl:h-[700px] relative">
          <Canvas camera={{ position: [0, 0, 22], fov: 70 }}>
            <Suspense
              fallback={
                <mesh>
                  <boxGeometry args={[1, 1, 1]} />
                  <meshBasicMaterial color="#4f46e5" />
                </mesh>
              }
            >
              <Scene3D />
            </Suspense>
          </Canvas>
        </div>

        {/* Tech Grid for Mobile and Tablet */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-10">
          {[
            { name: 'React', icon: '/React.png' },
            { name: 'HTML5', icon: '/HTML.png' },
            { name: 'CSS3', icon: '/CSS.png' },
            { name: 'JavaScript', icon: '/Javascript.png' },
            { name: 'Tailwind', icon: '/Tailwind.png' },
            { name: 'Vite', icon: '/vite.png' },
            { name: 'Figma', icon: '/Figma.png' },
            { name: 'N8N', icon: '/n8n.png' },
          ].map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="glass p-3 sm:p-4 rounded-lg text-center interactive min-h-[120px] sm:min-h-[140px] flex flex-col items-center justify-center"
            >
              <img src={tech.icon} alt={tech.name} className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2" />
              <h3 className="font-semibold text-xs sm:text-sm leading-tight">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechCarousel3D;

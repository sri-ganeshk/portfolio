import React, { Suspense, useEffect } from 'react'; // Added useEffect for console.log
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
// Removed Sphere, Torus, Cylinder as they are not needed for this simplified version
// Removed THREE import as it's not directly used in this simplified version

// Simplified Model Component
function Model(props) {
  const modelPath = '/models/stylized_character.glb'; // CRITICAL PATH
  const { scene } = useGLTF(modelPath);

  // Log scene here to help verify model structure later if needed
  useEffect(() => {
    if (scene) {
      console.log('Loaded GLTF Scene:', scene);
      // To inspect further, you might log:
      // scene.traverse((child) => {
      //   if (child.isMesh) {
      //     console.log('Mesh Name:', child.name, '; Material Name:', child.material.name);
      //   }
      //   if (child.isBone) {
      //     console.log('Bone Name:', child.name);
      //   }
      // });
    }
  }, [scene]);

  return <primitive object={scene} scale={1.5} position={[0, -1.5, 0]} {...props} />;
}

// Main Avatar3D Component
const Avatar3D = () => {
  return (
    // The wrapper div with specific dimensions (e.g., 300x450px) will be in Hero.jsx
    // This div here ensures the canvas takes the full size of its parent from Hero.jsx
    <div style={{ width: '100%', height: '100%', backgroundColor: '#101010' }}>
      <Canvas camera={{ position: [0, 0.2, 1.8], fov: 45 }} shadows>
        <ambientLight intensity={0.3} />
        <directionalLight 
            name="mainDirectionalLight"
            position={[3, 3, 2]} 
            intensity={0.8} 
            color={'#FFFFFF'} 
            castShadow 
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
        />
        <directionalLight 
            name="rimLight"
            position={[-3, 2, -3]}
            intensity={0.4} 
            color={'#6AD7FF'}
        />
        
        <Environment preset="night" background={false} blur={0.5} />

        <Suspense fallback={null}>
          <Model />
        </Suspense>
        
        <OrbitControls 
            enableZoom={true}
            enablePan={true}
            target={[0, -0.2, 0]}
            minDistance={1}
            maxDistance={5}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.8}
        />
        {/* Ground plane for shadows - important for visual grounding */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial color="#181818" transparent opacity={0.8}/>
        </mesh>
      </Canvas>
    </div>
  );
};

// Preload the model
useGLTF.preload('/models/stylized_character.glb');

export default Avatar3D;

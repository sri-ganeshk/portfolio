import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Sphere, Torus } from '@react-three/drei';
import * as THREE from 'three';

const BLINK_DURATION = 0.3; // seconds for a full blink cycle

// Model Component
const Model = () => {
  const modelPath = '/models/stylized_character.glb';
  const { scene /*, nodes, materials */ } = useGLTF(modelPath);

  // --- State and Refs for Interactivity ---
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const headBoneRef = useRef(null);
  const leftEyeBoneRef = useRef(null);
  const rightEyeBoneRef = useRef(null);
  const initialHeadRotation = useRef(new THREE.Euler());
  const initialLeftEyeRotation = useRef(new THREE.Euler());
  const initialRightEyeRotation = useRef(new THREE.Euler());

  // --- State and Refs for Blinking ---
  const [isBlinking, setIsBlinking] = useState(false);
  const [blinkProgress, setBlinkProgress] = useState(0);
  const [timeToNextBlink, setTimeToNextBlink] = useState(Math.random() * 4 + 3);
  
  const headMeshRef = useRef(null);
  const eyeBlinkLeftIndexRef = useRef(-1);
  const eyeBlinkRightIndexRef = useRef(-1);

  // --- Mouse Move Handler ---
  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const clonedScene = useMemo(() => scene.clone(true), [scene]);

  // --- Find Bones, Blend Shapes, and Apply Material Refinements ---
  useEffect(() => {
    let headBoneFound = false, leftEyeBoneFound = false, rightEyeBoneFound = false;
    let blendShapeMeshFound = false;

    clonedScene.traverse((object) => {
      // Find Bones
      if (object.isBone) {
        if (object.name === 'mixamorigHead') {
          headBoneRef.current = object;
          initialHeadRotation.current.copy(object.rotation);
          headBoneFound = true;
        } else if (object.name === 'mixamorigLeftEye') {
          leftEyeBoneRef.current = object;
          initialLeftEyeRotation.current.copy(object.rotation);
          leftEyeBoneFound = true;
        } else if (object.name === 'mixamorigRightEye') {
          rightEyeBoneRef.current = object;
          initialRightEyeRotation.current.copy(object.rotation);
          rightEyeBoneFound = true;
        }
      }

      // Find Mesh with Blend Shapes & Apply Material Refinements
      if (object.isMesh) {
        // Blend Shapes
        if (object.morphTargetDictionary && Object.keys(object.morphTargetDictionary).length > 0 && !blendShapeMeshFound) {
          headMeshRef.current = object;
          if (object.morphTargetDictionary.hasOwnProperty('eyeBlinkLeft')) {
            eyeBlinkLeftIndexRef.current = object.morphTargetDictionary['eyeBlinkLeft'];
          }
          if (object.morphTargetDictionary.hasOwnProperty('eyeBlinkRight')) {
            eyeBlinkRightIndexRef.current = object.morphTargetDictionary['eyeBlinkRight'];
          }
          blendShapeMeshFound = true;
        }

        // Material Refinements (applied to clones of original materials)
        const material = object.material;
        if (material) {
          let newMaterial = null; // To hold cloned material if modified

          if (object.name === "Wolf3D_Outfit_Top" || object.name === "Character_Top") {
            newMaterial = material.clone();
            newMaterial.color.set("#333333"); // Keep existing color
            newMaterial.roughness = 0.8;      // Matte cloth
            newMaterial.metalness = 0.05;     // Slightly metallic sheen
          } else if (object.name === "Wolf3D_Outfit_Bottom" || object.name === "Character_Pants") {
            newMaterial = material.clone();
            newMaterial.color.set("#2c2c2c"); // Keep existing color
            newMaterial.roughness = 0.8;      // Matte cloth
            newMaterial.metalness = 0.05;     // Slightly metallic sheen
          } else if (object.name === "Wolf3D_Hair" || object.name === "Character_Hair") {
            newMaterial = material.clone();
            newMaterial.roughness = 0.7;      // More matte hair
            newMaterial.metalness = 0.0;      // Non-metallic hair
          } else if (object.name === "Wolf3D_Head" || object.name === "Character_Head_Skin") { // Assuming skin mesh name
            newMaterial = material.clone();
            newMaterial.roughness = 0.55;     // Skin roughness
            newMaterial.metalness = 0.0;      // Non-metallic skin
          } else if (object.name === "Wolf3D_EyeLeft" || object.name === "Wolf3D_EyeRight" || object.name === "Character_Eyes") {
            newMaterial = material.clone();
            newMaterial.roughness = 0.1;      // Shiny eyes
            newMaterial.metalness = 0.0;      // Non-metallic eyes, but reflective
          }
          
          if (newMaterial) {
            object.material = newMaterial;
          }
        }
      }
    });
    // Simulated logging can be added here if needed
  }, [clonedScene]);


  // --- Animations (Head/Eye Tracking and Blinking) ---
  useFrame((state, delta) => {
    const lerpFactor = 0.1; // Keep LERP factor for smooth, responsive movement

    // Head Tracking
    if (headBoneRef.current) {
      const MAX_HEAD_YAW = Math.PI / 5; 
      const MAX_HEAD_PITCH = Math.PI / 8;
      const targetHeadYaw = initialHeadRotation.current.y + mousePosition.x * MAX_HEAD_YAW;
      const targetHeadPitch = initialHeadRotation.current.x + mousePosition.y * MAX_HEAD_PITCH;
      const targetHeadRoll = initialHeadRotation.current.z;
      headBoneRef.current.rotation.y = THREE.MathUtils.lerp(headBoneRef.current.rotation.y, targetHeadYaw, lerpFactor);
      headBoneRef.current.rotation.x = THREE.MathUtils.lerp(headBoneRef.current.rotation.x, targetHeadPitch, lerpFactor);
      headBoneRef.current.rotation.z = THREE.MathUtils.lerp(headBoneRef.current.rotation.z, targetHeadRoll, lerpFactor);
    }

    // Eye Tracking
    const MAX_EYE_YAW = Math.PI / 10;
    const MAX_EYE_PITCH = Math.PI / 12;
    if (leftEyeBoneRef.current) {
      const targetLeftEyeYaw = initialLeftEyeRotation.current.y + mousePosition.x * MAX_EYE_YAW;
      const targetLeftEyePitch = initialLeftEyeRotation.current.x + mousePosition.y * MAX_EYE_PITCH;
      leftEyeBoneRef.current.rotation.y = THREE.MathUtils.lerp(leftEyeBoneRef.current.rotation.y, targetLeftEyeYaw, lerpFactor);
      leftEyeBoneRef.current.rotation.x = THREE.MathUtils.lerp(leftEyeBoneRef.current.rotation.x, targetLeftEyePitch, lerpFactor);
    }
    if (rightEyeBoneRef.current) {
      const targetRightEyeYaw = initialRightEyeRotation.current.y + mousePosition.x * MAX_EYE_YAW;
      const targetRightEyePitch = initialRightEyeRotation.current.x + mousePosition.y * MAX_EYE_PITCH;
      rightEyeBoneRef.current.rotation.y = THREE.MathUtils.lerp(rightEyeBoneRef.current.rotation.y, targetRightEyeYaw, lerpFactor);
      rightEyeBoneRef.current.rotation.x = THREE.MathUtils.lerp(rightEyeBoneRef.current.rotation.x, targetRightEyePitch, lerpFactor);
    }

    // Blinking Logic
    if (headMeshRef.current && eyeBlinkLeftIndexRef.current !== -1 && eyeBlinkRightIndexRef.current !== -1) {
      if (!isBlinking) {
        setTimeToNextBlink(prev => prev - delta);
        if (timeToNextBlink <= 0) {
          setIsBlinking(true);
          setBlinkProgress(0);
          setTimeToNextBlink(Math.random() * 4 + 3); 
        }
      } else {
        let currentBlinkProgress = blinkProgress + (delta / BLINK_DURATION);
        const blinkValue = Math.sin(currentBlinkProgress * Math.PI); 

        headMeshRef.current.morphTargetInfluences[eyeBlinkLeftIndexRef.current] = blinkValue;
        headMeshRef.current.morphTargetInfluences[eyeBlinkRightIndexRef.current] = blinkValue;

        if (currentBlinkProgress >= 1) {
          setIsBlinking(false);
          setBlinkProgress(0);
          headMeshRef.current.morphTargetInfluences[eyeBlinkLeftIndexRef.current] = 0;
          headMeshRef.current.morphTargetInfluences[eyeBlinkRightIndexRef.current] = 0;
        } else {
          setBlinkProgress(currentBlinkProgress);
        }
      }
    }
  });

  return (
    <>
      <primitive object={clonedScene} scale={1.5} position={[0, -1.5, 0]} />
      {/* Placeholder Headphones - Material properties refined */}
      <group position={[0, -1.5 + 0.8, 0]}> 
        <mesh position={[-0.28, 0, 0.05]} rotation={[0, -Math.PI / 8, 0]}>
          <sphereGeometry args={[0.12, 24, 24]} />
          <meshStandardMaterial color="#1A1A1A" roughness={0.2} metalness={0.1} /> {/* Refined */}
        </mesh>
        <mesh position={[0.28, 0, 0.05]} rotation={[0, Math.PI / 8, 0]}>
          <sphereGeometry args={[0.12, 24, 24]} />
          <meshStandardMaterial color="#1A1A1A" roughness={0.2} metalness={0.1} /> {/* Refined */}
        </mesh>
        <Torus args={[0.23, 0.03, 16, 40]} rotation={[Math.PI / 10, 0, 0]} position={[0, 0.1, -0.03]}>
          <meshStandardMaterial color="#111111" roughness={0.3} metalness={0.05} /> {/* Refined */}
        </Torus>
      </group>
    </>
  );
};

// Main Avatar3D Component (Lighting and Scene Setup)
const Avatar3D = () => {
  return (
    <div style={{ width: '100%', height: '400px', backgroundColor: '#101010' }}>
      <Canvas camera={{ position: [0, 0.2, 1.8], fov: 45 }} shadows>
        <ambientLight intensity={0.3} />
        <directionalLight 
            name="mainDirectionalLight"
            position={[3, 3, 2]} intensity={0.8} color={'#FFFFFF'} castShadow 
            shadow-mapSize-width={1024} shadow-mapSize-height={1024} // Verified
            shadow-camera-far={50} shadow-camera-left={-10} shadow-camera-right={10} shadow-camera-top={10} shadow-camera-bottom={-10}
        />
        <directionalLight 
            name="rimLight" 
            position={[-3, 2, -3]} 
            intensity={0.4} /* Adjusted intensity */ 
            color={'#6AD7FF'} 
        />
        <Environment preset="night" background={false} blur={0.5} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls 
            enableZoom={true} enablePan={true} target={[0, -0.2, 0]}
            minDistance={1} maxDistance={5}
            minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 1.8}
        />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial color="#181818" transparent opacity={0.8}/>
        </mesh>
      </Canvas>
    </div>
  );
};

useGLTF.preload('/models/stylized_character.glb');

export default Avatar3D;

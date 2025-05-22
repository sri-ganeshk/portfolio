import React, { useState, useEffect, useRef } from 'react';

const EYE_WIDTH = 30; // px
const PUPIL_WIDTH = 10; // px
const MAX_PUPIL_OFFSET = EYE_WIDTH / 2 - PUPIL_WIDTH / 2; // Max distance pupil can move from eye center
const MAX_ORB_ROTATION = 7; // Max degrees for orb tilt

const Avatar = () => {
  const [leftPupilTransform, setLeftPupilTransform] = useState('translate(-50%, -50%)');
  const [rightPupilTransform, setRightPupilTransform] = useState('translate(-50%, -50%)');
  const [orbTransform, setOrbTransform] = useState({ transform: '' }); // For orb tilt
  const orbRef = useRef(null);

  // Base styles
  const baseOrbStyle = {
    width: '150px',
    height: '150px',
    backgroundColor: '#202020', // Changed
    border: '1px solid #3a3a3a', // Added
    borderRadius: '50%',
    position: 'relative',
    display: 'flex', // Re-added as per subtask example
    justifyContent: 'center', // Re-added
    alignItems: 'center', // Re-added
    transition: 'transform 0.1s ease-out', // Confirmed
  };

  const eyeStyle = {
    width: `${EYE_WIDTH}px`,
    height: `${EYE_WIDTH}px`,
    backgroundColor: 'transparent', // Changed
    border: '1px solid #555555', // Changed
    borderRadius: '50%',
    position: 'absolute',
  };

  const basePupilStyle = {
    width: `${PUPIL_WIDTH}px`,
    height: `${PUPIL_WIDTH}px`,
    backgroundColor: '#f5f5f5', // Changed (light text color)
    borderRadius: '50%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transition: 'transform 0.05s linear', // Added
  };
  
  // Eye positions (relative to orb)
  const leftEyePosition = { top: '40px', left: '30px' }; 
  const rightEyePosition = { top: '40px', right: '30px' };


  useEffect(() => {
    const handleMouseMove = (event) => {
      if (orbRef.current) {
        const orbRect = orbRef.current.getBoundingClientRect();

        // --- Orb Tilt Calculation ---
        const orbCenterX = orbRect.left + orbRect.width / 2;
        const orbCenterY = orbRect.top + orbRect.height / 2;
        const deltaXOrb = event.clientX - orbCenterX;
        const deltaYOrb = event.clientY - orbCenterY;

        let rotateY = (deltaXOrb / (orbRect.width / 2)) * MAX_ORB_ROTATION;
        let rotateX = (-deltaYOrb / (orbRect.height / 2)) * MAX_ORB_ROTATION;

        rotateY = Math.max(-MAX_ORB_ROTATION, Math.min(MAX_ORB_ROTATION, rotateY));
        rotateX = Math.max(-MAX_ORB_ROTATION, Math.min(MAX_ORB_ROTATION, rotateX));
        
        setOrbTransform({ transform: `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` });

        // --- Pupil Movement Calculation (existing code) ---
        const leftEyeBaseX = parseFloat(leftEyePosition.left);
        const leftEyeBaseY = parseFloat(leftEyePosition.top);
        
        const leftEyeCenterX = orbRect.left + leftEyeBaseX + EYE_WIDTH / 2;
        const leftEyeCenterY = orbRect.top + leftEyeBaseY + EYE_WIDTH / 2;
        
        let deltaXLeft = event.clientX - leftEyeCenterX;
        let deltaYLeft = event.clientY - leftEyeCenterY;
        const distanceLeft = Math.sqrt(deltaXLeft * deltaXLeft + deltaYLeft * deltaYLeft);
        
        const pupilXLeft = (distanceLeft > 0) ? (deltaXLeft / distanceLeft) * Math.min(distanceLeft, MAX_PUPIL_OFFSET) : 0;
        const pupilYLeft = (distanceLeft > 0) ? (deltaYLeft / distanceLeft) * Math.min(distanceLeft, MAX_PUPIL_OFFSET) : 0;
        setLeftPupilTransform(`translate(calc(-50% + ${pupilXLeft}px), calc(-50% + ${pupilYLeft}px))`);

        const rightEyeBaseXFromRight = parseFloat(rightEyePosition.right);
        const rightEyeBaseY = parseFloat(rightEyePosition.top);

        const rightEyeCenterX = orbRect.left + orbRect.width - rightEyeBaseXFromRight - EYE_WIDTH / 2;
        const rightEyeCenterY = orbRect.top + rightEyeBaseY + EYE_WIDTH / 2;
        
        let deltaXRight = event.clientX - rightEyeCenterX;
        let deltaYRight = event.clientY - rightEyeCenterY;
        const distanceRight = Math.sqrt(deltaXRight * deltaXRight + deltaYRight * deltaYRight);

        const pupilXRight = (distanceRight > 0) ? (deltaXRight / distanceRight) * Math.min(distanceRight, MAX_PUPIL_OFFSET) : 0;
        const pupilYRight = (distanceRight > 0) ? (deltaYRight / distanceRight) * Math.min(distanceRight, MAX_PUPIL_OFFSET) : 0;
        setRightPupilTransform(`translate(calc(-50% + ${pupilXRight}px), calc(-50% + ${pupilYRight}px))`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []); // No dependencies needed as leftEyePosition and rightEyePosition are component-local constants

  return (
    <div ref={orbRef} style={{ ...baseOrbStyle, ...orbTransform }}>
      <div style={{ ...eyeStyle, ...leftEyePosition }}>
        <div style={{ ...basePupilStyle, transform: leftPupilTransform }}></div>
      </div>
      <div style={{ ...eyeStyle, ...rightEyePosition }}>
        <div style={{ ...basePupilStyle, transform: rightPupilTransform }}></div>
      </div>
    </div>
  );
};

export default Avatar;

import React, { useRef } from 'react';
import Globe from 'react-globe.gl';

const BackgroundGlobe = () => {
  const globeRef = useRef(null);

  // Start animation when component mounts
  React.useEffect(() => {
    const rotateGlobe = () => {
      if (globeRef.current) {
        globeRef.current.controls().autoRotate = true;
        globeRef.current.controls().autoRotateSpeed = 0.5; // Adjust rotation speed as needed
      }
    };

    rotateGlobe();

    // Stop animation when component unmounts
    return () => {
      if (globeRef.current) {
        globeRef.current.controls().autoRotate = false;
      }
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%'}}>
      <Globe
        ref={globeRef}
        globeImageUrl="https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/globe_dark.jpg"
      />
    </div>
  );
};

export default BackgroundGlobe;
//test c


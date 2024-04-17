import React, { useRef } from 'react';
import Globe from 'react-globe.gl';

const BackgroundGlobe = () => {
  const globeRef = useRef(null);

  React.useEffect(() => {
    const rotateGlobe = () => {
      const currentGlobeRef = globeRef.current;
      if (currentGlobeRef) {
        currentGlobeRef.controls().autoRotate = true;
        currentGlobeRef.controls().autoRotateSpeed = 0.5;
      }
    };

    rotateGlobe();

    return () => {
      const currentGlobeRef = globeRef.current;
      if (currentGlobeRef) {
        currentGlobeRef.controls().autoRotate = false;
      }
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Globe
        ref={globeRef}
        globeImageUrl="https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/globe_dark.jpg"
      />
    </div>
  );
};

export default BackgroundGlobe;

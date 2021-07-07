import React from 'react';

const WavyBackgroundImage = () => {
  return (
    <svg className="svg" style={{ width: 0, height: 0, position: 'absolute' }}>
      <clipPath id="modal-title-clip" clipPathUnits="objectBoundingBox">
        <path d="M0,0 V1 H0.513 C0.547,1,0.596,0.989,0.627,0.8 C0.658,0.611,0.688,0.63,0.732,0.63 H1 V0 H0"></path>
      </clipPath>
    </svg>
  );
};

export default WavyBackgroundImage;

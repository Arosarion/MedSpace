import { useState } from "react";

function AnatomyModel() {
  return (
    <div className="sketchfab-embed-wrapper">
      <iframe
        title="Adult CPR - Rescue Breathing"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking="true"
        execution-while-out-of-viewport="true"
        execution-while-not-rendered="true"
        web-share="true"
        src="https://sketchfab.com/models/5e1157a76f2e49c5b4391e8c31f14ae0/embed"
      >
      </iframe>
      <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
        
          <a href="https://sketchfab.com/3d-models/adult-cpr-rescue-breathing-5e1157a76f2e49c5b4391e8c31f14ae0?utm_medium=embed&utm_campaign=share-popup&utm_content=5e1157a76f2e49c5b4391e8c31f14ae0"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          Adult CPR - Rescue Breathing
        </a>{' '}
        by{' '}
        
          <a href="https://sketchfab.com/pulseducationofficial?utm_medium=embed&utm_campaign=share-popup&utm_content=5e1157a76f2e49c5b4391e8c31f14ae0"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          PulsEducation - 3D Education
        </a>{' '}
        on{' '}
        
          <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=5e1157a76f2e49c5b4391e8c31f14ae0"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          Sketchfab
        </a>
      </p>
    </div>
  );
}
export default AnatomyModel;
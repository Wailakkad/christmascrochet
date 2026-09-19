import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const AD_SCRIPT_URL = 'https://pl31415564.profitableratecpmnetwork.com/2034ab7ed7c7041ae3fb1c8141b0d898/invoke.js';
const CONTAINER_ID = 'container-2034ab7ed7c7041ae3fb1c8141b0d898';

export const AdBanner: React.FC = () => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Clear previous ad content
    const existingContainer = container.querySelector(`#${CONTAINER_ID}`);
    if (existingContainer) {
      existingContainer.innerHTML = '';
    }

    // Remove old script if any
    const oldScript = container.querySelector(`script[src="${AD_SCRIPT_URL}"]`);
    if (oldScript) {
      container.removeChild(oldScript);
    }

    // Inject fresh script
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = AD_SCRIPT_URL;
    container.appendChild(script);

    return () => {
      if (container.contains(script)) {
        container.removeChild(script);
      }
    };
  }, [location.pathname]);

  return (
    <div className="w-full flex justify-center py-4">
      <div ref={containerRef}>
        <div id={CONTAINER_ID} />
      </div>
    </div>
  );
};

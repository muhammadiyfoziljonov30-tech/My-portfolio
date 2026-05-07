import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      
      // Kichik nuqta (tez harakatlanadi)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
      }
      
      // Tashqi aylana (smooth/kechikib harakatlanadi)
      if (outlineRef.current) {
        outlineRef.current.animate({
          transform: `translate(${clientX}px, ${clientY}px)`
        }, { duration: 500, fill: "forwards" });
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      {/* Nuqta */}
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-green rounded-full pointer-events-none 'z-[9999]' -translate-x-1/2 -translate-y-1/2"
      />
      {/* Aylana */}
      <div 
        ref={outlineRef}
        className="fixed top-0 left-0 w-10 h-10 border-2 border-green rounded-full pointer-events-none 'z-[9998]' -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
      />
    </>
  );
};

export default CustomCursor;

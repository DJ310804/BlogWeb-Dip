import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function Layout() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Updated colors for lighter pink and darker blue
  const gradientColor1 = `rgba(255, 182, 193, 1)`; // Light pink
  const gradientColor2 = `rgba(30, 64, 128, 1)`; // Darker blue

  // Compute gradient angle
  const gradientAngle = Math.atan2(mouseY - window.innerHeight / 2, mouseX - window.innerWidth / 2) * 180 / Math.PI;

  // Calculate background position based on mouse coordinates
  const backgroundPositionX = (mouseX / window.innerWidth) * 100;
  const backgroundPositionY = (mouseY / window.innerHeight) * 100;

  return (
    <div
      className="font-[Poppins]"
      style={{
        backgroundImage: `linear-gradient(${gradientAngle}deg, ${gradientColor1}, ${gradientColor2})`,
        backgroundSize: '200% 200%',
        backgroundPosition: `${backgroundPositionX}% ${backgroundPositionY}%`,
        transition: 'background-position 0.1s ease-out'
      }}
    >
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;

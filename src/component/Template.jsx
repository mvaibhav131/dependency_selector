import React, { useEffect, useRef } from 'react';
import krishnaImage from '../img/krishnabasuri.jpeg'; // Assuming you have the Krishna image file in your project directory
import redRoseImage from '../img/red-rose-with-small-leaves-free-png-download.png'; // Assuming you have the red rose image file in your project directory
import yellowRoseImage from '../img/yellowish.png'; // Assuming you have the yellow rose image file in your project directory
import pinkRoseImage from '../img/pinkish.png'; // Assuming you have the pink rose image file in your project directory
import channelLogo from '../img/image.png'; // Assuming you have the channel logo file in your project directory
import headphoneLogo from '../img/headphones.webp'; // Assuming you have the channel logo file in your project directory


const roseImages = [redRoseImage, yellowRoseImage, pinkRoseImage];
const throwInterval = 1000; // Time interval between throwing roses (in milliseconds)
const numberOfRoses = 10; // Number of roses to display in each animation iteration

const KrishnaBackground = () => {
  const roseContainerRef = useRef(null);

  useEffect(() => {
    const roseContainer = roseContainerRef.current;

    if (!roseContainer) return;

    const roseImageEls = roseImages.map((roseImage) => {
      const imageEl = new Image();
      imageEl.src = roseImage;
      imageEl.classList.add('absolute', 'pointer-events-none', 'rounded-full');
      imageEl.style.width = '50px'; // Adjust the size of the rose image as needed
      imageEl.style.height = '50px'; // Adjust the size of the rose image as needed
      return imageEl;
    });

    let intervalId;

    const throwRose = () => {
      for (let i = 0; i < numberOfRoses; i++) {
        const roseIndex = Math.floor(Math.random() * roseImages.length);
        const roseImageEl = roseImageEls[roseIndex].cloneNode(true);
        const x = Math.random() * window.innerWidth;
        const y = -100;
        const duration = Math.random() * 2 + 1; // Adjust the duration of the animation as needed (smaller value for faster falling speed)

        roseImageEl.style.left = `${x}px`;
        roseImageEl.style.top = `${y}px`;
        roseImageEl.style.transition = `transform ${duration}s linear`;

        roseImageEl.addEventListener('transitionend', () => {
          roseImageEl.remove();
        });

        roseContainer.appendChild(roseImageEl);

        setTimeout(() => {
          roseImageEl.style.transform = `translateY(${window.innerHeight + 100}px)`;
        }, 100);
      }
    };

    intervalId = setInterval(throwRose, throwInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <img
        src={krishnaImage}
        alt="Krishna Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        ref={roseContainerRef}
      ></div>
      <div className="absolute bottom-6  left-5">
      <img
          src={headphoneLogo}
          alt="Channel Logo"
          className="w-33 h-22 rounded-full border-2 border-white relative"
        />
      </div>
            <div className="absolute bottom-6 left-5">
     
        <img
          src={channelLogo}
          alt="Channel Logo"
          className="w-32 h-32 rounded-3xl border-2 border-white"
        />
        
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-16 text-white text-center">
        <h1 className="text-5xl font-bold italic mb-7 text-white">Best of Radha Krishna:</h1>
        <ul className="text-5xl font-bold italic">
          <li>Tum Prem Ho</li>
          <li>Rutho Jo Tum</li>
          <li>Samay Samjayega</li>
          <li>Acchyutam Keshvam</li>
          <li>Radha Rani Lage</li>
        </ul>
      </div>
    </div>
  );
};

export default KrishnaBackground;

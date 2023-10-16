import React from 'react'
import '../Styling/wall.css'
import wallImage from '../Resources/White-Audi-Car-PNG-Image-Background.png'


export const Image = () => {
  
  return (
    <div>
       <img className ="size" src={wallImage} alt='Wallpaper' />
    </div>
  );
};

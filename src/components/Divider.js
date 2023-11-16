import React from 'react';
import heroDev from '../assets/heroDev.gif';

// Functional component
const Divider = () => {
  return (
    <div>
     <div className="flex flex-col w-full lg:flex-row px-20 py-10 bg-gray-50">
     <div className="font-semibold grid flex-grow h-32 card rounded-box place-items-center text-4xl">Are you ready to bring your vision to life? </div> 
  <div className="divider lg:divider-horizontal border-violet-950"></div> 
  <div className="grid flex-grow h-32 card rounded-box place-items-center">At Byte, we transform startup visions into robust full-stack MVPs, while expertly scaling, migrating, and optimizing your cloud infrastructure to save you costs at every step. Let us be the backbone of your digital journey, so you can focus on innovation.</div>
</div>
    </div>
  );
};

export default Divider;

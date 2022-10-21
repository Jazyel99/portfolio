import Image from 'next/image';
import React from 'react';

const GraduationComponent = () => {
  return (
    <>
      <h2
        className="text-2xl text-white text-center font-semibold"  
      >
        Academic graduation
      </h2>

      <div
        className="w-[60vw] mx-auto"
      >
        <Image
          src="/asserts/graduation_graphic.png"
          width={2930}
          height={3460}
          objectFit="cover"
          alt="graduatio graphic"
        />
      </div>
    </>
  );
}

export default GraduationComponent;

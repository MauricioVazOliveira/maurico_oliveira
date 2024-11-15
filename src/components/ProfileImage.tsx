import React from 'react';

export const ProfileImage = () => {
  return (
    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-purple-400">
      <img 
        src="/src/abc.jpeg"
        alt="Maurício Oliveira" 
        className="w-full h-full object-cover"
      />
    </div>
  );
};
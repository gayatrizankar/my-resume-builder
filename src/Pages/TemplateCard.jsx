import React from 'react';

const TemplateCard = ({ title, image, onClick }) => {
  return (
    <div
      className="h-[400px] w-[350px] border-2 border-white rounded-xl cursor-pointer overflow-hidden hover:scale-105 transition-transform duration-300"
      onClick={onClick}
    >
      <img
        className="w-full h-3/4 object-cover"
        src={image}
        alt={title}
      />
      <div className="text-center p-3">
        <p className="text-xl text-white font-semibold">{title}</p>
      </div>
    </div>
  );
};

export default TemplateCard;

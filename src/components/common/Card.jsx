import React from 'react';

const Card = ({ 
  title, 
  description, 
  icon, 
  gradient, 
  onClick, 
  className = "",
  children 
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-gradient-to-br ${gradient} rounded-2xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl ${className}`}
    >
      {icon && <div className="text-4xl mb-4">{icon}</div>}
      {title && <h3 className="text-xl font-bold text-white mb-2">{title}</h3>}
      {description && <p className="text-white/80 text-sm">{description}</p>}
      {children}
    </div>
  );
};

export default Card;
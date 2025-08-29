import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-black/20 backdrop-blur-sm shadow-lg sticky top-0 z-10">
      <div className="container mx-auto px-4 py-5 max-w-4xl">
        <h1 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
          Adnan’s BFHL Data Processor
        </h1>
      </div>
    </header>
  );
};

export default Header;
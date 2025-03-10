import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-amber-600" />
    </div>
  );
};

export default Loader;
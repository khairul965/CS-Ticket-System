import React from 'react'

export default function Banner({ inProgress, resolved }) {
  return (
  
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1200px] mx-auto p-6">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-xl p-10 text-center " 
     >
        <h2 className="text-xl">In Progress</h2>
        <p className="text-4xl font-bold mt-2">{inProgress}</p>
      </div>

      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-10 text-center">
        <h2 className="text-xl">Resolved</h2>
        <p className="text-4xl font-bold mt-2">{resolved}</p>
      </div>
    </div>
 
    
  );
};

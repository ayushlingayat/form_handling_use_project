import React from 'react';

const Card = ({ user , handleRemove , id }) => {
  return (
    <div className='w-52 h-full bg-zinc-100 rounded-md flex flex-col items-center p-2'>
      <div className="image w-[3vw] h-[3vw] rounded-full bg-pink-300 overflow-hidden">
        <img className='w-full h-full object-cover' src={user.image} alt={user.name} /> {/* Added alt attribute */}
      </div>
      <h1 className='mt-1 text-xl font-semibold'>{user.name}</h1>
      <h4 className='opacity-60 text-sm font-semibold'>{user.email}</h4>
      <p className='mt-1 text-center text-xs font-semibold leading-1 tracking-tight'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, dignissimos!</p>
      <button onClick={()=>handleRemove(id)} className='bg-red-600 rounded-md px-3 py-1 text-white text-xs font-semibold mt-4'>Remove it</button>
    </div>
  );
};

export default Card;

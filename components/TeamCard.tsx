import React from 'react';

interface TeamCardProps {
  id: number;
  name: string;
  role: string;
  avatarUrl?: string;
  bio?: string;
  isBoss?: boolean;
  rotateClass?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ id, name, role, avatarUrl, bio, isBoss, rotateClass = 'rotate-0' }) => {
  return (
    <div className={`
        relative p-6 bg-black border-4 transition-all duration-200 group transform ${rotateClass}
        ${isBoss ? 'border-[#22b4ff] hover:scale-105 z-10' : 'border-white hover:z-20 hover:scale-110 hover:rotate-0'}
    `}>
      
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#ffffff]/30 backdrop-blur-sm rotate-2 z-30"></div>

      
      <div className={`absolute inset-0 bg-[#0066ff] translate-x-3 translate-y-3 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform ${isBoss ? 'bg-[#22b4ff]' : ''}`}></div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-start">
            <h3 className="text-3xl font-black uppercase leading-none break-all text-white group-hover:text-black group-hover:bg-white px-1">
                {name}
            </h3>
            <span className="font-mono text-xl font-bold bg-white text-black px-2 border-2 border-black">
                #{id}
            </span>
        </div>
        
        <div className="relative h-64 w-full border-4 border-black bg-[#111] overflow-hidden">
            <img 
                src={avatarUrl} 
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-100" 
                alt="ROJA"
            />
            {isBoss && <div className="absolute bottom-0 right-0 bg-[#ccff00] text-black font-black text-xl px-4 py-2 -rotate-6 translate-y-2 translate-x-2 border-4 border-black shadow-[4px_4px_0px_#000]">BOSS</div>}
        </div>

        <div>
            <div className={`text-white inline-block px-2 py-1 font-mono font-bold text-sm mb-2 transform ${isBoss ? 'bg-[#22b4ff] rotate-2' : 'bg-[#0066ff] -rotate-1'}`}>
                {role}
            </div>
            <p className="font-mono text-sm leading-tight text-gray-300 border-l-4 border-white pl-3 group-hover:text-white">
                {bio}
            </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
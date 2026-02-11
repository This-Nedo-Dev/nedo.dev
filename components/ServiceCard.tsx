import React from 'react';

interface ServiceProps {
    title: string;
    price: string;
    desc: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ title, price, desc }) => {
    return (
        <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_#22b4ff] hover:shadow-[16px_16px_0px_#ccff00] hover:-translate-y-2 hover:-translate-x-2 transition-all duration-200 group relative">
            
            
            <div className="absolute top-0 right-0 w-4 h-4 bg-black"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 bg-black"></div>

            <h3 className="font-black text-3xl mb-4 text-black uppercase leading-[0.9] group-hover:text-[#0066ff] transition-colors">
                {title}
            </h3>
            
            <div className="flex justify-between items-center mb-6 border-b-4 border-black pb-2">
                <span className="font-mono font-bold text-xs text-gray-500">СТОИМОСТЬ:</span>
                <div className="font-mono bg-[#ccff00] text-black px-2 py-1 font-bold text-lg transform rotate-2 border-2 border-black shadow-[2px_2px_0px_#000]">
                    {price}
                </div>
            </div>
            
            <p className="font-mono font-bold text-md text-gray-900 leading-tight">
                {desc}
            </p>
        </div>
    );
};

export default ServiceCard;
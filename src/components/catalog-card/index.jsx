'use client';

import Image from 'next/image';
import React from 'react'
import { MoveRight } from "lucide-react";


const CatalogCard = ({ catalog }) => {
  return (
    <div
      onClick={() => console.log(catalog)}
      className="bg-[#F2F2F2] rounded-2xl text-[#454545] p-[20px] md:p-[32px] gap-3 h-full flex flex-col md:flex-row  justify-between hover:scale-105 duration-300 transition-transform"
    >
      <div className="flex flex-col items-start justify-between h-full">
        <h3 className="font-medium md:text-[20px]  text-[16px]">
          {catalog.title}
        </h3>
        <p className="md:flex items-center hidden whitespace-nowrap">
          {catalog.price}{" "}
          <span>
            {" "}
            <MoveRight className="text-[#9F9F9F] ml-2 hover:ml-4 duration-300 transition-transform " />
          </span>
        </p>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <Image
          src={catalog.image}
          alt={catalog.title}
          width={200}
          height={200}
          className="hidden md:block"
          priority
        />
        <Image
          src={catalog.image}
          alt={catalog.title}
          width={80}
          height={80}
          className="block md:hidden"
          priority
        />
      </div>
      <div className="flex items-center md:hidden text-[14px]">
        {catalog.price}{" "}
        <MoveRight className="text-[#9F9F9F] ml-1 md:ml-2 hover:ml-4 duration-300 transition-transform " />
      </div>
    </div>
  );
};

export default CatalogCard
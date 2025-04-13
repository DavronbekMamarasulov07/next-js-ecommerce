'use client'
import React from 'react'
import { Button } from '../ui/button';
import { MoveRight } from 'lucide-react';
import { useRouter } from "next/navigation";


const ButtonLink = ({ children, link }) => {
  const router = useRouter();
  
   const handleCatalogBtnClick = () => {
     router.push(link);
   };
  return (
    <Button
      onClick={() => handleCatalogBtnClick()}
      variant={"outline"}
      className=" border border-[#454545]  rounded-4xl w-full mt-[32px] md:mt-0 items-center justify-center  h-[48px] !px-[50px]"
    >
      <p className="text-[#454545] text-[16px]">{children}</p>
      <MoveRight
        size={20}
        className="text-[#454545] ml-2 hover:ml-4 duration-300 transition-transform "
      />
    </Button>
  );
}

export default ButtonLink
'use client';
import React from "react";
import Container from "../container";
import BrandCard from "../brand-card";
import { Button } from "../ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
import { brands } from "../../data";

const Brand = () => {
  
  return (
    <Container>
      <div className="md:mt-[100px] mt-[60px]">
        <div className="w-full flex items-center justify-between md:mb-[40px] mb-[32px]">
          <h2 className="md:text-[40px] text-[28px]  text-[#454545] font-bold ">
            Только проверенные бренды
          </h2>
          <div className="hidden md:flex gap-2">
            <Button variant={"outline"} className="!px-4 rounded-4xl  py-1" size="md">
              <MoveLeft  size={40} style={{ width: '25px', height: '25px' }}/>
            </Button>
            <Button variant={"outline"} className="!px-4 rounded-4xl  py-1" size="md">
              <MoveRight  size={40} style={{ width: '25px', height: '25px' }}/>
            </Button>
          </div>
        </div>
        <div className="flex md:flex-wrap overflow-x-auto md:overflow-x-visible gap-4">
          {brands.map((brand) => (
            <div className="min-w-[100%] md:min-w-0 md:flex-1" key={brand.id}>
              <BrandCard brand={brand} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Brand;

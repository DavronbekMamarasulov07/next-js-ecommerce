"use client";

import React, { useState } from "react";
import Container from "../container";
import BrandCard from "../brand-card";
import { Button } from "../ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
import { brands } from "../../data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Brand = () => {
  const [emblaApi, setEmblaApi] = useState(null); 

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <Container>
      <Carousel
        opts={{ align: "start" , loop: true}}
        setApi={setEmblaApi} 
        className="w-full"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <div className="md:mt-[100px] mt-[60px]">
          <div className="w-full flex items-end md:items-center justify-between md:mb-[40px] mb-[32px]">
            <h2 className="md:text-[40px] text-[28px] text-[#454545] font-bold">
              Только проверенные бренды
            </h2>
            <div className="flex gap-2">
              <Button
                onClick={scrollPrev}
                variant="outline"
                className="!px-4 rounded-4xl py-1"
              >
                <MoveLeft size={25} />
              </Button>
              <Button
                onClick={scrollNext}
                variant="outline"
                className="!px-4 rounded-4xl py-1"
              >
                <MoveRight size={25} />
              </Button>
            </div>
          </div>

          <div className="flex md:flex-wrap gap-4">
            <CarouselContent>
              {brands.map((brand) => (
                <CarouselItem
                  key={brand.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <BrandCard brand={brand} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </div>
      </Carousel>
    </Container>
  );
};

export default Brand;

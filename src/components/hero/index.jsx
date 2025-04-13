import React, { useState } from "react"
import Container from "../container"
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div className="w-full mx-auto bg-[#F2F2F2] rounded-3xl max-w-[1400px] mt-[70px] flex items-center justify-center gap-[150px]">
      <div className="w-full flex flex-col items-start max-w-[700px] p-6 gap-3">
        <h2 className="text-6xl text-[#454545] font-bold">
          Скидка 15% <br />
          на все подвесные светильники
        </h2>
        <span className="text-[45px] bg-[#454545] text-white px-5 pb-1 -ml-5  font-bold rounded-[50px]">
          {" "}
          до 5 февраля
        </span>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full max-w-[400px]"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Hero
import React from "react"
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { heroImages } from "../../data";

const Hero = () => {

  return (
    <div className="w-full mx-auto h-full px-[20px]  max-w-[1400px] mt-[20px] md:mt-[70px]">
      <div className="bg-[#F2F2F2] w-full rounded-3xl flex md:flex-row flex-col-reverse items-center justify-center gap-6 md:gap-[50px]">
        <div className="w-full flex flex-col  items-start max-w-[700px] p-6 gap-3 0">
          <h2 className="text-[28px] md:text-6xl text-[#454545] font-bold">
            Скидка 15% <br />
            на все подвесные светильники
          </h2>
          <span className="text-[28px] md:text-[45px] bg-[#454545] text-white px-5 pb-1 md:-ml-5  font-bold rounded-[50px]">
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
          <CarouselContent className="md:mb-[50px]">
            {heroImages.map((image) => (
              <CarouselItem
                key={image.id}
                className="w-full h-full items-center flex  justify-center"
              >
                <Image
                  src={image.image}
                  alt="hero"
                  width={450}
                  height={450}
                  className="hidden md:block"
                />
                <Image
                  src={image.image}
                  alt="hero"
                  width={250}
                  height={250}
                  className="md:hidden block"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default Hero
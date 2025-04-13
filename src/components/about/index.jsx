'use client'
import React from 'react'
import Navbar from '../navbar'
import Brand from '../brand'
import Blog from '../blog'
import Footer from '../footer'
import CountUp from "react-countup";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Container from '../container'
import BlogAbout from '../blog-about'


const AboutComponent = () => {
  return (
    <div>
      <Navbar />
      <main className='mb-[30px] md:mb-[100]'>
        <Container>
          <div className="mt-[30px] md:mt-[60px] ">
            <Breadcrumb className="">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Главная</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-foreground capitalize">
                    О компании
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="mt-[6px]  md:mt-[15px] w-full flex flex-col md:flex-row items-start justify-between gap-6">
              <div className="w-full flex flex-col items-start gap-6 md:gap-5 max-w-[530px] ">
                <h3 className="text-[#454545] md:text-[64px] font-bold text-[28px]">
                  О компании
                </h3>
                <div className="w-full flex flex-col md:gap-[80px] gap-[50px] hover:scale-105 duration-300 transition-transform items-start bg-[#F2F2F2] rounded-lg  md:p-8 p-6">
                  <h4 className="text-[#454545] text-[64px] font-bold ">
                    <CountUp start={0} end={170} duration={3} />+
                  </h4>
                  <p className="text-[#454545] text-4 font-medium">Товаров</p>
                </div>
                <div className="w-full flex flex-col md:gap-[80px] gap-[50px] hover:scale-105 duration-300 transition-transform items-start bg-[#F2F2F2] rounded-lg  md:p-8 p-6">
                  <h4 className="text-[#454545] text-[64px] font-bold ">
                    <CountUp start={0} end={1000} duration={3} />+
                  </h4>
                  <p className="text-[#454545] text-4 font-medium">
                    Довольных покупателей
                  </p>
                </div>
                <div className="w-full flex flex-col md:gap-[80px] gap-[50px] hover:scale-105 duration-300 transition-transform items-start bg-[#F2F2F2] rounded-lg  md:p-8 p-6">
                  <h4 className="text-[#454545] text-[64px] font-bold ">
                    <CountUp start={0} end={170} duration={3} />+
                  </h4>
                  <p className="text-[#454545] text-4 font-medium">Товаров</p>
                </div>
              </div>
              <div className="flex  flex-col gap-5 md:gap-8 w-full max-w-[640px] md:mt-[30px] md:text-[20px] text-[#454545]">
                <p>
                  Интернет-магазин NORNLIGHT предлагает широкий ассортимент
                  светильников для освещения вашего дома или офиса. У нас вы
                  найдете разнообразные модели светильников, от современных и
                  стильных до классических и элегантных. Мы предлагаем
                  качественные и надежные светильники от лучших производителей,
                  которые подарят вам комфорт и уют.
                </p>
                <p>
                  Покупая светильники в нашем интернет-магазине, вы получаете
                  отличное соотношение цены и качества. Мы осуществляем доставку
                  по всей России, чтобы каждый клиент мог насладиться прекрасным
                  светом и удобством покупки онлайн. Обратитесь к нам сегодня и
                  превратите ваш дом в оазис тепла и света с NORNLIGHT!
                </p>
                <p>
                  Интернет-магазин NORNLIGHT предлагает широкий ассортимент
                  светильников для освещения вашего дома или офиса. У нас вы
                  найдете разнообразные модели светильников, от современных и
                  стильных до классических и элегантных. Мы предлагаем
                  качественные и надежные светильники от лучших производителей,
                  которые подарят вам комфорт и уют.
                </p>
                <p>
                  Покупая светильники в нашем интернет-магазине, вы получаете
                  отличное соотношение цены и качества. Мы осуществляем доставку
                  по всей России, чтобы каждый клиент мог насладиться прекрасным
                  светом и удобством покупки онлайн. Обратитесь к нам сегодня и
                  превратите ваш дом в оазис тепла и света с NORNLIGHT!
                </p>
              </div>
            </div>
          </div>
        </Container>
      <Brand />
        <Blog />
        <div className='block md:hidden'>
          <BlogAbout />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AboutComponent
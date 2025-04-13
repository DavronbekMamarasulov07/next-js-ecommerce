'use client';
import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import Container from "../container";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Button } from "../ui/button";
import YandexMap from "../map";
import { toast } from "sonner";

const ContactInfo = () => {

  const handleOrder = () => {
    toast.success("Заявка отправлен"); 
  }
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <main className="flex-grow mt-[30px] md:mt-[60px] ">
        <Container>
          <div>
            <div>
              <Breadcrumb className="">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Главная</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink className="text-foreground capitalize">
                      Контакты
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="w-full flex flex-col md:flex-row items-start justify-between gap-6 md:mb-[50px] mb-[30px]">
                <div className="w-full">
                  <h3 className="text-[#454545] md:text-[64px] font-bold text-[28px]">
                    Контакты
                  </h3>
                </div>
                <div className="w-full max-w-[350px] md:mt-[20px] ">
                  <Link
                    className="text-[#454545] font-semibold text-[24px] mb-3 block"
                    href="tel: 8 (800) 890-46-56"
                  >
                    8 (800) 890-46-56
                  </Link>
                  <p className="text-[16px] md:text-[20px] text-[#454545]">
                    Пн-Пт: 10:00 до 19:00 <br />
                    Сб-Вс: заказ через корзину Телефоны: 8 (800) 890-46-56
                  </p>
                </div>
              </div>
            </div>
            <div className="relative md:mb-[90px]">
              <div className="w-full  rounded-xl overflow-hidden shadow-xl">
                <YandexMap />
              </div>
              <div className="w-full flex flex-col md:flex-row items-start gap-6 md:items-center max-w-[1000px] mx-auto justify-between bg-[#fff] rounded-xl px-[35px] py-[30px] md:absolute md:bottom-[10%] md:left-[50%] md:translate-x-[-50%] mt-[30px] mb-[80px] md:mb-0">
                <div className="flex flex-col gap-2">
                  <h4 className="md:text-[20px] font-semibold text-[#454545]">
                    Адрес магазина
                  </h4>
                  <Link href="#" className="text-[16px] text-[#707070]">
                    г. Москва, Дмитровское шоссе д.100с2
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="md:text-[20px] font-semibold text-[#454545]">
                    Почта
                  </h4>
                  <Link
                    href={"mailto: NORNLIGHT@mail.ru"}
                    className="text-[16px] text-[#707070]"
                  >
                    NORNLIGHT@mail.ru
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-[16px] font-semibold text-[#454545]">
                    Телефон
                  </h4>
                  <Link
                    className="text-[16px] text-[#707070]"
                    href="tel: 8 (800) 890-46-56"
                  >
                    8 (800) 890-46-56
                  </Link>
                </div>
                  <Button onClick={handleOrder} className="bg-[#454545] rounded-4xl h-[50px] md:h-[45px] !px-[50px] w-full md:w-auto">
                    Оставить заявку
                  </Button>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default ContactInfo;

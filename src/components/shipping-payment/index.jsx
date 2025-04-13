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
import YandexMap from "../map";

const ShippingAndPayment = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <main className="flex-grow my-[30px] md:mt-[60px] ">
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
                      Доставка и оплата
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="w-full flex flex-col md:flex-row items-start justify-between gap-6 md:mb-[100px] mb-[30px]">
                <div className="w-full mt-[20px]">
                  <h3 className="text-[#454545] md:text-[64px] font-bold text-[28px] max-w-[320px] leading-none">
                    Доставка и оплата
                  </h3>
                </div>
                <div className="w-full flex flex-col max-w-[640px] gap-6 mg:gap-[50px] ">
                  <div className="w-full max-w-[640px] md:mt-[20px]  flex flex-col  gap-3 md:gap-7">
                    <h4 className="md:text-[24px] font-semibold text-[#000]">
                      Доставка
                    </h4>
                    <p className="md:text-[20px] text-[#454545] ">
                      Мы осуществляем доставку со склада по Москве и Московской
                      области собственной курьерской службой. Транспортными
                      компаниями нашу продукцию мы доставляем по всей территории
                      РФ, а так же по всем странам СНГ.{" "}
                      <span className="text-[#2F4DA3] hover:underline cursor-pointer">
                        Сроки доставки: 4—6 недель
                      </span>
                    </p>
                  </div>
                  <div className="w-full max-w-[640px] md:mt-[20px]  flex flex-col  gap-3 md:gap-7">
                    <h4 className="md:text-[24px] font-semibold text-[#000]">
                      Курьерская доставка
                    </h4>
                    <p className="md:text-[20px] text-[#454545]">
                      БЕСПЛАТНО доставим в приделах МКАД любой заказ{" "}
                      <span className="text-[#2F4DA3] hover:underline cursor-pointer">
                        {" "}
                        от 5000 ₽
                      </span>
                      . <br />
                      Заказы свыше имеют{" "}
                      <span className="text-[#2F4DA3] hover:underline cursor-pointer">
                        30 000 ₽
                      </span>{" "}
                      бесплатную доставку, включительно 15 км от МКАД
                    </p>
                  </div>
                  <div className="w-full max-w-[640px] md:mt-[20px]  flex flex-col  gap-3 md:gap-7">
                    <h4 className="md:text-[24px] font-semibold text-[#000]">
                      Самовывоз
                    </h4>
                    <p className="md:text-[20px] text-[#454545]">
                      Любой заказ можно забрать самостоятельно по адресу: г.
                      Москва,Дмитровское шоссе д.100с2
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full rounded-xl overflow-hidden max-h-[250px] md:max-h-full shadow-xl">
              <YandexMap />
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default ShippingAndPayment;

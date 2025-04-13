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

const GuaranteeComponent = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <main className="flex-grow mt-[30px] md:mt-[60px] ">
        <Container>
          <div>
            <Breadcrumb className="">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Главная</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-foreground capitalize">
                    Гарантия
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="w-full flex flex-col md:flex-row items-start justify-between gap-6 md:mb-[100px] mb-[60px]">
              <div className="w-full">
                <h3 className="text-[#454545] md:text-[64px] font-bold text-[28px]">
                  Гарантия
                </h3>
              </div>
              <div className="w-full max-w-[640px] md:mt-[20px]">
                <h4 className="md:text-[24px] font-semibold text-[#454545]">
                  Обмен и возврат по желанию покупателя
                </h4>
                <p className="md:text-[20px] text-[#454545]">
                  Все товары в магазине «NornLight» имеют гарантию. Она
                  заявляется производителем и имеет определенный срок действия
                  на различные группы товаров.
                  <br /> Если ваше изделие вышло из строя в течение гарантийного
                  срока вы можете обратиться к нам и получить бесплатный ремонт.
                  <br /> Для этого нужно: <br /> • Предоставить чек, накладную
                  или сообщить почту или номер телефона, указанные при
                  оформлении заказа. <br /> • Привезти товар к нам на склад или
                  отправить его транспортной компанией.
                  <br /> • После товар отправляется на экспертизу и ремонт. Если
                  ремонт невозможен, мы обменяем изделие на аналогичное либо
                  вернем деньги за покупку. <br /> Обращаем внимание, что
                  «А-Свет» не является сервисным центром, а выполняет роль
                  посредника между клиентом и поставщиком. <br /> Поэтому сроки
                  проведения ремонта могут отличаться для товаров различных
                  брендов.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default GuaranteeComponent;

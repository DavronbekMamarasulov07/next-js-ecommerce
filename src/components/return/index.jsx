import React from "react";
import Navbar from "../navbar";
import Container from "../container";
import Footer from "../footer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const ReturnComponent = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-[30px] md:mt-[100px]">
        <Container>
          <div className="parent-div">
            <Breadcrumb className="">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Главная</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-foreground capitalize">
                    Возврат
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="w-full flex flex-col md:flex-row items-start justify-between gap-6 md:mb-[100px] mb-[60px]">
              <div className="w-full">
                <h3 className="text-[#454545] md:text-[64px] font-bold text-[28px]">
                  Возврат
                </h3>
              </div>
              <div className="w-full flex flex-col max-w-[640px] gap-6 mg:gap-[50px] ">
                <div className="w-full max-w-[640px] md:mt-[20px] flex flex-col  gap-3 md:gap-7">
                  <h4 className="md:text-[24px] font-semibold text-[#000]">
                    Обмен и возврат по желанию покупателя
                  </h4>
                  <p className="text-[16px] md:text-[20px]">
                    Если товар по каким-то причинам не подошел вам, вы имеете{" "}
                    <br />
                    право вернуть его или обменять на другой в течение 7 дней* с{" "}
                    <br />
                    момента покупки при соблюдении следующих условий:
                  </p>
                  <ul className="list-disc pl-5 text-[#2F4DA3] ml-2 ">
                    <li className="text-[16px] md:text-[20px] hover:underline cursor-pointer">
                      Товар имеет первоначальный вид, имеется товарная кондиция;
                    </li>
                    <li className="text-[16px] md:text-[20px] hover:underline cursor-pointer">
                      Товар имеет полную комплектацию, включая упаковочные
                      материалы;
                    </li>
                    <li className="text-[16px] md:text-[20px] hover:underline cursor-pointer">
                      Товар не имеет следов подключался и не имеет признаков
                      монтажа;
                    </li>
                    <li className="text-[16px] md:text-[20px] hover:underline cursor-pointer">
                      Упаковка товара не имеет повреждений, присутствует
                      первоначальный товарный вид;
                    </li>
                    <li className="text-[16px] md:text-[20px] hover:underline cursor-pointer">
                      Есть документ, подтверждающий покупку в нашем
                      интернет-магазине.
                    </li>
                    <li className="text-[16px] md:text-[20px] hover:underline cursor-pointer">
                      Для возврата товара необходимо привезти его к нам в офис.
                    </li>
                    <li className="text-[16px] md:text-[20px] hover:underline cursor-pointer">
                      Товар из других городов можно прислать нам транспортной
                      компанией, при этом услуги транспортной компании
                      оплачиваются клиентом.
                    </li>
                    <li className="text-[16px] md:text-[20px] hover:underline cursor-pointer">
                      *В течение 14 дней для отдельных брендов. При оформлении
                      заказа уточните у менеджера
                    </li>
                  </ul>
                </div>
                <div className="w-full max-w-[640px] md:mt-[20px]  flex flex-col gap-3 md:gap-7">
                  <h4 className="md:text-[24px] font-semibold text-[#000]">
                    Обмен и возврат по ошибке продавца
                  </h4>
                  <p>Причины обмена или возврата по ошибке продавца:</p>
                  <ul className="list-disc pl-5 text-[#2F4DA3]  ml-2 ">
                    <li className="text-[16px] md:text-[20px] hover:underline cursor-pointer">
                      Неполная комплектация товара
                    </li>
                    <li className="text-[16px] md:text-[20px] hover:underline cursor-pointer">
                      Брак или дефект товара
                    </li>
                    <li className="text-[16px] md:text-[20px] hover:underline cursor-pointer">
                      Если вы выявили дефект, брак или неполную комплектацию
                      товара, необходимо сделать фото дефекта и отправить на
                      почту mail@at-svet.ru, указав краткое описание характера
                      брака/
                    </li>
                    <li className="text-[16px] md:text-[20px] hover:underline cursor-pointer">
                      Мы заменим бракованный товар или довезем недостающие
                      части. Доставка будет осуществлена бесплатно
                    </li>
                  </ul>
                </div>
                <div className="w-full max-w-[640px] md:mt-[20px]  flex flex-col gap-3 md:gap-7">
                  <h4 className="md:text-[24px] font-semibold text-[#000]">
                    Возврат денежных средств
                  </h4>
                  <p className="text-[16px] md:text-[20px]">
                    Возврат денежных средств осуществляется путем перевода на
                    банковские реквизиты покупателя при наличии заявления от
                    покупателя.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default ReturnComponent;

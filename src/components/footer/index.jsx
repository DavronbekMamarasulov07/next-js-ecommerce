"use client"

import React from 'react'
import Container from '../container';
import Link from 'next/link';
import { Sun } from 'lucide-react';
import { useRouter } from "next/navigation";
import Image from "next/image";

const Footer = () => {
    const router = useRouter();
  const handleCatalogBtnClick = () => {
    router.push("/");
  };
  return (
    <div className="bg-[#F2F2F2] py-[45px]">
      <Container>
        <div className="flex items-start lg:items-center  flex-col lg:flex-row gap-[30px] lg:gap-[150px]">
          <div className="flex flex-col  gap-[24px] md:gap-[50px]">
            <div
              onClick={() => handleCatalogBtnClick()}
              className="flex items-center hover:cursor-pointer"
            >
              <div className="bg-[#454545] text-white p-1 mr-2 text-xs rounded-[4px]">
                {" "}
                <Sun />
              </div>
              <span className="font-semibold text-lg md:text-[40px]">
                NORNLIGHT
              </span>
            </div>
            <div className="flex items-start flex-col gap-[15px] md:gap-[30px]">
              <Link
                className="text-black font-bold"
                href="tel: 8 (800) 890-46-56"
              >
                8 (800) 890-46-56
              </Link>
              <Image
                src="/images/banklogos.png"
                alt="banklogos"
                width={222}
                height={39}
                priority
              />
              <Link className="text-[#8f8e8e] " href="/policy">
                Политика конфиденциальности
              </Link>
              <Link className="text-[#8f8e8e] " href="/delivery">
                Пользовательское соглашение
              </Link>
              <div className="flex items-center justify-center gap-1 md:gap-3 ">
                <span className="hover:scale-105 duration-300 transition-transform text-[#454545] border border-[#454545] px-[8px] py-[6px] rounded-full">
                  VK
                </span>
                <span className="hover:scale-105 duration-300 transition-transform text-[#454545] border border-[#454545] px-[8px] py-[6px] rounded-full">
                  VK
                </span>
                <span className="hover:scale-105 duration-300 transition-transform text-[#454545] border border-[#454545] px-[8px] py-[6px] rounded-full">
                  VK
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-start md:items-center gap-[0px] md:gap-[140px] flex-col md:flex-row ">
            <div className="">
              <h3 className="md:text-[24px] mb-3 md:mb-[32px] font-bold">
                Покупателям
              </h3>
              <ul className="text-[#8f8e8e] flex flex-col item-start gap-1 md:gap-[27px]">
                <li>
                  <Link href="/">О компании</Link>
                </li>
                <li>
                  <Link href="/">Доставка и оплата</Link>
                </li>
                <li>
                  <Link href="/">Возврат</Link>
                </li>
                <li>
                  <Link href="/">Гарантии</Link>
                </li>
                <li>
                  <Link href="/">Контакты</Link>
                </li>
                <li>
                  <Link href="/">Блог</Link>
                </li>
              </ul>
            </div>

            <div className="mt-[20px] md:mt-0">
              <h3 className="md:text-[24px] mb-3 md:mb-[32px] font-bold">Товары</h3>
              <ul className="text-[#8f8e8e] flex flex-col item-start gap-1 md:gap-[27px]">
                <li>
                  <Link href="/">Люстры</Link>
                </li>
                <li>
                  <Link href="/">Светильники</Link>
                </li>
                <li>
                  <Link href="/">Бра</Link>
                </li>
                <li>
                  <Link href="/">Торшеры</Link>
                </li>
                <li>
                  <Link href="/">Комплектующие</Link>
                </li>
                <li>
                  <Link href="/">Настольные лампы</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#F2F2F2]">w</h3>
              <ul className="text-[#8f8e8e] flex flex-col item-start gap-1 md:gap-[27px]">
                <li>
                  <Link href="/">Споты</Link>
                </li>
                <li>
                  <Link href="/">Трековые светильники</Link>
                </li>
                <li>
                  <Link href="/">Уличные светильники</Link>
                </li>
                <li>
                  <Link href="/">Технические светильники</Link>
                </li>
                <li>
                  <Link href="/">Светодиодные ленты</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer
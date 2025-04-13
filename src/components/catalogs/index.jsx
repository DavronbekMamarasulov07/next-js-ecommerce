import React from "react";
import CatalogCard from "../catalog-card";
import Container from "../container";
import { MoveRight } from "lucide-react";
import { Button } from "../ui/button";
import ButtonLink from "../button-link";

const Catalogs = () => {

  const catalogs = [
    {
      id: 1,
      title: "Люстры",
      link: "/catalog",
      image: "/images/catalog1.png",
      price: "От 540₽",
    },
    {
      id: 2,
      title: "Светильники",
      link: "/catalog",
      image: "/images/catalog2.png",
      price: "От 540₽",
    },
    {
      id: 3,
      title: "Бра",
      link: "/catalog",
      image: "/images/catalog3.png",
      price: "От 540₽",
    },
    {
      id: 4,
      title: "Торшеры",
      link: "/catalog",
      image: "/images/catalog4.png",
      price: "От 540₽",
    },
    {
      id: 5,
      title: "Настольные лампы",
      link: "/catalog",
      image: "/images/catalog5.png",
      price: "От 540₽",
    },
    {
      id: 6,
      title: "Споты",
      link: "/catalog",
      image: "/images/catalog6.png",
      price: "От 540₽",
    },
  ];

 

  return (
    <Container>
      <div className="md:mt-[100px] mt-[60px]">
        <div className="w-full flex items-center justify-between md:mb-[40px] mb-[32px]">
          <h2 className="md:text-[40px] text-[28px]  text-[#454545] font-bold ">
            Каталог
          </h2>
          <div className="hidden md:flex">
            <ButtonLink link="/catalog">Весь каталог</ButtonLink>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5 k">
          {catalogs.map((catalog) => (
            <CatalogCard key={catalog.id} catalog={catalog} />
          ))}
        </div>
        <div className="flex md:hidden">
          <ButtonLink link="/catalog">Весь каталог</ButtonLink>
        </div>
      </div>
    </Container>
  );
};

export default Catalogs;

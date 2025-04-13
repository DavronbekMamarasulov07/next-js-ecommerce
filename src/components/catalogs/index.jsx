import React from "react";
import CatalogCard from "../catalog-card";
import Container from "../container";
import ButtonLink from "../button-link";
import { catalogs } from "../../data";

const Catalogs = () => {

  

 

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

import React from 'react'
import Container from '../container'
import ProductCard from '../product-card'
import ButtonLink from '../button-link';

const Products = ({products}) => {
  return (
    <Container>
      <div className="w-full mt-[70px]">
        <div className="w-full flex items-center justify-between md:mb-[40px] mb-[32px]">
          <h2 className="md:text-[40px] text-[28px]  text-[#454545] font-bold ">
            Популярные товары
          </h2>
          <div className="hidden md:flex">
            <ButtonLink link="/products">Все товары</ButtonLink>
          </div>
        </div>
        <div className="md:mt-[100px] mt-[60px] grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex md:hidden">
          <ButtonLink link="/products">Все товары</ButtonLink>
        </div>
      </div>
    </Container>
  );
}

export default Products
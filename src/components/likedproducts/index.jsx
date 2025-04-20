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
import { useSelector } from "react-redux";
import ProductCard from "../product-card";
import { Heart } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const LikedProducts = () => {
  const routes = useRouter();
    const { likedProducts } = useSelector(state => state.like)
    console.log(likedProducts)
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
                    Избранное
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="mt-[30px] ">
              {likedProducts.length > 0 && (
                <h3 className="text-[#454545] md:text-[44px] font-bold text-[28px]">
                  Избранное
                </h3>
              )}
              {likedProducts.length > 0 ? (
                <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 my-[30px] md:my-[50px]">
                  {likedProducts.map((product) => (
                    <ProductCard product={product} key={product.id} />
                  ))}
                </div>
              ) : (
                <div className="py-[50px] px-5 bg-[#f3f3f3] mt-[30px] mb-[70px] rounded-3xl w-full flex items-center justify-center flex-col">
                  <Heart
                    className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]"
                    color="#cfcfcf"
                  />
                  <div className="text-center">
                    <h3 className="text-[#454545] md:text-[40px] font-bold text-[28px]">
                      Корзина пусто
                    </h3>
                    <p className="text-[#9f9f9f] text-[14px] md:text-[20px] max-w-[600px]">
                      Добавьте товары в корзину, чтобы оформить заказ и начать
                      покупки
                    </p>
                    <Button
                      variant="default"
                      onClick={() => routes.push("/product")}
                      className="bg-[#454545] rounded-4xl h-[40px] !px-[30px] text-[16px] mt-[30px]"
                    >
                      Перейти к покупкам
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default LikedProducts;

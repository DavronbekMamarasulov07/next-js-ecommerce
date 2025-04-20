"use client";
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
import ProductCard from "../product-card";
import { useGetAllProductsQuery } from "@/redux/api/all-products-api";
import { ShoppingBag } from "lucide-react";

const ProductsInfo = () => {
  const { data, isLoading, isFetching } = useGetAllProductsQuery();
    const filterData = data?.filter((item) => item.stock > 0);

  
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
                    Товары
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div>
              <h3 className="text-[#454545] md:text-[44px] font-bold my-[20px] text-[28px]">
                Товары
              </h3>
              {!isLoading || !isFetching ? (
                <div className="w-full ">
                  {filterData?.length > 0 ? (
                    <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 mb-[30px] md:mb-[50px]">
                      {filterData?.map((product) => (
                        <ProductCard product={product} key={product.id} />
                      ))}
                    </div>
                  ) : (
                    <div className="w-full flex items-center justify-center min-h-[300px] my-[30px] rounded-xl bg-[#F2F2F2] md:gap-[20px] flex-row md:flex-col ">
                      <ShoppingBag size={40} className="mr-2 hidden md:block" />
                      <ShoppingBag className="mr-2 block md:hidden" />
                      <h1 className="md:text-3xl font-bold">Товар не найден</h1>
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-full flex items-center justify-center min-h-[300px] my-[30px] rounded-xl bg-[#F2F2F2]">
                  <div className="loader"></div>
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

export default ProductsInfo;

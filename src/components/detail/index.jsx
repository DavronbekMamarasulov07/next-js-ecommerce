"use client";
import React, { useState } from "react";
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
import { useGetProductQuery } from "@/redux/api/all-products-api";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Heart, ScanHeart, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { addToLiked } from "@/redux/slices/like-slice";
import { addToCart } from "@/redux/slices/cart-slice";
const Detail = ({ id }) => {
  const [sizeSelected, setSizeSelected] = useState("" || null);
  const { data, isLoading, isFetching } = useGetProductQuery(id);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const { likedProducts } = useSelector((state) => state.like);

  const product = data;

  const handleAddToWishlist = (product) => {
    dispatch(addToLiked(product));
    if (isProductLiked(product.id)) {
      toast.error(`${product.title} удален из избранного`);
    } else {
      toast.success(`${product.title} добавлен в избранное`);
    }
  };

  const isProductLiked = (productId) => {
    return likedProducts?.some((product) => product.id === productId);
  };

  const handleDecrement = () => {

    if (count > 1 && data.stock > count) {
      setCount(count - 1);
    }
    else if (data.stock < count) {
      toast.error("Товар закончился");
    }
    else {
      toast.error("Количество не может быть меньше 1");
    }
  };

  const handleIncrement = () => {
    if (data.stock > count) {
      setCount(count + 1);
    } else {
      toast.error("Товар закончился");
    }
  };



  const handleSizeChange = (size) => {
    setSizeSelected(size);
    
  };


  const handleAddToCart = () => {
    if (!sizeSelected) {
      toast.error("Выберите размер");
      return;
    }
    dispatch(
      addToCart({
        ...product,
        selectedSize: sizeSelected,
        quantity: count,
      })
    );
    toast.success("Product added to cart");
    setCount(1);
  };
  return (
    <div className="w-full flex flex-col min-h-screen ">
      <Navbar />
      <main className="w-full  flex-grow mt-[30px] ">
        <Container>
          <div>
            <Breadcrumb className="">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Главная</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </BreadcrumbList>
            </Breadcrumb>
            {!isLoading || !isFetching ? (
              product ? (
                <div className="w-full flex flex-col md:flex-row items-center justify-between mt-[20px] md:mt-[40px] mb-[70px] gap-5 md:gap-[50px]">
                  <div className="w-full">
                    <Card className="w-full shadow-none rounded-none !p-0 max-w-[550px] flex items-center justify-center">
                      <Image
                        src={product.image}
                        alt="product"
                        width={450}
                        height={450}
                        className="md:block hidden"
                      />
                      <Image
                        src={product.image}
                        alt="product"
                        width={300}
                        height={300}
                        className="md:hidden block"
                      />
                    </Card>
                  </div>
                  <div className="w-full  flex flex-col items-start md:gap-[30px] gap-[20px]">
                    <h3 className="text-[28px] md:text-[40px] font-medium  md:leading-12">
                      {product.title}
                    </h3>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex flex-col w-full gap-3">
                        <span className="text-[#9F9F9F]">
                          {product.manufacturer}
                        </span>
                        <span className="text-[#9F9F9F]">
                          Артикул : {product.article}
                        </span>
                        {product.stock > 0 ? (
                          <span className="text-[#4D932C]">В наличии</span>
                        ) : (
                          <span className="text-[#e00d0d]">Нет в наличии</span>
                        )}
                      </div>
                      <div className="flex  gap-2 w-full">
                        <span className="bg-[#d3d3d3] w-[30px] h-[30px] rounded-full flex items-center justify-center p-2 hover:bg-[#454545] duration-300 transition-transform">
                          <Image
                            src="/images/ok.svg"
                            alt="product"
                            width={10}
                            height={10}
                          ></Image>
                        </span>
                        <span className="bg-[#d3d3d3] w-[30px] h-[30px] rounded-full flex items-center justify-center p-2 hover:bg-[#454545] duration-300 transition-transform">
                          <Image
                            src="/images/vk.svg"
                            alt="product"
                            width={20}
                            height={20}
                          ></Image>
                        </span>
                        <span className="bg-[#d3d3d3] w-[30px] h-[30px] rounded-full flex items-center justify-center p-2 hover:bg-[#454545] duration-300 transition-transform">
                          <Image
                            src="/images/tg.svg"
                            alt="product"
                            width={20}
                            height={20}
                          ></Image>
                        </span>
                        <span className="bg-[#d3d3d3] w-[30px] h-[30px] rounded-full flex items-center justify-center p-2 hover:bg-[#454545] duration-300 transition-transform">
                          <Image
                            src="/images/wa.svg"
                            alt="product"
                            width={20}
                            height={20}
                          ></Image>
                        </span>
                        <span className="bg-[#d3d3d3] w-[30px] h-[30px] rounded-full flex items-center justify-center p-2 hover:bg-[#454545] duration-300 transition-transform">
                          <Image
                            src="/images/sw.svg"
                            alt="product"
                            width={20}
                            height={20}
                          ></Image>
                        </span>
                      </div>
                    </div>
                    <div className="flex items-end gap-3 md:gap-4">
                      <strong className="text-[28px] md:text-[40px] text-[#101010] leading-none">
                        {product.discount_price} ₽
                      </strong>
                      <span className="text-[#9F9F9F] line-through">
                        {product.price} ₽
                      </span>
                    </div>
                    <div className="max-w-[85%]">
                      <p className="text-[#4C4C4C]">{product.description}</p>
                    </div>{" "}
                    <div>
                      <RadioGroup
                        onValueChange={handleSizeChange}
                        className="flex items-center radio-buttons"
                      >
                        {product.size.map((size) => (
                          <>
                            <RadioGroupItem
                              value={size}
                              id={size}
                              className="sr-only"
                            />
                            <label
                              htmlFor={size}
                              className="cursor-pointer size-label text-sm font-medium text-gray-700 p-2 rounded-full border border-gray-300 flex items-center justify-center w-8 h-8 bg-white"
                            >
                              {size}
                            </label>
                          </>
                        ))}
                      </RadioGroup>
                    </div>
                    <div className="flex items-center justify-start gap-4">
                      <div className="bg-[#ffffff] rounded-md border p-[17px] flex items-center gap-8 leading-0">
                        <span
                          onClick={() => handleDecrement()}
                          className="text-[20px] cursor-pointer"
                        >
                          -
                        </span>
                        <span className="text-[20px] min-w-[25px] text-center ">
                          {product.stock === 0 ? (
                            <span className="text-[#e00d0d]">0</span>
                          ) : (
                            count
                          )}
                        </span>
                        <span
                          onClick={() => handleIncrement()}
                          className="text-[20px] cursor-pointer"
                        >
                          +
                        </span>
                      </div>

                      {sizeSelected && (
                        <Button
                          disabled={product.stock === 0}
                          variant={"outline"}
                          className="bg-[#F2F2F2]"
                          onClick={() => handleAddToCart(product)}
                        >
                          В корзину
                          <Image
                            src="/images/bag.svg"
                            alt="arrow"
                            width={24}
                            height={24}
                          />
                        </Button>
                      )}
                      <Button
                        variant={"outline"}
                        onClick={() => handleAddToWishlist(product)}
                      >
                        {isProductLiked(product.id) ? (
                          <Heart
                            style={{
                              fill: "red",
                              stroke: "red",
                              width: "20px",
                              height: "25px",
                            }}
                          />
                        ) : (
                          <Heart
                            color="#454545"
                            style={{ width: "20px", height: "20px" }}
                          />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full flex items-center justify-center min-h-[300px] my-[30px] rounded-xl bg-[#F2F2F2] md:gap-[20px] flex-row md:flex-col ">
                  <ShoppingBag size={40} className="mr-2 hidden md:block" />
                  <ShoppingBag className="mr-2 block md:hidden" />
                  <h1 className="md:text-3xl font-bold">Товар не найден</h1>
                </div>
              )
            ) : (
              <div className="w-full flex items-center justify-center min-h-[300px] my-[30px] rounded-xl bg-[#F2F2F2]">
                <div className="loader"></div>
              </div>
            )}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Detail;

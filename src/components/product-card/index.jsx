'use client'
import Image from 'next/image'
import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from '../ui/button';
import { Heart, ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';


const ProductCard = ({ product }) => {
  

  const handleAddToCart = () => {
    toast.success("Product added to cart")
  }

  const handleAddToWishlist = () => {
    toast.success("Product added to wishlist");
  };
  return (
    <Card className=" w-full flex flex-col gap-3 md:gap-[20px] relative hover:scale-105 duration-300 transition-transform  border-none rounded-none hover:shadow-2xl">
      <CardHeader className="w-full flex items-center justify-center mb-3 ">
        <Heart
          onClick={() => handleAddToWishlist()}
          className="absolute top-[10px] md:top-5  right-2 md:right-[20px] w-5 md:w-7"
        />
        <Image
          src={product.image}
          alt="product"
          width={170}
          height={210}
          className="hidden md:block"
        />
        <Image
          src={product.image}
          alt="product"
          width={100}
          height={120}
          className="md:hidden block"
        />
      </CardHeader>
      <CardContent>
        <p className="text-[#454545] text-[16px] md:text-[20px] max-w-[200px]">
          {product.title}
        </p>
      </CardContent>
      <CardFooter className="w-full flex items-end justify-between">
        <div className="flex  flex-col items-start">
          <span className="text-[#9F9F9F] md:text-[16px] line-through">
            {product.price}₽
          </span>
          <span className="text-[#454545] md:text-[20px]">
            {product.discount_price}₽
          </span>
        </div>
        <Button
          onClick={() => handleAddToCart()}
          className="bg-[#454545] rounded-2xl !px-[15px] "
        >
          <ShoppingCart />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard
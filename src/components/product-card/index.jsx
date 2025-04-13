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
import { useDispatch, useSelector } from "react-redux";
import { addToLiked } from "@/redux/slices/like-slice";
import { addToCart } from "@/redux/slices/cart-slice";
import { useRouter } from "next/navigation";


const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { likedProducts } = useSelector((state) => state.like);
  const { cartItems } = useSelector((state) => state.cart);
  const routes = useRouter();
  

  const handleAddToCart = (product) => {
    dispatch(
      addToCart({
        ...product,
        quantity: 1,
      })
    );
    toast.success(`${product.title} добавлен в корзину`);
  };


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

  const handleDetail = (product) => {
     routes.push(`/product/${product.id}`);
  };

  
  return (
    <Card className=" w-full flex flex-col gap-3 md:gap-[20px] relative hover:scale-105 duration-300 transition-transform  border-none rounded-none hover:shadow-2xl">
      <CardHeader className="w-full flex items-center justify-center mb-3 ">
        {isProductLiked(product.id) ? (
          <Heart
            style={{ fill: "red", stroke: "red" }}
            onClick={() => handleAddToWishlist(product)}
            className="absolute top-[10px] md:top-5  right-2 md:right-[20px] w-5 md:w-7"
          />
        ) : (
          <Heart
            onClick={() => handleAddToWishlist(product)}
            color="red"
            className="absolute text-red-500 top-[10px] md:top-5  right-2 md:right-[20px] w-5 md:w-7"
          />
        )}

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
      <CardContent onClick={() => handleDetail(product)}>
        <p className="hover:underline hover:cursor-pointer duration-300 transition-transform text-[#454545] text-[16px] md:text-[20px] max-w-[200px] line-clamp-2">
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
          onClick={() => handleAddToCart(product)}
          className="bg-[#454545] rounded-2xl !px-[15px] "
        >
          <ShoppingCart />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard
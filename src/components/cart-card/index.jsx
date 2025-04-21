"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { decrementQuantity, incrementQuantity, removeFromCart } from "@/redux/slices/cart-slice";

const CartCard = ({ products }) => {
  const routes = useRouter();
  const dispatch = useDispatch();

  const handleDetail = (product) => {
    routes.push(`/product/${product.id}`);
  };

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
    toast.success("Товар удален из корзины");
  };

  const handleIncrement = (product) => {
    if (product.stock == product.quantity) {
      toast.error(`На складе всего ${product.stock} штуки этого товара.`);
      return;
    }
    dispatch(incrementQuantity(product.id));
  };

  const handleDecrement = (product) => {
    if (product.quantity == 1) {
      toast.error("Количество товара не может быть меньше 1");
      return;
    }
    dispatch(decrementQuantity(product.id));
  };
  return (
    <div className="flex flex-col gap-4">
      {products.map((product) => (
        <Card key={product.id} className="!p-2 !px-1">
          <CardContent className="!p-2 !px-3">
            <div className="flex items-center flex-col justify-between gap-6">
              <div className="flex items-center gap-4">
                <div
                  style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 10px 6px" }}
                  className="w-[10k0px] h-[80px]  rounded-full overflow-hidden p-1"
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={50}
                    height={50}
                    className="h-full w-full  "
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#454545] text-[14px] line-clamp-2">
                    {product.title}
                  </h3>
                  <span
                    className="text-[#9F9F9F] text-[12px] underline"
                    onClick={() => handleDetail(product)}
                  >
                    Просмотреть подробности
                  </span>
                  <strong>
                    <span className="text-[16px] text-red-600 font-medium">
                      {(product.discount_price * product.quantity)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      ₽
                    </span>
                    <span className="text-[14px] text-gray-400 line-through text-sm ml-2">
                      {(product.price * product.quantity)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      ₽
                    </span>
                  </strong>
                  {product.quantity > 1 && (
                    <div>
                      <strong>
                        <span className="text-[14px] text-red-600 font-medium">
                          {product.discount_price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          ₽
                        </span>
                        <span className="text-[12px] text-gray-400 line-through text-sm ml-2">
                          {product.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          ₽
                        </span>{" "}
                      </strong>
                      <span className="text-[12px] text-[#898989]">/ шт</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between w-full pr-6 gap-2">
                <Button onClick={() => handleDelete(product.id)}>
                  Удалить
                </Button>
                <div className="flex items-center  gap-3 text-center  ">
                  <Minus
                    onClick={() => handleDecrement(product)}
                    size={36}
                    className="bg-[#eaeaea] p-1 rounded-md"
                  />
                  <strong className="text-[20px] w-[30px]">
                    {product.quantity}
                  </strong>
                  <Plus
                    onClick={() => handleIncrement(product)}
                    size={36}
                    className="bg-[#eaeaea] p-1 rounded-md"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CartCard;

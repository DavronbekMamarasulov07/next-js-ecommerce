"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import Container from "../container";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import TableComponent from "../table";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { clearCart } from "@/redux/slices/cart-slice";
import { toast } from "sonner";
import CartCard from "../cart-card";
import axios from "axios";

const CartComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const routes = useRouter();
  const dispatch = useDispatch();
  const [mounted, setMounted] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    name: "",
    phone: "",
  })

  useEffect(() => {
    setMounted(true);
  }, []);


  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  

  const handleCheckout = () => {
      if(!contactInfo.name || !contactInfo.phone){
        toast.error("Заполните все поля");
        return;
      }
      else if (contactInfo.phone.length < 12) {
        toast.error("Номер телефона должен состоять из 12 цифр");
      }
      
      else {
        onFinish(contactInfo);
        setIsOpen(false);
        setContactInfo({
          name: "",
          phone: "",
        })
      }
  };

  const handleNumberInput = (e) => {
    const value = e.target.value;
    if (value.length > 12) {
      toast.error("Номер телефона должен состоять из 12 цифр");
      return;
    }
    setContactInfo({ ...contactInfo, phone: value });
  };


  const onFinish = async (contactInfo) => {
    if (!cartItems) {
      toast.error("Please enter some text.");
      return;
    }
    const botToken = "8164288338:AAEhi9fEZUL7niaaXYmQqOtdcB889elM-zg";
    const chatId = "5269056571";
    try {
      await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: `${cartItems.map(
          (product, index) =>
            `\n\n\n\nПродукт №: ${index + 1}
ID: ${product.id}
Товар: ${product.title}
Количество: ${product.quantity}
Цена: ${product.discount_price}₽
Итого: ${product.discount_price * product.quantity}₽

Ссылка на товар: https://next-js-ecommerce-jade.vercel.app/product/${product.id}\n\n
Имя клиента: ${contactInfo.name}
Телефон клиента: +${contactInfo.phone}
          `
        )} `,
      });
      toast.success("Заказ оформлен,скоро наш менеджер свяжется с вами");
    } catch (error) {
      console.error("Error sending message to Davronbek:", error);
      toast.error("Failed to send message.");
    }

    dispatch(clearCart());
  };




  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.discount_price * item.quantity,
    0
  );
  const shipping = 200;

  if (!mounted) return null; // prevents hydration error
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
                    Корзина
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="my-[30px]  md:mb-[70px] md:mt-[30px] w-full ">
              {cartItems && cartItems.length > 0 ? (
                <div className="w-full flex items-end lg:items-start lg:flex-row flex-col gap-[30px]">
                  <div className="bg-gray-100 p-4 md:p-6 rounded-lg w-full">
                    <div className="w-full flex items-center justify-between mb-6">
                      <Button
                        onClick={() => handleClearCart()}
                        className="active:scale-95 duration-200 transition-transform  "
                      >
                        Очистить корзину
                      </Button>

                      <p className="text-[#9F9F9F] text-[16px]">
                        {cartItems.length} товаров
                      </p>
                    </div>
                    <div className="h-full w-full max-h-[400px] overflow-y-auto ">
                      <div className="hidden md:block">
                        <TableComponent products={cartItems} />
                      </div>
                      <div className="md:hidden w-full">
                        <CartCard products={cartItems} />
                      </div>
                    </div>
                  </div>
                  <Card className="w-full max-w-[400px] bg-[#F2F2F2]">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <h3>
                          <ShoppingBag size={30} />
                        </h3>
                        <p className="text-[16px]">
                          {cartItems.length} товаров
                        </p>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2 border-b pb-4">
                      <div className="flex items-center justify-between gap-2">
                        <p>Субтотальный:</p>
                        <strong className="underline">
                          {total
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          ₽
                        </strong>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <p>Доставка:</p>
                        <strong className="underline">
                          {shipping
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          ₽
                        </strong>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <p>Итого:</p>
                        <strong className="underline">
                          {(total + shipping)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          ₽
                        </strong>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        onClick={() => handleOpenDialog()}
                        className="w-full active:scale-95 duration-200 transition-transform flex items-center justify-between gap-2"
                      >
                        <span>
                          {(total + shipping)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          ₽
                        </span>
                        <span>Оформить заказ →</span>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ) : (
                <div className="bg-gray-100 py-[50px] px-5 rounded-lg flex flex-col items-center">
                  <ShoppingBag
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
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
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Оформление заказа</DialogTitle>
            <DialogDescription>
              Пожалуйста, оставьте свое имя и номер телефона перед оформлением
              заказа
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Имя
              </Label>
              <Input
                onChange={(e) => setContactInfo({
                  ...contactInfo,
                  name: e.target.value,
                })}
                type="text"
                name="name"
                autoComplete="off"
                id="name"
                placeholder="Ваше имя"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-left">
                Номер телефона
              </Label>
              <Input
              onChange={(e) => handleNumberInput(e)}
                type="number"
                name="phone"
                autoComplete="off"
                id="phone"
                placeholder="+7 (___) ___-__-__"
                className="col-span-3"
               
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => handleCheckout()} type="submit">Оформить заказ</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CartComponent;

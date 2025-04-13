'use client'

import Link from "next/link";
import Container from "../container";
import {
  AlignCenter,
  ChartNoAxesColumn,
  ChartNoAxesColumnIncreasing,
  Heart,
  Search,
  ShoppingCart,
  Sun,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { likedProducts } = useSelector((state) => state.like);

  const [isOpen, setIsOpen] = useState(false);
  const [countCartItems, setCountCartItems] = useState(cartItems?.length || 0);
  const [countLikedProducts, setCountLikedProducts] = useState(
    likedProducts?.length || 0
  );

  const router = useRouter();

  const handleCatalogBtnClick = () => {
    router.push("/");
  };

  useEffect(() => {
    setCountCartItems(cartItems.length);
    setCountLikedProducts(likedProducts.length);
  }, [cartItems, likedProducts]);
  return (
    <Container>
      <div className="py-2 text-sm text-gray-600 hidden lg:flex justify-between">
        <div className="flex space-x-6">
          <Link href="/about" className="hover:text-gray-900">
            О компании
          </Link>
          <Link href="/delivery" className="hover:text-gray-900">
            Доставка и оплата
          </Link>
          <Link href="/catalog" className="hover:text-gray-900">
            Каталог
          </Link>
          <Link href="/guarantee" className="hover:text-gray-900">
            Гарантия
          </Link>
          <Link href="/contact" className="hover:text-gray-900">
            Контакты
          </Link>
          <Link href="/blog" className="hover:text-gray-900">
            Блог
          </Link>
        </div>
        <div className="flex items-center gap-[24px]">
          <Link className="text-black font-bold" href="tel: 8 (800) 890-46-56">
            8 (800) 890-46-56
          </Link>
          <span>Заказать звонок</span>
        </div>
      </div>
      <header className="mt-5 relative">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="rotate-270 mr-[20px] block lg:hidden"
            >
              <ChartNoAxesColumn />
            </div>
            <div
              onClick={() => handleCatalogBtnClick()}
              className="flex items-center hover:cursor-pointer"
            >
              <div className="bg-[#454545] text-white p-1 mr-2 text-xs rounded-[4px]">
                {" "}
                <Sun />
              </div>
              <span className="font-semibold text-lg md:text-[40px]">
                NORNLIGHT
              </span>
            </div>
            <Link href="/" className="hover:cursor-pointer">
              <button className="ml-6 bg-[#454545] rounded-4xl text-white px-4 py-2  text-sm hidden md:flex items-center gap-2 ">
                <AlignCenter />
                Каталог
              </button>
            </Link>
          </div>

          <div className="flex-1 max-w-xl mx-4 lg:block hidden">
            <div className="relative">
              <input
                type="text"
                placeholder="Поиск по товарам"
                className="w-full border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
              <button className="absolute right-3 top-2.5">
                <Search size={18} className="text-gray-500" />
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/wishlist"
              className="flex flex-col items-center text-xs relative"
            >
              <Heart size={20} className="mb-1" />
              {/* {countLikedProducts == 0 && (
                <span className="absolute -top-1 right-3 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  {countLikedProducts}
                </span>
              )} */}
              <span>Избранное</span>
            </Link>
            <Link href="/" className="flex flex-col items-center text-xs">
              <ChartNoAxesColumnIncreasing size={20} className="mb-1" />
              <span>Сравнение</span>
            </Link>
            <Link
              href="/cart"
              className="flex flex-col items-center text-xs relative"
            >
              <ShoppingCart size={20} className="mb-1" />
              {/* {
                countCartItems == 0 && (
                  <span className="absolute -top-1 right-3 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                    {countCartItems}
                  </span>
                )
              } */}
              <span>Корзина</span>
            </Link>
          </div>

          {/* Mobile Icons */}
          <div className="flex items-center space-x-4 md:hidden">
            <Link href="/search" className="text-gray-700">
              <Search size={22} />
            </Link>
            <Link href="/cart" className="text-gray-700 relative">
              <ShoppingCart size={22} />
              {/* {countCartItems == 0 && (
                <span className="absolute -top-1 right-3 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  {countCartItems}
                </span>
              )} */}
            </Link>
          </div>
        </div>
        <div className="w-full  block lg:hidden mt-[20px]">
          <div className="relative">
            <input
              type="text"
              placeholder="Поиск по товарам"
              className="w-full border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            <button className="absolute right-3 top-2.5">
              <Search size={18} className="text-gray-500" />
            </button>
          </div>
        </div>
      </header>

      {/* mobile uchun  menu*/}
      <Drawer
        open={isOpen}
        onOpenChange={setIsOpen}
        direction="top"
        size="full"
      >
        <DrawerContent>
          <DrawerHeader className="!p-0 !pt-[20px]">
            <DrawerTitle className="flex items-center justify-between px-[16px]">
              <X size={30} onClick={() => setIsOpen(!isOpen)} />
              <div className="flex items-center space-x-6">
                <Link
                  href="/wishlist"
                  className="flex flex-col items-center text-xs relative"
                >
                  <Heart size={30} className="mb-1" />
                  {/* {
                    countLikedProducts == 0 && (
                      <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {countLikedProducts}
                      </span>
                    )
                 } */}
                </Link>
                <Link href="/" className="flex flex-col items-center text-xs">
                  <ChartNoAxesColumnIncreasing size={30} className="mb-1" />
                </Link>
                <Link
                  href="/cart"
                  className="flex flex-col items-center text-xs relative"
                >
                  <ShoppingCart size={30} className="mb-1" />
                  {/* {
                    countCartItems == 0 && (
                      <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {countCartItems}
                      </span>
                    )
                  } */}
                </Link>
              </div>
            </DrawerTitle>
            <div className="flex flex-col  items-center text-[#8f8e8e]   w-full mt-[20px]">
              <Link
                onClick={() => setIsOpen(!isOpen)}
                href="/about"
                className="py-[14px] w-full text-center border-t border-[#8f8e8e] "
              >
                О компании
              </Link>
              <Link
                onClick={() => setIsOpen(!isOpen)}
                href="/delivery"
                className="py-[18px] w-full text-center border-t border-[#8f8e8e] "
              >
                Доставка и оплата
              </Link>
              <Link
                onClick={() => setIsOpen(!isOpen)}
                href="/catalog"
                className="py-[18px] w-full text-center border-t border-[#8f8e8e] "
              >
                Каталог
              </Link>
              <Link
                onClick={() => setIsOpen(!isOpen)}
                href="/guarantee"
                className="py-[18px] w-full text-center border-t border-[#8f8e8e] "
              >
                Гарантия
              </Link>
              <Link
                onClick={() => setIsOpen(!isOpen)}
                href="/contact"
                className="py-[18px] w-full text-center border-t border-[#8f8e8e] "
              >
                Контакты
              </Link>
              <Link
                onClick={() => setIsOpen(!isOpen)}
                href="/blog"
                className="py-[18px] w-full text-center border-y border-[#8f8e8e] "
              >
                Блог
              </Link>
            </div>
          </DrawerHeader>

          <DrawerFooter>
            <Link
              href="/catalog"
              onClick={() => setIsOpen(!isOpen)}
              className="bg-[#454545] rounded-4xl text-white flex items-center gap-2 justify-center py-[12px]"
            >
              <ChartNoAxesColumn size={30} className="rotate-90" />
              <p className="text-lg">Каталог</p>
            </Link>
            <div className="flex items-center flex-col gap-[10px] mt-[10px]">
              <Link
                className="text-black font-bold"
                href="tel: 8 (800) 890-46-56"
              >
                8 (800) 890-46-56
              </Link>
              <span className="text-[#8f8e8e]">Заказать звонок</span>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Container>
  );
};

export default Navbar;

// pages/404.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";

export default function NotFoundPage() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center ">
        <h3 className="text-[150px] md:text-[310px] font-bold text-[#d4d4d4ac]">
          404
        </h3>
        <p className="text-[24px] text-[#454545] mb-6">
          Похоже, ничего не нашлось :(
        </p>
        <Link href="/" className="hidden md:block">
          <Button
            variant="default"
            className="bg-[#454545] rounded-4xl h-[50px] !px-[60px] text-[16px]"
          >
            На главную
          </Button>
        </Link>
        <Link href="/" className="fixed bottom-[10%] block md:hidden">
          <Button
            variant="default"
            className="bg-[#454545] rounded-4xl h-[50px] !px-[60px] text-[16px]"
          >
            На главную
          </Button>
        </Link>
      </div>
    </div>
  );
}

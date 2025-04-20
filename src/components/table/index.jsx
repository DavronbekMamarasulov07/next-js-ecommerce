"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { EllipsisVertical, Minus, Plus } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { decrementQuantity, incrementQuantity, removeFromCart } from "@/redux/slices/cart-slice";
import { toast } from "sonner";

const TableComponent = ({ products }) => {
  const routes = useRouter();
  const dispatch = useDispatch();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDetail = (product) => {
    routes.push(`/product/${product.id}`);
  };

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
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

  if (!mounted) return null; // prevents hydration errork

  return (
    <Table>
      <TableHeader className="bg-gray-50">
        <TableRow>
          <TableHead className="w-16 py-5 sm:w-20">Изображение</TableHead>
          <TableHead>Название товара</TableHead>
          <TableHead>Цена</TableHead>
          <TableHead>Количество</TableHead>
          <TableHead className="hidden xl:table-cell">Размер</TableHead>
          <TableHead>Действия</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products?.map((product) => (
          <TableRow key={product.id} className="hover:bg-gray-50">
            <TableCell>
              <div className="w-16 h-16  rounded overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={100}
                  height={100}
                  className="h-full w-full object-cover"
                />
              </div>
            </TableCell>
            <TableCell className="font-medium">
              <div>
                <p className="font-semibold text-gray-900">{product.title}</p>
                <p className="text-sm text-gray-500 hidden sm:block">
                  {product.description?.substring(0, 35)}...
                </p>
              </div>
            </TableCell>

            <TableCell>
              <div>
                {product.discount_price ? (
                  <>
                    <span className="text-red-600 font-medium">
                      {product.discount_price}₽
                    </span>
                    <span className="text-gray-400 line-through text-sm ml-2">
                      {product.price}₽
                    </span>
                  </>
                ) : (
                  <span className="font-medium">{product.price}₽</span>
                )}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-3 text-center  ">
                <Minus
                  onClick={() => handleDecrement(product)}
                  size={30}
                  className="bg-[#eaeaea] p-1 rounded-md"
                />
                <strong className="text-[20px] w-[30px]">
                  {product.quantity}
                </strong>
                <Plus
                  onClick={() => handleIncrement(product)}
                  size={30}
                  className="bg-[#eaeaea] p-1 rounded-md"
                />
              </div>
            </TableCell>
            <TableCell className="hidden xl:table-cell">
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs">
                  {product.selectedSize}
                </span>
              </div>
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button>
                    <EllipsisVertical />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => handleDetail(product)}>
                    View
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleDelete(product.id)}>
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableComponent;

"use client";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Catalogs from "@/components/catalogs";
import Choice from "@/components/choice";
import Brand from "@/components/brand";
import Blog from "@/components/blog";
import Footer from "@/components/footer";
import { useGetAllProductsQuery } from "@/redux/api/all-users-api";
import Products from "@/components/products";
import BlogAbout from "@/components/blog-about";
import ToTopButton from "@/components/toptobottom";

export default function Home() {
  const { data, isLoading, isFetching } = useGetAllProductsQuery();
  if (isLoading || isFetching) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* <Hero /> */}
        <Catalogs />
        <Choice />
        <Products products={data} />
        <Brand />
        <Blog />
        <BlogAbout />
      </main>
      <Footer />
      <ToTopButton />
    </div>
  );
}

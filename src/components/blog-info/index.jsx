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
import { blogs } from "../../data";
import BlogCard from "../blog-card";
const BlogInfo = () => {
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
                    Блог
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="mt-[30px]">
              <h3 className="text-[#454545] md:text-[44px] font-bold text-[28px]">
                Блог
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-[30px] mb-[60px]">
                {blogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default BlogInfo;

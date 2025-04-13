import React from "react";
import Container from "../container";
import BlogCard from "../blog-card";
import ButtonLink from "../button-link";
import {blogs} from "../../data"

const BlogComponent = () => {
  
  return (
    <Container>
      <div className="md:mt-[100px] mt-[60px]">
        <div className="w-full flex  items-center justify-between md:mb-[40px] mb-[32px]">
          <h2 className="md:text-[40px] text-[28px]  text-[#454545] font-bold ">
            Блог
          </h2>
          <div className="hidden md:flex">
            <ButtonLink link="/blog">Перейти в блог</ButtonLink>
          </div>
        </div>
        <div className="flex md:flex-wrap overflow-x-auto md:overflow-x-visible gap-4">
          {blogs?.slice(0, 3).map((blog) => (
            <div className="min-w-[100%] md:min-w-0 md:flex-1" key={blog.id}>
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
        <div className="flex md:hidden">
          <ButtonLink link="/blog">Перейти в блог</ButtonLink>
        </div>
       
      </div>
    </Container>
  );
};

export default BlogComponent;

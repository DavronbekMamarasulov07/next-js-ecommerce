import React from "react";
import Container from "../container";
import BlogCard from "../blog-card";
import ButtonLink from "../button-link";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      image: "/images/blog1.png",
      title: "Как правильно освещать дом снаружи?",
      date: "01.01.2024",
    },
    {
      id: 2,
      image: "/images/blog2.png",
      title: "Как правильно освещать дом снаружи?",
      date: "01.01.2024",
    },
    {
      id: 3,
      image: "/images/blog3.png",
      title: "Как правильно освещать дом снаружи?",
      date: "01.01.2024",
    },
  ];
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
          {blogs.map((blog) => (
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

export default Blog;

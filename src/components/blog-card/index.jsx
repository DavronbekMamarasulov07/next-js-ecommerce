'use client';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

const BlogCard = ({ blog }) => {
  const router = useRouter();

  const handleBlogClick = () => {
    router.push(`/blog`);
  }
  
  return (
    <div>
      <div className="w-full border-b border-[#9F9F9F]">
        <Image src={blog.image} alt="blog" width={420} height={300} priority />
        <div>
          <h3 className="text-[#454545] text-[20px] font-bold mt-[20px] w-full flex items-start  justify-between">
            {blog.title} <ArrowUpRight size={30} onClick={() => handleBlogClick()} />
          </h3>
          <p className="text-[#9F9F9F] text-[16px] mt-[10px] mb-[32px]">
            {blog.date}
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default BlogCard
import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import Image from 'next/image'

const ChoiceCard = ({choice}) => {
  return (
    <Card className="flex flex-col gap-[10px] md:gap-[80px] shadow-none rounded-none hover:scale-105 duration-300 transition-transform">
      <CardHeader  >
        <div>
          <Image
            src={choice.image}
            alt="choice"
            width={80}
            height={80}
            className="hidden md:block"
          />
          <Image
            src={choice.image}
            alt="choice"
            width={40}
            height={40}
            className="md:hidden block"
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-start gap-5">
        <h3 className="text-[#454545] text-[16px] md:text-[20px] font-bold">{choice.title}</h3>
        <p className='text-[14px] md:text-[16px] text-[#9F9F9F]'>{choice.content}</p>
      </CardContent>
    </Card>
  );
}

export default ChoiceCard
import React from 'react'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'

const BrandCard = ({brand}) => {
  return (
    <Card className="w-full h-full flex items-center justify-center  shadow-none rounded-nonek">
      <CardContent className="flex items-center justify-center">
        <Image
          src={brand.image}
          alt="brand"
          width={270}
          height={70}
          priority
        />
        {brand.title}
      </CardContent>
    </Card>
  );
}

export default BrandCard
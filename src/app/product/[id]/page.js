import Detail from '@/components/detail'
import React from 'react'

const ProductDetail = ({ params }) => {
  return <Detail id={params.id} />;
}

export default ProductDetail
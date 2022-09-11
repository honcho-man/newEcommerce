import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const Product = ({ product: { image, name, slug, price } }) => {
  return (
      <Link href={`/product/${slug.current}`}>
         <div className='product-card p-3 d-flex justify-content-center col-12 col-md-4'>
          <div className="col-auto">
            <img 
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
            />
            <p className='product-name'>{name}</p>
            <p className='product-price'>#{price}</p>
          </div>
         </div>
      </Link>
  )
}

export default Product

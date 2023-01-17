import React from "react"
import "./product.css"
import { ProductCart } from "./ProductCart"
import { product } from "../../../../data/productData"

export const Product = () => {
  return (
    <>
      <section className="product">
        <div className="container grid3">
          {product.map((item) => (
            <ProductCart
              key={item.id}
              id={item.id}
              cover={item.cover}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </section>
    </>
  )
}

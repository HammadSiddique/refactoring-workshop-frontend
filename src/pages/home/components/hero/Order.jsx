import React from "react"
import "./slider.css"

const order = [
  {
    id: 1,
    title: "Your Order",
    desc: "There are many variations of passages of Lorem Ipsum available",
  },
  {
    id: 2,
    title: "Ready Your Order",
    desc: "There are many variations of passages of Lorem Ipsum available",
  },
  {
    id: 3,
    title: "Packing Your Order",
    desc: "There are many variations of passages of Lorem Ipsum available",
  },
  {
    id: 4,
    title: "And Deliver",
    desc: "There are many variations of passages of Lorem Ipsum available",
  },
]

export const Order = () => {
  return (
    <section className="order">
      <div className="container grid boxItems">
        {order.map((item) => (
          <div className="box flexCenter" key={item.id}>
            <div className="num">
              <h1>{item.id}</h1>
            </div>
            <div className="text">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

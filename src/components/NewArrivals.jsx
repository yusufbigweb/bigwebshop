import React from "react";
import { Link } from "react-router";
// Demo products (replace later with API)
const products = [
  {
    id: 1,
    title: "Sinner’s Eye Street Print Tee",
    price: "Rs. 799",
    img: "https://acestitch.com/cdn/shop/files/DSC06373.jpg?v=1761633762&width=800",
  },
  {
    id: 2,
    title: "Butterfly Blossom Tee",
    price: "Rs. 899",
    img: "https://acestitch.com/cdn/shop/files/DSC06364.jpg?v=1760617034&width=800",
  },
  {
    id: 3,
    title: "Thread of Fate Box Tee",
    price: "Rs. 799",
    img: "https://acestitch.com/cdn/shop/files/Hanging-Black_0bf96410-864f-449c-88e1-c19e657134aa.png?v=1750075321&width=800",
  },
  {
    id: 4,
    title: "DevEloper Minimal Tee",
    price: "Rs. 699",
    img: "https://acestitch.com/cdn/shop/files/Hanging-White_6d6dfb12-2cfd-45c6-87b7-7dbf731928e1.png?v=1750075338&width=800",
  },
  {
    id: 5,
    title: "Ex-Employee Tee",
    price: "Rs. 699",
    img: "https://acestitch.com/cdn/shop/files/White-Front_2c979a92-e9b4-40d6-af67-95297f9c1c15.png?v=1750075376&width=800",
  },
  {
    id: 6,
    title: "The Cracked Dev Tee",
    price: "Rs. 699",
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
  },
  {
    id: 7,
    title: "@ts-ignore Coder Tee",
    price: "Rs. 699",
    img: "https://acestitch.com/cdn/shop/files/Hanging-White.png?v=1750075664&width=800",
  },
  {
    id: 8,
    title: "Minimal Street Tee",
    price: "Rs. 799",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
];

function NewArrivals() {
  return (
    <section className="py-12 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          LOW PRICE
        </h2>
        <p className="text-center text-gray-500 mb-8">
          HIGH QUALITY PRODUCTS
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="group bg-white border rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-sm font-medium text-gray-800">
                  {item.title}
                </h3>
                <p className="mt-1 font-semibold text-black">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button className="px-8 py-2 border border-black text-black rounded-full hover:bg-black hover:text-white transition">
          <Link to={"/shop"}>
            View All
          </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;

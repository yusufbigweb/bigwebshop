import React from "react";

const categories = [
  {
    id: 1,
    title: "T-Shirts",
    img: "https://acestitch.com/cdn/shop/files/31752233_1_1.jpg?v=1764009827&width=600",
  },
  {
    id: 2,
    title: "Hoodies",
    img: "https://acestitch.com/cdn/shop/files/Hanging-White_6d6dfb12-2cfd-45c6-87b7-7dbf731928e1.png?v=1750075338&width=800",
  },
  {
    id: 3,
    title: "Caps",
    img: "https://acestitch.com/cdn/shop/files/White-Front_2c979a92-e9b4-40d6-af67-95297f9c1c15.png?v=1750075376&width=800",
  },
  {
    id: 4,
    title: "Accessories",
    img: "https://acestitch.com/cdn/shop/files/Hanging-Black_0bf96410-864f-449c-88e1-c19e657134aa.png?v=1750075321&width=800",
  },
];

function TopCategories() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-2xl font-semibold text-center mb-6">
          TOP CATEGORIES
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="group text-center">
              <div className="w-full h-40 rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="mt-3 text-base font-medium">{cat.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopCategories;

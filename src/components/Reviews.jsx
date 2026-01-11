import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    text: "Amazing quality t-shirts. Fabric feels premium and delivery was fast.",
    rating: 5,
  },
  {
    id: 2,
    name: "Aman Khan",
    text: "Loved the fitting and design. Totally worth the price!",
    rating: 5,
  },
  {
    id: 3,
    name: "Sneha Patel",
    text: "Quality is very good for this price range. Will buy again.",
    rating: 4,
  },
  {
    id: 4,
    name: "Rohit Verma",
    text: "Comfortable fabric and stylish prints. Highly recommended.",
    rating: 5,
  },
];

function ReviewCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-8">
          CUSTOMER REVIEWS
        </h2>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="min-w-full px-6"
              >
                <div className="bg-white border rounded-lg p-6 text-center">
                  
                  {/* Stars */}
                  <div className="flex justify-center gap-1 text-yellow-400 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="text-sm text-gray-600 mb-4">
                    “{review.text}”
                  </p>

                  {/* Name */}
                  <h4 className="text-sm font-medium text-black">
                    {review.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-5">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 w-2 rounded-full ${
                current === index ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewCarousel;

import React, { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Big Sale 50% Off",
    desc: "Discover the best products at unbeatable prices",
    img: "https://acestitch.com/cdn/shop/files/1_9.jpg?v=1767791184&width=1300",
  },
  {
    id: 2,
    title: "New Arrivals",
    desc: "Latest fashion trends just for you",
    img: "https://acestitch.com/cdn/shop/files/Linkedin-2.jpg?v=1763839545&width=1300",
  },
  {
    id: 3,
    title: "Premium Collection",
    desc: "Quality products with premium design",
    img: "https://acestitch.com/cdn/shop/files/2_5.jpg?v=1767791227&width=1300",
  },
];

function Slider() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-[220px] sm:h-[350px] md:h-[450px] relative"
          >
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center">
              <div className="max-w-7xl mx-auto px-6 text-white">
                <h2 className="text-xl sm:text-3xl md:text-4xl font-bold">
                  {slide.title}
                </h2>
                <p className="mt-2 max-w-md text-sm sm:text-base">
                  {slide.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrow Controls (Hidden on Mobile) */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;

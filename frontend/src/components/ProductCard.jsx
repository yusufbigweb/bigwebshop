const ProductCard = ({ product }) => {
  return (
    <div className="group border rounded-xl overflow-hidden bg-white hover:shadow-xl transition">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-72 object-cover"
        />
        {product.featured && (
          <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900">
          {product.title}
        </h3>
        <p className="text-xs text-gray-500">
          {product.category}
        </p>
        <p className="mt-2 font-semibold text-gray-900">
          ₹{product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;

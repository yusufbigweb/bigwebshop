const ShopFilters = ({ filters, setFilters }) => {
  const categories = ["All", "Shirts", "Jeans", "T-Shirts"];

  return (
    <div className="space-y-8">
      <div>
        <h4 className="text-sm font-semibold mb-4">
          Category
        </h4>
        {categories.map((cat) => (
          <label
            key={cat}
            className="flex items-center text-sm mb-2 cursor-pointer"
          >
            <input
              type="radio"
              checked={filters.category === cat}
              onChange={() =>
                setFilters({ ...filters, category: cat })
              }
              className="mr-2"
            />
            {cat}
          </label>
        ))}
      </div>

      <div>
        <h4 className="text-sm font-semibold mb-4">
          Price Range
        </h4>
        <input
          type="range"
          min="500"
          max="5000"
          step="100"
          value={filters.maxPrice}
          onChange={(e) =>
            setFilters({
              ...filters,
              maxPrice: Number(e.target.value),
            })
          }
          className="w-full"
        />
        <p className="text-xs text-gray-500 mt-1">
          Up to ₹{filters.maxPrice}
        </p>
      </div>
    </div>
  );
};

export default ShopFilters;

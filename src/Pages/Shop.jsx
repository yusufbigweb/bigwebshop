import { useState, useMemo } from "react";
import productsData from "../data/products";
import ProductCard from "../components/ProductCard";
import ShopFilters from "../components/FilterSidebar";
import SectionHeader from "../components/SectionHeader";

const Shop = () => {
  const [filters, setFilters] = useState({
    category: "All",
    maxPrice: 5000,
  });

  // const featuredProducts = useMemo(
  //   () => productsData.filter((p) => p.featured),
  //   []
  // );

  const filteredProducts = useMemo(() => {
    return productsData.filter((p) => {
      const categoryMatch =
        filters.category === "All" ||
        p.category === filters.category;

      const priceMatch = p.price <= filters.maxPrice;

      return categoryMatch && priceMatch;
    });
  }, [filters]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      
      {/* Featured */}
      {/* <section className="mb-16">
        <SectionHeader
          title="Featured Collection"
          subtitle="Hand-picked styles curated for you"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section> */}

      {/* Shop */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-12">
        
        <aside>
          <ShopFilters
            filters={filters}
            setFilters={setFilters}
          />
        </aside>

        <main className="md:col-span-3">
          <SectionHeader
            title="All Products"
            subtitle="Explore our complete collection"
          />

          {filteredProducts.length === 0 ? (
            <p className="text-sm text-gray-500">
              No products match your filters.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          )}
        </main>

      </section>
    </div>
  );
};

export default Shop;

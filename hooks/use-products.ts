import productsData from "@/assets/data/product.json";
import { Category, Product } from "@/types/product";
import { useEffect, useMemo, useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, selectedCategory]);

  const categories: Category[] = [
    "All",
    "Pain Relief",
    "Antibiotic",
    "Supplement",
    "Allergy",
    "Gastro",
  ];

  // ======================================= SIDE EFFECT =======================================

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setProducts(productsData as Product[]);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return {
    products: filteredProducts,
    loading,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    categories,
  };
};

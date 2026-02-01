import productsData from "@/assets/data/product.json";
import { Category, Product } from "@/types/product";
import { useEffect, useMemo, useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  useEffect(() => {
    // Simulate API fetch
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // In a real app, this would be a fetch call
        // const response = await fetch('/api/products');
        // const data = await response.json();

        // Simulating network delay
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

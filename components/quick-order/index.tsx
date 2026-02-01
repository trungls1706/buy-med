import { useCart } from "@/hooks/use-cart";
import { useProducts } from "@/hooks/use-products";
import debounce from "lodash.debounce";
import { useMemo, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  CartSummary,
  CategoryFilter,
  Empty,
  Header,
  ProductItem,
  Search,
} from "./components";

export default function QuickOrderScreen() {
  const {
    products,
    loading,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    categories,
  } = useProducts();

  const { items: cartItems, updateQuantity, totals } = useCart();
  const [localSearch, setLocalSearch] = useState("");

  // Debounced search logic
  const debouncedSearch = useMemo(
    () =>
      debounce((query: string) => {
        setSearchQuery(query);
      }, 300),
    [setSearchQuery],
  );

  const handleSearchChange = (text: string) => {
    setLocalSearch(text);
    debouncedSearch(text);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header />
      <Search searchQuery={localSearch} setSearchQuery={handleSearchChange} />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {loading ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#006B3F" />
        </View>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProductItem
              product={item}
              quantity={cartItems[item.id]?.quantity || 0}
              onUpdateQuantity={updateQuantity}
            />
          )}
          ListEmptyComponent={<Empty />}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}

      <CartSummary
        totalSKUs={totals.totalSKUs}
        totalQuantity={totals.totalQuantity}
        totalAmount={totals.totalAmount}
      />
    </SafeAreaView>
  );
}

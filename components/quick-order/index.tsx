import { useCart } from "@/hooks/use-cart";
import { useProducts } from "@/hooks/use-products";
import debounce from "lodash.debounce";
import { useMemo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CategoryFilter, Header, Search } from "./components";

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

  // const [quantities, setQuantities] = useState<Record<string, number>>({
  //   "1": 1,
  //   "2": 2,
  // });
  // const [searchQuery, setSearchQuery] = useState<string>("");

  // const filteredMedications = medications.filter((med) => {
  //   const matchesCategory =
  //     selectedCategory === "All" || med.category === selectedCategory;
  //   const matchesSearch =
  //     searchQuery === "" ||
  //     med.name.toLowerCase().includes(searchQuery.toLowerCase());
  //   return matchesCategory && matchesSearch;
  // });

  // const incrementQuantity = (id: string) => {
  //   setQuantities((prev) => ({
  //     ...prev,
  //     [id]: (prev[id] || 0) + 1,
  //   }));
  // };

  // const decrementQuantity = (id: string) => {
  //   setQuantities((prev) => ({
  //     ...prev,
  //     [id]: Math.max(0, (prev[id] || 0) - 1),
  //   }));
  // };

  // const totalItems = Object.keys(quantities).filter(
  //   (key) => quantities[key] > 0,
  // ).length;

  // const totalQuantity = Object.values(quantities).reduce(
  //   (sum, qty) => sum + qty,
  //   0,
  // );

  // const totalAmount = medications.reduce((sum, med) => {
  //   const qty = quantities[med.id] || 0;
  //   return sum + med.price * qty;
  // }, 0);

  // const getIconComponent = (iconName: string) => {
  //   switch (iconName) {
  //     case "pill":
  //       return <MaterialCommunityIcons name="pill" size={32} color="#065f46" />;
  //     case "medical":
  //       return (
  //         <MaterialCommunityIcons
  //           name="medical-bag"
  //           size={32}
  //           color="#065f46"
  //         />
  //       );
  //     case "activity":
  //       return <Feather name="activity" size={32} color="#065f46" />;
  //     default:
  //       return <MaterialCommunityIcons name="pill" size={32} color="#065f46" />;
  //   }
  // };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header />
      <Search searchQuery={localSearch} setSearchQuery={setSearchQuery} />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Categories */}

      {/* List */}
      {/* <ScrollView
        className="flex-1"
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
        showsVerticalScrollIndicator={false}
      >
        {filteredMedications.map((medication) => (
          <View
            key={medication.id}
            className="flex-row bg-gray-50 rounded-2xl p-4 mb-3"
          >
            <View className="w-16 h-16 bg-white rounded-xl justify-center items-center mr-4">
              {getIconComponent(medication.icon)}
            </View>

            <View className="flex-1">
              <View className="flex-row justify-between items-start mb-1">
                <View>
                  <Text className="text-lg font-semibold text-gray-900 mb-1">
                    {medication.name}
                  </Text>
                  <Text className="text-base font-semibold text-gray-900">
                    {medication.dosage}
                  </Text>
                </View>

                {medication.requiresRx && (
                  <View className="bg-red-100 px-2 py-0.5 rounded">
                    <Text className="text-xs font-bold text-red-600">RX</Text>
                  </View>
                )}
              </View>

              <Text className="text-base font-semibold text-gray-900 mb-1">
                {medication.price.toLocaleString("vi-VN")} VND
              </Text>
              <Text className="text-sm text-gray-500">
                {medication.category} • {medication.type}
              </Text>
            </View>

            <View className="flex-col items-center justify-center ml-2">
              <TouchableOpacity
                className="w-9 h-9 bg-gray-300 rounded-lg justify-center items-center my-1"
                onPress={() => decrementQuantity(medication.id)}
              >
                <Ionicons name="remove" size={20} color="#065f46" />
              </TouchableOpacity>

              <Text className="text-lg font-semibold text-gray-900 my-1">
                {quantities[medication.id] || 0}
              </Text>

              <TouchableOpacity
                className="w-9 h-9 bg-emerald-800 rounded-lg justify-center items-center my-1"
                onPress={() => incrementQuantity(medication.id)}
              >
                <Ionicons name="add" size={20} color="#ffffff" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView> */}

      {/* Footer */}
      {/* <View className="bg-white px-4 pt-4 pb-4 border-t border-gray-200">
                <View className="flex-row justify-between mb-4">
                    <View className="flex-1">
                        <Text className="text-xs font-semibold text-gray-500 mb-1">
                            ITEMS
                        </Text>
                        <Text className="text-lg font-bold text-gray-900">
                            {totalItems}
                        </Text>
                    </View>

                    <View className="flex-1">
                        <Text className="text-xs font-semibold text-gray-500 mb-1">
                            TOTAL QTY
                        </Text>
                        <Text className="text-lg font-bold text-gray-900">
                            {totalQuantity}
                        </Text>
                    </View>

                    <View className="flex-1">
                        <Text className="text-xs font-semibold text-gray-500 mb-1">
                            TOTAL AMOUNT
                        </Text>
                        <Text className="text-lg font-bold text-emerald-800">
                            {totalAmount.toLocaleString('vi-VN')} VND
                        </Text>
                    </View>
                </View>

                <TouchableOpacity className="flex-row bg-emerald-800 py-4 rounded-xl justify-center items-center">
                    <Feather name="shopping-cart" size={24} color="#ffffff" />
                    <Text className="text-lg font-semibold text-white ml-2">
                        Create Order
                    </Text>
                </TouchableOpacity>
            </View> */}
    </SafeAreaView>
  );
}

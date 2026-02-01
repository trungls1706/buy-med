import { Feather } from "@expo/vector-icons";
import { TextInput, View } from "react-native";
export default function Search({ searchQuery, setSearchQuery }: any) {
  return (
    <View className="flex-row items-center mx-4 my-4 px-4 py-3 bg-gray-100 rounded-xl">
      <Feather name="search" size={24} color="#4b5563" />
      <TextInput
        className="flex-1 text-base text-gray-900 ml-3"
        placeholder="Search medication by name or SKU..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholderTextColor="#9ca3af"
      />
    </View>
  );
}

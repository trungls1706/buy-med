import { IconSymbol } from "@/components/ui/icon-symbol";
import { Text, View } from "react-native";
export default function Empty({ loading }: any) {
  return (
    <View className="flex-1 justify-center items-center py-20 px-10">
      <View className="bg-gray-100 p-8 rounded-full">
        <IconSymbol name="magnifyingglass" size={48} color="#D1D5DB" />
      </View>
      <Text className="mt-6 text-lg font-medium text-gray-400 text-center">
        {loading
          ? "Finding medications..."
          : "No medications found.\nTry a different search term."}
      </Text>
    </View>
  );
}

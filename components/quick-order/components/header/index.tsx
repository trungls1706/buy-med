import { Text, View } from "react-native";

export default function Header() {
  return (
    <View className="flex-row items-center justify-between px-4 py-3">
      <Text className="text-xl font-semibold text-gray-900">
        Pharmacy Search
      </Text>

      {/* <TouchableOpacity className="p-2">
        <MaterialCommunityIcons name="barcode-scan" size={28} color="#065f46" />
      </TouchableOpacity> */}
    </View>
  );
}

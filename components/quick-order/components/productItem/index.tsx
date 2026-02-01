import { IconSymbol } from "@/components/ui/icon-symbol";
import { Product } from "@/types/product";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface ProductItemProps {
  product: Product & { form?: string; icon?: string };
  quantity: number;
  onUpdateQuantity: (product: any, delta: number) => void;
}

const ProductItem = React.memo(
  ({ product, quantity, onUpdateQuantity }: ProductItemProps) => {
    const getIcon = () => {
      switch (product.icon) {
        case "pill":
          return "pills.fill";
        case "medkit":
          return "cross.case.fill";
        case "activity":
          return "waveform.path.ecg";
        case "jar":
          return "flask.fill";
        default:
          return "pills.fill";
      }
    };

    return (
      <View className="bg-white m-2 mx-4 p-4 rounded-3xl flex-row items-center border border-gray-100 relative">
        {product.isPrescription && (
          <View className="absolute top-0 right-0 bg-red-500 px-3 py-1 rounded-tr-3xl rounded-bl-2xl">
            <Text className="text-white text-[10px] font-bold">RX</Text>
          </View>
        )}

        <View className="w-16 h-16 bg-gray-50 rounded-2xl justify-center items-center">
          <IconSymbol name={getIcon() as any} size={32} color="#006B3F" />
        </View>

        <View className="flex-1 ml-4 justify-center">
          <View className="flex-row items-center flex-wrap">
            <Text className="text-lg font-bold text-gray-800 mr-2">
              {product.name}
            </Text>
          </View>

          <Text className="text-pharmacy-price font-bold text-base mt-0.5">
            {product.price.toLocaleString()} VND
          </Text>

          <Text className="text-gray-400 text-xs mt-0.5">
            {product.category} • {product.form || "Medicine"}
          </Text>
        </View>

        <View className=" flex-row items-center bg-gray-50 rounded-full p-1 border border-gray-100 gap-4">
          <TouchableOpacity
            onPress={() => onUpdateQuantity(product, -1)}
            disabled={quantity === 0}
            className={`w-7 h-7 rounded-full justify-center items-center ${quantity === 0 ? "opacity-30" : "bg-white "}`}
          >
            <IconSymbol name="minus" size={12} color="#000" />
          </TouchableOpacity>

          <Text className="text-sm font-bold w-6 text-center">{quantity}</Text>

          <TouchableOpacity
            onPress={() => onUpdateQuantity(product, 1)}
            disabled={quantity === 99}
            className="w-7 h-7 rounded-full bg-pharmacy-green justify-center items-center"
          >
            <IconSymbol name="plus" size={12} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  },
);

export default ProductItem;

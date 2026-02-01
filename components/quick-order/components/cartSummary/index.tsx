import { IconSymbol } from "@/components/ui/icon-symbol";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface CartSummaryProps {
  totalSKUs: number;
  totalQuantity: number;
  totalAmount: number;
}

const CartSummary = ({
  totalSKUs,
  totalQuantity,
  totalAmount,
}: CartSummaryProps) => {
  if (totalQuantity === 0) return null;

  return (
    <View className="bg-white p-6 pb-12 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] border-t border-gray-50 rounded-t-[40px]">
      <View className="flex-row justify-between items-end mb-6 px-2">
        <View className="items-start">
          <Text className="text-[10px] text-gray-400 font-bold uppercase tracking-tight mb-1">
            Items
          </Text>
          <Text className="text-xl font-bold text-gray-800">{totalSKUs}</Text>
        </View>
        <View className="items-start ml-8 flex-1">
          <Text className="text-[10px] text-gray-400 font-bold uppercase tracking-tight mb-1">
            Total Qty
          </Text>
          <Text className="text-xl font-bold text-gray-800">
            {totalQuantity}
          </Text>
        </View>
        <View className="items-end">
          <Text className="text-[10px] text-gray-400 font-bold uppercase tracking-tight mb-1">
            Total Amount
          </Text>
          <Text className="text-2xl font-black text-pharmacy-price">
            {totalAmount.toLocaleString()} VND
          </Text>
        </View>
      </View>

      <TouchableOpacity className="bg-pharmacy-green h-16 rounded-2xl flex-row justify-center items-center shadow-lg active:opacity-95">
        <IconSymbol name="cart.fill" size={20} color="white" />
        <Text className="text-white font-bold text-lg ml-3">Create Order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartSummary;

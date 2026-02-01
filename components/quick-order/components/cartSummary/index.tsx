import React from "react";
import { Text, View } from "react-native";

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
    <View className="bg-white px-4 pt-4 pb-4 border-t border-gray-200">
      <View className="flex-row justify-between px-4">
        <View className="flex-1 flex-row gap-4">
          <View>
            <Text className="text-xs font-semibold text-gray-500 mb-1">
              ITEMS
            </Text>
            <Text className="text-lg font-bold text-gray-900">{totalSKUs}</Text>
          </View>
          <View>
            <Text className="text-xs font-semibold text-gray-500 mb-1">
              TOTAL QTY
            </Text>
            <Text className="text-lg font-bold text-gray-900">
              {totalQuantity}
            </Text>
          </View>
        </View>

        {/* TOTAL */}
        <View className="flex-1 items-end">
          <Text className="text-xs font-semibold text-gray-500 mb-1">
            TOTAL AMOUNT
          </Text>
          <Text className="text-lg font-bold text-emerald-800">
            {totalAmount.toLocaleString("vi-VN")} VND
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CartSummary;

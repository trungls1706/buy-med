import { Category } from "@/types/product";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
}

const CategoryFilter = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: CategoryFilterProps) => {
  return (
    <View className="py-2">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 4, gap: 8 }}
      >
        {categories.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <TouchableOpacity
              key={category}
              onPress={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full border ${isSelected
                ? "bg-pharmacy-green border-pharmacy-green"
                : "bg-white border-gray-200"
                }`}
            >
              <Text
                className={`text-sm font-bold ${isSelected ? "text-white" : "text-gray-500"
                  }`}
              >
                {category}
              </Text>
            </TouchableOpacity>
          );

        })}
      </ScrollView>
    </View>
  );
};

export default CategoryFilter;

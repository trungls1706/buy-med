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
  console.log("selectedCategory", selectedCategory);

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
              className={`px-6 py-2.5 rounded-full border ${
                isSelected
                  ? "bg-pharmacy-green border-pharmacy-green"
                  : "bg-white border-gray-100 shadow-sm"
              }`}
            >
              <Text
                className={`text-sm font-semibold ${
                  isSelected ? "text-white" : "text-gray-700"
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

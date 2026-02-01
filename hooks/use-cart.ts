import { CartItem, Product } from "@/types/product";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useMemo, useState } from "react";
import { calculateTotals } from "./cart-utils";

const CART_STORAGE_KEY = "quick_order_cart";

export const useCart = () => {
  const [items, setItems] = useState<Record<number, CartItem>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  const totals = useMemo(() => {
    return {
      ...calculateTotals(items),
      items: Object.values(items),
    };
  }, [items]);

  const updateQuantity = useCallback((product: Product, delta: number) => {
    setItems((prev) => {
      const currentQty = prev[product.id]?.quantity || 0;
      const newQty = Math.min(99, Math.max(0, currentQty + delta));

      if (newQty === 0) {
        const { [product.id]: _, ...rest } = prev;
        return rest;
      }

      return {
        ...prev,
        [product.id]: {
          ...product,
          quantity: newQty,
        },
      };
    });
  }, []);

  const clearCart = useCallback(() => {
    setItems({});
  }, []);

  // =============================== SIDE EFFECT ===============================

  useEffect(() => {
    const loadCart = async () => {
      try {
        const storedCart = await AsyncStorage.getItem(CART_STORAGE_KEY);
        if (storedCart) {
          setItems(JSON.parse(storedCart));
        }
      } catch (error) {
        console.error("Failed to load cart", error);
      } finally {
        setIsLoaded(true);
      }
    };
    loadCart();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items)).catch(
        (error: any) => console.error("Failed to save cart", error),
      );
    }
  }, [items, isLoaded]);

  return {
    items,
    updateQuantity,
    clearCart,
    totals,
  };
};

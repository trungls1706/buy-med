import { CartItem } from "@/types/product";
import { calculateTotals } from "./cart-utils";

describe("cart-utils", () => {
  describe("calculateTotals", () => {
    it("should return zeros for an empty cart", () => {
      const items: Record<number, CartItem> = {};
      const result = calculateTotals(items);

      expect(result).toEqual({
        totalSKUs: 0,
        totalQuantity: 0,
        totalAmount: 0,
      });
    });

    it("should correctly calculate totals for multiple items", () => {
      const items: Record<number, CartItem> = {
        1: {
          id: 1,
          name: "Product 1",
          price: 10000,
          category: "Pain Relief",
          isPrescription: false,
          quantity: 2,
        },
        2: {
          id: 2,
          name: "Product 2",
          price: 50000,
          category: "Antibiotic",
          isPrescription: true,
          quantity: 1,
        },
      };

      const result = calculateTotals(items);

      expect(result.totalSKUs).toBe(2);
      expect(result.totalQuantity).toBe(3); // 2 + 1
      expect(result.totalAmount).toBe(70000); // (10000 * 2) + (50000 * 1)
    });
  });
});

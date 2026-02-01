import { calculateTotals } from '../cart-utils';
import { CartItem } from '@/types/product';

describe('cart-utils', () => {
  it('should calculate totals correctly for non-empty cart', () => {
    const items: Record<number, CartItem> = {
      1: {
        id: 1,
        name: 'Product 1',
        price: 15000,
        category: 'Pain Relief',
        isPrescription: false,
        quantity: 2,
      },
      2: {
        id: 2,
        name: 'Product 2',
        price: 45000,
        category: 'Antibiotic',
        isPrescription: true,
        quantity: 1,
      },
    };

    const totals = calculateTotals(items);

    expect(totals.totalSKUs).toBe(2);
    expect(totals.totalQuantity).toBe(3);
    expect(totals.totalAmount).toBe(15000 * 2 + 45000 * 1);
  });

  it('should return zeros for empty cart', () => {
    const items: Record<number, CartItem> = {};
    const totals = calculateTotals(items);

    expect(totals.totalSKUs).toBe(0);
    expect(totals.totalQuantity).toBe(0);
    expect(totals.totalAmount).toBe(0);
  });
});

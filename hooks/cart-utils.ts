import { CartItem } from '@/types/product';

export const calculateTotals = (items: Record<number, CartItem>) => {
    const cartArray = Object.values(items);
    return {
        totalSKUs: cartArray.length,
        totalQuantity: cartArray.reduce((acc, item) => acc + item.quantity, 0),
        totalAmount: cartArray.reduce((acc, item) => acc + item.price * item.quantity, 0),
    };
};

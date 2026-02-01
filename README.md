# Buymed Screening Test – Middle Mobile Software Engineer

## Quick Order - Product Search & Cart

This project implements a mobile screen for pharmacy staff to search for products and create quick orders efficiently.

### 🚀 How to Run the App

1.  **Clone the repository** (if not already done).
2.  **Install dependencies**:
    ```bash
    npm install --legacy-peer-deps
    ```
3.  **Start the Expo project**:
    ```bash
    npx expo start
    ```
4.  **Open on Device/Simulator**:
    - Press `i` for iOS simulator.
    - Press `a` for Android emulator.
    - Scan the QR code with the Expo Go app on your phone.

### 🏗️ Project Organization

I have followed a clean architecture approach to separate UI components from state and logic:

- **`assets/data/products.json`**: Mock data source to simulate an API response.
- **`types/product.ts`**: TypeScript definitions for Products, Cart Items, and Categories.
- **`hooks/use-products.ts`**: Handles fetching data (with simulated delay), search logic, and category filtering.
- **`hooks/use-cart.ts`**: Manages cart state including adding/removing items, persistence, and total calculations.
- **`hooks/cart-utils.ts`**: Pure functions for cart calculations, extracted for easy unit testing.
- **`components/quick-order/`**: UI-only components (ProductItem, CartSummary, CategoryFilter) designed to be reusable and performant (using `React.memo`).
- **`app/(tabs)/quick-order.tsx`**: Main screen that orchestrates the hooks and components.

### 🛠️ State Management & Persistence

- **React Hooks**: Used `useState`, `useMemo`, and `useCallback` for local state management.
- **Custom Hooks**: Business logic is encapsulated in custom hooks, making the UI components cleaner and easier to maintain.
- **Persistence**: Used `@react-native-async-storage/async-storage` to save and restore the cart state across app reloads.
- **Debounce**: Implemented `lodash.debounce` for search functionality to optimize performance and prevent excessive filtering operations during typing.

### 🧪 Unit Tests

Implemented unit tests for cart calculation logic in `hooks/__tests__/use-cart.test.ts`.
To run tests:

```bash
npm test
```

### ⚖️ Trade-offs & Improvements

Given more time, I would:

1.  **Global State Management**: For a larger application, I would migrate to **Zustand** or **Redux Toolkit** to handle cart state globally, especially if more than one screen needs access to the cart.
2.  **Server-side Search**: Currently, filtering and searching are done on the client side. For thousands of products, this should be done via API with pagination/infinite scroll.
3.  **Haptics & Animations**: Add `expo-haptics` for tactile feedback when adding items and `react-native-reanimated` for smoother transitions (e.g., cart summary appearing/disappearing).
4.  **Offline Support**: Enhance the data layer to handle intermittent connectivity and sync cart data with a remote server.
5.  **Form Validation**: If the "Quick Order" led to a checkout, I would implement robust form validation using `React Hook Form` and `Zod`.

---

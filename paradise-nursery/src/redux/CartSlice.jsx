import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0
  },

  reducers: {
    // 1. ADD ITEM
    addItem(state, action) {
      const item = state.items.find(i => i.id === action.payload.id);

      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.totalQuantity += 1;
    },

    // 2. REMOVE ITEM
    removeItem(state, action) {
      const existingItem = state.items.find(i => i.id === action.payload.id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
      }

      state.items = state.items.filter(i => i.id !== action.payload.id);
    },

    // 3. UPDATE QUANTITY
    updateQuantity(state, action) {
      const { id, type } = action.payload;

      const item = state.items.find(i => i.id === id);

      if (!item) return;

      if (type === "increase") {
        item.quantity += 1;
        state.totalQuantity += 1;
      } else if (type === "decrease" && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
      }
    }
  }
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const item = action.payload;
      const existingItem = state.items.find((itm) => itm.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1; // for the clickimg the same product again and again if the product exists
      } else {
        state.items.push({ ...item, quantity: 1 }); // if the item occurs only one time we just add the item to the cart and the default quantity is 1
      }
      state.total += item.price; // once the product is added into the cart we add that price of the product
    },
    remove(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      ); // find the index of the item and remove that item from the cart
      if (itemIndex >= 0) {
        state.total -=
          state.items[itemIndex].price * state.items[itemIndex].quantity;
        state.items.splice(itemIndex, 1); // using splice method we remove the item
      }
    },
    incrementQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload); // by teh id we are going to add the particular item's qunty
      if (item) {
        item.quantity += 1;
        state.total += item.price; // and add the price to the total again once they clicked the increment button
      }
    },
    decrementQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload); // as same as increment we are going to  minus thet quantity by the id
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.total -= item.price; // annd minus the total by the price of the product
      }
    },
  },
});

export const { add, remove, incrementQuantity, decrementQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;

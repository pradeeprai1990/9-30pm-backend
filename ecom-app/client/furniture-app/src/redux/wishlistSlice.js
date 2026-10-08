"use client"
import { createSlice } from "@reduxjs/toolkit";

const getInitialWishlist = () => {
  if (typeof window === "undefined") return [];

  try {
    const storedWishlist = window.localStorage.getItem("Wishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  } catch (error) {
    console.error("Failed to load wishlist from localStorage:", error);
    return [];
  }
};

const mywishlist = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: getInitialWishlist(),
  },
  reducers: {
    addToWishlist: (state, reqData) => {
      const { wishlistObj } = reqData.payload;
      state.wishlist = [wishlistObj, ...state.wishlist];
      if (typeof window !== "undefined") {
        window.localStorage.setItem("Wishlist", JSON.stringify(state.wishlist));
      }
    },
    deleteWishlist: (state, reqData) => {
      const { id } = reqData.payload;
      state.wishlist = state.wishlist.filter((obj) => obj.id !== id);
      if (typeof window !== "undefined") {
        window.localStorage.setItem("Wishlist", JSON.stringify(state.wishlist));
      }
    },
  },
});

export const { addToWishlist, deleteWishlist } = mywishlist.actions;
export default mywishlist.reducer;
import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {};

const initialState: InitialStateType = {
	cartList: [
		{
			product: null,
			count: 0,
			productPrice: 0,
		},
	],
	totalPrice: 0,
	totalItem: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem() {},
	},
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;

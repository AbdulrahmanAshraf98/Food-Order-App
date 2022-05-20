import React, { useReducer } from "react";
import cartReducer from "../Reducer/CartReducer";
import CartContext from "./Cart-context";

const initialState = {
	items: [],
	totalAmount: 0,
};


const CartProvider = ({ children }) => {
	const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState);

	const addItemHandler = (cartItem) => {
		dispatchCartAction({ type: "ADD-ITEM", payload: cartItem });
	};
	const removeItemHandler = (id) => {
		dispatchCartAction({ type: "REMOVE-ITEM", payload: id });
	};
	const clearItemsHandler = () => {
		dispatchCartAction({ type: "CLEAR-ITEMS" });
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemHandler,
		removeItem: removeItemHandler,
		clearItems: clearItemsHandler,
	};
	return (
		<CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
	);
};
export default CartProvider;

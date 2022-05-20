const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD-ITEM": {
			const existingCartItemIndex = state.items.findIndex(
				(item) => item.id === action.payload.id,
			);
			const existingCartItem = state.items[existingCartItemIndex];
			let newCartItems;
			if (existingCartItem) {
				const updateItem = {
					...existingCartItem,
					totalAmount:
						existingCartItem.totalAmount + action.payload.totalAmount,
				};

				newCartItems = [...state.items];
				newCartItems[existingCartItemIndex] = updateItem;
			} else {
				newCartItems = [...state.items, action.payload];
			}
			const NewTotalAmount =
				state.totalAmount + action.payload.totalAmount * action.payload.price;
			return {
				items: newCartItems,
				totalAmount: NewTotalAmount,
			};
		}
		case "REMOVE-ITEM": {
			const existingCartItemIndex = state.items.findIndex(
				(item) => item.id === action.payload,
			);
			const existingCartItem = state.items[existingCartItemIndex];
			const NewTotalAmount = Math.abs(
				state.totalAmount - existingCartItem.price,
			);
			const newCartItem = state.items.filter((item) => {
				return item.id !== action.payload;
			});
			let newCartItems;

			if (existingCartItem.totalAmount === 1) {
				newCartItems = state.items.filter((item) => item.id !== action.payload);
			} else {
				let updateItem = {
					...existingCartItem,
					totalAmount: existingCartItem.totalAmount - 1,
				};
				newCartItems = [...state.items];
				newCartItems[existingCartItemIndex] = updateItem;
			}
			return {
				items: newCartItems,
				totalAmount: NewTotalAmount,
			};
		}
		case "CLEAR-ITEMS": {
			return {
				items: [],
				totalAmount: 0,
			};
		}

		default: {
			console.log("s");
		}
	}
};
export default cartReducer;

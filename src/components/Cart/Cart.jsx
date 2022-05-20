import React, { useContext, useState } from "react";
import CartContext from "../../Store/Context/Cart-context";
import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";
import Checkout from "./Checkout/Checkout";

const Cart = ({ CartToggleHandler }) => {
	const [isCheckout, setIsCheckout] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [didSubmitting, setDidSubmitting] = useState(false);
	const cartContext = useContext(CartContext);
	const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
	const orderHandler = () => {
		setIsCheckout(true);
	};
	const submitOrderHandler = async (userData) => {
		setIsSubmitting(true);
		const response = await fetch(
			"https://foodorderapp-36bdc-default-rtdb.firebaseio.com/orders.json",
			{
				method: "POST",
				body: JSON.stringify({
					user: userData,
					orderedItems: cartContext.items,
				}),
			},
		);

		setIsSubmitting(false);
		setDidSubmitting(true);
		cartContext.clearItems();
	};

	const cartModal = (
		<>
			<ul className={styles["cart-items"]}>
				{cartContext.items.map((item) => {
					return (
						<CartItem
							key={item.id}
							item={item}
							onRemove={cartContext.removeItem}
							onAdd={cartContext.addItem}
						/>
					);
				})}
			</ul>
			<div className={styles.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			{isCheckout && (
				<Checkout onCancel={CartToggleHandler} onSubmit={submitOrderHandler} />
			)}
			{!isCheckout && (
				<div className={styles.actions}>
					<button className={styles["button--alt"]} onClick={CartToggleHandler}>
						Close
					</button>
					{cartContext.items.length > 0 && (
						<button className={styles.button} onClick={orderHandler}>
							Order
						</button>
					)}
				</div>
			)}
		</>
	);
	const isSubmittingModal = <p>Sending order data ....</p>;
	const didSubmitingModal = <p> successfully send the order! </p>;
	return (
		<Modal CartToggleHandler={CartToggleHandler}>
			{!isSubmitting && !didSubmitting && cartModal}
			{isSubmitting && isSubmittingModal}
			{!isSubmitting && didSubmitting && didSubmitingModal}
		</Modal>
	);
};
export default Cart;

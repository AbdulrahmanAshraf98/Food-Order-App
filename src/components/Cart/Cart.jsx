import React, { useContext } from "react";
import CartContext from "../../Store/Context/Cart-context";
import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";

const Cart = ({ CartToggleHandler }) => {
	const cartContext = useContext(CartContext);
	const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;

	return (
		<Modal CartToggleHandler={CartToggleHandler}>
			<ul className={styles["cart-items"]}>
				{cartContext.items.map((item) => {
					return (
						<CartItem
							key={item.id}
							item={item}
							onRemove={cartContext.removeItem}
							onAdd={cartContext.addItem}/>
					);
				})}
			</ul>
			<div className={styles.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={styles.actions}>
				<button className={styles["button--alt"]} onClick={CartToggleHandler}>
					Close
				</button>
				{cartContext.items.length > 0 && (
					<button className={styles.button}>Order</button>
				)}
			</div>
		</Modal>
	);
};
export default Cart;

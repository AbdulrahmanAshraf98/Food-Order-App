import styles from "./CartItem.module.css";
const CartItem = ({ item, onRemove, onAdd }) => {
	let price = +item.price;

	return (
		<li className={styles["cart-item"]}>
			<div>
				<h2>{item.name}</h2>
				<div className={styles.summary}>
					<span className={styles.price}>{price}</span>
					<span className={styles.amount}>x {item.totalAmount}</span>
				</div>
			</div>
			<div className={styles.actions}>
				<button
					onClick={() => {
						onRemove(item.id);
					}}>
					-
				</button>
				<button
					onClick={() => {
						onAdd({ ...item, totalAmount: 1 });
					}}>
					+
				</button>
			</div>
		</li>
	);
};

export default CartItem;

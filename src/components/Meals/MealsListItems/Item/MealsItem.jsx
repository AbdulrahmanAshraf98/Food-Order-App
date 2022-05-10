import React, { useContext } from "react";
import CartContext from "../../../../Store/Context/Cart-context";
import MealItemForm from "../../MealsItemForm/MealItemForm";
import styles from "./MealsItem.module.css";
const MealsItem = ({ name, description, price, id }) => {
	const cartContext = useContext(CartContext);
	const addItemHandler = (amount) => {
		const item = {
			id: id,
			name: name,
			description: description,
			price: price,
			totalAmount: amount,
		};
		cartContext.addItem(item);
	};
	price = price.toFixed(2);
	return (
		<li className={styles.meal} id={id}>
			<div>
				<h3>{name}</h3>
				<div className={styles.description}>{description}</div>
				<div className={styles.price}>{price}</div>
			</div>
			<div>
				<MealItemForm addItem={addItemHandler} />
			</div>
		</li>
	);
};
export default MealsItem;

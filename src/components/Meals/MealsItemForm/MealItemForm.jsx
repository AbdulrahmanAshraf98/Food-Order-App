import React, {  useRef, useState } from "react";
import Input from "../../UI/Input/Input";
import styles from "./MealsItemForm.module.css";
const MealItemForm = ({ addItem }) => {
	const [isValid, setIsValid] = useState(true);
	const userTotalAmountInput = useRef();
	const onSubmitHandler = (e) => {
		let enteredAmount = userTotalAmountInput.current.value;

		e.preventDefault();

		if (enteredAmount.trim().length === 0) {
			setIsValid(false);
			return;
		}
		enteredAmount = +userTotalAmountInput.current.value;
		addItem(enteredAmount);
		setIsValid(true);
	};
	return (
		<form className={styles.form} onSubmit={onSubmitHandler}>
			<Input
				className={styles.input}
				label="Amount"
				id="amount"
				type="number"
				min="1"
				max="5"
				step="1"
				defaultValue="1"
				ref={userTotalAmountInput}
			/>
			<button>Add To Cart</button>
			{!isValid && <p>enter a valid amount (1-5).</p>}
		</form>
	);
};
export default MealItemForm;

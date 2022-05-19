import React, { useRef, useState } from "react";
import Input from "../../UI/Input/Input";
import styles from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;
const Checkout = ({ onCancel, onSubmit }) => {
	const [enteredValueNotValid, setEnteredValueNotValid] = useState({});

	const nameInputRef = useRef();
	const streetInputRef = useRef();
	const postCodeInputRef = useRef();
	const cityInputRef = useRef();
	const onSubmitHandler = (e) => {
		e.preventDefault();
		const enteredInputValue = {
			name: nameInputRef.current.value,
			street: streetInputRef.current.value,
			postcode: postCodeInputRef.current.value,
			city: cityInputRef.current.value,
		};

		setEnteredValueNotValid((prev) => {
			return {
				nameInput: isEmpty(enteredInputValue.name),
				streetInput: isEmpty(enteredInputValue.street),
				cityInput: isEmpty(enteredInputValue.city),
				postcodeInput: !isFiveChars(enteredInputValue.postcode),
			};
		});

		const formIsNotValid =
			isEmpty(enteredInputValue.name) ||
			isEmpty(enteredInputValue.street) ||
			isEmpty(enteredInputValue.city) ||
			!isFiveChars(enteredInputValue.postcode);
		if (formIsNotValid) {
			return;
		}

		onSubmit(enteredInputValue);
	};

	return (
		<form className={styles.form} onSubmit={onSubmitHandler}>
			<Input
				className={`${styles.control} ${
					enteredValueNotValid.nameInput ? styles.invalid : ""
				}`}
				label="Name"
				id="name"
				type="text"
				ref={nameInputRef}
			/>
			{enteredValueNotValid.nameInput && (
				<p className={styles.invalidFeedBack}>plz enter a valid name</p>
			)}

			<Input
				className={`${styles.control} ${
					enteredValueNotValid.streetInput ? styles.invalid : ""
				}`}
				label="Street"
				id="Street"
				type="text"
				ref={streetInputRef}
			/>
			{enteredValueNotValid.streetInput && (
				<p className={styles.invalidFeedBack}>plz enter a valid street</p>
			)}
			<Input
				className={`${styles.control} ${
					enteredValueNotValid.postcodeInput ? styles.invalid : ""
				}`}
				label="Post Code"
				id="postCode"
				type="text"
				ref={postCodeInputRef}
			/>
			{enteredValueNotValid.postcodeInput && (
				<p className={styles.invalidFeedBack}>
					plz enter a valid postcode(5 characters)
				</p>
			)}
			<Input
				className={`${styles.control} ${
					enteredValueNotValid.cityInput ? styles.invalid : ""
				}`}
				label="City"
				id="city"
				type="text"
				ref={cityInputRef}
			/>
			{enteredValueNotValid.cityInput && (
				<p className={styles.invalidFeedBack}>plz enter a valid city</p>
			)}
			<div className={styles.actions}>
				<button className={styles.submit}>Confirm</button>
				<button onClick={onCancel} type="button">
					Cancel
				</button>
			</div>
		</form>
	);
};
export default Checkout;

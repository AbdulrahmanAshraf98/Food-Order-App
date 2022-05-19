import React, { useEffect, useState } from "react";
import useFetch from "../../../Hooks/useFetch";
import Card from "../../UI/Card/Card";
import MealsListItem from "../MealsListItems/MealsListItem";
import styles from "./AvailableMeals.module.css";
const AvailableMeals = () => {
	const [availableMeals, isLoading, error] = useFetch(
		"https://foodorderapp-36bdc-default-rtdb.firebaseio.com/meals.json",
	);
	return (
		<section className={styles.meals}>
			{isLoading && <p className={styles.mealsLoading}>loading</p>}
			{!isLoading && error && <p className={styles.mealsError}>{error}</p>}
			{!isLoading && !error && (
				<Card className={styles.mealsCard}>
					<MealsListItem listItems={availableMeals} />
				</Card>
			)}
		</section>
	);
};
export default AvailableMeals;

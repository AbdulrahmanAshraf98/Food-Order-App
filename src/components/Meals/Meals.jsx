import React, { Fragment } from "react";
import AvailableMeals from "./AvailableMeals/AvailableMeals";
import MealsSummary from "./MealsSummury/MealsSummury";
const Meals = () => {
	return (
		<Fragment>
			<MealsSummary />
			<AvailableMeals />
		</Fragment>
	);
};
export default Meals;

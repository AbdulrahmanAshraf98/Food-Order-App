import React from "react";
import MealsItem from "./Item/MealsItem";

const MealsListItem = ({ listItems }) => {
	return (
		<ul>
			{listItems.map((item) => (
				<MealsItem key={item.id} id={item.id} {...item}/>
			))}
		</ul>
	);
};
export default MealsListItem;

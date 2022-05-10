import React from "react";
import styles from "./Header.module.css";
import MealsImg from "../../../assets/meals.jpg";
const Header = () => {
	return (
		<header>
			<div className={styles["main-image"]}>
				<img src={MealsImg} alt="Meals Img" />
			</div>
		</header>
	);
};
export default Header;

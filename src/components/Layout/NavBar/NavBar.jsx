import React from "react";
import CartButton from "../../UI/CartButton/CartButton";
import styles from "./NavBar.module.css";
const NavBar = ({CartToggleHandler}) => {
	return (
		<nav className={styles.nav}>
			<h1>React Meals</h1>
			<CartButton CartToggleHandler={CartToggleHandler}></CartButton>
		</nav>
	);
};
export default NavBar
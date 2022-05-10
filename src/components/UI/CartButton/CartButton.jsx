import React, { useContext,useEffect,useState } from "react";
import CartContext from "../../../Store/Context/Cart-context";
import CartIcon from "../CartIcon/CartIcon";
import styles from "./CartButton.module.css";
const CartButton = ({ CartToggleHandler }) => {
	const [btnHighLight,setBtnHighLight]=useState(false);
	const cartContext = useContext(CartContext);
	
	useEffect(() =>{
		
		if(cartContext.items.length>0)
		{
			setBtnHighLight(true);
		}
		const timeout=	setTimeout(() => {
			setBtnHighLight(false);	
		}, 300);

		return ()=>{
			clearTimeout(timeout);
		}
	},[cartContext.items])
	const NumberOfCartItems = cartContext.items.reduce(
		(previousValue, currentValue) => {
		return	previousValue + currentValue.totalAmount;
		},
		0,
	);
	return (
		<button className={`${styles.button} ${btnHighLight?styles.bump:''}`} onClick={CartToggleHandler}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={styles.badge}>{NumberOfCartItems}</span>
		</button>
	);
};
export default CartButton;

import React, { useState } from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header/Header";
import Main from "./components/Layout/Main/Main";
import NavBar from "./components/Layout/NavBar/NavBar";
import CartProvider from "./Store/Context/Cart-Provider";

function App() {
	const [CartToggle, setCartToggle] = useState(false);
	const CartToggleHandler = () => {
		setCartToggle((prevState) => !prevState);
	};
	return (
		<CartProvider>
			{CartToggle && <Cart CartToggleHandler={CartToggleHandler} />}
			<NavBar CartToggleHandler={CartToggleHandler} />
			<Header />
			<Main />
		</CartProvider>
	);
}

export default App;

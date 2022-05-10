import React from "react";
import styles from "./Input.module.css";
const Input = React.forwardRef(({ label, id, ...otherProps },ref) => {
	return (
		<div className={styles.input}>
			{label && <label htmlFor={id}>{label}</label>}
			<input id={id} {...otherProps} ref={ref} />
		</div>
	);
});
export default Input;

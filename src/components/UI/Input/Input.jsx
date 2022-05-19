import React from "react";

const Input = React.forwardRef(
	({ label, id, className, ...otherProps }, ref) => {
		return (
			<div className={className}>
				{label && <label htmlFor={id}>{label}</label>}
				<input id={id} {...otherProps} ref={ref} />
			</div>
		);
	},
);
export default Input;

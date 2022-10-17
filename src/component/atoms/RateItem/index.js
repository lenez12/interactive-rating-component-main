import React from "react";
import "./styles.scss";

function RateItem({ onClick, active, children, disabled }) {
	const isActive = active ? "active" : "";
	return (
		<div className={`wrapper ${isActive}`} onClick={onClick}>
			<span className="noselect">{children}</span>
		</div>
	);
}
export default RateItem;

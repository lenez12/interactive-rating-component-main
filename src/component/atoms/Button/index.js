import React from "react";
import "./styles.scss";

const Button = ({ onClick, loading }) => {
	const isLoading = loading ? <i className="fa-solid fa-cog fa-spin"></i> : "";
	const loadingText = loading ? "submiting" : "submit";
	return (
		<button disabled={loading} className="btn" onClick={onClick}>
			{isLoading} {loadingText}
		</button>
	);
};

export default Button;

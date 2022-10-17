import React, { useState, useEffect } from "react";
import RateItem from "../../atoms/RateItem";
import "./styles.scss";

const Ratings = ({ count, onChange = null, disabled }) => {
	const [selected, setSelected] = useState(0);

	const countArr = Array(count)
		.fill()
		.map((_, i) => i + 1);

	useEffect(() => {
		onChange(selected);
	}, [selected]);

	const _setSelection = (item) => {
		if (!disabled) {
			setSelected(item);
		} else return;
	};

	return (
		<div className="rating-wrapper">
			{countArr.map((item) => (
				<RateItem
					key={item.toString()}
					active={item === selected}
					onClick={() => _setSelection(item)}
				>
					{item.toString()}
				</RateItem>
			))}
		</div>
	);
};

export default Ratings;

import React, { useState } from "react";
import { RatingCard, ThankCard } from "../../component/organism";
import "../../scss/_reset.scss";
import "./styles.scss";

function RatingPage() {
	const [rates, setRate] = useState(0);
	const [toggle, setToggle] = useState(false);
	const _submitRate = (rate) => {
		setRate(rate);
		setToggle(true);
		console.log("object");
	};

	return (
		<div>
			{!toggle ? (
				<RatingCard onSubmit={_submitRate} />
			) : (
				<ThankCard count={5} rate={rates} />
			)}
		</div>
	);
}

export default RatingPage;

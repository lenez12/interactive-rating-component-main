import React, { useState, useEffect } from "react";

import { Ratings } from "../../molecules";
import { Button } from "../../atoms";
import startImage from "../../../assets/images/icon-star.svg";
import "./styles.scss";

function RatingCard({ onSubmit }) {
	const [rating, setRating] = useState(0);
	const [loading, setLoading] = useState(false);
	const [shake, setShake] = useState("");

	const onClick = () => {
		if (rating) {
			setLoading(true);
		} else {
			setShake(" shake-horizontal");
		}
	};

	useEffect(() => {
		let loadingTime = setTimeout(() => {
			setLoading(false);
			loading && onSubmit(rating);
		}, 2000);
		return () => clearInterval(loadingTime);
	}, [loading, onSubmit, rating]);

	useEffect(() => {
		let time = setTimeout(() => {
			setShake("");
		}, 1000);
		return () => clearTimeout(time);
	}, [shake]);
	return (
		<div>
			<main className={`container roll-in-left`}>
				<div className={`card ${shake}`}>
					<div className="star-wrapper">
						<img src={startImage} alt="star" />
					</div>
					<h1>How did we do?</h1>
					<p>
						Please let us know how we did weith your support request. All
						feedback is appreciated to help us improve our offering!
					</p>

					<Ratings
						disabled={loading}
						count={5}
						onChange={(rate) => setRating(rate)}
					/>
					<Button loading={loading} onClick={onClick} />
				</div>
			</main>
		</div>
	);
}

export default RatingCard;

import React from "react";
import startImage from "../../../assets/images/illustration-thank-you.svg";
import "./styles.scss";

function ThankCard({ count, rate }) {
	return (
		<div>
			<main className={`container bounce-in-top`}>
				<div className="card-thank  ">
					<img src={startImage} alt="star" />
					<p className="badge">
						You selected {rate} out of {count}
					</p>
					<h1>Thank you!</h1>
					<p>
						We appreciate you taking the time to give a rating. If you ever need
						more support, don’t hesitate to get in touch!
					</p>
				</div>
			</main>
		</div>
	);
}

export default ThankCard;

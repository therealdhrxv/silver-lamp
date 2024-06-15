"use client";

import { useState, useRef } from "react";

export default function Home() {

	const [otp, setOtp] = useState(["", "", "", ""]);

	const inputRef = useRef([]);

	const handleChange = (index, value) => {
		const newOtp = [...otp];
		newOtp[index] = value;
		if (value && index < otp.length - 1) inputRef.current[index + 1].focus();
		setOtp(newOtp);
	}

	const handleKeyDown = (index, e) => {
		if (e.key === "Backspace" && index > 0 && !otp[index]) {
			const newOtp = [...otp];
			newOtp[index - 1] = "";
			inputRef.current[index - 1].focus();
			setOtp(newOtp);
		}
	}

	return (
		<>
			<div className="app">

				<h2> OTP VERIFICATION </h2>
				<p> Enter the four digit otp that you've received </p>

				<div className="otp-container">
					{otp.map((digit, index) => (
						<input
							key={index}
							className="otp-input"
							type="text"
							maxLength={1}
							value={digit}
							autoFocus={index === 0}
							ref={(ref) => (inputRef.current[index] = ref)}
							onChange={(e) => handleChange(index, e.target.value)}
							onKeyDown={(e) => handleKeyDown(index, e)}
						/>
					))}
				</div>

			</div>
		</>
	);
}

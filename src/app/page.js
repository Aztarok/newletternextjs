"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home() {
	const [emailText, setEmailText] = useState("");
	const [answer, setAnswer] = useState(false);

	const router = useRouter();

	function handleSubmit(e) {
		e.preventDefault();
		const error = document.getElementById("errors");

		if (emailText !== "" && error.style.display === "") {
			router.push("/success");
		}
	}
	// useEffect(
	//     const timeoutFn = setTimeout(() => {setAnswer((isEmail(emailText)))},100)
	//     return () => clearTimeout(timeoutFn), [handleText()])

	useEffect(() => {
		const timeoutFn = setTimeout(() => {
			checkInput();
		}, 100);
		console.log(answer);
		return () => clearTimeout(timeoutFn);
	}, [handleText]);

	function handleText(e) {
		setEmailText(e);
	}

	function checkInput() {
		const email = document.querySelector("input");
		const error = document.getElementById("errors");

		if (!isEmail(emailText)) {
			email.style.background = "hsla(4, 100%, 67%, 0.3)";
			email.style.color = "hsl(4, 100%, 67%)";
			error.style.display = "block";
		} else {
			email.style.background = "";
			email.style.color = "";
			error.style.display = "";
		}
	}

	function isEmail(email) {
		return /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
	}

	return (
		<main className="flex justify-center items-center h-screen bg-darkSlateGray">
			<div className="flex w-[50%] h-[74%] bg-sky-50 border-sky-50 border-[20px] rounded-3xl">
				<div className="flex flex-col  text-slate-700 pl-10 pt-10 font-bold w-[50%] bg-sky-50">
					<span className="text-5xl">Stay updated!</span>
					<br />

					<div>
						<span className="">
							Join 60,000+ product managers receiving monthly
							updates on:
						</span>
						<div className="pt-5 flex flex-col gap-y-2">
							<div className="flex gap-x-4">
								<img src="/icon-list.svg" alt="icon" />
								<p>
									Product discovery and building what matters
								</p>
							</div>
							<div className="flex gap-x-4">
								<img src="/icon-list.svg" alt="icon" />
								<p>Measuring to ensure updates are a success</p>
							</div>
							<div className="flex gap-x-4">
								<img src="/icon-list.svg" alt="icon" />
								<p>And much more!</p>
							</div>
						</div>

						<form
							onSubmit={(e) => handleSubmit(e)}
							className="flex flex-col pt-10"
						>
							<div className="flex">
								<label htmlFor="email" className="text-sm pb-2">
									Email address
								</label>
								<div
									className="text-sm pb-2 ml-auto text-tomato hidden"
									id="errors"
								>
									{<p>Valid email required</p>}
								</div>
							</div>
							<input
								onChange={(e) => handleText(e.target.value)}
								name="email"
								id="email"
								required=""
								type="text"
								className="p-4 text-sm border-darkSlateGray border-[2.5px] rounded-md "
								placeholder="email@company.com"
							/>
							<button
								type="submit"
								className="mt-5 p-4 text-sm text-white rounded-lg bg-darkSlateGray flex justify-center"
							>
								Subscribe to monthly newsletter
							</button>
						</form>
					</div>
				</div>
				<div className="flex justify-end w-[50%] bg-sky-50 rounded-r-2xl">
					<img src="/illustration-sign-up-desktop.svg" alt="image" />
				</div>
			</div>
		</main>
	);
}

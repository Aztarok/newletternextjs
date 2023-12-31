import EmailInput from "@/components/EmailInput";
export default function Home() {
	return (
		<main className="flex justify-center items-center sm:min-h-screen min-h-0 sm:bg-darkSlateGray bg-white">
			<div className="w-full max-w-screen-2xl sm:min-h-0 min-h-screen mx-auto sm:w-5/6 md:w-4/5 lg:w-[60%]">
				{/* Apply larger scaling margins and adjust the first div's width */}
				<div className="mx-auto">
					<img
						className="w-screen sm:hidden flex"
						src="/nextjs-github-pages/illustration-sign-up-mobile.svg"
						alt="logo"
					/>
					<div className="flex flex-col sm:min-h-0 min-h-screen md:flex-row bg-sky-50 border-sky-50 border-[20px] rounded-none sm:rounded-3xl">
						<div className="flex flex-col text-slate-700 sm:pl-10 px-auto pt-10 font-bold w-full md:w-[50%] bg-sky-50">
							<span className="text-5xl">Stay updated!</span>
							<p className="text-xl mt-4">
								Join 60,000+ product managers receiving monthly
								updates on:
							</p>
							<div className="pt-5 space-y-2">
								<div className="flex gap-x-4">
									<img
										src="/nextjs-github-pages/icon-list.svg"
										alt="icon"
									/>
									<p>
										Product discovery and building what
										matters
									</p>
								</div>
								<div className="flex gap-x-4">
									<img
										src="/nextjs-github-pages/icon-list.svg"
										alt="icon"
									/>
									<p>
										Measuring to ensure updates are a
										success
									</p>
								</div>
								<div className="flex gap-x-4">
									<img
										src="/nextjs-github-pages/icon-list.svg"
										alt="icon"
									/>
									<p>And much more!</p>
								</div>
							</div>
							<EmailInput
								inputStyle={
									"p-4 text-sm border-darkSlateGray border-[2.5px] rounded-md w-full"
								}
								errorMessageStyle={
									"text-tomato text-sm ml-auto"
								}
							/>
						</div>
						<div className="hidden md:flex justify-end w-[50%] bg-sky-50 rounded-r-2xl">
							<img
								src="/nextjs-github-pages/illustration-sign-up-desktop.svg"
								alt="image"
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

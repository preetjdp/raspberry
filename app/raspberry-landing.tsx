"use client";

import { Dithering, HalftoneDots } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";

export function RaspberryLanding() {
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

	useEffect(() => {
		const query = window.matchMedia("(prefers-reduced-motion: reduce)");
		const updatePreference = () => {
			setPrefersReducedMotion(query.matches);
		};

		updatePreference();
		query.addEventListener("change", updatePreference);
		return () => {
			query.removeEventListener("change", updatePreference);
		};
	}, []);

	return (
		<main className="relative min-h-[max(100svh,620px)] w-full overflow-hidden bg-black min-[360px]:min-h-[max(100svh,680px)] lg:min-h-[100svh]">
			<Dithering
				aria-hidden="true"
				className="pointer-events-none absolute inset-0"
				colorBack="#00000000"
				colorFront="#50505033"
				maxPixelCount={2_500_000}
				minPixelRatio={1}
				shape="dots"
				size={9}
				speed={prefersReducedMotion ? 0 : 1}
				type="random"
			/>
			<HalftoneDots
				aria-hidden="true"
				className="pointer-events-none absolute left-1/2 -top-[20px] h-[min(526px,58svh)] w-[min(650px,80svh)] -translate-x-1/2 scale-[1.05] lg:left-[24%] lg:-top-8 lg:h-[min(720px,90svh)] lg:w-[min(760px,66vw)] xl:-left-[135px] xl:-top-[18px] xl:h-[832px] xl:w-[1027px] xl:-translate-x-[8%] xl:-translate-y-[8%]"
				colorBack="#00000000"
				colorFront="#B2AEAE"
				contrast={0.01}
				fit="contain"
				grainSize={0.5}
				grid="hex"
				image="/raspberry.svg"
				maxPixelCount={2_500_000}
				minPixelRatio={1}
				originalColors
				radius={2}
				size={0.6}
				type="classic"
			/>
			<div className="absolute inset-x-4 bottom-8 z-10 flex justify-center min-[320px]:inset-x-6 min-[360px]:bottom-10 sm:inset-x-10 sm:bottom-12 lg:inset-0 lg:bottom-auto lg:items-start lg:justify-start">
				<div className="flex flex-col items-center gap-8 text-center lg:w-full lg:max-w-[1280px] lg:flex-row lg:items-start lg:gap-16 lg:px-16 lg:pt-[30svh] lg:text-left xl:gap-20 xl:px-0 xl:pt-[272px]">
					<div
						aria-hidden="true"
						className="hidden shrink-0 lg:block lg:w-[min(52vw,640px)] xl:w-[705px]"
					/>
					<section className="flex flex-col items-center gap-8 lg:items-start lg:gap-10 xl:gap-[35px]">
						<h1
							aria-label="Raspberry Productions"
							className="text-[22px] leading-[1.18] text-[#f4f4f4] min-[320px]:text-[26px] min-[360px]:text-[30px] sm:text-[38px] lg:text-[38px] lg:leading-[48px] xl:text-[46px] xl:leading-[56px]"
						>
							Raspberry
							<br />
							Productions
						</h1>
						<a
							aria-label="Contact Raspberry Productions by email"
							className="group flex w-fit flex-col items-center gap-[5px] text-[#a1b3c3] transition duration-200 hover:text-[#f4f4f4] focus-visible:text-[#f4f4f4]"
							href="mailto:rasp@berry.productions"
						>
							<svg
								aria-hidden="true"
								className="h-[72px] w-[72px] shrink-0 min-[320px]:h-[86px] min-[320px]:w-[86px] sm:h-[104px] sm:w-[104px] xl:h-[120px] xl:w-[120px]"
								fill="none"
								viewBox="0 0 72 72"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									className="fill-current"
									d="M43.98 25.695H28.02V63.268H43.98V25.695Z"
								/>
								<path
									className="fill-current"
									d="M49.12 61.547H22.887V63.503H49.12V61.547Z"
								/>
								<path
									className="fill-current"
									d="M43.984 25.695H22.887V27.651H43.984V25.695Z"
								/>
								<path
									className="fill-current"
									d="M36.002 20.637C40.41 20.637 43.984 17.063 43.984 12.654C43.984 8.246 40.41 4.672 36.002 4.672C31.593 4.672 28.02 8.246 28.02 12.654C28.02 17.063 31.593 20.637 36.002 20.637Z"
								/>
								<path
									className="stroke-current"
									d="M36 71.039C55.349 71.039 71.035 55.353 71.035 36.004C71.035 16.655 55.349 0.969 36 0.969C16.651 0.969 0.965 16.655 0.965 36.004C0.965 55.353 16.651 71.039 36 71.039Z"
									strokeMiterlimit="10"
									strokeWidth="1.934"
								/>
							</svg>
							<span className="text-xs font-bold leading-4">Contact</span>
						</a>
					</section>
				</div>
			</div>
		</main>
	);
}

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
		<main className="relative min-h-[100svh] w-full overflow-clip bg-black">
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
				className="pointer-events-none absolute left-1/2 -top-[20px] h-[526px] w-[650px] -translate-x-1/2 scale-[1.05] md:-left-[135px] md:-top-[18px] md:h-[832px] md:w-[1027px] md:-translate-x-[8%] md:-translate-y-[8%]"
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
			{/* <h1 className="absolute left-[27px] top-[494px] flex w-max justify-end text-right text-[29px] leading-[34px] font-normal tracking-[0.202em] text-[#f4f4f4] md:left-[823px] md:top-[69px] md:text-[46px] md:leading-[56px]">
				Raspberry
			</h1>
			<h2 className="absolute left-[104px] top-[528px] flex w-max justify-end text-right text-[29px] leading-[34px] font-normal text-[#f4f4f4] md:left-[823px] md:top-[125px] md:text-[46px] md:leading-[56px]">
				Productions
			</h2> */}
		</main>
	);
}

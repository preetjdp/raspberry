"use client";

import { Dithering, HalftoneDots } from "@paper-design/shaders-react";
import { Mail } from "lucide-react";
import { useEffect, useState } from "react";

import { Folder } from "@/app/_components/folder";

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
						<div className="flex flex-wrap items-start justify-center gap-x-5 gap-y-5 sm:gap-x-8 lg:justify-start xl:gap-x-5">
							<a
								aria-label="Contact Raspberry Productions by email"
								className="group flex w-fit flex-col items-center gap-[5px] text-[#a1b3c3] transition duration-200 hover:text-[#f4f4f4] focus-visible:text-[#f4f4f4]"
								href="mailto:rasp@berry.productions"
							>
								<Folder
									colorScheme="material-porcelain"
									motion="tilt"
									iconTreatment="engraved"
									icon={Mail}
									iconSize={24}
									label="Contact"
								/>
							</a>
						</div>
					</section>
				</div>
			</div>
		</main>
	);
}

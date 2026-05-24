import {
	Archive,
	Camera,
	FileText,
	Image,
	Mail,
	Palette,
	Star,
} from "lucide-react";
import type { Metadata } from "next";
import type { ComponentType } from "react";

import {
	Folder,
	type FolderColorScheme,
	type FolderIconProps,
	type FolderIconTreatment,
	type FolderMotion,
	folderColorSchemeGroups,
	folderColorSchemeNames,
	folderIconTreatmentNames,
	folderMotionNames,
} from "@/app/_components/folder";

import { FolderBuilder } from "./folder-builder";

export const metadata: Metadata = {
	title: "Folder System | Raspberry Productions",
	description: "A React builder for Aqua-inspired folder components.",
};

const colorSchemeCount = folderColorSchemeGroups.reduce(
	(total, group) => total + group.schemes.length,
	0,
);

const stats = [
	{ label: "Color", value: `${colorSchemeCount} systems` },
	{ label: "Icon", value: "7 treatments" },
	{ label: "Motion", value: "4 patterns" },
];

const showcaseCombos: Array<{
	colorScheme: FolderColorScheme;
	icon: ComponentType<FolderIconProps> | null;
	iconTreatment: FolderIconTreatment;
	motion: FolderMotion;
	note: string;
	title: string;
}> = [
	{
		colorScheme: "duotone-cobalt",
		icon: FileText,
		iconTreatment: "engraved",
		motion: "tilt",
		note: "Blue-gray surface, etched icon, angled lift.",
		title: "Cobalt / Engraved",
	},
	{
		colorScheme: "material-smoke",
		icon: Star,
		iconTreatment: "engraved",
		motion: "peek",
		note: "Low-chroma smoke material with the tab separation motion.",
		title: "Smoke / Peek",
	},
	{
		colorScheme: "duotone-ink",
		icon: Archive,
		iconTreatment: "cutout",
		motion: "lift",
		note: "Dense cutout mark, simple rise, lowest visual noise.",
		title: "Ink / Cutout",
	},
	{
		colorScheme: "gel-ice",
		icon: Image,
		iconTreatment: "orb",
		motion: "tilt",
		note: "Bright gel body with a rounded icon bubble and tilt.",
		title: "Ice / Orb",
	},
	{
		colorScheme: "material-porcelain",
		icon: Palette,
		iconTreatment: "capsule",
		motion: "still",
		note: "Quiet glazed surface for placements that should stay calm.",
		title: "Porcelain / Still",
	},
	{
		colorScheme: "gel-lagoon",
		icon: null,
		iconTreatment: "plain",
		motion: "peek",
		note: "Material-only variant with no mark competing for attention.",
		title: "Lagoon / No Icon",
	},
];

const familyPresentation: Record<
	string,
	{
		icon: ComponentType<FolderIconProps> | null;
		iconTreatment: FolderIconTreatment;
		motion: FolderMotion;
	}
> = {
	"Glossy Gel": {
		icon: Image,
		iconTreatment: "orb",
		motion: "peek",
	},
	Duotone: {
		icon: FileText,
		iconTreatment: "engraved",
		motion: "lift",
	},
	Skeuomorphic: {
		icon: Camera,
		iconTreatment: "medallion",
		motion: "tilt",
	},
};

export default function FolderPage() {
	return (
		<main className="min-h-[100svh] w-full overflow-hidden bg-[#030405] px-5 py-8 text-[#f4f7f8] sm:px-8 lg:px-12">
			<div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
				<header className="grid gap-8 border-[#b8cad926] border-b pb-9 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
					<div className="flex min-w-0 flex-col gap-6">
						<div className="flex min-w-0 flex-col gap-4">
							<p className="text-[#9fb5c6] text-xs font-bold leading-4 tracking-[0.18em] uppercase">
								Paper MCP / Folder
							</p>
							<h1 className="max-w-4xl text-4xl leading-[1.04] sm:text-6xl lg:text-7xl">
								Folder System
							</h1>
							<p className="max-w-2xl text-[#9fb5c6] text-sm font-bold leading-6 tracking-[0.06em]">
								Aqua-inspired folders with color, icon, and motion separated
								into reusable component axes.
							</p>
						</div>

						<dl className="grid max-w-3xl grid-cols-1 gap-2 sm:grid-cols-3">
							{stats.map((item) => (
								<div
									className="rounded-md border border-[#b8cad91a] bg-[#070a0d] px-4 py-3"
									key={item.label}
								>
									<dt className="text-[#7892a6] text-[10px] font-bold leading-4 tracking-[0.16em] uppercase">
										{item.label}
									</dt>
									<dd className="text-[#f4f7f8] text-sm font-bold leading-5 tracking-[0.08em]">
										{item.value}
									</dd>
								</div>
							))}
						</dl>
					</div>

					<div className="grid grid-cols-3 gap-3 rounded-lg border border-[#b8cad91f] bg-[#070a0d] p-4 shadow-[0_18px_54px_rgb(0_0_0/0.24)]">
						<div className="flex justify-center">
							<Folder
								colorScheme="gel-ice"
								label="Gel"
								icon={Image}
								iconTreatment="orb"
								motion="peek"
								size={92}
							/>
						</div>
						<div className="flex justify-center">
							<Folder
								colorScheme="duotone-cobalt"
								label="Duo"
								icon={Mail}
								iconTreatment="engraved"
								motion="tilt"
								size={92}
							/>
						</div>
						<div className="flex justify-center">
							<Folder
								colorScheme="material-aluminum"
								label="3D"
								icon={Camera}
								iconTreatment="medallion"
								motion="lift"
								size={92}
							/>
						</div>
					</div>
				</header>

				<section className="flex flex-col gap-5">
					<div className="flex flex-col gap-2 border-[#b8cad926] border-b pb-4 sm:flex-row sm:items-end sm:justify-between">
						<div>
							<p className="text-[#7892a6] text-[10px] font-bold leading-4 tracking-[0.18em] uppercase">
								Variants
							</p>
							<h2 className="text-[#f4f7f8] text-xl leading-7">
								Color Families
							</h2>
						</div>
						<p className="text-[#8fa5b8] text-[11px] font-bold leading-4 tracking-[0.16em] uppercase">
							Material first, icon second
						</p>
					</div>

					<div className="grid gap-4 lg:grid-cols-3">
						{folderColorSchemeGroups.map((group) => {
							const presentation = familyPresentation[group.family];

							return (
								<section
									className="min-w-0 rounded-lg border border-[#b8cad91f] bg-[#070a0d] p-4"
									key={group.family}
								>
									<div className="flex items-start justify-between gap-4 border-[#b8cad91a] border-b pb-3">
										<h3 className="min-w-0 text-[#f4f7f8] text-sm font-bold leading-5 tracking-[0.08em]">
											{group.family}
										</h3>
										<p className="shrink-0 text-[#7892a6] text-[10px] font-bold leading-4 tracking-[0.14em] uppercase">
											{group.schemes.length} colors
										</p>
									</div>
									<ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-5">
										{group.schemes.map((scheme) => (
											<li className="min-w-0" key={scheme}>
												<div className="flex justify-center rounded-md border border-[#b8cad914] bg-black/15 py-4">
													<Folder
														colorScheme={scheme}
														label={folderColorSchemeNames[scheme]
															.replace("Brushed ", "")
															.replace("Molded ", "")}
														icon={presentation.icon}
														iconTreatment={presentation.iconTreatment}
														motion={presentation.motion}
														size={86}
													/>
												</div>
												<p className="mt-2 truncate text-center text-[#b8cad9] text-[10px] font-bold leading-4 tracking-[0.08em]">
													{folderColorSchemeNames[scheme]}
												</p>
											</li>
										))}
									</ul>
								</section>
							);
						})}
					</div>
				</section>

				<section className="flex flex-col gap-5">
					<div className="flex flex-col gap-2 border-[#b8cad926] border-b pb-4 sm:flex-row sm:items-end sm:justify-between">
						<div>
							<p className="text-[#7892a6] text-[10px] font-bold leading-4 tracking-[0.18em] uppercase">
								Compositions
							</p>
							<h2 className="text-[#f4f7f8] text-xl leading-7">
								Mixed Studies
							</h2>
						</div>
						<p className="text-[#8fa5b8] text-[11px] font-bold leading-4 tracking-[0.16em] uppercase">
							Color / Motion / Icon
						</p>
					</div>
					<ul className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{showcaseCombos.map((combo) => {
							const Icon = combo.icon;

							return (
								<li
									className="folder-demo-card relative flex min-h-[266px] min-w-0 flex-col justify-between overflow-hidden rounded-lg border border-[#b8cad91f] bg-[#080b0d] p-5"
									key={`${combo.colorScheme}-${combo.motion}-${combo.title}`}
								>
									<div
										aria-hidden="true"
										className="absolute inset-0 opacity-70"
										style={{
											backgroundImage:
												"radial-gradient(circle at 24% 14%, rgb(255 255 255 / 0.1), transparent 28%), linear-gradient(145deg, rgb(255 255 255 / 0.055), transparent 42%)",
										}}
									/>
									<div className="relative flex flex-1 items-center justify-center py-4">
										<Folder
											colorScheme={combo.colorScheme}
											label={Icon ? combo.title.split(" / ")[0] : "No Icon"}
											icon={Icon}
											iconTreatment={combo.iconTreatment}
											motion={combo.motion}
											size={132}
										/>
									</div>
									<div className="relative flex min-w-0 flex-col gap-1 border-[#b8cad91f] border-t pt-4">
										<p className="text-[#f4f7f8] text-sm font-bold leading-5 tracking-[0.08em]">
											{combo.title}
										</p>
										<p className="text-[#8fa5b8] text-[11px] font-bold leading-4 tracking-[0.13em] uppercase">
											{folderColorSchemeNames[combo.colorScheme]} /{" "}
											{folderMotionNames[combo.motion]} /{" "}
											{folderIconTreatmentNames[combo.iconTreatment]}
										</p>
										<p className="text-[#9fb5c6] text-[11px] font-bold leading-5 tracking-[0.06em]">
											{combo.note}
										</p>
									</div>
								</li>
							);
						})}
					</ul>
				</section>

				<section className="flex flex-col gap-5">
					<div className="flex flex-col gap-2 border-[#b8cad926] border-b pb-4 sm:flex-row sm:items-end sm:justify-between">
						<div>
							<p className="text-[#7892a6] text-[10px] font-bold leading-4 tracking-[0.18em] uppercase">
								Options
							</p>
							<h2 className="text-[#f4f7f8] text-xl leading-7">Builder</h2>
						</div>
						<p className="text-[#8fa5b8] text-[11px] font-bold leading-4 tracking-[0.16em] uppercase">
							Custom component
						</p>
					</div>
					<FolderBuilder />
				</section>
			</div>
		</main>
	);
}

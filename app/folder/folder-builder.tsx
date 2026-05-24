"use client";

import {
	Archive,
	Ban,
	Camera,
	Check,
	Clipboard,
	FileText,
	Image,
	Mail,
	Star,
} from "lucide-react";
import { type ComponentType, type CSSProperties, useState } from "react";

import {
	Folder,
	type FolderColorScheme,
	type FolderIconProps,
	type FolderIconTreatment,
	type FolderMotion,
	folderColorSchemeGroups,
	folderColorSchemeNames,
	folderColorSchemes,
	folderIconTreatmentNames,
	folderIconTreatmentOrder,
	folderIconTreatments,
	folderMotionNames,
	folderMotionOrder,
	folderMotions,
} from "@/app/_components/folder";

type IconOptionKey =
	| "none"
	| "mail"
	| "fileText"
	| "archive"
	| "image"
	| "camera"
	| "star";

type AccentStyle = CSSProperties & {
	"--folder-option-accent"?: string;
};

const iconOptions: Record<
	IconOptionKey,
	{
		component: ComponentType<FolderIconProps> | null;
		displayName: string;
		icon: ComponentType<{ className?: string; strokeWidth?: number }>;
		snippet: string;
	}
> = {
	archive: {
		component: Archive,
		displayName: "Archive",
		icon: Archive,
		snippet: "Archive",
	},
	camera: {
		component: Camera,
		displayName: "Camera",
		icon: Camera,
		snippet: "Camera",
	},
	fileText: {
		component: FileText,
		displayName: "File",
		icon: FileText,
		snippet: "FileText",
	},
	image: {
		component: Image,
		displayName: "Image",
		icon: Image,
		snippet: "Image",
	},
	mail: {
		component: Mail,
		displayName: "Mail",
		icon: Mail,
		snippet: "Mail",
	},
	none: {
		component: null,
		displayName: "None",
		icon: Ban,
		snippet: "null",
	},
	star: {
		component: Star,
		displayName: "Star",
		icon: Star,
		snippet: "Star",
	},
};

const iconOptionOrder: IconOptionKey[] = [
	"none",
	"mail",
	"fileText",
	"archive",
	"image",
	"camera",
	"star",
];

const panelClassName =
	"rounded-lg border border-[#b8cad921] bg-[#070a0d] shadow-[0_18px_54px_rgb(0_0_0/0.24)]";
const eyebrowClassName =
	"text-[#90a6b8] text-[10px] font-bold leading-4 tracking-[0.18em] uppercase";
const headingClassName =
	"text-[#f4f7f8] text-sm font-bold leading-5 tracking-[0.08em]";

function optionClassName(isActive: boolean, isDisabled = false) {
	return [
		"folder-builder-option min-w-0 rounded-md border p-3 text-left",
		"focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a1b3c3]",
		isActive
			? "is-active border-[#d9edf9a3] bg-[#101820]"
			: "border-[#b8cad91f] bg-[#030506]",
		isDisabled ? "cursor-not-allowed opacity-45" : "cursor-pointer",
	]
		.filter(Boolean)
		.join(" ");
}

function readoutItem(label: string, value: string) {
	return (
		<div className="min-w-0 rounded-md border border-[#b8cad91a] bg-black/20 px-3 py-2">
			<p className="text-[#7892a6] text-[9px] font-bold leading-4 tracking-[0.16em] uppercase">
				{label}
			</p>
			<p className="truncate text-[#f4f7f8] text-[11px] font-bold leading-4 tracking-[0.08em]">
				{value}
			</p>
		</div>
	);
}

export function FolderBuilder() {
	const [colorScheme, setColorScheme] =
		useState<FolderColorScheme>("duotone-cobalt");
	const [motion, setMotion] = useState<FolderMotion>("tilt");
	const [iconKey, setIconKey] = useState<IconOptionKey>("fileText");
	const [iconTreatment, setIconTreatment] =
		useState<FolderIconTreatment>("engraved");
	const [hasCopied, setHasCopied] = useState(false);

	const colorConfig = folderColorSchemes[colorScheme];
	const iconOption = iconOptions[iconKey];
	const hasIcon = Boolean(iconOption.component);
	const label =
		iconKey === "none"
			? folderColorSchemeNames[colorScheme]
			: iconOption.displayName;
	const previewKey = `${colorScheme}-${motion}-${iconKey}-${iconTreatment}`;
	const snippet = `<Folder
  colorScheme="${colorScheme}"
  motion="${motion}"
  iconTreatment="${iconTreatment}"
  icon={${iconOption.snippet}}
  label="${label}"
/>`;

	async function copySnippet() {
		try {
			await navigator.clipboard.writeText(snippet);
			setHasCopied(true);
		} catch {
			setHasCopied(false);
		}
	}

	return (
		<section
			className="grid min-w-0 gap-5 lg:grid-cols-[minmax(0,1.08fr)_minmax(380px,0.92fr)] lg:items-start"
			style={
				{
					"--folder-option-accent": colorConfig.baseColor,
				} as AccentStyle
			}
		>
			<div
				className={`${panelClassName} relative flex min-h-[520px] min-w-0 flex-col overflow-hidden p-5 sm:p-6 lg:sticky lg:top-6`}
			>
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 opacity-80"
					style={{
						backgroundImage:
							"radial-gradient(circle at 24% 18%, color-mix(in srgb, var(--folder-option-accent) 28%, transparent), transparent 28%), linear-gradient(145deg, rgb(255 255 255 / 0.07), transparent 44%)",
					}}
				/>
				<div className="relative flex items-start justify-between gap-4 border-[#b8cad91a] border-b pb-4">
					<div className="min-w-0">
						<p className={eyebrowClassName}>Live Composition</p>
						<h3 className="mt-1 text-[#f4f7f8] text-xl leading-7 sm:text-2xl">
							{folderColorSchemeNames[colorScheme]}
						</h3>
					</div>
					<p className="max-w-[170px] text-right text-[#9fb5c6] text-[10px] font-bold leading-4 tracking-[0.12em] uppercase">
						{folderMotionNames[motion]} /{" "}
						{hasIcon ? folderIconTreatmentNames[iconTreatment] : "No Icon"}
					</p>
				</div>

				<div className="relative flex flex-1 items-center justify-center py-9">
					<div className="folder-builder-preview" key={previewKey}>
						<Folder
							colorScheme={colorScheme}
							label={label}
							icon={iconOption.component}
							iconTreatment={iconTreatment}
							motion={motion}
							size={214}
						/>
					</div>
				</div>

				<div className="relative grid grid-cols-1 gap-2 border-[#b8cad91a] border-t pt-4 sm:grid-cols-3">
					{readoutItem("Color", folderColorSchemeNames[colorScheme])}
					{readoutItem("Motion", folderMotionNames[motion])}
					{readoutItem(
						"Icon",
						hasIcon ? folderIconTreatmentNames[iconTreatment] : "None",
					)}
				</div>
			</div>

			<div className="flex min-w-0 flex-col gap-4">
				<div className={`${panelClassName} flex min-w-0 flex-col gap-4 p-4`}>
					<div>
						<p className={eyebrowClassName}>Color</p>
						<h3 className={headingClassName}>Material Families</h3>
					</div>
					<div className="grid min-w-0 gap-4">
						{folderColorSchemeGroups.map((group) => (
							<div className="grid min-w-0 gap-2" key={group.family}>
								<p className="text-[#7892a6] text-[10px] font-bold leading-4 tracking-[0.14em] uppercase">
									{group.family}
								</p>
								<div className="grid grid-cols-1 gap-2 min-[430px]:grid-cols-2">
									{group.schemes.map((scheme) => {
										const schemeConfig = folderColorSchemes[scheme];
										const isActive = scheme === colorScheme;

										return (
											<button
												aria-pressed={isActive}
												className={optionClassName(isActive)}
												key={scheme}
												onClick={() => {
													setColorScheme(scheme);
													setHasCopied(false);
												}}
												style={
													{
														"--folder-option-accent": schemeConfig.baseColor,
													} as AccentStyle
												}
												type="button"
											>
												<span className="flex min-w-0 items-center gap-2">
													<span
														aria-hidden="true"
														className="h-5 w-5 shrink-0 rounded-full border border-white/25 shadow-[inset_0_1px_0_rgb(255_255_255/0.35)]"
														style={{
															background: `linear-gradient(145deg, color-mix(in srgb, ${schemeConfig.baseColor} 70%, white), ${schemeConfig.baseColor} 55%, color-mix(in srgb, ${schemeConfig.baseColor} 62%, black))`,
														}}
													/>
													<span className="min-w-0 truncate text-[#f4f7f8] text-[11px] font-bold leading-4 tracking-[0.06em]">
														{folderColorSchemeNames[scheme]}
													</span>
												</span>
											</button>
										);
									})}
								</div>
							</div>
						))}
					</div>
				</div>

				<div className={`${panelClassName} flex min-w-0 flex-col gap-4 p-4`}>
					<div>
						<p className={eyebrowClassName}>Motion</p>
						<h3 className={headingClassName}>Interaction Pattern</h3>
					</div>
					<div className="grid grid-cols-2 gap-2">
						{folderMotionOrder.map((motionOption) => {
							const motionConfig = folderMotions[motionOption];
							const isActive = motionOption === motion;

							return (
								<button
									aria-pressed={isActive}
									className={optionClassName(isActive)}
									key={motionOption}
									onClick={() => {
										setMotion(motionOption);
										setHasCopied(false);
									}}
									type="button"
								>
									<span className="block text-[#f4f7f8] text-[11px] font-bold leading-4 tracking-[0.08em]">
										{motionConfig.displayName}
									</span>
									<span className="mt-1 block text-[#8fa5b8] text-[10px] font-bold leading-4 tracking-[0.08em]">
										{motionConfig.note}
									</span>
								</button>
							);
						})}
					</div>
				</div>

				<div className={`${panelClassName} flex min-w-0 flex-col gap-4 p-4`}>
					<div>
						<p className={eyebrowClassName}>Icon</p>
						<h3 className={headingClassName}>Mark And Treatment</h3>
					</div>
					<div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
						{iconOptionOrder.map((key) => {
							const option = iconOptions[key];
							const Icon = option.icon;
							const isActive = key === iconKey;

							return (
								<button
									aria-pressed={isActive}
									className={optionClassName(isActive)}
									key={key}
									onClick={() => {
										setIconKey(key);
										setHasCopied(false);
									}}
									type="button"
								>
									<span className="flex min-w-0 items-center gap-2">
										<Icon
											aria-hidden="true"
											className="h-4 w-4 shrink-0 text-[#b8cad9]"
											strokeWidth={2}
										/>
										<span className="truncate text-[#f4f7f8] text-[10px] font-bold leading-4 tracking-[0.06em]">
											{option.displayName}
										</span>
									</span>
								</button>
							);
						})}
					</div>

					<div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
						{folderIconTreatmentOrder.map((treatment) => {
							const treatmentConfig = folderIconTreatments[treatment];
							const isActive = hasIcon && treatment === iconTreatment;

							return (
								<button
									aria-pressed={isActive}
									className={optionClassName(isActive, !hasIcon)}
									disabled={!hasIcon}
									key={treatment}
									onClick={() => {
										setIconTreatment(treatment);
										setHasCopied(false);
									}}
									type="button"
								>
									<span className="block text-[#f4f7f8] text-[10px] font-bold leading-4 tracking-[0.08em]">
										{treatmentConfig.displayName}
									</span>
									<span className="mt-1 block text-[#8fa5b8] text-[9px] font-bold leading-4 tracking-[0.08em]">
										{treatmentConfig.note}
									</span>
								</button>
							);
						})}
					</div>
				</div>

				<div className={`${panelClassName} overflow-hidden`}>
					<div className="flex items-center justify-between gap-4 border-[#b8cad91a] border-b px-4 py-3">
						<p className={eyebrowClassName}>React</p>
						<button
							className="folder-builder-copy inline-flex h-9 items-center gap-2 rounded-md border border-[#b8cad929] bg-[#030506] px-3 text-[#d9edf9] text-[10px] font-bold leading-4 tracking-[0.1em] uppercase transition hover:border-[#d9edf966] hover:bg-[#0d1419] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a1b3c3]"
							onClick={copySnippet}
							type="button"
						>
							{hasCopied ? (
								<Check aria-hidden="true" className="h-4 w-4" />
							) : (
								<Clipboard aria-hidden="true" className="h-4 w-4" />
							)}
							{hasCopied ? "Copied" : "Copy"}
						</button>
					</div>
					<pre className="min-w-0 overflow-x-auto bg-[#020304] p-4 text-[#c5d7e5] text-[11px] leading-5">
						{snippet}
					</pre>
				</div>
			</div>
		</section>
	);
}

import {
	type ComponentType,
	type CSSProperties,
	type SVGProps,
	useId,
} from "react";

type FolderColorFamily = "Glossy Gel" | "Duotone" | "Skeuomorphic";
type FolderTexture =
	| "brushed"
	| "grain"
	| "hairline"
	| "halftone"
	| "none"
	| "ripple"
	| "rings"
	| "wave";
export type FolderColorScheme =
	| "gel-ice"
	| "gel-lagoon"
	| "gel-phosphor"
	| "gel-graphite"
	| "gel-raspberry"
	| "gel-rose"
	| "duotone-frost"
	| "duotone-cobalt"
	| "duotone-newsprint"
	| "duotone-olive"
	| "duotone-sage"
	| "duotone-ink"
	| "material-ink"
	| "material-plastic"
	| "material-aluminum"
	| "material-smoke"
	| "material-porcelain";
export type FolderIconTreatment =
	| "plain"
	| "engraved"
	| "cutout"
	| "capsule"
	| "inset"
	| "medallion"
	| "orb";
export type FolderMotion = "still" | "lift" | "peek" | "tilt";
export type FolderIconProps = SVGProps<SVGSVGElement> & {
	size?: number | string;
	strokeWidth?: number | string;
};

type FolderColorSchemeConfig = {
	baseColor: string;
	displayName: string;
	family: FolderColorFamily;
	glossOpacity: number;
	labelTone: "deep" | "light" | "soft";
	rimOpacity: number;
	shadowOpacity: number;
	texture: FolderTexture;
	textureOpacity: number;
};

type FolderMotionConfig = {
	displayName: string;
	note: string;
	transforms: FolderMotionTransforms;
};

type FolderMotionTransforms = {
	backTransform: string;
	faceTransform: string;
	glossOpacity: number;
	glossTransform: string;
	groundOpacity: number;
	groundTransform: string;
	iconTransform: string;
	responseMs: number;
	settleMs: number;
	svgTransform: string;
};

type FolderIconTreatmentConfig = {
	displayName: string;
	note: string;
	strokeWidth: number;
};

type FolderProps = {
	className?: string;
	colorScheme?: FolderColorScheme;
	folderColor?: string;
	icon?: ComponentType<FolderIconProps> | null;
	iconColor?: string;
	label?: string;
	labelColor?: string;
	iconTreatment?: FolderIconTreatment;
	iconSize?: number;
	motion?: FolderMotion;
	size?: number;
	strokeColor?: string;
	style?: CSSProperties;
};

type RgbColor = {
	blue: number;
	green: number;
	red: number;
};

type FolderStyle = CSSProperties & {
	"--folder-back-hover"?: string;
	"--folder-face-hover"?: string;
	"--folder-gloss-hover"?: string;
	"--folder-gloss-hover-opacity"?: number;
	"--folder-ground-hover"?: string;
	"--folder-ground-hover-opacity"?: number;
	"--folder-icon-hover"?: string;
	"--folder-motion-fast"?: string;
	"--folder-motion-settle"?: string;
	"--folder-svg-hover"?: string;
};

const folderBackPath =
	"M21.686 3.5C23.939 3.5 26.104 4.396 27.697 5.99L31.01 9.303C32.416 10.709 34.323 11.5 36.313 11.5H69C71.486 11.5 73.5 13.514 73.5 16V64C73.5 66.486 71.486 68.5 69 68.5H5C2.514 68.5 0.5 66.486 0.5 64V8C0.5 5.514 2.514 3.5 5 3.5H21.686Z";
const folderFrontPath =
	"M69 15.5C71.485 15.5 73.5 17.515 73.5 20V64C73.5 66.485 71.485 68.5 69 68.5H5C2.515 68.5 0.5 66.485 0.5 64V20C0.5 17.515 2.515 15.5 5 15.5H69Z";

export const folderColorSchemes = {
	"duotone-cobalt": {
		baseColor: "#4A82B8",
		displayName: "Cobalt Duo",
		family: "Duotone",
		glossOpacity: 0.34,
		labelTone: "soft",
		rimOpacity: 0.58,
		shadowOpacity: 0.26,
		texture: "hairline",
		textureOpacity: 0.32,
	},
	"duotone-frost": {
		baseColor: "#A1B3C3",
		displayName: "Frost Duo",
		family: "Duotone",
		glossOpacity: 0.32,
		labelTone: "soft",
		rimOpacity: 0.62,
		shadowOpacity: 0.24,
		texture: "wave",
		textureOpacity: 0.26,
	},
	"duotone-ink": {
		baseColor: "#697A8D",
		displayName: "Ink Duo",
		family: "Duotone",
		glossOpacity: 0.22,
		labelTone: "light",
		rimOpacity: 0.5,
		shadowOpacity: 0.32,
		texture: "brushed",
		textureOpacity: 0.34,
	},
	"duotone-newsprint": {
		baseColor: "#F2F1E8",
		displayName: "Newsprint Duo",
		family: "Duotone",
		glossOpacity: 0.18,
		labelTone: "deep",
		rimOpacity: 0.72,
		shadowOpacity: 0.24,
		texture: "halftone",
		textureOpacity: 0.44,
	},
	"duotone-olive": {
		baseColor: "#5E5A41",
		displayName: "Olive Duo",
		family: "Duotone",
		glossOpacity: 0.2,
		labelTone: "light",
		rimOpacity: 0.52,
		shadowOpacity: 0.36,
		texture: "grain",
		textureOpacity: 0.42,
	},
	"duotone-sage": {
		baseColor: "#789C86",
		displayName: "Sage Duo",
		family: "Duotone",
		glossOpacity: 0.3,
		labelTone: "soft",
		rimOpacity: 0.56,
		shadowOpacity: 0.26,
		texture: "ripple",
		textureOpacity: 0.24,
	},
	"gel-graphite": {
		baseColor: "#748294",
		displayName: "Graphite Gel",
		family: "Glossy Gel",
		glossOpacity: 0.68,
		labelTone: "light",
		rimOpacity: 0.72,
		shadowOpacity: 0.34,
		texture: "rings",
		textureOpacity: 0.24,
	},
	"gel-ice": {
		baseColor: "#86CEF9",
		displayName: "Ice Gel",
		family: "Glossy Gel",
		glossOpacity: 0.78,
		labelTone: "light",
		rimOpacity: 0.8,
		shadowOpacity: 0.28,
		texture: "rings",
		textureOpacity: 0.3,
	},
	"gel-lagoon": {
		baseColor: "#35B7CF",
		displayName: "Lagoon Gel",
		family: "Glossy Gel",
		glossOpacity: 0.72,
		labelTone: "light",
		rimOpacity: 0.74,
		shadowOpacity: 0.34,
		texture: "ripple",
		textureOpacity: 0.36,
	},
	"gel-phosphor": {
		baseColor: "#29FF7B",
		displayName: "Phosphor Gel",
		family: "Glossy Gel",
		glossOpacity: 0.78,
		labelTone: "deep",
		rimOpacity: 0.82,
		shadowOpacity: 0.32,
		texture: "halftone",
		textureOpacity: 0.24,
	},
	"gel-raspberry": {
		baseColor: "#E5006F",
		displayName: "Raspberry Gel",
		family: "Glossy Gel",
		glossOpacity: 0.76,
		labelTone: "light",
		rimOpacity: 0.78,
		shadowOpacity: 0.34,
		texture: "halftone",
		textureOpacity: 0.26,
	},
	"gel-rose": {
		baseColor: "#D786A8",
		displayName: "Rose Gel",
		family: "Glossy Gel",
		glossOpacity: 0.7,
		labelTone: "light",
		rimOpacity: 0.76,
		shadowOpacity: 0.3,
		texture: "wave",
		textureOpacity: 0.28,
	},
	"material-aluminum": {
		baseColor: "#AEB7BC",
		displayName: "Brushed Aluminum",
		family: "Skeuomorphic",
		glossOpacity: 0.38,
		labelTone: "light",
		rimOpacity: 0.7,
		shadowOpacity: 0.34,
		texture: "brushed",
		textureOpacity: 0.52,
	},
	"material-ink": {
		baseColor: "#2B2B2B",
		displayName: "Ink Plastic",
		family: "Skeuomorphic",
		glossOpacity: 0.42,
		labelTone: "light",
		rimOpacity: 0.46,
		shadowOpacity: 0.5,
		texture: "halftone",
		textureOpacity: 0.34,
	},
	"material-plastic": {
		baseColor: "#78A7D6",
		displayName: "Molded Plastic",
		family: "Skeuomorphic",
		glossOpacity: 0.48,
		labelTone: "soft",
		rimOpacity: 0.68,
		shadowOpacity: 0.36,
		texture: "grain",
		textureOpacity: 0.2,
	},
	"material-porcelain": {
		baseColor: "#CFD9DF",
		displayName: "Porcelain",
		family: "Skeuomorphic",
		glossOpacity: 0.54,
		labelTone: "soft",
		rimOpacity: 0.76,
		shadowOpacity: 0.28,
		texture: "none",
		textureOpacity: 0,
	},
	"material-smoke": {
		baseColor: "#66717D",
		displayName: "Smoked Glass",
		family: "Skeuomorphic",
		glossOpacity: 0.5,
		labelTone: "light",
		rimOpacity: 0.58,
		shadowOpacity: 0.44,
		texture: "hairline",
		textureOpacity: 0.3,
	},
} satisfies Record<FolderColorScheme, FolderColorSchemeConfig>;

/*
 * ANIMATION STORYBOARD
 *
 * Read top-to-bottom. Hover/focus triggers the same stages in one CSS pass.
 *
 *   0ms   pointer enters: card surface confirms hover
 *  80ms   folder body starts moving from its lower hinge
 * 160ms   back plate, face, icon, and shadow separate by motion
 * 320ms   highlight settles so the material feels dimensional
 */
const FOLDER_MOTION_TRANSFORMS = {
	lift: {
		backTransform: "translateY(-1px)",
		faceTransform: "translateY(-1.5px)",
		glossOpacity: 1.12,
		glossTransform: "translateY(-2px)",
		groundOpacity: 0.52,
		groundTransform: "scaleX(0.76)",
		iconTransform: "translateY(-1px)",
		responseMs: 210,
		settleMs: 340,
		svgTransform: "translateY(-9px) scale(1.035)",
	},
	peek: {
		backTransform: "translateY(-8px) rotate(-2deg)",
		faceTransform: "translateY(2px)",
		glossOpacity: 1.02,
		glossTransform: "translateY(2px)",
		groundOpacity: 0.62,
		groundTransform: "scaleX(0.88)",
		iconTransform: "translateY(1px)",
		responseMs: 220,
		settleMs: 360,
		svgTransform: "translateY(-4px)",
	},
	tilt: {
		backTransform: "translateX(-1px) translateY(-1px) rotate(0.8deg)",
		faceTransform: "translateX(2.4px) translateY(1.4px)",
		glossOpacity: 1.18,
		glossTransform: "translateX(1px) translateY(2px) skewX(-3deg)",
		groundOpacity: 0.58,
		groundTransform: "translateX(1px) scaleX(0.84)",
		iconTransform: "translateX(1px) translateY(-1px)",
		responseMs: 230,
		settleMs: 380,
		svgTransform: "translateY(-5px) rotate(-3.5deg)",
	},
	still: {
		backTransform: "none",
		faceTransform: "none",
		glossOpacity: 1,
		glossTransform: "none",
		groundOpacity: 1,
		groundTransform: "none",
		iconTransform: "none",
		responseMs: 1,
		settleMs: 1,
		svgTransform: "none",
	},
} satisfies Record<FolderMotion, FolderMotionTransforms>;

export const folderMotions = {
	lift: {
		displayName: "Lift",
		note: "surface rise",
		transforms: FOLDER_MOTION_TRANSFORMS.lift,
	},
	peek: {
		displayName: "Peek",
		note: "tab + face split",
		transforms: FOLDER_MOTION_TRANSFORMS.peek,
	},
	tilt: {
		displayName: "Tilt",
		note: "angled lift",
		transforms: FOLDER_MOTION_TRANSFORMS.tilt,
	},
	still: {
		displayName: "Still",
		note: "no hover motion",
		transforms: FOLDER_MOTION_TRANSFORMS.still,
	},
} satisfies Record<FolderMotion, FolderMotionConfig>;

export const folderIconTreatments = {
	capsule: {
		displayName: "Capsule",
		note: "soft rounded plate",
		strokeWidth: 2.15,
	},
	cutout: {
		displayName: "Cutout",
		note: "dark circular well",
		strokeWidth: 2.15,
	},
	engraved: {
		displayName: "Engraved",
		note: "embossed line only",
		strokeWidth: 1.85,
	},
	inset: {
		displayName: "Inset",
		note: "subtle ring",
		strokeWidth: 2.15,
	},
	medallion: {
		displayName: "Medallion",
		note: "glossy circular badge",
		strokeWidth: 2.15,
	},
	orb: {
		displayName: "Orb",
		note: "gel bubble badge",
		strokeWidth: 2.15,
	},
	plain: {
		displayName: "Plain",
		note: "no icon background",
		strokeWidth: 2.15,
	},
} satisfies Record<FolderIconTreatment, FolderIconTreatmentConfig>;

export const folderColorSchemeGroups: Array<{
	family: FolderColorFamily;
	schemes: FolderColorScheme[];
}> = [
	{
		family: "Glossy Gel",
		schemes: [
			"gel-ice",
			"gel-lagoon",
			"gel-graphite",
			"gel-raspberry",
			"gel-phosphor",
			"gel-rose",
		],
	},
	{
		family: "Duotone",
		schemes: [
			"duotone-frost",
			"duotone-cobalt",
			"duotone-newsprint",
			"duotone-olive",
			"duotone-sage",
			"duotone-ink",
		],
	},
	{
		family: "Skeuomorphic",
		schemes: [
			"material-plastic",
			"material-aluminum",
			"material-ink",
			"material-smoke",
			"material-porcelain",
		],
	},
];

export const folderMotionOrder: FolderMotion[] = [
	"still",
	"lift",
	"peek",
	"tilt",
];

export const folderIconTreatmentOrder: FolderIconTreatment[] = [
	"plain",
	"engraved",
	"cutout",
	"capsule",
	"inset",
	"medallion",
	"orb",
];

export const folderColorSchemeNames = Object.fromEntries(
	Object.entries(folderColorSchemes).map(([scheme, config]) => [
		scheme,
		config.displayName,
	]),
) as Record<FolderColorScheme, string>;

export const folderMotionNames = Object.fromEntries(
	Object.entries(folderMotions).map(([scheme, config]) => [
		scheme,
		config.displayName,
	]),
) as Record<FolderMotion, string>;

export const folderIconTreatmentNames = Object.fromEntries(
	Object.entries(folderIconTreatments).map(([treatment, config]) => [
		treatment,
		config.displayName,
	]),
) as Record<FolderIconTreatment, string>;

function parseHexColor(color: string): RgbColor | null {
	const hex = color.trim().replace(/^#/, "");

	if (/^[\da-f]{3}$/i.test(hex)) {
		const [red, green, blue] = hex.split("").map((channel) => {
			const doubledChannel = `${channel}${channel}`;

			return Number.parseInt(doubledChannel, 16);
		});

		return { blue, green, red };
	}

	if (/^[\da-f]{6}$/i.test(hex)) {
		return {
			blue: Number.parseInt(hex.slice(4, 6), 16),
			green: Number.parseInt(hex.slice(2, 4), 16),
			red: Number.parseInt(hex.slice(0, 2), 16),
		};
	}

	return null;
}

function toHexChannel(channel: number) {
	return Math.min(255, Math.max(0, Math.round(channel)))
		.toString(16)
		.padStart(2, "0");
}

function mixRgbColor(color: RgbColor, target: RgbColor, amount: number) {
	return `#${toHexChannel(color.red + (target.red - color.red) * amount)}${toHexChannel(
		color.green + (target.green - color.green) * amount,
	)}${toHexChannel(color.blue + (target.blue - color.blue) * amount)}`;
}

function mixColor(color: string, target: "black" | "white", amount: number) {
	const rgbColor = parseHexColor(color);
	const targetColor =
		target === "white"
			? { blue: 255, green: 255, red: 255 }
			: { blue: 0, green: 0, red: 0 };

	if (rgbColor) {
		return mixRgbColor(rgbColor, targetColor, amount);
	}

	return `color-mix(in srgb, ${color} ${Math.round(
		(1 - amount) * 100,
	)}%, ${target} ${Math.round(amount * 100)}%)`;
}

function getPalette(
	folderColor: string,
	config: FolderColorSchemeConfig,
	iconTreatment: FolderIconTreatment,
) {
	const palette = {
		base: folderColor,
		deep: mixColor(folderColor, "black", 0.52),
		deeper: mixColor(folderColor, "black", 0.68),
		glass: mixColor(folderColor, "white", 0.78),
		highlight: mixColor(folderColor, "white", 0.58),
		light: mixColor(folderColor, "white", 0.86),
		mid: mixColor(folderColor, "white", 0.28),
		rim: mixColor(folderColor, "white", 0.74),
		shade: mixColor(folderColor, "black", 0.28),
		soft: mixColor(folderColor, "white", 0.48),
	};

	return {
		...palette,
		icon:
			iconTreatment === "cutout"
				? palette.light
				: mixColor(folderColor, "black", 0.62),
		label:
			config.labelTone === "deep"
				? palette.deep
				: config.labelTone === "light"
					? palette.light
					: palette.soft,
	};
}

function renderTexture(
	texture: FolderTexture,
	id: string,
	palette: ReturnType<typeof getPalette>,
) {
	if (texture === "none") {
		return null;
	}

	if (texture === "rings") {
		return (
			<pattern
				height="22"
				id={`${id}-texture`}
				patternUnits="userSpaceOnUse"
				width="22"
			>
				<circle
					cx="11"
					cy="11"
					fill="none"
					opacity="0.5"
					r="8"
					stroke={palette.light}
					strokeWidth="0.7"
				/>
				<circle
					cx="11"
					cy="11"
					fill="none"
					opacity="0.24"
					r="3"
					stroke={palette.deep}
					strokeWidth="0.55"
				/>
			</pattern>
		);
	}

	if (texture === "ripple") {
		return (
			<pattern
				height="12"
				id={`${id}-texture`}
				patternTransform="rotate(-10)"
				patternUnits="userSpaceOnUse"
				width="42"
			>
				<path
					d="M-6 8C4 1 14 1 24 8S44 15 54 8"
					fill="none"
					opacity="0.48"
					stroke={palette.light}
					strokeWidth="0.75"
				/>
			</pattern>
		);
	}

	if (texture === "wave") {
		return (
			<pattern
				height="7"
				id={`${id}-texture`}
				patternTransform="rotate(-8)"
				patternUnits="userSpaceOnUse"
				width="7"
			>
				<path
					d="M0 1.25H7"
					opacity="0.42"
					stroke={palette.light}
					strokeWidth="0.65"
				/>
				<path
					d="M0 5H7"
					opacity="0.2"
					stroke={palette.deep}
					strokeWidth="0.65"
				/>
			</pattern>
		);
	}

	if (texture === "brushed") {
		return (
			<pattern
				height="6"
				id={`${id}-texture`}
				patternTransform="rotate(-4)"
				patternUnits="userSpaceOnUse"
				width="18"
			>
				<path d="M0 1H18M0 3.5H18" stroke={palette.light} strokeWidth="0.45" />
				<path d="M4 2.25H15" stroke={palette.deep} strokeWidth="0.35" />
			</pattern>
		);
	}

	if (texture === "grain") {
		return (
			<pattern
				height="10"
				id={`${id}-texture`}
				patternUnits="userSpaceOnUse"
				width="10"
			>
				<circle cx="2" cy="3" fill={palette.deep} opacity="0.3" r="0.55" />
				<circle cx="7" cy="2" fill={palette.light} opacity="0.36" r="0.5" />
				<circle cx="5" cy="8" fill={palette.deep} opacity="0.26" r="0.45" />
			</pattern>
		);
	}

	if (texture === "halftone") {
		return (
			<pattern
				height="8"
				id={`${id}-texture`}
				patternUnits="userSpaceOnUse"
				width="8"
			>
				<circle cx="2" cy="2" fill={palette.light} opacity="0.42" r="0.9" />
				<circle cx="6" cy="6" fill={palette.deep} opacity="0.34" r="0.85" />
			</pattern>
		);
	}

	return (
		<pattern
			height="8"
			id={`${id}-texture`}
			patternTransform="rotate(-12)"
			patternUnits="userSpaceOnUse"
			width="8"
		>
			<path
				d="M0 2H8"
				opacity="0.38"
				stroke={palette.light}
				strokeWidth="0.5"
			/>
			<path d="M0 6H8" opacity="0.18" stroke={palette.deep} strokeWidth="0.5" />
		</pattern>
	);
}

export function Folder({
	className,
	colorScheme = "duotone-frost",
	folderColor,
	icon,
	strokeColor,
	iconColor,
	label = "Projects",
	labelColor,
	iconTreatment = "engraved",
	iconSize = 20,
	motion = "lift",
	size = 120,
	style,
}: FolderProps) {
	const folderId = useId().replace(/:/g, "");
	const config: FolderColorSchemeConfig = folderColorSchemes[colorScheme];
	const iconTreatmentConfig = folderIconTreatments[iconTreatment];
	const motionConfig = folderMotions[motion];
	const Icon = icon;
	const iconOffset = (74 - iconSize) / 2;
	const iconY = 42 - iconSize / 2;
	const resolvedFolderColor = folderColor ?? config.baseColor;
	const palette = getPalette(resolvedFolderColor, config, iconTreatment);
	const resolvedStrokeColor = strokeColor ?? palette.rim;
	const resolvedIconColor = iconColor ?? palette.icon;
	const resolvedLabelColor = labelColor ?? palette.label;
	const motionTransforms = motionConfig.transforms;
	const wrapperStyle = {
		"--folder-back-hover": motionTransforms.backTransform,
		"--folder-face-hover": motionTransforms.faceTransform,
		"--folder-gloss-hover": motionTransforms.glossTransform,
		"--folder-gloss-hover-opacity": motionTransforms.glossOpacity,
		"--folder-ground-hover": motionTransforms.groundTransform,
		"--folder-ground-hover-opacity":
			config.shadowOpacity * motionTransforms.groundOpacity,
		"--folder-icon-hover": motionTransforms.iconTransform,
		"--folder-motion-fast": `${motionTransforms.responseMs}ms`,
		"--folder-motion-settle": `${motionTransforms.settleMs}ms`,
		"--folder-svg-hover": motionTransforms.svgTransform,
		width: `${size}px`,
		...style,
	} satisfies FolderStyle;

	return (
		<figure
			className={[
				"folder flex flex-col items-center font-sans antialiased",
				className,
			]
				.filter(Boolean)
				.join(" ")}
			data-color-scheme={colorScheme}
			data-icon-treatment={iconTreatment}
			data-motion={motion}
			style={wrapperStyle}
		>
			<svg
				aria-hidden="true"
				className="folder__svg shrink-0 overflow-visible"
				fill="none"
				height={size}
				viewBox="0 0 74 72"
				width={size}
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<linearGradient
						gradientUnits="userSpaceOnUse"
						id={`${folderId}-back-gradient`}
						x1="3"
						x2="69"
						y1="2"
						y2="67"
					>
						<stop offset="0" stopColor={palette.light} />
						<stop offset="0.22" stopColor={palette.glass} />
						<stop offset="0.56" stopColor={palette.mid} />
						<stop offset="1" stopColor={palette.shade} />
					</linearGradient>
					<linearGradient
						gradientUnits="userSpaceOnUse"
						id={`${folderId}-front-gradient`}
						x1="8"
						x2="66"
						y1="16"
						y2="69"
					>
						<stop offset="0" stopColor={palette.highlight} />
						<stop offset="0.28" stopColor={palette.soft} />
						<stop offset="0.62" stopColor={resolvedFolderColor} />
						<stop offset="1" stopColor={palette.deep} />
					</linearGradient>
					<linearGradient
						gradientUnits="userSpaceOnUse"
						id={`${folderId}-gloss-gradient`}
						x1="37"
						x2="37"
						y1="16"
						y2="45"
					>
						<stop offset="0" stopColor={palette.light} stopOpacity="0.95" />
						<stop offset="0.48" stopColor={palette.glass} stopOpacity="0.56" />
						<stop offset="1" stopColor={palette.glass} stopOpacity="0" />
					</linearGradient>
					<radialGradient
						cx="0"
						cy="0"
						gradientTransform="translate(28 30) rotate(52) scale(39 24)"
						gradientUnits="userSpaceOnUse"
						id={`${folderId}-sphere-gradient`}
						r="1"
					>
						<stop offset="0" stopColor={palette.light} stopOpacity="0.88" />
						<stop offset="0.38" stopColor={palette.glass} stopOpacity="0.5" />
						<stop offset="0.72" stopColor={palette.base} stopOpacity="0.1" />
						<stop offset="1" stopColor={palette.deep} stopOpacity="0.24" />
					</radialGradient>
					<radialGradient
						cx="0"
						cy="0"
						gradientTransform="translate(32 33) rotate(42) scale(22)"
						gradientUnits="userSpaceOnUse"
						id={`${folderId}-icon-gradient`}
						r="1"
					>
						<stop offset="0" stopColor={palette.light} />
						<stop offset="0.46" stopColor={palette.glass} />
						<stop offset="1" stopColor={palette.shade} />
					</radialGradient>
					<linearGradient
						gradientUnits="userSpaceOnUse"
						id={`${folderId}-medallion-gradient`}
						x1="26"
						x2="49"
						y1="30"
						y2="53"
					>
						<stop offset="0" stopColor={palette.light} />
						<stop offset="0.44" stopColor={palette.soft} />
						<stop offset="0.58" stopColor={palette.shade} />
						<stop offset="1" stopColor={palette.deep} />
					</linearGradient>
					{renderTexture(config.texture, folderId, palette)}
					<clipPath id={`${folderId}-back-clip`}>
						<path d={folderBackPath} />
					</clipPath>
					<clipPath id={`${folderId}-front-clip`}>
						<path d={folderFrontPath} />
					</clipPath>
					<filter
						colorInterpolationFilters="sRGB"
						height="138%"
						id={`${folderId}-folder-shadow`}
						width="132%"
						x="-16%"
						y="-14%"
					>
						<feDropShadow
							dx="0"
							dy="2.7"
							floodColor={palette.deeper}
							floodOpacity={config.shadowOpacity}
							stdDeviation="1.3"
						/>
					</filter>
					<filter
						colorInterpolationFilters="sRGB"
						height="150%"
						id={`${folderId}-icon-emboss`}
						width="150%"
						x="-25%"
						y="-25%"
					>
						<feDropShadow
							dx="0"
							dy="0.9"
							floodColor={palette.light}
							floodOpacity="0.62"
							stdDeviation="0.32"
						/>
						<feDropShadow
							dx="0"
							dy="-0.85"
							floodColor={palette.deep}
							floodOpacity="0.36"
							stdDeviation="0.42"
						/>
					</filter>
				</defs>

				<ellipse
					className="folder__ground"
					cx="37"
					cy="69.4"
					fill={palette.deeper}
					opacity={config.shadowOpacity}
					rx="28"
					ry="3.2"
				/>

				<g className="folder__back" filter={`url(#${folderId}-folder-shadow)`}>
					<path
						d={folderBackPath}
						fill={`url(#${folderId}-back-gradient)`}
						stroke={resolvedStrokeColor}
						strokeLinejoin="round"
						strokeOpacity={config.rimOpacity}
					/>
					{config.texture !== "none" ? (
						<path
							clipPath={`url(#${folderId}-back-clip)`}
							d={folderBackPath}
							fill={`url(#${folderId}-texture)`}
							opacity={config.textureOpacity * 0.75}
						/>
					) : null}
					<path
						clipPath={`url(#${folderId}-back-clip)`}
						d="M4.75 5.75H21.65C23.27 5.75 24.83 6.39 25.98 7.54L29.28 10.84C31.11 12.67 33.59 13.7 36.17 13.7H68.35"
						fill="none"
						opacity="0.76"
						stroke={palette.light}
						strokeLinecap="round"
						strokeWidth="1.15"
					/>
				</g>

				<g className="folder__face">
					<path
						className="folder__front"
						d={folderFrontPath}
						fill={`url(#${folderId}-front-gradient)`}
						filter={`url(#${folderId}-folder-shadow)`}
						stroke={resolvedStrokeColor}
						strokeLinejoin="round"
						strokeOpacity={config.rimOpacity}
					/>
					{config.family === "Glossy Gel" ? (
						<>
							<circle
								clipPath={`url(#${folderId}-front-clip)`}
								cx="21"
								cy="34"
								fill={`url(#${folderId}-sphere-gradient)`}
								opacity="0.64"
								r="18"
							/>
							<circle
								clipPath={`url(#${folderId}-front-clip)`}
								cx="58"
								cy="52"
								fill={`url(#${folderId}-sphere-gradient)`}
								opacity="0.38"
								r="23"
							/>
						</>
					) : null}
					{config.texture !== "none" ? (
						<path
							clipPath={`url(#${folderId}-front-clip)`}
							d={folderFrontPath}
							fill={`url(#${folderId}-texture)`}
							opacity={config.textureOpacity}
						/>
					) : null}
					<path
						className="folder__gloss"
						clipPath={`url(#${folderId}-front-clip)`}
						d="M1 20.5C1 18 3 16 5.5 16H68.5C71 16 73 18 73 20.5V35.5C61.5 41 50.7 41.5 38 38.4C25.3 35.3 13 36.1 1 42V20.5Z"
						fill={`url(#${folderId}-gloss-gradient)`}
						opacity={config.glossOpacity}
					/>
					<path
						clipPath={`url(#${folderId}-front-clip)`}
						d="M0.75 53.5C11.2 58.8 24.6 60.6 39.4 57.8C52.7 55.2 64 57.5 73.25 63.6V68.75H0.75V53.5Z"
						fill={palette.deeper}
						opacity={config.family === "Skeuomorphic" ? 0.28 : 0.18}
					/>
					<path
						d="M5.5 17.4H68.45C70.52 17.4 72.15 18.9 72.2 20.9"
						fill="none"
						opacity="0.82"
						stroke={palette.light}
						strokeLinecap="round"
						strokeWidth="1.1"
					/>
					<path
						clipPath={`url(#${folderId}-front-clip)`}
						d="M5.5 68.1H68.5"
						fill="none"
						opacity="0.34"
						stroke={palette.deep}
						strokeLinecap="round"
						strokeWidth="1.2"
					/>
					{Icon ? (
						<g className="folder__icon-wrap">
							{iconTreatment === "orb" ? (
								<>
									<circle
										cx="37"
										cy="42"
										fill={`url(#${folderId}-icon-gradient)`}
										opacity="0.78"
										r="12.5"
										stroke={palette.light}
										strokeOpacity="0.72"
									/>
									<ellipse
										cx="34"
										cy="37"
										fill={palette.light}
										opacity="0.58"
										rx="5"
										ry="2.2"
										transform="rotate(-24 34 37)"
									/>
								</>
							) : null}
							{iconTreatment === "cutout" ? (
								<circle
									cx="37"
									cy="42"
									fill={palette.deeper}
									opacity="0.46"
									r="12"
								/>
							) : null}
							{iconTreatment === "capsule" ? (
								<rect
									fill={palette.light}
									height="21"
									opacity="0.34"
									rx="7"
									stroke={palette.rim}
									strokeOpacity="0.56"
									width="26"
									x="24"
									y="31.5"
								/>
							) : null}
							{iconTreatment === "inset" ? (
								<>
									<circle
										cx="37"
										cy="42"
										fill={palette.deep}
										opacity="0.2"
										r="12"
									/>
									<circle
										cx="37"
										cy="42"
										fill="none"
										opacity="0.55"
										r="11.5"
										stroke={palette.light}
										strokeWidth="1"
									/>
								</>
							) : null}
							{iconTreatment === "medallion" ? (
								<>
									<circle
										cx="37"
										cy="42"
										fill={`url(#${folderId}-medallion-gradient)`}
										opacity="0.76"
										r="12"
										stroke={palette.light}
										strokeOpacity="0.64"
									/>
									<circle
										cx="37"
										cy="42"
										fill="none"
										opacity="0.26"
										r="9"
										stroke={palette.deeper}
									/>
								</>
							) : null}
							<Icon
								aria-hidden="true"
								className="folder__icon"
								filter={`url(#${folderId}-icon-emboss)`}
								height={iconSize}
								strokeWidth={iconTreatmentConfig.strokeWidth}
								style={{ color: resolvedIconColor }}
								width={iconSize}
								x={iconOffset}
								y={iconY}
							/>
						</g>
					) : null}
				</g>
			</svg>
			<figcaption
				className="folder__label w-fit text-center text-xs font-bold leading-4 tracking-[0.15em]"
				style={{ color: resolvedLabelColor }}
			>
				{label}
			</figcaption>
		</figure>
	);
}

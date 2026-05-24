import type { ComponentType, CSSProperties, SVGProps } from "react";

export type FolderFrameMotion = "none" | "lift" | "peek" | "tilt";

type FolderFrameIconProps = SVGProps<SVGSVGElement> & {
	size?: number | string;
	strokeWidth?: number | string;
};

type FolderFrameProps = {
	className?: string;
	folderColor?: string;
	icon?: ComponentType<FolderFrameIconProps>;
	iconColor?: string;
	label?: string;
	labelColor?: string;
	motion?: FolderFrameMotion;
	size?: number;
	strokeColor?: string;
	style?: CSSProperties;
};

export function FolderFrame({
	className,
	folderColor = "#A1B3C3",
	icon: Icon,
	strokeColor = "#FFFFFF",
	iconColor = strokeColor,
	label = "Projects",
	labelColor = folderColor,
	motion = "lift",
	size = 120,
	style,
}: FolderFrameProps) {
	const wrapperStyle = {
		width: `${size}px`,
		...style,
	} satisfies CSSProperties;

	return (
		<figure
			className={[
				"folder-frame flex flex-col items-center font-sans antialiased",
				className,
			]
				.filter(Boolean)
				.join(" ")}
			data-motion={motion}
			style={wrapperStyle}
		>
			<svg
				aria-hidden="true"
				className="folder-frame__svg shrink-0 overflow-visible"
				fill="none"
				height={size}
				viewBox="0 0 74 72"
				width={size}
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					className="folder-frame__back"
					d="M21.686 3.5C23.939 3.5 26.104 4.396 27.697 5.99L31.01 9.303C32.416 10.709 34.323 11.5 36.313 11.5H69C71.486 11.5 73.5 13.514 73.5 16V64C73.5 66.486 71.486 68.5 69 68.5H5C2.514 68.5 0.5 66.486 0.5 64V8C0.5 5.514 2.514 3.5 5 3.5H21.686Z"
					fill={folderColor}
					stroke={strokeColor}
				/>
				<g className="folder-frame__face">
					<path
						className="folder-frame__front"
						d="M69 15.5C71.485 15.5 73.5 17.515 73.5 20V64C73.5 66.485 71.485 68.5 69 68.5H5C2.515 68.5 0.5 66.485 0.5 64V20C0.5 17.515 2.515 15.5 5 15.5H69Z"
						fill={folderColor}
						stroke={strokeColor}
					/>
					{Icon ? (
						<Icon
							aria-hidden="true"
							className="folder-frame__icon"
							height={20}
							strokeWidth={2.2}
							style={{ color: iconColor }}
							width={20}
							x={27}
							y={32}
						/>
					) : null}
				</g>
			</svg>
			<figcaption
				className="folder-frame__label w-fit text-center text-xs font-bold leading-4 tracking-[0.15em]"
				style={{ color: labelColor }}
			>
				{label}
			</figcaption>
		</figure>
	);
}

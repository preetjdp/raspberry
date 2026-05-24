import type { Metadata } from "next";

import {
	FolderFrame,
	type FolderFrameMotion,
} from "@/app/_components/folder-frame";

export const metadata: Metadata = {
	title: "Folder Frame | Raspberry Productions",
	description: "A React showcase for the Paper Folder frame.",
};

const motionOptions: Array<{
	label: string;
	meta: string;
	motion: FolderFrameMotion;
	size: number;
}> = [
	{
		label: "Lift",
		meta: "surface",
		motion: "lift",
		size: 82,
	},
	{
		label: "Peek",
		meta: "tab + front",
		motion: "peek",
		size: 82,
	},
	{
		label: "Tilt",
		meta: "rotation",
		motion: "tilt",
		size: 82,
	},
	{
		label: "Glow",
		meta: "shadow",
		motion: "glow",
		size: 82,
	},
];

export default function FolderPage() {
	return (
		<main className="min-h-[100svh] w-full overflow-hidden bg-black px-6 py-10 text-[#f4f4f4] sm:px-10 lg:px-16">
			<div className="mx-auto flex min-h-[calc(100svh-80px)] w-full max-w-6xl flex-col gap-16">
				<header className="flex flex-col gap-8 border-[#a1b3c333] border-b pb-10 lg:flex-row lg:items-end lg:justify-between">
					<div className="flex max-w-3xl flex-col gap-5">
						<p className="text-[#a1b3c3] text-xs font-bold leading-4 tracking-[0.18em]">
							PAPER MCP / FOLDER
						</p>
						<h1 className="max-w-3xl text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
							Folder Frame
						</h1>
					</div>
					<p className="max-w-sm text-[#a1b3c3] text-sm font-bold leading-6 tracking-[0.08em]">
						Selected Paper frame converted into a reusable React component.
					</p>
				</header>

				<section className="grid min-w-0 flex-1 gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-stretch">
					<div className="relative flex min-h-[420px] min-w-0 items-center justify-center overflow-hidden rounded-lg border border-[#a1b3c333] bg-[#050505] p-8">
						<div
							aria-hidden="true"
							className="absolute inset-0 opacity-25"
							style={{
								backgroundImage:
									"linear-gradient(#a1b3c314 1px, transparent 1px), linear-gradient(90deg, #a1b3c314 1px, transparent 1px)",
								backgroundSize: "32px 32px",
							}}
						/>
						<FolderFrame className="relative z-10" motion="peek" size={220} />
					</div>

					<aside className="flex min-w-0 flex-col justify-between gap-10 rounded-lg border border-[#a1b3c333] bg-[#050505] p-6">
						<div className="flex flex-col gap-4">
							<p className="text-[#a1b3c3] text-xs font-bold leading-4 tracking-[0.18em]">
								SOURCE SIZE
							</p>
							<div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
								<FolderFrame motion="none" />
								<p className="text-[#f4f4f4] text-left text-sm font-bold leading-5 tracking-[0.08em] sm:text-right">
									120 x 136
									<br />
									DEFAULT
								</p>
							</div>
						</div>

						<div className="flex flex-col gap-5">
							<p className="text-[#a1b3c3] text-xs font-bold leading-4 tracking-[0.18em]">
								MOTION STUDIES
							</p>
							<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
								{motionOptions.map((folder) => (
									<li
										className="folder-motion-card flex min-w-0 flex-col items-center gap-3 border-[#a1b3c333] border-t pt-5 text-center first:border-t-0 first:pt-0 sm:border-t-0 sm:pt-0"
										key={folder.motion}
									>
										<FolderFrame
											label={folder.label}
											motion={folder.motion}
											size={folder.size}
										/>
										<div className="flex min-w-0 flex-col gap-1">
											<p className="text-[#f4f4f4] text-sm font-bold leading-5 tracking-[0.08em]">
												{folder.label}
											</p>
											<p className="text-[#a1b3c3] text-xs font-bold leading-4 tracking-[0.12em] uppercase">
												{folder.meta}
											</p>
										</div>
									</li>
								))}
							</ul>
						</div>
					</aside>
				</section>
			</div>
		</main>
	);
}

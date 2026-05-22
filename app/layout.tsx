import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { BaseUIProvider } from "./base-ui-provider";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Raspberry",
	description:
		"A Next.js app with Paper Shaders configured for GPU backgrounds.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			dir="ltr"
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col">
				<BaseUIProvider direction="ltr">
					<div className="app-root flex min-h-full flex-1 flex-col">
						{children}
					</div>
				</BaseUIProvider>
			</body>
		</html>
	);
}

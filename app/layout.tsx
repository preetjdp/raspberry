import type { Metadata } from "next";
import { Syncopate } from "next/font/google";

import { BaseUIProvider } from "./base-ui-provider";
import "./globals.css";

const syncopate = Syncopate({
	variable: "--font-syncopate",
	weight: ["400", "700"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Raspberry Productions",
	description: "IRL, done right",
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
			className={`${syncopate.variable} h-full antialiased`}
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

import type { Metadata } from "next"

import "./globals.css"

import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@teispace/next-themes";
import { ThemeToggle } from "./theme-toggle";

const geistSans = Geist({
	variable: "--font-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Cora UI — React 19 components",
	description: "Demo playground for @cora-ui/react — components built on Base UI and Tailwind CSS v4.",
};

export default function RootLayout({
																		 children,
																	 }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			suppressHydrationWarning
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable}`}
		>
			<body>
				<ThemeProvider
					disableTransitionOnChange
					attribute="class"
					storage="local"
				>
					<ThemeToggle/>

					<div className="root">
						{children}
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}

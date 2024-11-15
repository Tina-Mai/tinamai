import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const title = "Tina Mai";
const description =
	"Tina Mai is an 19-year-old startup founder and developer building in the machine learning space. She was recognized for creating an AI accessibility app for youth, a fintech software that won the World Series of Innovation, and more. She studies computer science and neuroscience at Stanford.";

export const metadata: Metadata = {
	title: title,
	description: description,
	keywords: ["tina mai", "tina", "mai", "stanford", "startup", "founder", "design", "engineer", "builder", "machine learning", "ai", "computer science", "product design"],
	openGraph: {
		title: title,
		description: description,
		siteName: title,
		type: "website",
		locale: "en_US",
		images: [
			{
				url: "/opengraph-image.png",
				width: 1200,
				height: 630,
				alt: "Tina Mai",
			},
		],
		url: "https://tinabmai.com",
	},
	twitter: {
		title: title,
		description: description,
		images: [
			{
				url: "/twitter-image.png",
				width: 1200,
				height: 630,
				alt: "Tina Mai",
			},
		],
		// use 'summary' for small image (e.g. profile pic), 'summary_large_image' for large
		card: "summary_large_image",
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	applicationName: title,
	icons: {
		icon: [
			{
				url: "/favicon.ico",
				type: "image/x-icon",
			},
		],
		shortcut: [
			{
				url: "/favicon.ico",
				type: "image/x-icon",
			},
		],
	},
	metadataBase: new URL("https://tinabmai.com"),
	alternates: { canonical: "https://tinabmai.com" },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const title = "Tina Mai";
const description = "19-year-old builder, machine learning researcher, and designer. Studying Computer Science and Computational Biology at Stanford University.";

export const metadata: Metadata = {
	title: {
		default: title,
		template: `%s | ${title}`,
	},
	description: description,
	keywords: ["tina mai", "tina", "mai", "stanford", "startup", "founder", "design", "engineer", "builder", "machine learning", "ai", "computer science", "product design"],
	authors: [{ name: "Tina Mai" }],
	creator: "Tina Mai",
	publisher: "Tina Mai",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
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
				type: "image/png",
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
				type: "image/png",
			},
		],
		card: "summary_large_image",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
		apple: [{ url: "/apple-icon.png", type: "image/png" }],
	},
	metadataBase: new URL("https://tinabmai.com"),
	alternates: {
		canonical: "https://tinabmai.com",
	},
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

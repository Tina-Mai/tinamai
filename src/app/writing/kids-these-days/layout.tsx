import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Kids These Days | Tina Mai",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}

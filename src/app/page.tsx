"use client";
import Home from "@/components/Home/Home";
import Cursor from "@/components/Global/Cursor";
import { generateStructuredData } from "./structured-data";

export default function Index() {
	return (
		<div style={{ cursor: "none" }}>
			<Cursor />
			<Home />
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(generateStructuredData()),
				}}
			/>
		</div>
	);
}

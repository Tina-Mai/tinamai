"use client";
import Home from "../components/Home/Home";
import Cursor from "../components/Global/Cursor";

export default function Index() {
	return (
		<div style={{ cursor: "none" }}>
			<Cursor />
			<Home />
		</div>
	);
}

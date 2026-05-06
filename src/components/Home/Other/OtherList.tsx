import React from "react";
import { motion } from "framer-motion";
import { animations } from "@/constants";
import Link from "../../Global/Link";

const Item1 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">01</p>
		helped friends craft interfaces for <Link text="mechanistic interpretability" href="https://x.com/tinabmai/status/1856426617234657344?s=20" /> and other beautiful manifestations of novel
		research
	</motion.li>
);

const Item2 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">02</p>
		<div className="pb-5">
			<p className="inline">published in the</p> <Link text="New York Times" href="https://x.com/AppleFilms/status/1494089759546744832" />{" "}
			<p className="inline">@ 16, youngest recipient of the Atlanta Review International Poetry Award, + some other awards for writing</p>
		</div>
		<div>(english is my third language so writing was my first way of proving i can get really good at something)</div>
	</motion.li>
);

const Item3 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">03</p>
		<div>
			<p className="inline">spoke at</p> <Link text="SXSW" href="https://youtu.be/kgsoqvQWfXs" /> <p className="inline">@ 17 about building a nuclear fusion reactor in my garage</p>
		</div>
	</motion.li>
);

const OtherList = [Item1, Item2, Item3];

export default OtherList;

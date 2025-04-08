import React from "react";
import { motion } from "framer-motion";
import { animations } from "@/constants";
import Link from "../../Global/Link";

const Item1 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">01</p>
		<Link text="Chaos Theory" href="https://www.tinamai.xyz/writing/chaos-theory" />
		<p className="pt-2 ">Or: On Modern Serendipity, Tech Twitter, and Luck as Agency</p>
		<p className="italic pt-5 pb-2">Kernel Magazine (2024)</p>
	</motion.li>
);

const Item2 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">02</p>
		<p>Kids These Days</p>
		<p className="pt-2 ">Or: American Exceptionalism and the Phenomenon of Gifted Children</p>
		<p className="italic pt-5 pb-2">forthcoming (2025)</p>
	</motion.li>
);

const Item3 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">03</p>
		<p className="pb-2">you can find other pieces of mine (particularly personal essays & fiction) published across the internet. call it a scavenger hunt or whatever.</p>
	</motion.li>
);

const WritingList = [Item1, Item2, Item3];

export default WritingList;

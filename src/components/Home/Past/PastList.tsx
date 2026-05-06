import React from "react";
import { motion } from "framer-motion";
import { animations } from "@/constants";
import Link from "@/components/Global/Link";

const Item1 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">01</p>
		<div>
			<p className="inline">founding team @</p> <Link text="Valthos" href="https://valthos.com/" />
			<p className="inline">, building the operating system for biodefense. we develop frontier AI systems that identify biological threats and design medical countermeasures in real time.</p>
		</div>
	</motion.li>
);

const Item2 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">02</p>
		<div>
			<p className="inline">research @ the</p> <Link text="Arc Institute" href="https://arcinstitute.org/" />
			<p className="inline">, turning biology into a programmable discipline</p>
		</div>
	</motion.li>
);

const Item3 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">03</p>
		<div className="pb-5">
			<p className="inline">co-founder/CTO @</p> <Link text="Kndrd" href="https://kndrd.com" />. <p className="inline">featured in</p>{" "}
			<Link text="Business Insider" href="https://kndrd.com/press" />, <p className="inline">backed by Cal Henderson (Slack), Matt Higgins (Shark Tank), etc.</p>
		</div>

		<div>started @ 17, stepped back after 2y to work on the most important problems i want to see solved.</div>
	</motion.li>
);

const PastList = [Item1, Item2, Item3];

export default PastList;

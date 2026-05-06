import React from "react";
import { motion } from "framer-motion";
import { animations } from "@/constants";
import Link from "@/components/Global/Link";

const Item1 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">01</p>
		<div className="pb-5">the most important problem i want to solve in my lifetime is to overcome premature death from luck. i think of this as an engineering problem.</div>
		<div className="pb-5">i'm building an industrial research lab creating hardware and physiological ML systems to give people plot armor.</div>
		<div>(more on this soon!)</div>
	</motion.li>
);

const Item2 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">02</p>
		CS & BME @ <Link text="Stanford" href="https://tina.sites.stanford.edu" /> (on indefinite leave)
	</motion.li>
);

const Item3 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">03</p>
		sometimes i write essays. other times i think about writing them and mourn that i don&apos;t have much time to write anymore.
	</motion.li>
);

const CurrentList = [Item1, Item2, Item3];

export default CurrentList;

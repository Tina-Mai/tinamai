import React from "react";
import { motion } from "framer-motion";
import { animations } from "@/constants";
import Link from "@/components/Global/Link";

const Item1 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">01</p>
		<div className="pb-5">the most important problem i want to solve in my lifetime is control over when we die. i think biological machine learning is the key to unlocking this.</div>
		<div>
			thus, my work is in researching and deploying applied biological intelligence, currently @ <Link text="Valthos" href="https://valthos.com" />.
		</div>
	</motion.li>
);

const Item2 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">02</p>
		studying CS & computational biology @ <Link text="Stanford" href="https://tina.sites.stanford.edu" /> (on leave)
	</motion.li>
);

const Item3 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">03</p>
		helping friends craft interfaces for <Link text="mechanistic interpretability" href="https://tilderesearch.com" /> and other beautiful software for technical research
	</motion.li>
);

const Item4 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">04</p>
		sometimes i write essays. other times i think about writing them and mourn that i don&apos;t have much time to write anymore.
	</motion.li>
);

const CurrentList = [Item1, Item2, Item3, Item4];

export default CurrentList;

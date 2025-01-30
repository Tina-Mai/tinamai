import React from "react";
import { motion } from "framer-motion";
import { animations } from "@/constants";
import Link from "@/components/Global/Link";

const Item1 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">01</p>
		studying CS & biophysics (self-designed major) @ <Link text="Stanford" href="https://tina.sites.stanford.edu" />
	</motion.li>
);

const Item2 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">02</p>
		researching biological machine learning to make humans less fragile
	</motion.li>
);

const Item3 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">03</p>
		helping friends craft interfaces for <Link text="mechanistic interpretability" href="https://tilderesearch.com" />, build <Link text="AI-embedded spreadsheets" href="https://paradigmai.com" />
		, and more
	</motion.li>
);

const Item4 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">04</p>
		venture partner @ <Link text="Contrary" href="https://contrary.com" />
	</motion.li>
);

const Item5 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">05</p>
		sometimes i write essays. other times i think about writing them and mourn that i don&apos;t have much time to write anymore.
	</motion.li>
);

const CurrentList = [Item1, Item2, Item3, Item4, Item5];

export default CurrentList;

import React from "react";
import { motion } from "framer-motion";
import { animations } from "@/constants";
import Link from "../../Global/Link";

const Item1 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">01</p>
		studying CS & theoretical neuroscience @ <Link text="Stanford" href="https://tina.sites.stanford.edu" />
	</motion.li>
);

const Item2 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">02</p>
		researching human simulating agents & building new interfaces to deploy them
	</motion.li>
);

const Item3 = () => (
	<motion.li variants={animations.itemVariants}>
		helping friends design interfaces for mechanistic interpretability @ <Link text="Tilde" href="https://tilderesearch.com" />
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

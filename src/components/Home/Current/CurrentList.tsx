import React from "react";
import { motion } from "framer-motion";
import { animations } from "@/constants";
import ScrambleText from "../../Global/ScrambleText";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Link from "../../Global/Link";

const Item1 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">01</p>
		studying CS & neuroscience @ <Link text="Stanford" href="https://tina.sites.stanford.edu" />
	</motion.li>
);

const Item2 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">02</p>
		<div className="pb-5">
			<p className="inline">co-founder @</p>{" "}
			<div className="inline-flex items-center whitespace-nowrap">
				<a href="https://kndrd.com" target="_blank" rel="noopener noreferrer" className="flex items-center link">
					<ScrambleText text="Kndrd" className="mr-1" />
					<ArrowUpRightIcon className="h-3.5 w-3.5" />
				</a>
				<p className="inline">,</p>
			</div>{" "}
			<p className="inline">engineering the social fabric that once only existed in institutions</p>
		</div>
		<div className="pb-5 items-center flex-row gap-1">
			<p className="inline">featured twice in</p> <Link text="Business Insider" href="https://kndrd.com/press" />
		</div>
		<p>raised from Matt Higgins (early investor in Pinterest and Resy), Cal Henderson (founder of Slack), etc.</p>
	</motion.li>
);

const Item3 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">03</p>
		building new interfaces enabled by mechanistic interpretability @ <Link text="Tilde Research" href="https://tilderesearch.com" />
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

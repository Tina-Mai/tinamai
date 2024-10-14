import React from "react";
import { motion } from "framer-motion";
import { animations } from "@/constants";
import Link from "../../Global/Link";
import ScrambleText from "@/components/Global/ScrambleText";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

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
		<p className="text-slate-500">03</p>
		<div className="pb-5">
			<p className="inline">co-founder/CTO @</p>{" "}
			<div className="inline-flex items-center whitespace-nowrap">
				<a href="https://kndrd.com" target="_blank" rel="noopener noreferrer" className="flex items-center link">
					<ScrambleText text="Kndrd" className="mr-1" />
					<ArrowUpRightIcon className="h-3.5 w-3.5" />
				</a>
				<p className="inline">,</p>
			</div>{" "}
			<p className="inline">engineering on-demand social</p>
		</div>

		<div>
			<p className="inline">featured twice in</p>{" "}
			<div className="inline-flex items-center whitespace-nowrap">
				<a href="https://kndrd.com/press" target="_blank" rel="noopener noreferrer" className="flex items-center link">
					<ScrambleText text="Business Insider" className="mr-1" />
					<ArrowUpRightIcon className="h-3.5 w-3.5" />
				</a>
				<p className="inline">,</p>
			</div>{" "}
			<p className="inline">backed by Cal Henderson (Slack), Matt Higgins (Shark Tank), etc.</p>
		</div>
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

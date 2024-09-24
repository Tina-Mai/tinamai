import React from "react";
import { motion } from "framer-motion";
import { animations } from "@/constants";
import Link from "../../Global/Link";

const Item1 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">01</p>
		<div>
			<p className="inline">won</p> <Link text="World Series of Innovation" href="https://www.smes.org/news-detail?pk=1171095" />{" "}
			<p className="inline">for making fintech software for the unbanked @ 15</p>
		</div>
	</motion.li>
);

const Item2 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">02</p>
		<div>
			<p className="inline">built NLP-based voice accessible app for visually-impaired youth, awarded by</p>{" "}
			<Link text="U.S. Congress" href="https://youtu.be/AqG4mt9EUyc?si=l8qvlhRPBfF78K-Z&t=1593" /> <p className="inline">@ 16</p>
		</div>
	</motion.li>
);

const Item3 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">03</p>
		<div>
			<p className="inline">published in the</p> <Link text="New York Times" href="https://x.com/AppleFilms/status/1494089759546744832" />{" "}
			<p className="inline">@ 16, youngest recipient of the Atlanta Review International Poetry Award, + some other awards for writing</p>
		</div>
	</motion.li>
);

const Item4 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">04</p>
		<div>
			<p className="inline">spoke at</p> <Link text="SXSW" href="https://youtu.be/kgsoqvQWfXs" /> <p className="inline">@ 17 about building a nuclear fusion reactor in the garage</p>
		</div>
	</motion.li>
);

const PastList = [Item1, Item2, Item3, Item4];

export default PastList;

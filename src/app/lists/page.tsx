"use client";
import Link from "@/components/Global/Link";
import { lists } from "@/constants/lists";
import ScrambleText from "@/components/Global/ScrambleText";
import { motion } from "framer-motion";
import { animations } from "@/constants";
import Cursor from "@/components/Global/Cursor";

export default function Lists() {
	return (
		<div style={{ cursor: "none" }}>
			<Cursor />
			<div className="flex min-h-screen flex-col items-start justify-start p-20 sm:p-8 font-mono text-sm">
				<motion.a href="/" className="body pb-7" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
					<ScrambleText text="[ ← back to home ]" />
				</motion.a>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0 }} className="pb-10">
					<ScrambleText text="FAVORITES I'VE COLLECTED THROUGH 19 YEARS OF LIVING" settings={{ speed: 1, tick: 5 }} />
				</motion.div>
				<motion.div className="grid sm:grid-cols-[65px_1fr] gap-x-10 sm:gap-y-10 gap-y-5" variants={animations.containerVariants} initial="hidden" animate="show">
					{lists.map((section, index) => (
						<motion.div key={index} className="contents" variants={animations.itemVariants}>
							<p className="text-slate-500 italic">{section.title}</p>
							<div className="flex flex-col pb-5 sm:pb-0">
								{section.items.map((item, itemIndex) => (
									<motion.div key={itemIndex} variants={animations.itemVariants}>
										{item.link ? <Link text={item.text} href={item.link} /> : item.text}
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</motion.div>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} className="pt-10">
					<Link text="send me recs!" href="mailto:tinamai@stanford.edu?subject=things%20i%20love%20that%20you%20should%20check%20out%20too%20:)" />
				</motion.div>
			</div>
		</div>
	);
}

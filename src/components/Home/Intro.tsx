import React from "react";
import Image from "next/image";
import ScrambleText from "../Global/ScrambleText";
import { socials, animations } from "../../constants";
import { motion } from "framer-motion";
import Link from "../Global/Link";
import nameLogo from "../../assets/name.svg";

const Intro = () => {
	return (
		<div className="space-y-10">
			<Image src={nameLogo} alt="tina mai" height={31} width={171} quality={85} />
			<ScrambleText text="nineteen. building things on the internet. currently engineering new computing systems & interfaces." settings={{ speed: 0.5 }} />

			<motion.div animate={{ opacity: 1, x: 0 }}>
				<motion.ul variants={animations.containerVariants} initial="hidden" animate="show" className="space-y-10">
					<motion.li variants={animations.itemVariants} className="body">
						<ScrambleText text="tinamai@stanford.edu" />
					</motion.li>
					<motion.li variants={animations.itemVariants}>
						<Image src="/profile.jpg" alt="Tina Mai - Startup Founder and Developer" height={180} width={135} quality={85} priority={true} itemProp="image" />
					</motion.li>

					{/* nav */}
					<div className="space-y-3">
						<motion.li variants={animations.itemVariants} className="body">
							<ScrambleText text="ON HERE" />
						</motion.li>
						<div className="sm:block sm:-space-y-5 flex flex-wrap">
							<motion.li variants={animations.itemVariants} key={null}>
								<Link text="lists" href="/lists" className="pr-2 space-x-1" />
							</motion.li>
						</div>
					</div>

					{/* social links */}
					<div className="space-y-3">
						<motion.li variants={animations.itemVariants} className="body">
							<ScrambleText text="ELSEWHERE" />
						</motion.li>
						<div className="sm:block sm:-space-y-5 flex flex-wrap">
							{socials.map((social, index) => (
								<motion.li variants={animations.itemVariants} key={social.name}>
									<Link text={social.name} href={social.url} className="pr-2 space-x-1" />
									{index < socials.length - 1 && <p className="pr-2 sm:pr-0 sm:invisible sm:block inline">•</p>}
								</motion.li>
							))}
						</div>
					</div>
				</motion.ul>
			</motion.div>
		</div>
	);
};

export default Intro;

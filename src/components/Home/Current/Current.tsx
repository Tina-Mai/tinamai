import ScrambleText from "@/components/Global/ScrambleText";
import { motion } from "framer-motion";
import { animations } from "@/constants";
import CurrentList from "./CurrentList";

const Current = () => {
	return (
		<motion.div animate={{ opacity: 1, x: 0 }} className="body md:space-y-15 space-y-5 pt-5 max-w-xs">
			{/* header for mobile (delayed) */}
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="sm:invisible sm:-mt-5 h-0">
				<ScrambleText text="CURRENTLY" settings={{ speed: 0.4, tick: 10 }} />
			</motion.div>
			{/* header for desktop (shows up immediately) */}
			<ScrambleText text="CURRENTLY" settings={{ speed: 0.4, tick: 10 }} className="invisible -mt-15 h-0 sm:h-5 sm:visible" />
			<motion.ul variants={animations.containerVariants} initial="hidden" animate="show" className="space-y-5">
				{CurrentList.map((Component, index) => (
					<Component key={index} />
				))}
			</motion.ul>
		</motion.div>
	);
};

export default Current;

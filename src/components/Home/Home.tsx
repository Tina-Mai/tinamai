import Intro from "./Intro";
import Current from "./Current/Current";
import Past from "./Past/Past";
import Writing from "./Writing/Writing";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-20 sm:p-8">
			<div className="z-10 w-full max-w-7xl items-start justify-between sm:flex">
				<div className="sm:w-1/5 max-w-xs pb-20">
					<Intro />
				</div>
				{/* divider line that only shows up on xs screens like mobile */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 2.75 }}
					className="sm:invisible sm:w-0 sm:mt-0 sm:mb-0 -mt-10 mb-10 w-full border-b border-slate-500"
				/>
				<div className="grid text-left sm:mb-0 sm:w-3/5 xs:grid-cols-3 gap-10">
					<Current />
					<Past />
					<Writing />
				</div>
			</div>
		</main>
	);
}

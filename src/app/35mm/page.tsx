"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Cursor from "@/components/Global/Cursor";
import ScrambleText from "@/components/Global/ScrambleText";
import { pics } from "@/constants/35mm";

export default function Film() {
	const [index, setIndex] = useState(0);
	const [loadedIndex, setLoadedIndex] = useState<number | null>(null);
	const [now, setNow] = useState<Date | null>(null);
	const pic = pics[index];
	const loaded = loadedIndex === index;
	const aspectRatio = pic.imgSrc.width / pic.imgSrc.height;
	const frameStyle = {
		width: `min(${45 * aspectRatio}vh, calc(100vw - 4rem))`,
		aspectRatio: `${pic.imgSrc.width} / ${pic.imgSrc.height}`,
	};

	const prev = () => {
		setLoadedIndex(null);
		setIndex((i) => (i - 1 + pics.length) % pics.length);
	};
	const next = () => {
		setLoadedIndex(null);
		setIndex((i) => (i + 1) % pics.length);
	};

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "ArrowLeft") prev();
			else if (e.key === "ArrowRight") next();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);

	useEffect(() => {
		const updateTime = () => setNow(new Date());
		updateTime();
		const interval = window.setInterval(updateTime, 1000);
		return () => window.clearInterval(interval);
	}, []);

	return (
		<div style={{ cursor: "none" }}>
			<Cursor color="black" />
			<div className="vertical min-h-[100dvh] w-full center-v center-h justify-between bg-light text-zinc-800 p-8 font-mono text-sm">
				<div className="horizontal w-full justify-between">
					<motion.a href="/" className="body self-start" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
						<ScrambleText text="[ ← back to home ]" />
					</motion.a>

					<time dateTime={now?.toISOString()}>
						{now?.toLocaleTimeString(undefined, {
							hour: "2-digit",
							minute: "2-digit",
							second: "2-digit",
							hour12: false,
						}) ?? "--:--:--"}
					</time>
				</div>
				<div className="vertical h-full w-full center-v center-h space-y-10">
					<div className="vertical w-full center-h gap-3">
						<div className="flex h-[45vh] w-full items-center justify-center">
							<div key={pic.imgSrc.src} className="relative shrink-0" style={frameStyle}>
								<div className={`absolute inset-0 bg-zinc-300 ${loaded ? "invisible" : "visible animate-pulse"}`} />
								<Image
									key={pic.imgSrc.src}
									src={pic.imgSrc}
									alt={pic.alt}
									fill
									sizes="(max-width: 640px) 90vw, 700px"
									quality={80}
									className={`object-contain ${loaded ? "visible" : "invisible"}`}
									priority={index === 0}
									onLoad={() => setLoadedIndex(index)}
								/>
							</div>
						</div>

						<ScrambleText key={`stock-${index}`} className="text-center italic text-zinc-400" text={pic.filmStock} />
					</div>

					<div className="horizontal w-full max-w-xs justify-between">
						<button onClick={prev} aria-label="previous photo" className="body cursor-none">
							<ScrambleText text="[ ← prev ]" />
						</button>
						<span className="text-zinc-400">
							{index + 1} / {pics.length}
						</span>
						<button onClick={next} aria-label="next photo" className="body cursor-none">
							<ScrambleText text="[ next → ]" />
						</button>
					</div>
				</div>
				<div className="horizontal w-full justify-between">
					<ScrambleText text="cameras" />

					<ScrambleText text="film stocks" />
				</div>
			</div>
		</div>
	);
}

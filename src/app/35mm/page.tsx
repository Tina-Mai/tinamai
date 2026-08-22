"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import Cursor from "@/components/Global/Cursor";
import ScrambleText from "@/components/Global/ScrambleText";
import { pics } from "@/constants/35mm";

const IMAGE_SIZES = "(max-width: 640px) 90vw, 700px";
const IMAGE_QUALITY = 80;
const VISIBLE_WINDOW = 2; // neighbors on each side that stay visible in the pile
const LOAD_WINDOW = 3; // neighbors on each side that keep their full image mounted

type View = "grid" | "stack";
type Pic = (typeof pics)[number];

const gridVariants: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { delayChildren: 0.08, staggerChildren: 0.04 },
	},
	exit: { opacity: 0, transition: { duration: 0.2 } },
};

const gridItemVariants: Variants = {
	hidden: { opacity: 0, y: 16, scale: 0.97 },
	show: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.4, ease: "easeOut" },
	},
};

// deterministic tilt
function tiltFor(i: number, maxDeg: number) {
	const n = Math.sin((i + 1) * 12.9898) * 43758.5453;
	const magnitude = 0.35 + 0.65 * (n - Math.floor(n));
	return (i % 2 === 0 ? 1 : -1) * magnitude * maxDeg;
}

function GridCell({ pic, label, dimmed, onClick, onMouseEnter, onMouseLeave }: { pic: Pic; label: string; dimmed: boolean; onClick: () => void; onMouseEnter: () => void; onMouseLeave: () => void }) {
	const [thumbLoaded, setThumbLoaded] = useState(false);

	return (
		<motion.button
			variants={gridItemVariants}
			onClick={onClick}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			aria-label={`view ${pic.alt} in stack`}
			className="group vertical gap-3 cursor-none outline-none"
		>
			<span className="self-start text-zinc-400 transition-colors duration-300 group-hover:text-zinc-800">{label}.</span>
			<div className="flex h-48 w-full items-center justify-center">
				<div
					style={{ aspectRatio: `${pic.imgSrc.width} / ${pic.imgSrc.height}` }}
					className={`relative h-full max-w-full transition-[filter] delay-150 duration-300 ${dimmed ? "blur-[2px] grayscale" : ""}`}
				>
					<div className={`absolute inset-0 bg-zinc-300 transition-opacity duration-500 ${thumbLoaded ? "opacity-0" : "animate-pulse opacity-100"}`} />
					<Image
						src={pic.imgSrc}
						alt={pic.alt}
						fill
						sizes="350px"
						quality={IMAGE_QUALITY}
						onLoad={() => setThumbLoaded(true)}
						className={`object-contain transition-opacity duration-500 ${thumbLoaded ? "opacity-100" : "opacity-0"}`}
					/>
				</div>
			</div>
		</motion.button>
	);
}

function StackSlide({ pic, i, shouldLoad, isTop }: { pic: Pic; i: number; shouldLoad: boolean; isTop: boolean }) {
	const [imgLoaded, setImgLoaded] = useState(false);

	return (
		<div className="flex h-full w-full items-center justify-center">
			<div
				className={`relative h-full max-w-full transition-[filter] duration-[650ms] ${isTop ? "" : "blur-[2px] grayscale brightness-125 contrast-75"}`}
				style={{ aspectRatio: `${pic.imgSrc.width} / ${pic.imgSrc.height}`, transform: `rotate(${tiltFor(i, 3)}deg)` }}
			>
				<div className={`absolute inset-0 bg-zinc-300 ${shouldLoad && imgLoaded ? "invisible" : "visible animate-pulse"}`} />
				{shouldLoad && (
					<Image
						src={pic.imgSrc}
						alt={pic.alt}
						fill
						sizes={IMAGE_SIZES}
						quality={IMAGE_QUALITY}
						priority={isTop}
						onLoad={() => setImgLoaded(true)}
						className={`object-contain ${imgLoaded ? "visible" : "invisible"}`}
					/>
				)}
			</div>
		</div>
	);
}

export default function Film() {
	const [view, setView] = useState<View>("stack");
	const [index, setIndex] = useState(0);
	const [hovered, setHovered] = useState<number | null>(null);
	const [now, setNow] = useState<Date | null>(null);
	const swiperRef = useRef<SwiperType | null>(null);

	const openInStack = (i: number) => {
		setIndex(i);
		setHovered(null);
		setView("stack");
	};

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (view !== "stack") return;
			// the stack has a fixed start and end: no wrapping in either direction
			if (e.key === "ArrowRight" && swiperRef.current && swiperRef.current.realIndex < pics.length - 1) swiperRef.current.slideNext();
			else if (e.key === "ArrowLeft" && swiperRef.current && swiperRef.current.realIndex > 0) swiperRef.current.slidePrev();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [view]);

	useEffect(() => {
		const updateTime = () => setNow(new Date());
		updateTime();
		const interval = window.setInterval(updateTime, 1000);
		return () => window.clearInterval(interval);
	}, []);

	return (
		<div style={{ cursor: "none" }} className="overflow-x-clip">
			<Cursor color="black" />
			<div className="vertical min-h-[100dvh] w-full center-v center-h justify-between overflow-x-clip bg-light text-zinc-800 p-8 font-mono text-sm">
				<div className="horizontal w-full justify-between">
					<motion.a href="/" className="body self-start" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
						<ScrambleText text="[ ← back to home ]" />
					</motion.a>

					<div className="horizontal gap-2">
						<button onClick={() => setView("stack")} aria-pressed={view === "stack"} className="body cursor-none outline-none">
							<ScrambleText className={view === "stack" ? "" : "text-zinc-400 hover:text-zinc-800 transition-colors duration-300"} text={view === "stack" ? "[ stack ]" : "stack"} />
						</button>
						<span className="text-zinc-400">/</span>
						<button onClick={() => setView("grid")} aria-pressed={view === "grid"} className="body cursor-none outline-none">
							<ScrambleText className={view === "grid" ? "" : "text-zinc-400 hover:text-zinc-800 transition-colors duration-300"} text={view === "grid" ? "[ grid ]" : "grid"} />
						</button>
					</div>
				</div>

				<AnimatePresence mode="wait">
					{view === "grid" ? (
						<motion.div
							key="grid"
							variants={gridVariants}
							initial="hidden"
							animate="show"
							exit="exit"
							className="grid w-full grid-cols-2 gap-x-16 gap-y-16 py-14 ss:grid-cols-3 md:grid-cols-4"
						>
							{pics.map((p, i) => (
								<GridCell
									key={p.imgSrc.src}
									pic={p}
									label={String(i + 1).padStart(3, "0")}
									dimmed={hovered !== null && hovered !== i}
									onClick={() => openInStack(i)}
									onMouseEnter={() => setHovered(i)}
									onMouseLeave={() => setHovered(null)}
								/>
							))}
						</motion.div>
					) : (
						<motion.div
							key="stack"
							initial={{ opacity: 0, scale: 0.94, y: 16 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.97, y: -8 }}
							transition={{ type: "spring", stiffness: 260, damping: 26 }}
							className="vertical h-full w-full center-v center-h space-y-10"
						>
							<div className="vertical w-full center-h gap-5">
								<Swiper
									effect="cards"
									modules={[EffectCards]}
									cardsEffect={{ slideShadows: false, perSlideRotate: 2.5, perSlideOffset: 8 }}
									speed={650}
									initialSlide={index}
									onSwiper={(s) => (swiperRef.current = s)}
									onSlideChange={(s) => setIndex(s.realIndex)}
									onClick={(s) => s.slideNext()}
									className="h-[45vh]"
									style={{ width: "min(66vh, calc(100vw - 6rem))" }}
								>
									{pics.map((p, i) => {
										const dist = Math.abs(i - index);
										return (
											<SwiperSlide
												key={p.imgSrc.src}
												className="!overflow-visible"
												style={{
													background: "transparent",
													opacity: dist <= VISIBLE_WINDOW ? 1 : 0,
													visibility: dist <= VISIBLE_WINDOW ? "visible" : "hidden",
													transition: "opacity 0.65s, visibility 0.65s",
												}}
											>
												<StackSlide pic={p} i={i} shouldLoad={dist <= LOAD_WINDOW} isTop={i === index} />
											</SwiperSlide>
										);
									})}
								</Swiper>

								<ScrambleText key={`stock-${index}`} className="text-center italic text-zinc-400" text={pics[index].filmStock} />
							</div>

							<div className="horizontal w-full center-v max-w-xs gap-5">
								<button
									onClick={() => swiperRef.current?.slidePrev()}
									aria-label="previous photo"
									disabled={index === 0}
									className={`body flex size-11 -m-[13px] cursor-none items-center justify-center outline-none transition-[color,opacity] duration-300 hover:text-zinc-500 ${
										index === 0 ? "pointer-events-none opacity-0" : "opacity-100"
									}`}
								>
									&lt;
								</button>
								<span>
									{String(index + 1).padStart(3, "0")} / {String(pics.length).padStart(3, "0")}
								</span>
								<button
									onClick={() => swiperRef.current?.slideNext()}
									aria-label="next photo"
									disabled={index === pics.length - 1}
									className={`body flex size-11 -m-[13px] cursor-none items-center justify-center outline-none transition-[color,opacity] duration-300 hover:text-zinc-500 ${
										index === pics.length - 1 ? "pointer-events-none opacity-0" : "opacity-100"
									}`}
								>
									&gt;
								</button>
							</div>
						</motion.div>
					)}
				</AnimatePresence>

				{view === "grid" && (
					<AnimatePresence>
						<motion.div
							key="end-of-roll"
							initial={{ opacity: 0, y: 8 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0 }}
							transition={{ delay: 0.08 + pics.length * 0.04, duration: 0.4, ease: "easeOut" }}
							className="flex w-full center-v italic text-zinc-400"
						>
							end of roll.
						</motion.div>
					</AnimatePresence>
				)}

				<div className={`horizontal w-full justify-between transition-opacity duration-300 ${view === "grid" ? "pointer-events-none opacity-0" : "opacity-100"}`}>
					<div className="text-zinc-400">35mm film</div>
					<time dateTime={now?.toISOString()} className="text-zinc-400">
						{now?.toLocaleTimeString(undefined, {
							hour: "2-digit",
							minute: "2-digit",
							second: "2-digit",
							hour12: false,
						}) ?? "--:--:--"}
					</time>
				</div>
			</div>
		</div>
	);
}

"use client";
import Image from "next/image";
import Cursor from "../../../components/Global/Cursor";
import ScrambleText from "../../../components/Global/ScrambleText";
import Link from "../../../components/Global/Link";
import coverImg from "../../../assets/chaos-theory/cover.png";

export default function ChaosTheory() {
	return (
		<>
			<Cursor />
			<div className="vertical bg-light text-zinc-800">
				{/* cover */}
				<div className="horizontal center-v center-h bg-dark text-white w-full h-[100dvh]">
					<div className="vertical h-full justify-between items-start px-16 py-7">
						<a href="/" className="body">
							<ScrambleText text="[ back to home ]" />
						</a>
						<div className="font-serif vertical gap-5">
							<h1 className="text-6xl font-monoDisplay font-medium uppercase">Chaos Theory</h1>
							<h2 className="text-3xl italic tracking-tight">Or: On Modern Serendipity, Tech Twitter, and Luck as Agency</h2>
							<div className="h-[0.5px] bg-gray-100 w-full my-5" />
							<div className="horizontal gap-5 justify-between">
								<p>
									Written by <p className="uppercase">Tina Mai</p>
								</p>
								<p>
									Edited by <p className="uppercase">Jasmine Sun</p>
								</p>
								<p>
									Illustrations by <p className="uppercase">Phuc-Thanh Mai Vo</p>
								</p>
							</div>
						</div>
						<p className="body">
							Written for <Link text="Kernel Magazine" href="https://www.kernelmag.io/4/chaos" />, 2024
						</p>
					</div>
					<Image src={coverImg} alt="cover" className="h-full w-auto" />
				</div>

				<div className="flex center-v w-full py-16 font-serif text-lg">
					<div className="w-full max-w-prose px-4 md:px-0 space-y-5">
						<p>In another universe, sunlight drips through an open window. I am lying on the floor in a small apartment. I am five years old. Nothing bad has happened to me.</p>
						<p>
							In this version of the story, my life is still a blank slate, and I can control what happens like one of those <i>Choose Your Own Adventure</i> games. The critical events
							that will go on to change my life—the move to America, the class switch in high school, the fateful LinkedIn DM—have yet to take place. Nothing bad has happened, nothing
							good has happened, and I am still naïve enough to believe I can shape the future to my will.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

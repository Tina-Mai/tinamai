import type { StaticImageData } from "next/image";

import backpack from "@/assets/35mm/backpack.jpg";
import charlotte from "@/assets/35mm/charlotte.jpg";
import chengdu from "@/assets/35mm/chengdu.jpg";
import confused from "@/assets/35mm/confused.jpg";
import donkey from "@/assets/35mm/donkey.jpg";
import dumplings from "@/assets/35mm/dumplings.jpg";
import flyingCar from "@/assets/35mm/flying-car.jpg";
import lab from "@/assets/35mm/lab.jpg";
import market from "@/assets/35mm/market.jpg";
import neo from "@/assets/35mm/neo.jpg";
import oxford from "@/assets/35mm/oxford.jpg";
import peacock from "@/assets/35mm/peacock.jpg";
import pointReyes from "@/assets/35mm/point-reyes.jpg";
import river from "@/assets/35mm/river.jpg";
import roof from "@/assets/35mm/roof.jpg";
import seals from "@/assets/35mm/seals.jpg";
import seine from "@/assets/35mm/seine.jpg";
import sevenSisters from "@/assets/35mm/seven-sisters.jpg";
import studio from "@/assets/35mm/studio.jpg";
import trolley from "@/assets/35mm/trolley.jpg";
import utv from "@/assets/35mm/utv.jpg";
import vegetables from "@/assets/35mm/vegetables.jpg";

interface FilmPic {
	imgSrc: StaticImageData;
	alt: string;
	filmStock: string;
}

export const pics: FilmPic[] = [
	{ imgSrc: chengdu, alt: "chengdu", filmStock: "portra 400" },
	{ imgSrc: flyingCar, alt: "flying car", filmStock: "fujifilm 400" },
	{ imgSrc: sevenSisters, alt: "seven sisters", filmStock: "kodak gold 200" },
	{ imgSrc: backpack, alt: "backpack", filmStock: "portra 400" },
	{ imgSrc: utv, alt: "utv", filmStock: "kodak gold 200" },
	{ imgSrc: confused, alt: "confused", filmStock: "kodak gold 200" },
	{ imgSrc: dumplings, alt: "dumplings", filmStock: "portra 400" },
	{ imgSrc: pointReyes, alt: "point reyes", filmStock: "portra 400" },
	{ imgSrc: lab, alt: "lab", filmStock: "portra 160" },
	{ imgSrc: roof, alt: "roof", filmStock: "portra 400" },
	{ imgSrc: vegetables, alt: "vegetables", filmStock: "fujifilm 400" },
	{ imgSrc: market, alt: "market", filmStock: "fujifilm 400" },
	{ imgSrc: oxford, alt: "oxford", filmStock: "kodak gold 200" },
	{ imgSrc: neo, alt: "neo", filmStock: "portra 400" },
	{ imgSrc: peacock, alt: "peacock", filmStock: "portra 400" },
	{ imgSrc: seine, alt: "seine", filmStock: "kodak gold 200" },
	{ imgSrc: studio, alt: "studio", filmStock: "kodak gold 200" },
	{ imgSrc: charlotte, alt: "charlotte", filmStock: "kodak gold 200" },
	{ imgSrc: river, alt: "river", filmStock: "portra 400" },
	{ imgSrc: donkey, alt: "donkey", filmStock: "kodak gold 200" },
	{ imgSrc: trolley, alt: "trolley", filmStock: "kodak gold 200" },
	{ imgSrc: seals, alt: "seals", filmStock: "portra 400" },
];

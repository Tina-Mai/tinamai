interface ListItem {
	text: string;
	link?: string;
}

interface ListSection {
	title: string;
	items: ListItem[];
}

// TODO: ideas: fonts, hardware (film camera, macbook pro, airpods, wearbles like Oura Ring, etc.)

export const lists: ListSection[] = [
	{
		title: "films",
		items: [{ text: "Interstellar" }, { text: "Inception" }, { text: "The Imitation Game" }, { text: "Arrival" }, { text: "Spirited Away" }, { text: "Iron Man" }],
	},
	{
		title: "books",
		items: [
			{ text: "Stories of Your Life and Others (Ted Chiang)" },
			{ text: "The Paper Menagerie and Other Stories (Ken Liu)" },
			{ text: "When Breath Becomes Air (Paul Kalanithi)" },
			{ text: "The Opposite of Loneliness (Marina Keegan)" },
			{ text: "The Great Gatsby (F. Scott Fitzgerald)" },
			{ text: "Ready Player One (Ernest Cline)" },
			{ text: "The Three-Body Problem (Cixin Liu)" },
			{ text: "Tomorrow, and Tomorrow, and Tomorrow (Gabrielle Zevin)" },
		],
	},
	{
		title: "essays",
		items: [
			{ text: '"Meditations on Moloch" (Scott Alexander)' },
			{ text: '"This is Water" (David Foster Wallace)' },
			{ text: '"Dostoevsky as Lover" (Henrik Karlsson)' },
			{ text: '"You and Your Research" (Richard Hamming)' },
			{ text: '"How to Do Great Work" (Paul Graham)' },
			{ text: '"Notes on Puzzles" (Nabeel S. Qureshi)' },
			{ text: '"How to Think in Writing" (Henrik Karlsson)' },
		],
	},
	{
		title: "places at/around stanford",
		items: [
			{ text: "CoHo jazz nights" },
			{ text: "late night studying at On Call Café" },
			{ text: "picking up a book at Kepler's" },
			{ text: "climbing the roof of Mem Aud" },
			{ text: "strolling University Ave & getting Salt & Straw" },
			{ text: "ordering Zareen's" },
			{ text: "locking in at Gates" },
		],
	},
	{
		title: "places in nyc",
		items: [
			{ text: "McNally Jackson Books, SoHo" },
			{ text: "Bathhouse, Flatiron" },
			{ text: "Mercer Labs, Fidi" },
			{ text: "Uluh, East Village" },
			{ text: "Antidote, Williamsburg" },
			{ text: "La Cabra, SoHo" },
		],
	},
	{
		title: "journals, blogs, etc.",
		items: [
			{ text: "Escaping Flatland (Henrik Karlsson)" },
			{ text: "Works in Progress (Stripe Press)" },
			{ text: "Kernel Magazine (Reboot)" },
			{ text: "Gwern.net (Gwern Branwen)" },
			{ text: "Asimov Press" },
			{ text: "Asterisk Magazine" },
			{ text: "The Sephist (Linus Lee)" },
		],
	},
	{
		title: "personal software",
		items: [{ text: "Arc Browser" }, { text: "Cursor" }, { text: "Notion" }, { text: "Figma" }, { text: "Warp" }, { text: "Raycast" }, { text: "Retro" }, { text: "Linear" }],
	},
	// {
	// 	title: "hardware",
	// 	items: [{ text: "Olympus Mju Zoom 140 (film camera)" }, { text: "Kodak Portra 400 35mm film" }, { text: "WHOOP 5.0 (health wearable)" }, { text: 'Macbook Pro 14" M5' }],
	// },
	{
		title: "favorite of all time :)",
		items: [{ text: "Mason Wang", link: "https://masonjwang.com" }],
	},
];

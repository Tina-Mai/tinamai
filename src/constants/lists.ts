interface ListItem {
	text: string;
	link?: string;
}

interface ListSection {
	title: string;
	items: ListItem[];
}

// TODO: ideas: fonts, hardware (film camera, macbook pro, airpods, etc.)

export const lists: ListSection[] = [
	{
		title: "films",
		items: [{ text: "Interstellar" }, { text: "Inception" }, { text: "The Imitation Game" }, { text: "Arrival" }, { text: "Iron Man" }],
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
			{ text: '"This is Water" (David Foster Wallace)' },
			{ text: '"How to Do Great Work" (Paul Graham)' },
			{ text: '"Dostoevsky as Lover" (Henrik Karlsson)' },
			{ text: '"Always Be Optimizing" (Jia Tolentino)' },
		],
	},
	{
		title: "places at/around stanford",
		items: [
			{ text: "CoHo jazz nights" },
			{ text: "late night studying at On Call Café" },
			{ text: "dinner at MJ Sushi" },
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
			{ text: "Charlie Bird, West Village" },
			{ text: "Mercer Labs, Fidi" },
			{ text: "Uluh, East Village" },
			{ text: "Antidote, Williamsburg" },
			{ text: "La Cabra, SoHo" },
		],
	},
	{
		title: "personal software",
		items: [{ text: "Arc Browser" }, { text: "Cursor" }, { text: "Notion" }, { text: "Figma" }, { text: "Warp" }, { text: "Raycast" }, { text: "Screen Studio" }, { text: "Linear" }],
	},
	{
		title: "favorite of all time :)",
		items: [{ text: "Mason Wang", link: "https://masonjwang.com" }],
	},
];

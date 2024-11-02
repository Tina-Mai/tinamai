interface ListItem {
	text: string;
	link?: string;
}

interface ListSection {
	title: string;
	items: ListItem[];
}

export const lists: ListSection[] = [
	{
		title: "films",
		items: [{ text: "Interstellar" }, { text: "Inception" }, { text: "The Imitation Game" }],
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
			{ text: "Tomorrow, and Tomorrow, and Tomorrow (Gabrielle Zevin)" },
		],
	},
	{
		title: "essays",
		items: [{ text: '"This is Water" (David Foster Wallace)' }, { text: '"How to Do Great Work" (Paul Graham)' }, { text: '"Dostoevsky as Lover" (Henrik Karlsson)' }],
	},
	{
		title: "personal software",
		items: [{ text: "Arc Browser" }, { text: "Cursor" }, { text: "Notion" }, { text: "Figma" }, { text: "Warp" }, { text: "Raycast" }],
	},
	// {
	// 	title: "places in nyc",
	// 	items: [],
	// },
	// {
	// 	title: "fonts",
	// 	items: [],
	// },
	{
		title: "favorite of all time :)",
		items: [{ text: "Mason Wang", link: "https://masonjwang.com" }],
	},
];

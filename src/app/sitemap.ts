import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://tinabmai.com",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
			images: [
				{
					loc: "https://tinabmai.com/profile.jpg",
					title: "Tina Mai",
					caption: "Tina Mai",
				},
				{
					loc: "https://tinabmai.com/opengraph-image.png",
					title: "Tina Mai",
				},
			],
		},
		// ... other pages
	];
}

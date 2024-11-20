import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://tinabmai.com",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: "https://tinabmai.com/profile.jpg",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://tinabmai.com/opengraph-image.png",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		// ... other pages
	];
}

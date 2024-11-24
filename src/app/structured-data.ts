export const generateStructuredData = () => {
	return {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Tina Mai",
		url: "https://tinabmai.com",
		sameAs: ["https://linkedin.com/in/tinabmai", "https://github.com/tina-mai", "https://x.com/tinabmai", "https://instagram.com/tinammai"],
		jobTitle: "Startup Founder",
		description: "Tina Mai is an 19-year-old startup founder and developer building in the machine learning space.",
		image: {
			"@type": "ImageObject",
			url: "https://tinabmai.com/profile.jpg",
			width: "135",
			height: "180",
			caption: "Tina Mai",
		},
	};
};

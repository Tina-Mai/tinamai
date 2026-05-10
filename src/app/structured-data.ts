export const generateStructuredData = () => {
	return {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Tina Mai",
		url: "https://tinabmai.com",
		sameAs: ["https://linkedin.com/in/tinabmai", "https://github.com/tina-mai", "https://x.com/tinabmai", "https://instagram.com/tinammai"],
		jobTitle: "Startup Founder",
		description: "building the industrial research lab to make humans less fragile. previously biological machine learning and biodefense. CS @ Stanford.",
		image: {
			"@type": "ImageObject",
			url: "https://tinabmai.com/profile.jpg",
			width: "135",
			height: "180",
			caption: "Tina Mai",
		},
	};
};

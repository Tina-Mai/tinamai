export const pastItems = [
    {
        id: '01',
        description: 'won World Series of Innovation for making fintech software for the unbanked @ 15',
    },
    {
        id: '02',
        description: 'built NLP-based voice accessible app to help visually-impaired youth, awarded by U.S. Congress @ 16',
    },
    {
        id: '03',
        description: 'published in the New York Times @ 16, youngest recipient of the Atlanta Review International Poetry Award, + some other awards for writing',
    },
    {
        id: '04',
        description: 'spoke at SXSW @ 17 about building a nuclear fusion reactor in the garage',
    },
    {
        id: '05',
        description: "followed my parent's american dream of me going to a good college. made lifelong friends there. left after 10 weeks to chase a dream.",
    },
];

export const socials = [
    {
        name: 'twitter',
        url: 'https://twitter.com/t1namai',
    },
    {
        name: 'linkedin',
        url: 'https://linkedin.com/in/tinammai/',
    },
    {
        name: 'instagram',
        url: 'https://instagram.com/tinammai/',
    },
    {
        name: 'resume',
        url: 'https://drive.google.com/file/d/1ablmCsg_ozK8-yBVGRFA2BZRAR39ioop/view?usp=sharing',
    },
]

export const animations = {
    // variants for the list container to control children's stagger
    containerVariants: {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 2,  // delay before starting to animate children
                staggerChildren: 0.1, // stagger the animation of children by 0.1 second each
            },
        },
    },
    // variants for individual list items
    itemVariants: {
        hidden: { y: -20, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                y: { type: 'spring', stiffness: 100, damping: 20 },
                opacity: { duration: 0.5 },
            },
        },
    },
}
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const title = 'Tina Mai';
const description =
    'Tina Mai is an 18-year-old startup founder and developer building in the machine learning space. She was recognized for creating an AI accessibility app for youth, a fintech software that won the World Series of Innovation, and more. She studies computer science and product design at Stanford.';

export const metadata: Metadata = {
    title: title,
    description: description,
    keywords: ['tina mai', 'tina', 'mai', 'kndrd', 'stanford', 'startup', 'founder', 'design', 'engineer', 'builder', 'machine learning', 'ai', 'computer science', 'product design'],
    openGraph: {
        title: title,
        description: description,
        siteName: title,
        type: 'website',
        locale: 'en_US',
        images: [
            {
                url: '/profile.png',
                width: 790,
                height: 987,
                alt: 'Tina Mai',
            },
        ],
    },
    twitter: {
        title: 'Tina Mai',
        description:
            'Tina Mai is an 18-year-old startup founder and developer building in the machine learning space. She was recognized for creating an AI accessibility app for youth, a fintech software that won the World Series of Innovation, and more. She studies computer science and product design at Stanford.',
        images: [
            {
                url: '/profile.png',
                width: 790,
                height: 987,
                alt: 'Tina Mai',
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    applicationName: title,
    icons: {
        icon: [
            {
                url: '/favicon.ico',
                type: 'image/x-icon',
            },
        ],
        shortcut: [
            {
                url: '/favicon.ico',
                type: 'image/x-icon',
            },
        ],
    },
    metadataBase: new URL('https://tinamai.xyz'),
    alternates: { canonical: '/' },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <meta property='og:image' content='/profile.png'>
                <meta property='twitter:image' content='/profile.png'>
                    <body className={inter.className}>{children}</body>
                </meta>
            </meta>
        </html>
    );
}

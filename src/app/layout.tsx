import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Tina Mai',
    description:
        'Tina Mai is an 18-year-old startup founder and developer building in the machine learning space. She was recognized for creating an AI accessibility app for youth, a fintech software that won the World Series of Innovation, and more. She studies computer science and product design at Stanford.',
    keywords: ['tina mai', 'tina', 'mai', 'kndrd', 'stanford', 'startup', 'founder', 'design', 'engineer', 'builder', 'machine learning', 'ai', 'computer science', 'product design'],
    openGraph: {
        images: '/opengraph-image.png',
        siteName: 'Tina Mai',
        type: 'website',
        locale: 'en_US',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>{children}</body>
        </html>
    );
}

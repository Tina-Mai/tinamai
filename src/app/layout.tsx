import { Inter } from 'next/font/google';
import Head from 'next/head';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const title = 'Tina Mai';
const description =
    'Tina Mai is an 18-year-old startup founder and developer building in the machine learning space. She was recognized for creating an AI accessibility app for youth, a fintech software that won the World Series of Innovation, and more. She studies computer science and product engineering at Stanford.';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content='tina mai, tina, mai, kndrd, stanford, startup, founder, design, engineer, builder, machine learning, ai, computer science, product design' />
                <meta property='og:title' content={title} />
                <meta property='og:description' content={description} />
                <meta property='og:site_name' content={title} />
                <meta property='og:type' content='website' />
                <meta property='og:locale' content='en_US' />
                <meta property='og:image' content='/opengraph-image.jpg' />
                <meta property='og:image:width' content='790' />
                <meta property='og:image:height' content='987' />
                <meta property='og:url' content='https://tinamai.xyz/' />
                <meta property='og:image:alt' content='Tina Mai' />
                <meta name='twitter:title' content={title} />
                <meta name='twitter:description' content={description} />
                <meta name='twitter:image' content='/opengraph-image.jpg' />
                <meta name='twitter:image:width' content='790' />
                <meta name='twitter:image:height' content='987' />
                <meta name='twitter:image:alt' content='Tina Mai' />
                <meta name='twitter:image:type' content='image/jpeg' />
                <meta name='robots' content='index, follow, noarchive' />
                <meta name='googlebot' content='index, follow, noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1' />
                <link rel='icon' href='/favicon.ico' type='image/x-icon' />
                <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
                <link rel='canonical' href='https://tinamai.xyz/' />
            </Head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}

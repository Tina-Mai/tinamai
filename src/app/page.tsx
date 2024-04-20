import Image from 'next/image';

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-8'>
            <div className='z-10 w-full max-w-7xl items-center justify-between lg:flex'>
                {/* <p className='flex w-full font-mono text-sm'>TINA MAI</p> */}
                <div className='flex justify-start gap-3 font-serif text-4xl'>
                    <p>Tina</p>
                    <p className='italic'>Mai</p>
                </div>

                <div className='grid mb-32 text-center lg:mb-0 lg:w-2/3 lg:max-w-7xl lg:grid-cols-3 lg:text-left'>
                    <a
                        href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
                        className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <h2 className='mb-3 text-2xl font-semibold'>
                            Docs <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>-&gt;</span>
                        </h2>
                        <p className='m-0 max-w-[30ch] text-sm opacity-50'>Find in-depth information about Next.js features and API.</p>
                    </a>

                    <a
                        href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
                        className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <h2 className='mb-3 text-2xl font-semibold'>
                            Learn <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>-&gt;</span>
                        </h2>
                        <p className='m-0 max-w-[30ch] text-sm opacity-50'>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
                    </a>

                    <a
                        href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
                        className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <h2 className='mb-3 text-2xl font-semibold'>
                            Templates <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>-&gt;</span>
                        </h2>
                        <p className='m-0 max-w-[30ch] text-sm opacity-50'>Explore starter templates for Next.js.</p>
                    </a>
                </div>
            </div>
        </main>
    );
}

'use client';
import Cursor from './Cursor';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

export default function Home() {
    return (
        <main>
            <Cursor />
            <main className='flex min-h-screen flex-col items-center justify-between xs:p-8 p-20'>
                <div className='z-10 w-full max-w-7xl items-start justify-between sm:flex'>
                    {/* about column */}
                    <div className='sm:w-1/5 max-w-xs space-y-10 pb-20'>
                        <div className='flex justify-start gap-3 font-serif text-4xl'>
                            <p>Tina</p>
                            <p className='italic'>Mai</p>
                        </div>

                        <p className='font-mono text-sm'>eighteen. building things on the internet. currently founder working on consumer in nyc.</p>
                        <p className='font-mono text-sm'>tinamai@stanford.edu</p>
                        <img src='/profile.jpg' alt='tina mai' className='h-40' />

                        <div className='space-y-5'>
                            <p className='font-mono text-sm'>ELSEWHERE</p>
                            <div className='flex gap-3 items-center flex-wrap'>
                                <a href='https://twitter.com/t1namai' target='_blank' rel='noopener noreferrer' className='space-x-1 transition-colors duration-400 hover:text-slate-300 hover:underline'>
                                    <p className='font-mono text-sm inline'>twitter</p>
                                    <ArrowUpRightIcon className='inline wrap h-3.5 w-3.5' />
                                </a>
                                <p>•</p>
                                <a href='https://linkedin.com/in/tinammai' target='_blank' rel='noopener noreferrer' className='space-x-1 transition-colors duration-400 hover:text-slate-300 hover:underline'>
                                    <p className='font-mono text-sm inline'>linkedin</p>
                                    <ArrowUpRightIcon className='inline wrap h-3.5 w-3.5' />
                                </a>
                                <p>•</p>
                                <a href='https://instagram.com/tinammai' target='_blank' rel='noopener noreferrer' className='space-x-1 transition-colors duration-400 hover:text-slate-300 hover:underline'>
                                    <p className='font-mono text-sm inline'>instagram</p>
                                    <ArrowUpRightIcon className='inline wrap h-3.5 w-3.5' />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* 3 columns */}
                    <div className='grid mb-32 text-left sm:mb-0 sm:w-3/5 xs:grid-cols-3 gap-10'>
                        <div className='font-mono text-sm md:space-y-10 space-y-5 pt-5 max-w-xs'>
                            <p>CURRENTLY</p>
                            <div className='space-y-5'>
                                <p>
                                    <p className='text-slate-500'>01</p>
                                    <p className='pb-5'>co-founder @ Kndrd, engineering the social fabric that once only existed in institutions</p>
                                    <div className='pb-5 items-center flex-row gap-1'>
                                        <p className='inline'>featured 2x in Business Insider</p> <ArrowUpRightIcon className='inline wrap h-3.5 w-3.5' />
                                    </div>
                                    <p>won Stanford's oldest & largest startup competition in consumer category</p>
                                </p>
                                <p>
                                    <p className='text-slate-500'>02</p>
                                    studying CS & design engineering @ Stanford (on a leave of absence)
                                </p>
                            </div>
                        </div>
                        <div className='font-mono text-sm md:space-y-10 space-y-5 pt-5 max-w-xs'>
                            <p>SOME PAST WORK</p>
                            <div className='space-y-5'>
                                <p>
                                    <p className='text-slate-500'>01</p>
                                    won World Series of Innovation for making fintech software for the unbanked @ 15
                                </p>
                                <p>
                                    <p className='text-slate-500'>02</p>
                                    built NLP-based voice accessible app to help visually-impaired youth, awarded by U.S. Congress @ 16
                                </p>
                                <p>
                                    <p className='text-slate-500'>03</p>
                                    published in the New York Times @ 16 + some other international awards for writing
                                </p>
                                <p>
                                    <p className='text-slate-500'>04</p>
                                    spoke at SXSW @ 17 about building a nuclear fusion reactor in the garage
                                </p>
                            </div>
                        </div>
                        <div className='font-mono text-sm md:space-y-10 space-y-5 pt-5 max-w-xs'>
                            <p>SELECTED WRITING</p>
                            <div className='space-y-5'>
                                <p>
                                    <p className='text-slate-500'>01</p>
                                    <a
                                        href='https://www.kernelmag.io/4/chaos'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='items-center flex-row space-x-1 transition-colors duration-400 hover:text-slate-300 hover:underline'
                                    >
                                        <p className='inline'>Chaos Theory</p>
                                        <ArrowUpRightIcon className='inline wrap h-3.5 w-3.5' />
                                    </a>

                                    <p className='italic text-xs pt-2 pb-2'>Or: On Modern Serendipity, Tech Twitter, and Luck as Agency</p>
                                </p>
                                <p>
                                    <p className='text-slate-500'>01</p>
                                    <a
                                        href='https://uxdesign.cc/machine-learning-for-product-designers-9d4002909964'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='items-center flex-row space-x-1 transition-colors duration-400 hover:text-slate-300 hover:underline'
                                    >
                                        <p className='inline'>Deconstructing machine learning for product design</p>
                                        <ArrowUpRightIcon className='inline wrap h-3.5 w-3.5' />
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </main>
    );
}

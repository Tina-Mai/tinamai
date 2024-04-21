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
                            <div className='flex gap-3 items-center'>
                                <a href='https://twitter.com/t1namai' target='_blank' rel='noopener noreferrer' className='transition-colors duration-400 hover:text-slate-300 hover:underline'>
                                    <p className='font-mono text-sm'>twitter</p>
                                </a>
                                <p>•</p>
                                <a href='https://linkedin.com/in/tinammai' target='_blank' rel='noopener noreferrer' className='transition-colors duration-400 hover:text-slate-300 hover:underline'>
                                    <p className='font-mono text-sm'>linkedin</p>
                                </a>
                                <p>•</p>
                                <a href='https://instagram.com/tinammai' target='_blank' rel='noopener noreferrer' className='transition-colors duration-400 hover:text-slate-300 hover:underline'>
                                    <p className='font-mono text-sm'>instagram</p>
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
                                    <p className='pb-5'>featured 2x in Business Insider</p>
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
                                    <p className='flex pb-2 items-center flex-row wrap gap-1'>
                                        Chaos Theory <ArrowUpRightIcon className='h-3.5 w-3.5' />
                                    </p>

                                    <p className='italic text-xs pb-2'>Or: On Modern Serendipity, Tech Twitter, and Luck as Agency</p>
                                </p>
                                <p>
                                    <p className='text-slate-500'>01</p>
                                    <p className='flex pb-2 items-center flex-row wrap gap-1'>
                                        Deconstructing machine learning for product design <ArrowUpRightIcon className='flex wrap h-3.5 w-3.5' />
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </main>
    );
}

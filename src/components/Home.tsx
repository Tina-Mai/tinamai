'use client';
import Image from 'next/image';
import Cursor from './Cursor';
import styles from '../app/styles';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

export default function Home() {
    return (
        <main>
            <Cursor />
            <main className='flex min-h-screen flex-col items-center justify-between xs:p-8 p-20'>
                <div className='z-10 w-full max-w-7xl items-start justify-between sm:flex'>
                    {/* about column */}
                    <div className='sm:w-1/5 max-w-xs space-y-10 pb-20'>
                        <Image src='/name.svg' alt='tina mai' height={31} width={171} quality={85} />
                        {/* <div className='flex justify-start gap-3 font-serif text-4xl'>
                            <p>Tina</p>
                            <p className='italic'>Mai</p>
                        </div> */}
                        {/* <div className='flex justify-start gap-3 font-serif2 tracking-tighter italic text-5xl'>
                            <p className='pr-0.5'>Tina</p>
                            <p>Mai</p>
                        </div> */}

                        <p className='font-mono text-sm'>eighteen. building things on the internet. currently founding consumer startup in nyc.</p>
                        <p className='font-mono text-sm'>tinamai@stanford.edu</p>
                        <Image src='/profile.jpg' alt='tina mai' height={180} width={135} quality={85} />

                        <div className='space-y-5'>
                            <p className='font-mono text-sm'>ELSEWHERE</p>
                            <div className='sm:block sm:-space-y-5 flex flex-wrap'>
                                <a href='https://twitter.com/t1namai' target='_blank' rel='noopener noreferrer' className={`inline pr-2 space-x-1 ${styles.hoverEffect}`}>
                                    <p className='font-mono text-sm inline'>twitter</p>
                                    <ArrowUpRightIcon className='inline wrap h-3.5 w-3.5' />
                                </a>
                                <p className='pr-2 sm:pr-0 sm:invisible'>•</p>
                                <a href='https://linkedin.com/in/tinammai' target='_blank' rel='noopener noreferrer' className={`inline pr-2 space-x-1 ${styles.hoverEffect}`}>
                                    <p className='font-mono text-sm inline'>linkedin</p>
                                    <ArrowUpRightIcon className='inline wrap h-3.5 w-3.5' />
                                </a>
                                <p className='pr-2 sm:pr-0 sm:invisible'>•</p>
                                <a href='https://instagram.com/tinammai' target='_blank' rel='noopener noreferrer' className={`inline pr-2 space-x-1 ${styles.hoverEffect}`}>
                                    <p className='font-mono text-sm inline'>instagram</p>
                                    <ArrowUpRightIcon className='inline wrap h-3.5 w-3.5' />
                                </a>
                                <p className='pr-2 sm:pr-0 sm:invisible'>•</p>
                                <a href='https://drive.google.com/file/d/1ablmCsg_ozK8-yBVGRFA2BZRAR39ioop/view?usp=sharing' target='_blank' rel='noopener noreferrer' className={`inline pr-2 space-x-1 ${styles.hoverEffect}`}>
                                    <p className='font-mono text-sm inline'>resume</p>
                                    <ArrowUpRightIcon className='inline wrap h-3.5 w-3.5' />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* 3 columns */}
                    <div className='grid mb-32 text-left sm:mb-0 sm:w-3/5 xs:grid-cols-3 gap-10'>
                        <div className='font-mono text-sm md:space-y-15 space-y-5 pt-5 max-w-xs'>
                            <p>CURRENTLY</p>
                            <div className='space-y-5'>
                                <div>
                                    <p className='text-slate-500'>01</p>
                                    <div className='pb-5'>
                                        <p className='inline'>co-founder @</p>{' '}
                                        <div className='inline-flex items-center whitespace-nowrap'>
                                            <a href='https://kndrd.com' target='_blank' rel='noopener noreferrer' className={`flex items-center ${styles.hoverEffect}`}>
                                                <p className='mr-1'>Kndrd</p>
                                                <ArrowUpRightIcon className='h-3.5 w-3.5' />
                                            </a>
                                            <p className='inline'>,</p>
                                        </div>{' '}
                                        <p className='inline'>engineering the social fabric that once only existed in institutions</p>
                                    </div>
                                    <div className='pb-5 items-center flex-row gap-1'>
                                        <p className='inline'>featured twice in</p>{' '}
                                        <a href='https://kndrd.com/press' target='_blank' rel='noopener noreferrer' className={`inline items-center flex-row gap-1 space-x-1 ${styles.hoverEffect}`}>
                                            <p className='inline'>Business Insider</p>
                                            <ArrowUpRightIcon className='inline wrap h-3.5 w-3.5' />
                                        </a>
                                    </div>
                                    <p>won Stanford&apos;s oldest & largest startup competition in consumer category</p>
                                </div>
                                <div>
                                    <p className='text-slate-500'>02</p>
                                    studying CS & design engineering @ Stanford (on a leave of absence)
                                </div>
                                <div>
                                    <p className='text-slate-500'>03</p>
                                    sometimes i write essays. other times i think about writing them and mourn that i don&apos;t have much time to write anymore.
                                </div>
                            </div>
                        </div>
                        <div className='font-mono text-sm md:space-y-15 space-y-5 pt-5 max-w-xs'>
                            <p>SOME PAST WORK</p>
                            <div className='space-y-5'>
                                <div>
                                    <p className='text-slate-500'>01</p>
                                    won World Series of Innovation for making fintech software for the unbanked @ 15
                                </div>
                                <div>
                                    <p className='text-slate-500'>02</p>
                                    built NLP-based voice accessible app to help visually-impaired youth, awarded by U.S. Congress @ 16
                                </div>
                                <div>
                                    <p className='text-slate-500'>03</p>
                                    published in the New York Times @ 16, youngest recipient of the Atlanta Review International Poetry Award, + some other awards for writing
                                </div>
                                <div>
                                    <p className='text-slate-500'>04</p>
                                    spoke at SXSW @ 17 about building a nuclear fusion reactor in the garage
                                </div>
                                <div>
                                    <p className='text-slate-500'>05</p>
                                    followed my parent&apos;s american dream of me going to a good college. made lifelong friends there. left after 10 weeks to chase a dream.
                                </div>
                            </div>
                        </div>
                        <div className='font-mono text-sm md:space-y-15 space-y-5 pt-5 max-w-xs'>
                            <p>SELECTED WRITING</p>
                            <div className='space-y-5'>
                                <div>
                                    <p className='text-slate-500'>01</p>
                                    <a href='https://www.kernelmag.io/4/chaos' target='_blank' rel='noopener noreferrer' className={`items-center flex-row space-x-1 ${styles.hoverEffect}`}>
                                        <p className='inline'>Chaos Theory</p>
                                        <ArrowUpRightIcon className='inline wrap h-3.5 w-3.5' />
                                    </a>
                                    <p className='text-sm pt-2 '>Or: On Modern Serendipity, Tech Twitter, and Luck as Agency</p>
                                    <p className='italic text-sm pt-5 pb-2'>Kernel Magazine (2024)</p>
                                </div>
                                <div>
                                    <p className='text-slate-500'>02</p>
                                    <a href='https://uxdesign.cc/machine-learning-for-product-designers-9d4002909964' target='_blank' rel='noopener noreferrer' className={`items-center flex-row space-x-1 ${styles.hoverEffect}`}>
                                        <p className='inline'>Deconstructing machine learning for product design</p>
                                        <ArrowUpRightIcon className='inline wrap h-3.5 w-3.5' />
                                    </a>
                                    <p className='italic text-sm pt-5 pb-2'>UX Collective (2022)</p>
                                </div>
                                <div>
                                    <p className='text-slate-500'>03</p>
                                    <p className='text-sm pb-2'>you can find other pieces of mine (particularly fiction & personal essays) published across the internet. call it a scavenger hunt or whatever.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </main>
    );
}

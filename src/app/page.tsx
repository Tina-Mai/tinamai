export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-8'>
            <div className='z-10 w-full max-w-7xl items-start justify-between md:flex'>
                {/* <p className='flex w-full font-mono text-sm'>TINA MAI</p> */}
                <div className='sm:w-1/5 max-w-sm space-y-10 pb-10'>
                    <div className='flex justify-start gap-3 font-serif text-4xl'>
                        <p>Tina</p>
                        <p className='italic'>Mai</p>
                    </div>

                    <p className='font-mono text-sm'>eighteen. cs & design engineering @ Stanford. co-founder @ Kndrd.</p>
                </div>

                {/* <div className='flex justify-start tracking-tight gap-4 italic font-serif2 text-5xl'>
                    <p>Tina</p>
                    <p>Mai</p>
                </div> */}

                <div className='grid mb-32 text-left md:mb-0 md:w-full md:max-w-3xl sm:grid-cols-3 gap-10'>
                    <div className='font-mono text-sm space-y-10 pt-5 max-w-sm'>
                        <p>CURRENTLY</p>
                        <div className='space-y-5'>
                            <p>
                                <p className='text-slate-500'>01</p>
                                building Kndrd
                            </p>
                            <p>
                                <p className='text-slate-500'>02</p>
                                on leave from studying CS & design engineering @ Stanford
                            </p>
                        </div>
                    </div>
                    <div className='font-mono text-sm space-y-10 pt-5 max-w-sm'>
                        <p>PAST WORK</p>
                        <div className='space-y-5'>
                            <p>
                                <p className='text-slate-500'>01</p>
                                built voice-accessible app to help visually-impaired youth (VAST), awarded by U.S. Congress @ 16
                            </p>
                            <p>
                                <p className='text-slate-500'>02</p>
                                won World Series of Innovation for making fintech software for the unbanked
                            </p>
                            <p>
                                <p className='text-slate-500'>03</p>
                                writing published in the New York Times & UNICEF
                            </p>
                            <p>
                                <p className='text-slate-500'>04</p>
                                spoke at SXSW @ 17 about building a nuclear fusion reactor in the garage
                            </p>
                        </div>
                    </div>
                    <div className='font-mono text-sm space-y-10 pt-5 max-w-sm'>
                        <p>WRITING</p>
                        <div className='space-y-5'>
                            <p>
                                <p className='text-slate-500'>01</p>
                                <p className='pb-2'>Chaos Theory</p>
                                <p className='italic text-xs'>Or: On Modern Serendipity, Tech Twitter, and Luck as Agency</p>
                            </p>
                            <p>
                                <p className='text-slate-500'>02</p>
                                on leave from studying CS & design engineering @ Stanford
                            </p>
                        </div>{' '}
                    </div>
                </div>
            </div>
        </main>
    );
}

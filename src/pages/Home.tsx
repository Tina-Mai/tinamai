'use client';
import Cursor from '../components/Cursor';
import Intro from '../components/Home/Intro';
import Currently from '../components/Home/Currently';
import Past from '../components/Home/Past';
import Writing from '../components/Home/Writing';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <main>
            <Cursor />
            <main className='flex min-h-screen flex-col items-center justify-between xs:p-8 p-20'>
                <div className='z-10 w-full max-w-7xl items-start justify-between sm:flex'>
                    <div className='sm:w-1/5 max-w-xs pb-20'>
                        <Intro />
                    </div>

                    {/* divider line that only shows up on xs screens like mobile */}
                    <div className='sm:invisible sm:w-0 sm:mt-0 sm:mb-0 -mt-10 mb-10 w-full border-b border-slate-500' />

                    {/* 3 columns */}
                    <div className='grid text-left sm:mb-0 sm:w-3/5 xs:grid-cols-3 gap-10'>
                        <Currently />
                        <Past />
                        <Writing />
                    </div>
                </div>
            </main>
        </main>
    );
}

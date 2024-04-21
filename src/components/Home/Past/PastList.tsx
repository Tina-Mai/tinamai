import React from 'react';
import { motion } from 'framer-motion';
import { animations } from '../../../constants';
import ScrambleText from '../../ScrambleText';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

const Item1 = () => (
    <motion.li variants={animations.itemVariants}>
        <p className='text-slate-500'>01</p>
        <div>
            <p className='inline'>won</p>{' '}
            <a href='https://www.smes.org/news-detail?pk=1171095' target='_blank' rel='noopener noreferrer' className='inline items-center link'>
                <ScrambleText text='World Series of Innovation' className='inline mr-1' />
                <ArrowUpRightIcon className='inline h-3.5 w-3.5' />
            </a>{' '}
            <p className='inline'>for making fintech software for the unbanked @ 15</p>
        </div>
    </motion.li>
);

const Item2 = () => (
    <motion.li variants={animations.itemVariants}>
        <p className='text-slate-500'>02</p>
        <div>
            <p className='inline'>built NLP-based voice accessible app for visually-impaired youth, awarded by</p>{' '}
            <a href='https://youtu.be/AqG4mt9EUyc?si=l8qvlhRPBfF78K-Z&t=1593' target='_blank' rel='noopener noreferrer' className='inline items-center link'>
                <ScrambleText text='U.S. Congress' className='inline mr-1' />
                <ArrowUpRightIcon className='inline h-3.5 w-3.5' />
            </a>{' '}
            <p className='inline'>@ 16</p>
        </div>
    </motion.li>
);

const Item3 = () => (
    <motion.li variants={animations.itemVariants}>
        <p className='text-slate-500'>03</p>
        published in the New York Times @ 16, youngest recipient of the Atlanta Review International Poetry Award, + some other awards for writing
    </motion.li>
);

const Item4 = () => (
    <motion.li variants={animations.itemVariants}>
        <p className='text-slate-500'>04</p>
        <div>
            <p className='inline'>spoke at</p>{' '}
            <div className='inline-flex items-center whitespace-nowrap'>
                <a href='https://youtu.be/kgsoqvQWfXs' target='_blank' rel='noopener noreferrer' className='flex items-center link'>
                    <ScrambleText text='SXSW' className='mr-1' />
                    <ArrowUpRightIcon className='h-3.5 w-3.5' />
                </a>
            </div>{' '}
            <p className='inline'>@ 17 about building a nuclear fusion reactor in the garage</p>
        </div>
    </motion.li>
);

const Item5 = () => (
    <motion.li variants={animations.itemVariants}>
        <p className='text-slate-500'>05</p>
        followed my parent's american dream to go to a good college. made lifelong friends there. left after 10 weeks to chase a riskier dream.
    </motion.li>
);

const PastList = [Item1, Item2, Item3, Item4, Item5];

export default PastList;

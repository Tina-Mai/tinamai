import React from 'react';
import { motion } from 'framer-motion';
import { animations } from '../../../constants';
import ScrambleText from '../../Global/ScrambleText';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

const Item1 = () => (
    <motion.li variants={animations.itemVariants}>
        <p className='text-slate-500'>01</p>
        <div className='pb-5'>
            <p className='inline'>co-founder @</p>{' '}
            <div className='inline-flex items-center whitespace-nowrap'>
                <a href='https://kndrd.com' target='_blank' rel='noopener noreferrer' className='flex items-center link'>
                    <ScrambleText text='Kndrd' className='mr-1' />
                    <ArrowUpRightIcon className='h-3.5 w-3.5' />
                </a>
                <p className='inline'>,</p>
            </div>{' '}
            <p className='inline'>engineering the social fabric that once only existed in institutions</p>
        </div>
        <div className='pb-5 items-center flex-row gap-1'>
            <p className='inline'>featured twice in</p>{' '}
            <a href='https://kndrd.com/press' target='_blank' rel='noopener noreferrer' className='inline items-center flex-row gap-1 space-x-1 link'>
                <ScrambleText text='Business Insider' className='inline' />
                <ArrowUpRightIcon className='inline wrap h-3.5 w-3.5' />
            </a>
        </div>
        <p>won Stanford&apos;s oldest & largest startup competition in consumer category</p>
    </motion.li>
);

const Item2 = () => (
    <motion.li variants={animations.itemVariants}>
        <p className='text-slate-500'>02</p>
        studying CS & design engineering @ Stanford (on a leave of absence)
    </motion.li>
);

const Item3 = () => (
    <motion.li variants={animations.itemVariants}>
        <p className='text-slate-500'>03</p>
        sometimes i write essays. other times i think about writing them and mourn that i don&apos;t have much time to write anymore.
    </motion.li>
);

const CurrentList = [Item1, Item2, Item3];

export default CurrentList;

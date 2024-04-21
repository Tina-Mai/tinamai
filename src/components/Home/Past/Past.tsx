import React from 'react';
import { motion } from 'framer-motion';
import { animations } from '../../../constants';
import ScrambleText from '../../ScrambleText';
import PastList from './PastList';

const Past = () => {
    return (
        <motion.div animate={{ opacity: 1, x: 0 }} className='body md:space-y-15 space-y-5 pt-5 max-w-xs'>
            <ScrambleText text='SOME PAST WORK' settings={{ speed: 0.5, tick: 8 }} />
            <motion.ul className='space-y-5' variants={animations.containerVariants} initial='hidden' animate='show'>
                {PastList.map((Component, index) => (
                    <Component key={index} />
                ))}
            </motion.ul>
        </motion.div>
    );
};

export default Past;

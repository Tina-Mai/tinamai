import React from 'react';
import { pastItems, animations } from '../../constants';
import { motion } from 'framer-motion';
import ScrambleText from '../ScrambleText';

const Past = () => {
    return (
        <motion.nav animate={{ opacity: 1, x: 0 }} className='body md:space-y-15 space-y-5 pt-5 max-w-xs'>
            <ScrambleText text='SOME PAST WORK' settings={{ speed: 0.5, tick: 8 }} />
            <motion.ul className='space-y-5' variants={animations.containerVariants} initial='hidden' animate='show'>
                {pastItems.map((item) => (
                    <motion.li variants={animations.itemVariants} key={item.id}>
                        <p className='text-slate-500'>{item.id}</p>
                        {item.description}
                    </motion.li>
                ))}
            </motion.ul>
        </motion.nav>
    );
};

export default Past;

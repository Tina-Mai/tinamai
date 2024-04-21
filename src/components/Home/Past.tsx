import React from 'react';
import { pastItems } from '../../constants';
import { motion } from 'framer-motion';

const Past = () => {
    // variants for the list container to control children's stagger
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // stagger the animation of children by 0.1 second each
            },
        },
    };
    // variants for individual list items
    const itemVariants = {
        hidden: { y: -20, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                y: { type: 'spring', stiffness: 100, damping: 20 },
                opacity: { duration: 0.5 },
            },
        },
    };

    return (
        <motion.nav animate={{ opacity: 1, x: 0 }}>
            <div className='body md:space-y-15 space-y-5 pt-5 max-w-xs'>
                <p>SOME PAST WORK</p>
                <motion.ul className='space-y-5' variants={containerVariants} initial='hidden' animate='show'>
                    {pastItems.map((item) => (
                        <motion.li variants={itemVariants} key={item.id}>
                            <p className='text-slate-500'>{item.id}</p>
                            {item.description}
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </motion.nav>
    );
};

export default Past;

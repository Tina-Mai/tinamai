import React from 'react';
import Image from 'next/image';
import styles from '../../app/styles';
import ScrambleText from '../ScrambleText';
import { socials, animations } from '../../constants';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const Intro = () => {
    return (
        <div className='space-y-10'>
            <Image src='/name.svg' alt='tina mai' height={31} width={171} quality={85} />
            <ScrambleText text='eighteen. building things on the internet. currently founding consumer startup in nyc.' />

            <motion.nav animate={{ opacity: 1, x: 0 }}>
                <motion.ul variants={animations.containerVariants} initial='hidden' animate='show' className='space-y-10'>
                    <motion.li variants={animations.itemVariants} className='body'>
                        tinamai@stanford.edu
                    </motion.li>
                    <motion.li variants={animations.itemVariants}>
                        <Image src='/profile.jpg' alt='tina mai' height={180} width={135} quality={85} />
                    </motion.li>

                    {/* social links */}
                    <div className='space-y-5'>
                        <motion.li variants={animations.itemVariants} className='body'>
                            ELSEWHERE
                        </motion.li>
                        <div className='sm:block sm:-space-y-5 flex flex-wrap'>
                            {socials.map((social, index) => (
                                <motion.li variants={animations.itemVariants} key={social.name}>
                                    <a href={social.url} target='_blank' rel='noopener noreferrer' className={`inline pr-2 space-x-1 ${styles.hoverEffect}`}>
                                        <ScrambleText text={social.name} className='inline' playOnStart={false} />
                                        <ArrowUpRightIcon className='inline wrap h-3.5 w-3.5' />
                                    </a>
                                    {index < socials.length - 1 && <p className='pr-2 sm:pr-0 sm:invisible'>•</p>}
                                </motion.li>
                            ))}
                        </div>
                    </div>
                </motion.ul>
            </motion.nav>
        </div>
    );
};

export default Intro;

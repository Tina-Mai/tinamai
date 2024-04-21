import ScrambleText from '../ScrambleText';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import styles from '../../app/styles';
import { motion } from 'framer-motion';
import { animations } from '../../constants';

const Currently = () => {
    return (
        <motion.nav animate={{ opacity: 1, x: 0 }} className='body md:space-y-15 space-y-5 pt-5 max-w-xs'>
            <ScrambleText text='CURRENTLY' settings={{ speed: 0.4, tick: 10 }} />
            <motion.ul variants={animations.containerVariants} initial='hidden' animate='show' className='space-y-5'>
                <motion.li variants={animations.itemVariants}>
                    <p className='text-slate-500'>01</p>
                    <div className='pb-5'>
                        <p className='inline'>co-founder @</p>{' '}
                        <div className='inline-flex items-center whitespace-nowrap'>
                            <a href='https://kndrd.com' target='_blank' rel='noopener noreferrer' className={`flex items-center ${styles.hoverEffect}`}>
                                <ScrambleText text='Kndrd' className='mr-1' playOnStart={false} />
                                <ArrowUpRightIcon className='h-3.5 w-3.5' />
                            </a>
                            <p className='inline'>,</p>
                        </div>{' '}
                        <p className='inline'>engineering the social fabric that once only existed in institutions</p>
                    </div>
                    <div className='pb-5 items-center flex-row gap-1'>
                        <p className='inline'>featured twice in</p>{' '}
                        <a href='https://kndrd.com/press' target='_blank' rel='noopener noreferrer' className={`inline items-center flex-row gap-1 space-x-1 ${styles.hoverEffect}`}>
                            <ScrambleText text='Business Insider' className='inline' playOnStart={false} />
                            <ArrowUpRightIcon className='inline wrap h-3.5 w-3.5' />
                        </a>
                    </div>
                    <p>won Stanford&apos;s oldest & largest startup competition in consumer category</p>
                </motion.li>
                <motion.li variants={animations.itemVariants}>
                    <p className='text-slate-500'>02</p>
                    studying CS & design engineering @ Stanford (on a leave of absence)
                </motion.li>
                <motion.li variants={animations.itemVariants}>
                    <p className='text-slate-500'>03</p>
                    sometimes i write essays. other times i think about writing them and mourn that i don&apos;t have much time to write anymore.
                </motion.li>
            </motion.ul>
        </motion.nav>
    );
};

export default Currently;

import ScrambleText from '../../Global/ScrambleText';
import { motion } from 'framer-motion';
import { animations } from '../../../constants';
import CurrentList from './CurrentList';

const Current = () => {
    return (
        <motion.div animate={{ opacity: 1, x: 0 }} className='body md:space-y-15 space-y-5 pt-5 max-w-xs'>
            <ScrambleText text='CURRENTLY' settings={{ speed: 0.4, tick: 10 }} />
            <motion.ul variants={animations.containerVariants} initial='hidden' animate='show' className='space-y-5'>
                {CurrentList.map((Component, index) => (
                    <Component key={index} />
                ))}
            </motion.ul>
        </motion.div>
    );
};

export default Current;

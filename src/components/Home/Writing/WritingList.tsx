import React from 'react';
import { motion } from 'framer-motion';
import { animations } from '../../../constants';
import Link from '../../Global/Link';

const Item1 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className='text-slate-500'>01</p>
		<Link text='Chaos Theory' href='https://www.kernelmag.io/4/chaos' />
		<p className='pt-2 '>Or: On Modern Serendipity, Tech Twitter, and Luck as Agency</p>
		<p className='italic pt-5 pb-2'>Kernel Magazine (2024)</p>
	</motion.li>
);

const Item2 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className='text-slate-500'>02</p>
		<Link text='Deconstructing machine learning for product design' href='https://uxdesign.cc/machine-learning-for-product-designers-9d4002909964' />
		<p className='italic pt-5 pb-2'>UX Collective (2022)</p>
	</motion.li>
);

const Item3 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className='text-slate-500'>03</p>
		<p className='pb-2'>you can find other pieces of mine (particularly fiction & personal essays) published across the internet. call it a scavenger hunt or whatever.</p>
	</motion.li>
);

const WritingList = [Item1, Item2, Item3];

export default WritingList;

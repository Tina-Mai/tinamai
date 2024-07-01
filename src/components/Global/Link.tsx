import React from 'react';
import ScrambleText from './ScrambleText';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

const Link = ({ text, href }: { text: string; href: string }) => {
	return (
		<a href={href} target='_blank' rel='noopener noreferrer' className='inline'>
			<ScrambleText text={text} className='inline link' />
			<span className='whitespace-nowrap'>
				&nbsp;
				<ArrowUpRightIcon className='inline h-3.5 w-3.5' />
			</span>
		</a>
	);
};

export default Link;

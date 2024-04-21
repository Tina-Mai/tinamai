import React from 'react';
import Image from 'next/image';
import styles from '../../app/styles';
import ScrambleText from '../ScrambleText';
import { socials } from '../../constants';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

const Intro = () => {
    return (
        <div className='space-y-10'>
            <Image src='/name.svg' alt='tina mai' height={31} width={171} quality={85} />
            {/* <div className='flex justify-start gap-3 font-serif text-4xl'>
                            <p>Tina</p>
                            <p className='italic'>Mai</p>
                        </div> */}
            {/* <div className='flex justify-start gap-3 font-serif2 tracking-tighter italic text-5xl'>
                            <p className='pr-0.5'>Tina</p>
                            <p>Mai</p>
                        </div> */}
            <ScrambleText text='eighteen. building things on the internet. currently founding consumer startup in nyc.' />
            {/* <p ref={ref} onMouseOver={replay} onFocus={replay} className='body' /> */}
            <p className='body'>tinamai@stanford.edu</p>
            <Image src='/profile.jpg' alt='tina mai' height={180} width={135} quality={85} />

            {/* social links */}
            <div className='space-y-5'>
                <p className='body'>ELSEWHERE</p>
                <div className='sm:block sm:-space-y-5 flex flex-wrap'>
                    {socials.map((social, index) => (
                        <React.Fragment key={social.name}>
                            <a href={social.url} target='_blank' rel='noopener noreferrer' className={`inline pr-2 space-x-1 ${styles.hoverEffect}`}>
                                <ScrambleText text={social.name} className='inline' playOnStart={false} />
                                <ArrowUpRightIcon className='inline wrap h-3.5 w-3.5' />
                            </a>
                            {index < socials.length - 1 && <p className='pr-2 sm:pr-0 sm:invisible'>•</p>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Intro;

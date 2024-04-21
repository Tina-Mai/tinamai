import Image from 'next/image';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import styles from '../../app/styles';

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

            <p className='font-mono text-sm'>eighteen. building things on the internet. currently founding consumer startup in nyc.</p>
            <p className='font-mono text-sm'>tinamai@stanford.edu</p>
            <Image src='/profile.jpg' alt='tina mai' height={180} width={135} quality={85} />

            <div className='space-y-5'>
                <p className='font-mono text-sm'>ELSEWHERE</p>
                <div className='sm:block sm:-space-y-5 flex flex-wrap'>
                    <a href='https://twitter.com/t1namai' target='_blank' rel='noopener noreferrer' className={`inline pr-2 space-x-1 ${styles.hoverEffect}`}>
                        <p className='font-mono text-sm inline'>twitter</p>
                        <ArrowUpRightIcon className='inline wrap h-3.5 w-3.5' />
                    </a>
                    <p className='pr-2 sm:pr-0 sm:invisible'>•</p>
                    <a href='https://linkedin.com/in/tinammai' target='_blank' rel='noopener noreferrer' className={`inline pr-2 space-x-1 ${styles.hoverEffect}`}>
                        <p className='font-mono text-sm inline'>linkedin</p>
                        <ArrowUpRightIcon className='inline wrap h-3.5 w-3.5' />
                    </a>
                    <p className='pr-2 sm:pr-0 sm:invisible'>•</p>
                    <a href='https://instagram.com/tinammai' target='_blank' rel='noopener noreferrer' className={`inline pr-2 space-x-1 ${styles.hoverEffect}`}>
                        <p className='font-mono text-sm inline'>instagram</p>
                        <ArrowUpRightIcon className='inline wrap h-3.5 w-3.5' />
                    </a>
                    <p className='pr-2 sm:pr-0 sm:invisible'>•</p>
                    <a href='https://drive.google.com/file/d/1ablmCsg_ozK8-yBVGRFA2BZRAR39ioop/view?usp=sharing' target='_blank' rel='noopener noreferrer' className={`inline pr-2 space-x-1 ${styles.hoverEffect}`}>
                        <p className='font-mono text-sm inline'>resume</p>
                        <ArrowUpRightIcon className='inline wrap h-3.5 w-3.5' />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Intro;

import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import styles from '../../app/styles';

const Writing = () => {
    return (
        <div className='body md:space-y-15 space-y-5 pt-5 max-w-xs'>
            <p>SELECTED WRITING</p>
            <div className='space-y-5'>
                <div>
                    <p className='text-slate-500'>01</p>
                    <a href='https://www.kernelmag.io/4/chaos' target='_blank' rel='noopener noreferrer' className={`items-center flex-row space-x-1 ${styles.hoverEffect}`}>
                        <p className='inline'>Chaos Theory</p>
                        <ArrowUpRightIcon className='inline wrap h-3.5 w-3.5' />
                    </a>
                    <p className='pt-2 '>Or: On Modern Serendipity, Tech Twitter, and Luck as Agency</p>
                    <p className='italic pt-5 pb-2'>Kernel Magazine (2024)</p>
                </div>
                <div>
                    <p className='text-slate-500'>02</p>
                    <a href='https://uxdesign.cc/machine-learning-for-product-designers-9d4002909964' target='_blank' rel='noopener noreferrer' className={`items-center flex-row space-x-1 ${styles.hoverEffect}`}>
                        <p className='inline'>Deconstructing machine learning for product design</p>
                        <ArrowUpRightIcon className='inline wrap h-3.5 w-3.5' />
                    </a>
                    <p className='italic pt-5 pb-2'>UX Collective (2022)</p>
                </div>
                <div>
                    <p className='text-slate-500'>03</p>
                    <p className='pb-2'>you can find other pieces of mine (particularly fiction & personal essays) published across the internet. call it a scavenger hunt or whatever.</p>
                </div>
            </div>
        </div>
    );
};

export default Writing;

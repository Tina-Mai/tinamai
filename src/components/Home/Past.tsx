import React from 'react';
import { pastItems } from '../../constants';

const Past = () => {
    return (
        <div className='font-mono text-sm md:space-y-15 space-y-5 pt-5 max-w-xs'>
            <p>SOME PAST WORK</p>
            <div className='space-y-5'>
                {pastItems.map((item) => (
                    <div key={item.id}>
                        <p className='text-slate-500'>{item.id}</p>
                        {item.description}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Past;

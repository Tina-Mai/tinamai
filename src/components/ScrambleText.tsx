'use client';
import { useRef } from 'react';
import { useScramble } from 'use-scramble';

function ScrambleText({
    text,
    settings = {},
    className = '',
    playOnStart = true,
}: {
    text: string;
    settings?: {
        speed?: number;
        tick?: number;
        step?: number;
        overflow?: boolean;
        scramble?: number;
        chance?: number;
        overdrive?: boolean;
    };
    className?: string;
    playOnStart?: boolean;
}) {
    const { speed = 0.8, tick = 1, step = 2.3, scramble = 10, chance = 0.8, overdrive = false } = settings;

    const ref = useRef(null);

    const scrambleSettings = {
        text,
        speed,
        tick,
        step,
        scramble,
        chance,
        overdrive,
        playOnMount: !playOnStart ? false : true,
    };

    const { ref: scrambleRef, replay } = useScramble(scrambleSettings);

    const setRef = (node: any) => {
        scrambleRef.current = node;
        ref.current = node;
    };

    return <p ref={setRef} onMouseOver={replay} onFocus={replay} className={`body ${className}`} />;
}

export default ScrambleText;

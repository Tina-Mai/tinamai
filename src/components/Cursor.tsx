import React, { useEffect, useState } from 'react';

const Cursor: React.FC = () => {
    const [cursorX, setCursorX] = useState<number>(0);
    const [cursorY, setCursorY] = useState<number>(0);
    const [isVisible, setIsVisible] = useState<boolean>(true); // Start as visible
    const [deviceType, setDeviceType] = useState<string>('');

    useEffect(() => {
        const isTouchDevice = (): boolean => {
            try {
                document.createEvent('TouchEvent');
                setDeviceType('touch');
                return true;
            } catch (e) {
                setDeviceType('mouse');
                return false;
            }
        };

        const touchEnabled = isTouchDevice();

        const move = (e: MouseEvent | TouchEvent) => {
            let x = 0;
            let y = 0;

            if ('touches' in e && e.touches.length > 0) {
                // Checks if it's a TouchEvent
                const touchEvent = e.touches[0];
                x = touchEvent.clientX;
                y = touchEvent.clientY;
            } else if ('clientX' in e) {
                // Checks if it's a MouseEvent
                x = e.clientX;
                y = e.clientY;
            }

            setCursorX(x);
            setCursorY(y);

            // Check if the cursor should be visible
            setIsVisible(x >= 0 && x <= window.innerWidth && y >= 0 && y <= window.innerHeight);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        // Add event listeners
        document.addEventListener('mousemove', move as EventListener);
        document.addEventListener('touchmove', move as EventListener);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseout', handleMouseLeave);

        return () => {
            // Cleanup event listeners
            document.removeEventListener('mousemove', move as EventListener);
            document.removeEventListener('touchmove', move as EventListener);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseout', handleMouseLeave);
        };
    }, []);

    return isVisible ? <img src='/cursor.svg' style={{ position: 'absolute', left: `${cursorX}px`, top: `${cursorY}px`, width: '30px', height: '30px', display: isVisible ? 'block' : 'none' }} /> : null;
};

export default Cursor;

import React, { useEffect, useRef } from 'react';

const Cursor = () => {
    const cursorRef = useRef<HTMLImageElement>(null); // Use ref to directly manipulate the DOM element

    useEffect(() => {
        const moveCursor = (e: MouseEvent | TouchEvent) => {
            if (cursorRef.current) {
                let x = 0;
                let y = 0;

                if ('touches' in e && e.touches.length > 0) {
                    const touchEvent = e.touches[0];
                    x = touchEvent.clientX;
                    y = touchEvent.clientY;
                } else if ('clientX' in e) {
                    x = e.clientX;
                    y = e.clientY;
                }

                // Update cursor position and ensure it's visible
                cursorRef.current.style.left = `${x}px`;
                cursorRef.current.style.top = `${y}px`;
                cursorRef.current.style.display = 'block';
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            // Ensure that the cursor only hides when actually leaving the window, not just moving between elements
            if (cursorRef.current && (!e.relatedTarget || e.relatedTarget === null)) {
                cursorRef.current.style.display = 'none';
            }
        };

        // Add mouse and touch move events
        document.addEventListener('mousemove', moveCursor);
        document.addEventListener('touchmove', moveCursor);
        document.addEventListener('mouseout', handleMouseOut); // Using 'mouseout' at the document level

        return () => {
            // Clean up event listeners
            document.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('touchmove', moveCursor);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return (
        <img
            ref={cursorRef}
            src='/cursor.svg'
            style={{
                position: 'fixed', // Fixed position relative to the viewport
                left: '0px',
                top: '0px',
                width: '30px',
                height: '30px',
                pointerEvents: 'none', // Ensure the image does not interfere with other elements
                display: 'none', // Start with cursor hidden
            }}
        />
    );
};

export default Cursor;

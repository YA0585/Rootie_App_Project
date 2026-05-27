import React, { useRef, useState, useEffect, useCallback } from 'react';
import './Carousel.css';

export const Carousel = ({ 
    children, 
    speed = 0.5, 
    autoPlay = true, 
    pauseOnHover = true,
    gap = 150 
}) => {
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const animationRef = useRef(null);
    
    // State to track interaction and prevent a11y conflicts
    const [isDragging, setIsDragging] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isReducedMotion, setIsReducedMotion] = useState(false);

    // Physics & Interaction tracking refs
    const physics = useRef({
        isDown: false,
        startX: 0,
        scrollLeft: 0,
        velocity: 0,
        lastX: 0,
        lastTime: 0,
        isAutoScrolling: autoPlay,
        autoScrollSpeed: speed,
    });

    // Check for reduced motion
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setIsReducedMotion(mediaQuery.matches);
        const handler = (e) => setIsReducedMotion(e.matches);
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    // Physics Engine & Auto-scroll Loop
    const update = useCallback(() => {
        if (!containerRef.current || !contentRef.current || isReducedMotion) return;

        const container = containerRef.current;
        const p = physics.current;
        
        // Handle auto-scrolling
        if (p.isAutoScrolling && !p.isDown) {
            container.scrollLeft += p.autoScrollSpeed;
        }

        // Handle momentum decay after drag release
        if (!p.isDown && Math.abs(p.velocity) > 0.1) {
            container.scrollLeft -= p.velocity;
            p.velocity *= 0.95; // Friction
        } else if (!p.isDown && Math.abs(p.velocity) <= 0.1) {
            p.velocity = 0;
        }

        // Infinite Looping Bounds Check
        // The content is rendered 3 times. We try to keep the scroll position within the middle set.
        const singleSetWidth = contentRef.current.scrollWidth / 3;
        
        if (container.scrollLeft >= singleSetWidth * 2) {
            container.scrollLeft -= singleSetWidth;
        } else if (container.scrollLeft <= 0) {
            container.scrollLeft += singleSetWidth;
        }

        animationRef.current = requestAnimationFrame(update);
    }, [isReducedMotion]);

    useEffect(() => {
        physics.current.isAutoScrolling = autoPlay && !(pauseOnHover && isHovered) && !isDragging;
    }, [autoPlay, pauseOnHover, isHovered, isDragging]);

    useEffect(() => {
        animationRef.current = requestAnimationFrame(update);
        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [update]);

    // Initial scroll setup to start in the middle set
    useEffect(() => {
        if (containerRef.current && contentRef.current) {
            const singleSetWidth = contentRef.current.scrollWidth / 3;
            // Only set if we are at the absolute start (e.g. first load)
            if (containerRef.current.scrollLeft === 0) {
                containerRef.current.scrollLeft = singleSetWidth;
            }
        }
    }, [children]);

    // Pointer Events for Drag/Swipe
    const handlePointerDown = (e) => {
        if (isReducedMotion) return;
        const container = containerRef.current;
        const p = physics.current;
        
        p.isDown = true;
        setIsDragging(true);
        p.startX = e.pageX - container.offsetLeft;
        p.scrollLeft = container.scrollLeft;
        p.lastX = e.pageX;
        p.lastTime = performance.now();
        p.velocity = 0;
        
        // Disable snap during drag
        container.style.scrollSnapType = 'none';
        container.style.cursor = 'grabbing';
    };

    const handlePointerMove = (e) => {
        if (!physics.current.isDown || isReducedMotion) return;
        e.preventDefault(); // Prevent text selection
        
        const container = containerRef.current;
        const p = physics.current;
        const x = e.pageX - container.offsetLeft;
        const walk = (x - p.startX) * 1.5; // Drag sensitivity
        
        container.scrollLeft = p.scrollLeft - walk;

        // Calculate velocity for momentum
        const now = performance.now();
        const dt = now - p.lastTime;
        if (dt > 0) {
            p.velocity = (e.pageX - p.lastX) / dt * 16; // Normalize to approx 60fps
        }
        
        p.lastX = e.pageX;
        p.lastTime = now;
    };

    const handlePointerUpOrLeave = () => {
        if (!physics.current.isDown || isReducedMotion) return;
        const container = containerRef.current;
        physics.current.isDown = false;
        setIsDragging(false);
        
        container.style.cursor = 'grab';
        
        // Re-enable snap after momentum dies down (or immediately if no momentum)
        setTimeout(() => {
            if (containerRef.current && Math.abs(physics.current.velocity) < 1) {
                containerRef.current.style.scrollSnapType = 'x mandatory';
            }
        }, 300);
    };

    // We render the children 3 times to create a seamless infinite loop padding
    const renderChildren = () => {
        return React.Children.map(children, (child, i) => (
            <div className="carousel-item" style={{ marginRight: gap }}>
                {child}
            </div>
        ));
    };

    return (
        <div 
            className="carousel-wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={(e) => {
                setIsHovered(false);
                handlePointerUpOrLeave(e);
            }}
        >
            <div
                className={`carousel-container ${isDragging ? 'dragging' : ''}`}
                ref={containerRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUpOrLeave}
                onPointerCancel={handlePointerUpOrLeave}
                role="region"
                aria-roledescription="carousel"
                tabIndex={0}
            >
                <div className="carousel-content" ref={contentRef} style={{ gap }}>
                    {/* Render 3 identical sets for infinite loop */}
                    {renderChildren()}
                    {renderChildren()}
                    {renderChildren()}
                </div>
            </div>
        </div>
    );
};

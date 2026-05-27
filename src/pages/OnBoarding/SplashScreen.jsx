import React, { useEffect } from 'react';

export default function SplashScreen({ onFinish }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            if (onFinish) onFinish();
        }, 3000);
        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className="phone-wrap" style={{ position: 'relative', background: '#F5F5F4' }}>
            <div style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', position: 'absolute', color: '#6AB43A', fontSize: 48, fontFamily: 'Quicksand', fontWeight: '700', wordWrap: 'break-word' }}>Rootie</div>
        </div>
    );
}
import React, { useEffect } from 'react';

export default function SussPage({ onFinish }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            if (onFinish) onFinish();
        }, 2500); // 2.5 seconds delay
        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className="phone-wrap" style={{ position: 'relative', background: '' }}>
            <div style={{ width: 187, left: 121, top: 380, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex' }}>
                <div style={{ width: 80, height: 80, position: 'relative' }}>
                    <div style={{ width: 66.66, height: 53.33, left: 6.67, top: 13.33, position: 'absolute', background: '#6AB43A', outline: '1.50px #6AB43A solid', outlineOffset: '-0.75px' }} />
                </div>
                <div style={{ alignSelf: 'stretch', textAlign: 'center', color: '#2F2F2F', fontSize: 24, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: 40, wordWrap: 'break-word' }}>식집사님,<br />가입을 완료했어요!</div>
            </div>
        </div>
    );
}

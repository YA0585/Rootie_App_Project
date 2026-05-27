import React from 'react';

export default function MyPlant({ onBack, onGoToPlantDetail }) {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', background: '#F5F5F4', overflow: 'hidden' }}>
            <div style={{ width: 388, height: 120, left: 20, top: 144, position: 'absolute', background: 'white', borderRadius: 10, outline: '1px #CFD0C8 solid', outlineOffset: '-1px', cursor: 'pointer' }} onClick={onGoToPlantDetail}>
                <img style={{ width: 80, height: 80, left: 17, top: 21, position: 'absolute', borderRadius: 50 }} src="https://placehold.co/80x80" />
                <div style={{ left: 117, top: 39, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#2A2A22', fontSize: 18, fontFamily: 'Noto Sans KR', fontWeight: '500', wordWrap: 'break-word' }}>식물 이름</div>
                <div style={{ left: 117, top: 67, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#2A2A22', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '500', wordWrap: 'break-word' }}>몬스테라</div>
                <div style={{ width: 68, paddingLeft: 10, paddingRight: 10, paddingTop: 6, paddingBottom: 6, left: 299, top: 35, position: 'absolute', background: '#6AB43A', borderRadius: 20, outline: '1px white solid', outlineOffset: '-1px', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ width: 20, height: 20, position: 'relative' }}>
                        <div style={{ width: 12, height: 12, left: 4, top: 4, position: 'absolute', background: 'white', outline: '1.50px white solid', outlineOffset: '-0.75px' }} />
                    </div>
                    <div style={{ color: 'white', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '400', wordWrap: 'break-word' }}>진단</div>
                </div>
            </div>
            <div style={{ width: 388, height: 120, left: 20, top: 276, position: 'absolute', background: 'white', borderRadius: 10, outline: '1px #CFD0C8 solid', outlineOffset: '-1px', cursor: 'pointer' }} onClick={onGoToPlantDetail}>
                <img style={{ width: 80, height: 80, left: 17, top: 21, position: 'absolute', borderRadius: 50 }} src="https://placehold.co/80x80" />
                <div style={{ left: 117, top: 39, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#2A2A22', fontSize: 18, fontFamily: 'Noto Sans KR', fontWeight: '500', wordWrap: 'break-word' }}>식물 이름</div>
                <div style={{ left: 117, top: 67, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#2A2A22', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '500', wordWrap: 'break-word' }}>몬스테라</div>
                <div style={{ width: 68, paddingLeft: 10, paddingRight: 10, paddingTop: 6, paddingBottom: 6, left: 296, top: 34, position: 'absolute', background: '#6AB43A', borderRadius: 20, outline: '1px white solid', outlineOffset: '-1px', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ width: 20, height: 20, position: 'relative' }}>
                        <div style={{ width: 12, height: 12, left: 4, top: 4, position: 'absolute', background: 'white', outline: '1.50px white solid', outlineOffset: '-0.75px' }} />
                    </div>
                    <div style={{ color: 'white', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '400', wordWrap: 'break-word' }}>진단</div>
                </div>
            </div>
            <div style={{ width: 430, height: 124, left: 0, top: 0, position: 'absolute', background: '#F5F5F4', overflow: 'hidden', borderBottom: '1px #E7E5E4 solid' }}>
                <div style={{ width: 430, paddingBottom: 20, paddingLeft: 16, paddingRight: 19, left: 0, top: 75, position: 'absolute', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ width: 20, height: 20, position: 'relative', overflow: 'hidden', cursor: 'pointer' }} onClick={onBack}>
                        <div style={{ width: 11.43, height: 20, left: 4, top: 0, position: 'absolute', background: 'black' }} />
                    </div>
                    <div style={{ color: '#2A2A22', fontSize: 24, fontFamily: 'Noto Sans KR', fontWeight: '500', wordWrap: 'break-word' }}>내 반려식물</div>
                    <div style={{ width: 22, height: 22, position: 'relative', overflow: 'hidden' }}>
                        <div style={{ width: 20, height: 20, left: 1, top: 0.50, position: 'absolute', background: '#2F2F2F' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}
import React from 'react';

export default function Survey4({ onNext }) {
    return (
        <div className="phone-wrap" style={{ position: 'relative', background: '' }}>
            <div style={{ width: 430, height: 124, left: 0, top: 0, position: 'absolute', background: '#F5F5F4', overflow: 'hidden' }}>
                <div style={{ width: 430, paddingBottom: 20, paddingLeft: 16, paddingRight: 19, left: 0, top: 75, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 78, display: 'inline-flex' }}>
                    <div style={{ width: 20, height: 20, position: 'relative', overflow: 'hidden' }}>
                        <div style={{ width: 11.43, height: 20, left: 4, top: 0, position: 'absolute', background: '#2F2F2F' }} />
                    </div>
                </div>
            </div>
            <div style={{ left: 121, top: 184, position: 'absolute', textAlign: 'center', color: '#2F2F2F', fontSize: 24, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 40, wordWrap: 'break-word' }}>이제 식물 프로필을 <br />만들어볼까요?</div>
            <div style={{ width: 350, left: 44, top: 304, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', height: 55, paddingLeft: 20, paddingRight: 20, background: 'white', borderRadius: 10, outline: '1px #D9D9D9 solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                    <div style={{ color: '#2F2F2F', fontSize: 16, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word' }}>네, 지금 식물 프로필 만들래요. </div>
                </div>
                <div style={{ alignSelf: 'stretch', height: 55, paddingLeft: 20, paddingRight: 20, background: 'white', borderRadius: 10, outline: '1px #D9D9D9 solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                    <div style={{ color: '#2F2F2F', fontSize: 16, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word' }}>아니요, 나중에 할래요. </div>
                </div>
            </div>
            <div data-property-1="Variant2" style={{ width: 430, height: 120, left: 0, top: 812, position: 'absolute', background: '#F5F5F4', overflow: 'hidden' }}>
                <div onClick={onNext} style={{ width: 390, height: 50, paddingLeft: 45, paddingRight: 45, paddingTop: 10, paddingBottom: 10, left: 20, top: 22, position: 'absolute', background: '#6AB43A', cursor: 'pointer', borderRadius: 10, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ color: 'white', fontSize: 16, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word' }}>선택하기</div>
                </div>
            </div>
        </div>
    );
}

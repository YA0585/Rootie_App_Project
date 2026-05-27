import React from 'react';

export default function Form1() {
    return (
        <div className="phone-wrap" style={{ position: 'relative', background: '' }}>
            <div style={{ width: 430, height: 932, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 378, display: 'inline-flex' }}>
                <div style={{ width: 430, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'flex' }}>
                    <div style={{ alignSelf: 'stretch', height: 124, position: 'relative', background: '#F5F5F4', overflow: 'hidden' }}>
                        <div style={{ width: 20, height: 20, left: 16, top: 75, position: 'absolute', overflow: 'hidden' }}>
                            <div style={{ width: 24, height: 24, left: -2, top: -2, position: 'absolute', overflow: 'hidden' }}>
                                <div style={{ width: 24, height: 24, left: 0, top: 0, position: 'absolute' }} />
                                <div style={{ width: 10.84, height: 18.97, left: 6.41, top: 2.51, position: 'absolute', background: '#2F2F2F' }} />
                            </div>
                        </div>
                    </div>
                    <div style={{ width: 350, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'flex' }}>
                        <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 40, display: 'flex' }}>
                            <div style={{ alignSelf: 'stretch', textAlign: 'center', color: '#2F2F2F', fontSize: 24, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 40, wordWrap: 'break-word' }}>현재 식물을 <br />키우고 계신가요?</div>
                            <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'flex' }}>
                                <div style={{ alignSelf: 'stretch', height: 55, paddingLeft: 20, paddingRight: 20, background: 'white', borderRadius: 10, outline: '1px #D9D9D9 solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                                    <div style={{ color: '#2F2F2F', fontSize: 16, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word' }}>네, 현재 키우고 있어요. </div>
                                </div>
                                <div style={{ alignSelf: 'stretch', height: 55, paddingLeft: 20, paddingRight: 20, background: 'white', borderRadius: 10, outline: '1px #D9D9D9 solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                                    <div style={{ color: '#2F2F2F', fontSize: 16, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word' }}>아니요, 현재 키우는 식물은 없어요. </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-property-1="Variant2" style={{ width: 430, height: 120, position: 'relative', background: '#F5F5F4', overflow: 'hidden' }}>
                    <div style={{ width: 390, height: 50, paddingLeft: 45, paddingRight: 45, paddingTop: 10, paddingBottom: 10, left: 20, top: 22, position: 'absolute', background: '#D9D9D9', borderRadius: 10, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                        <div style={{ color: 'white', fontSize: 16, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word' }}>선택하기</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

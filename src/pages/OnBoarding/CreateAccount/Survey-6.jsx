import React from 'react';

export default function Survey6({ onNext }) {
    return (
        <div className="phone-wrap" style={{ position: 'relative', background: '' }}>
            <div style={{ width: 430, height: 932, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 147, display: 'inline-flex' }}>
                <div style={{ width: 430, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'flex' }}>
                    <div style={{ alignSelf: 'stretch', height: 124, position: 'relative', background: '#F5F5F4', overflow: 'hidden' }}>
                        <div style={{ width: 430, paddingBottom: 20, paddingLeft: 16, paddingRight: 19, left: 0, top: 75, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 78, display: 'inline-flex' }}>
                            <div style={{ width: 20, height: 20, position: 'relative', overflow: 'hidden' }}>
                                <div style={{ width: 11.43, height: 20, left: 4, top: 0, position: 'absolute', background: '#2F2F2F' }} />
                            </div>
                        </div>
                    </div>
                    <div style={{ width: 351, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'flex' }}>
                        <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'flex' }}>
                            <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'flex' }}>
                                <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'flex' }}>
                                    <div style={{ color: '#2F2F2F', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word' }}>식물 닉네임</div>
                                    <div style={{ width: 350, height: 50, paddingLeft: 20, paddingRight: 20, background: 'white', borderRadius: 10, outline: '1px #E7E5E4 solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                                        <div style={{ color: '#D9D9D9', fontSize: 18, fontFamily: 'Noto Sans KR', fontWeight: '400', lineHeight: 28, wordWrap: 'break-word' }}>이름 입력</div>
                                    </div>
                                </div>
                                <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'flex' }}>
                                    <div style={{ color: '#2F2F2F', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word' }}>함께한 첫날</div>
                                    <div style={{ width: 350, height: 50, paddingLeft: 20, paddingRight: 20, background: 'white', borderRadius: 10, outline: '1px #E7E5E4 solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                                        <div style={{ color: '#D9D9D9', fontSize: 18, fontFamily: 'Noto Sans KR', fontWeight: '400', lineHeight: 28, wordWrap: 'break-word' }}>이름 입력</div>
                                    </div>
                                </div>
                                <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'flex' }}>
                                    <div style={{ color: '#2F2F2F', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word' }}>키우는 위치</div>
                                    <div style={{ width: 350, height: 50, paddingLeft: 20, paddingRight: 20, background: 'white', borderRadius: 10, outline: '1px #E7E5E4 solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                                        <div style={{ color: '#D9D9D9', fontSize: 18, fontFamily: 'Noto Sans KR', fontWeight: '400', lineHeight: 28, wordWrap: 'break-word' }}>이름 입력</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingLeft: 15, paddingRight: 15, paddingTop: 10, paddingBottom: 10, background: '#E8F5E0', borderRadius: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
                            <div style={{ color: '#1A3D2B', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word' }}>몬스테라</div>
                        </div>
                        <div style={{ width: 120, height: 120, position: 'relative', background: '#D9D9D9', overflow: 'hidden', borderRadius: 200, outline: '1px #E7E5E4 solid' }}>
                            <div style={{ width: 50, height: 50, left: 35, top: 35, position: 'absolute' }}>
                                <div style={{ width: 31.11, height: 26.44, left: 9, top: 12.56, position: 'absolute', outline: '4px #6AB43A solid', outlineOffset: '-2px' }} />
                                <div style={{ width: 12.44, height: 12.44, left: 18.33, top: 21.11, position: 'absolute', outline: '4px #6AB43A solid', outlineOffset: '-2px' }} />
                                <div style={{ width: 7.78, height: 7.78, left: 30.78, top: 11, position: 'absolute', outline: '4px #6AB43A solid', outlineOffset: '-2px' }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div data-property-1="Variant2" style={{ width: 430, height: 120, position: 'relative', background: '#F5F5F4', overflow: 'hidden' }}>
                    <div onClick={onNext} style={{ width: 390, height: 50, paddingLeft: 45, paddingRight: 45, paddingTop: 10, paddingBottom: 10, left: 20, top: 22, position: 'absolute', background: '#6AB43A', cursor: 'pointer', borderRadius: 10, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                        <div style={{ color: 'white', fontSize: 16, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word' }}>선택하기</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

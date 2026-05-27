import React from 'react';

export default function Form3({ onNext }) {
    return (
        <div className="phone-wrap" style={{ position: 'relative', background: '' }}>
            <div style={{ width: 430, height: 124, left: 0, top: 0, position: 'absolute', background: '#F5F5F4', overflow: 'hidden' }}>
                <div style={{ width: 430, paddingBottom: 20, paddingLeft: 16, paddingRight: 19, left: 0, top: 75, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 78, display: 'inline-flex' }}>
                    <div style={{ width: 20, height: 20, position: 'relative', overflow: 'hidden' }}>
                        <div style={{ width: 11.43, height: 20, left: 4, top: 0, position: 'absolute', background: '#2F2F2F' }} />
                    </div>
                </div>
            </div>
            <div style={{ width: 350, left: 40, top: 144, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 40, display: 'flex' }}>
                    <div style={{ textAlign: 'center', color: '#2F2F2F', fontSize: 24, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 40, wordWrap: 'break-word' }}>Rootie에서 가장 기대되는 <br />기능은 무엇인가요? </div>
                    <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'flex' }}>
                        <div style={{ alignSelf: 'stretch', height: 70, paddingLeft: 20, paddingRight: 20, background: 'white', borderRadius: 10, outline: '1px #E7E5E4 solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                            <div style={{ width: 24, height: 24, position: 'relative', background: 'white', overflow: 'hidden' }}>
                                <div style={{ width: 21, height: 21, left: 1, top: 2, position: 'absolute', background: '#6B7280' }} />
                                <div style={{ width: 2, height: 2, left: 10, top: 10, position: 'absolute', transform: 'rotate(-30deg)', transformOrigin: 'top left', outline: '1.50px white solid', outlineOffset: '-0.75px' }} />
                            </div>
                            <div style={{ color: '#2F2F2F', fontSize: 16, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word' }}>식물이 왜 아픈지 알고 싶어요.</div>
                        </div>
                        <div style={{ alignSelf: 'stretch', height: 70, paddingLeft: 20, paddingRight: 20, background: 'white', borderRadius: 10, outline: '1px #E7E5E4 solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                            <div style={{ width: 24, height: 24, position: 'relative' }}>
                                <div style={{ width: 16.20, height: 18, left: 4, top: 3, position: 'absolute', background: '#F94141', outline: '1px #F94141 solid' }} />
                                <div style={{ width: 6.30, height: 6.30, left: 8.95, top: 7.95, position: 'absolute', background: 'white' }} />
                            </div>
                            <div style={{ color: '#2F2F2F', fontSize: 16, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word' }}>주변 식물 관리 업체를 둘러보고 싶어요.</div>
                        </div>
                        <div style={{ alignSelf: 'stretch', height: 70, paddingLeft: 20, paddingRight: 20, background: 'white', borderRadius: 10, outline: '1px #E7E5E4 solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                            <div style={{ width: 24, height: 24, position: 'relative', overflow: 'hidden' }}>
                                <div style={{ width: 15.30, height: 18, left: 4, top: 3, position: 'absolute', background: '#2DC1FC', outline: '1.50px #2DC1FC solid', outlineOffset: '-0.75px' }} />
                                <div style={{ width: 3.60, height: 3.60, left: 11.65, top: 13.80, position: 'absolute', outline: '1.50px white solid', outlineOffset: '-0.75px' }} />
                            </div>
                            <div style={{ color: '#2F2F2F', fontSize: 16, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word' }}>물주기와 관리 방법을 알고 싶어요.</div>
                        </div>
                        <div style={{ alignSelf: 'stretch', height: 70, paddingLeft: 20, paddingRight: 20, background: 'white', borderRadius: 10, outline: '1px #E7E5E4 solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                            <div style={{ width: 24, height: 24, position: 'relative', overflow: 'hidden' }}>
                                <div style={{ width: 18, height: 13, left: 3, top: 8, position: 'absolute', background: '#F7C1A5' }} />
                                <div style={{ width: 20, height: 7, left: 2, top: 4, position: 'absolute', background: 'white' }} />
                                <div style={{ width: 20, height: 7, left: 2, top: 3, position: 'absolute', background: '#F54144' }} />
                            </div>
                            <div style={{ color: '#2F2F2F', fontSize: 16, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word' }}>믿을 수 있는 관리 업체를 찾고 싶어요.</div>
                        </div>
                    </div>
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

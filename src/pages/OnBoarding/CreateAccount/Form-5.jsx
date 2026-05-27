import React from 'react';

export default function Form5({ onNext }) {
    return (
        <div className="phone-wrap" style={{ position: 'relative', background: '' }}>
            <div style={{ width: 430, height: 932, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 271, display: 'inline-flex' }}>
                <div style={{ width: 430, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'flex' }}>
                    <div style={{ alignSelf: 'stretch', height: 124, position: 'relative', background: '#F5F5F4', overflow: 'hidden' }}>
                        <div style={{ width: 430, paddingBottom: 20, paddingLeft: 16, paddingRight: 19, left: 0, top: 75, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 78, display: 'inline-flex' }}>
                            <div style={{ width: 20, height: 20, position: 'relative', overflow: 'hidden' }}>
                                <div style={{ width: 11.43, height: 20, left: 4, top: 0, position: 'absolute', background: '#2F2F2F' }} />
                            </div>
                        </div>
                    </div>
                    <div style={{ width: 350, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'flex' }}>
                        <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 40, display: 'flex' }}>
                            <div style={{ textAlign: 'center', color: '#2F2F2F', fontSize: 24, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: 40, wordWrap: 'break-word' }}>어떤 식물을 <br />키우고 계신가요?</div>
                            <div style={{ width: 350, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                                <div style={{ width: 84.12, paddingLeft: 15, paddingRight: 15, paddingTop: 10, paddingBottom: 10, background: 'white', borderRadius: 20, outline: '1px #E7E5E4 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
                                    <div style={{ color: '#2F2F2F', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word' }}>몬스테라</div>
                                </div>
                                <div style={{ width: 71.66, paddingLeft: 15, paddingRight: 15, paddingTop: 10, paddingBottom: 10, background: 'white', borderRadius: 20, outline: '1px #E7E5E4 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
                                    <div style={{ color: '#2F2F2F', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word' }}>스투키</div>
                                </div>
                                <div style={{ width: 97.63, paddingLeft: 15, paddingRight: 15, paddingTop: 10, paddingBottom: 10, background: 'white', borderRadius: 20, outline: '1px #E7E5E4 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
                                    <div style={{ textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#2F2F2F', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word' }}>산세베리아</div>
                                </div>
                                <div style={{ width: 71.66, paddingLeft: 15, paddingRight: 15, paddingTop: 10, paddingBottom: 10, background: 'white', borderRadius: 20, outline: '1px #E7E5E4 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
                                    <div style={{ color: '#2F2F2F', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word' }}>다육이</div>
                                </div>
                            </div>
                            <div style={{ width: 350, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                                <div style={{ width: 98.21, paddingLeft: 15, paddingRight: 15, paddingTop: 10, paddingBottom: 10, background: 'white', borderRadius: 20, outline: '1px #E7E5E4 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
                                    <div style={{ color: '#2F2F2F', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word' }}>테이블야자</div>
                                </div>
                                <div style={{ width: 101.34, paddingLeft: 15, paddingRight: 15, paddingTop: 10, paddingBottom: 10, background: 'white', borderRadius: 20, outline: '1px #E7E5E4 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
                                    <div style={{ color: '#2F2F2F', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word' }}>스파티 필름</div>
                                </div>
                                <div style={{ width: 113.88, paddingLeft: 15, paddingRight: 15, paddingTop: 10, paddingBottom: 10, background: 'white', borderRadius: 20, outline: '1px #E7E5E4 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
                                    <div style={{ color: '#2F2F2F', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word' }}>잘 모르겠어요</div>
                                </div>
                            </div>
                            <div style={{ paddingLeft: 15, paddingRight: 15, paddingTop: 10, paddingBottom: 10, background: 'white', borderRadius: 20, outline: '1px #E7E5E4 solid', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
                                <div style={{ width: 12, height: 4, left: 1.34, top: 9.49, position: 'absolute', transform: 'rotate(-45deg)', transformOrigin: 'top left', background: '#2F2F2F' }} />
                                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#2F2F2F', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word' }}>식물 추가하기</div>
                            </div>
                            <div style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5, background: '#E8F5E0', borderRadius: 20, justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'inline-flex' }}>
                                <div style={{ color: '#1A3D2B', fontSize: 12, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 18, wordWrap: 'break-word' }}>키우는 식물이 목록에 없으면 추가해주세요! </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: 'center', color: '#6B7280', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word' }}>식물은 나중에 다시 추가할 수 있어요!</div>
                <div data-property-1="Variant2" style={{ width: 430, height: 120, position: 'relative', background: '#F5F5F4', overflow: 'hidden' }}>
                <div onClick={onNext} style={{ width: 390, height: 50, paddingLeft: 45, paddingRight: 45, paddingTop: 10, paddingBottom: 10, left: 20, top: 22, position: 'absolute', background: '#6AB43A', cursor: 'pointer', borderRadius: 10, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                        <div style={{ color: 'white', fontSize: 16, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word' }}>선택하기</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

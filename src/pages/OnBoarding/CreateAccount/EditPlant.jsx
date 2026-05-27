import React from 'react';

export default function EditPlant() {
    return (
        <div className="phone-wrap" style={{ position: 'relative', background: '' }}>
            <div style={{ width: 430, height: 668, left: 0, top: 264, position: 'absolute', background: 'white', borderTopLeftRadius: 15, borderTopRightRadius: 15, borderTop: '1px #E7E5E4 solid' }} />
            <div style={{ width: 430, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 40, display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', height: 124, position: 'relative', background: '#F5F5F4', overflow: 'hidden' }}>
                    <div style={{ width: 430, paddingBottom: 20, paddingLeft: 16, paddingRight: 19, left: 0, top: 75, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 78, display: 'inline-flex' }}>
                        <div style={{ width: 20, height: 20, position: 'relative', overflow: 'hidden' }}>
                            <div style={{ width: 11.43, height: 20, left: 4, top: 0, position: 'absolute', background: '#2F2F2F' }} />
                        </div>
                    </div>
                </div>
                <img style={{ width: 200, height: 200, position: 'relative', borderRadius: 200, outline: '1px #E7E5E4 solid' }} src="https://placehold.co/200x200" />
                <div style={{ paddingLeft: 15, paddingRight: 15, paddingTop: 10, paddingBottom: 10, background: '#E8F5E0', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                    <div style={{ color: '#1A3D2B', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word' }}>몬스테라</div>
                </div>
                <div style={{ width: 350, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex' }}>
                    <div style={{ alignSelf: 'stretch', borderBottom: '1px #E7E5E4 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex' }}>
                        <div style={{ alignSelf: 'stretch', color: '#6B7280', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word' }}>식물 닉네임</div>
                        <div style={{ alignSelf: 'stretch', color: '#2F2F2F', fontSize: 20, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 32, wordWrap: 'break-word' }}>식물 닉네임</div>
                    </div>
                    <div style={{ alignSelf: 'stretch', borderBottom: '1px #E7E5E4 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex' }}>
                        <div style={{ alignSelf: 'stretch', color: '#6B7280', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word' }}>함께한 첫 날</div>
                        <div style={{ alignSelf: 'stretch', color: '#2F2F2F', fontSize: 20, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 32, wordWrap: 'break-word' }}>2026.04.24</div>
                    </div>
                    <div style={{ alignSelf: 'stretch', borderBottom: '1px #E7E5E4 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex' }}>
                        <div style={{ alignSelf: 'stretch', color: '#6B7280', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word' }}>키우는 위치</div>
                        <div style={{ alignSelf: 'stretch', color: '#2F2F2F', fontSize: 20, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 32, wordWrap: 'break-word' }}>거실</div>
                    </div>
                </div>
            </div>
            <div style={{ width: 430, height: 120, left: 0, top: 812, position: 'absolute', background: 'white', overflow: 'hidden' }}>
                <div style={{ width: 390, height: 50, paddingLeft: 45, paddingRight: 45, paddingTop: 10, paddingBottom: 10, left: 20, top: 22, position: 'absolute', background: '#D9D9D9', borderRadius: 10, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ color: '#F5F5F4', fontSize: 16, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>가입 완료</div>
                </div>
            </div>
        </div>
    );
}

import React from 'react';

export default function CreateAccount({ onNext }) {
    return (
        <div className="phone-wrap" style={{ position: 'relative', background: '' }}>
            <div style={{ width: 349, left: 40, top: 216, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 40, display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', textAlign: 'center', color: '#6AB43A', fontSize: 48, fontFamily: 'Quicksand', fontWeight: '700', wordWrap: 'break-word' }}>Rootie</div>
                <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'flex' }}>
                    <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'flex' }}>
                        <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'flex' }}>
                            <div style={{ color: '#2F2F2F', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word' }}>이름</div>
                            <div style={{ width: 350, flex: '1 1 0', paddingLeft: 20, paddingRight: 20, background: 'white', borderRadius: 10, outline: '1px #E7E5E4 solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                                <div style={{ color: '#D9D9D9', fontSize: 18, fontFamily: 'Noto Sans KR', fontWeight: '400', lineHeight: 28, wordWrap: 'break-word' }}>이름 입력</div>
                            </div>
                        </div>
                        <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'flex' }}>
                            <div style={{ color: '#2F2F2F', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word' }}>아이디</div>
                            <div style={{ width: 350, flex: '1 1 0', paddingLeft: 20, paddingRight: 20, background: 'white', borderRadius: 10, outline: '1px #E7E5E4 solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                                <div style={{ color: '#D9D9D9', fontSize: 18, fontFamily: 'Noto Sans KR', fontWeight: '400', lineHeight: 28, wordWrap: 'break-word' }}>아이디 입력</div>
                            </div>
                        </div>
                        <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'flex' }}>
                            <div style={{ color: '#2F2F2F', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word' }}>비밀번호</div>
                            <div style={{ width: 350, flex: '1 1 0', paddingLeft: 20, paddingRight: 20, background: 'white', borderRadius: 10, outline: '1px #E7E5E4 solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                                <div style={{ color: '#D9D9D9', fontSize: 18, fontFamily: 'Noto Sans KR', fontWeight: '400', lineHeight: 28, wordWrap: 'break-word' }}>아이디 입력</div>
                            </div>
                        </div>
                        <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'flex' }}>
                            <div style={{ color: '#2F2F2F', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word' }}>이메일</div>
                            <div style={{ width: 350, flex: '1 1 0', paddingLeft: 20, paddingRight: 20, background: 'white', borderRadius: 10, outline: '1px #E7E5E4 solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                                <div style={{ color: '#D9D9D9', fontSize: 18, fontFamily: 'Noto Sans KR', fontWeight: '400', lineHeight: 28, wordWrap: 'break-word' }}>아이디 입력</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-property-1="Variant2" style={{ width: 430, height: 120, left: 0, bottom: 0, position: 'absolute', background: 'white', overflow: 'hidden' }}>
                <div 
                    onClick={onNext}
                    style={{ cursor: 'pointer', width: 390, height: 50, paddingLeft: 45, paddingRight: 45, paddingTop: 10, paddingBottom: 10, left: 20, top: 22, position: 'absolute', background: '#6AB43A', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ color: 'white', fontSize: 16, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '24px', wordWrap: 'break-word' }}>다음</div>
                </div>
            </div>
        </div>
    );
}

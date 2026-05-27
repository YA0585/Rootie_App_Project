import React from 'react';

export default function LoginPage({ onLogin }) {
    return (
        <div className="phone-wrap" style={{ position: 'relative', background: 'white' }}>
            <div style={{ width: 350, left: 40, top: 216, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 100, display: 'inline-flex' }}>
                <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 40, display: 'flex' }}>
                    <div style={{ color: '#6AB43A', fontSize: 48, fontFamily: 'Quicksand', fontWeight: '700', wordWrap: 'break-word' }}>Rootie</div>
                    <div style={{ width: 350, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'flex' }}>
                        <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'flex' }}>
                            <div style={{ alignSelf: 'stretch', height: 109, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex' }}>
                                <div style={{ alignSelf: 'stretch', height: 50, paddingLeft: 20, paddingRight: 20, background: 'white', borderRadius: 10, outline: '1px #E7E5E4 solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                                    <div style={{ color: '#D9D9D9', fontSize: 18, fontFamily: 'Noto Sans KR', fontWeight: '400', lineHeight: '28px', wordWrap: 'break-word' }}>아이디 입력</div>
                                </div>
                                <div style={{ alignSelf: 'stretch', height: 50, paddingLeft: 20, paddingRight: 20, background: 'white', borderRadius: 10, outline: '1px #E7E5E4 solid', outlineOffset: '-1px', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                                    <div style={{ color: '#D9D9D9', fontSize: 18, fontFamily: 'Noto Sans KR', fontWeight: '400', lineHeight: '28px', wordWrap: 'break-word' }}>비밀번호 입력</div>
                                    <div style={{ width: 24, height: 24, position: 'relative' }}>
                                        <div style={{ width: 20, height: 14, left: 2, top: 5, position: 'absolute', outline: '1.50px #D9D9D9 solid', outlineOffset: '-0.75px' }} />
                                        <div style={{ width: 6, height: 6, left: 9, top: 9, position: 'absolute', outline: '1.50px #D9D9D9 solid', outlineOffset: '-0.75px' }} />
                                    </div>
                                </div>
                            </div>
                            <div
                                onClick={onLogin}
                                style={{ cursor: 'pointer', alignSelf: 'stretch', height: 50, paddingLeft: 45, paddingRight: 45, paddingTop: 10, paddingBottom: 10, background: '#6AB43A', overflow: 'hidden', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}
                            >
                                <div style={{ color: 'var(--design-background-white, #F7F6F2)', fontSize: 16, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '24px', wordWrap: 'break-word' }}>로그인</div>
                            </div>
                        </div>
                        <div style={{ alignSelf: 'stretch', paddingLeft: 20, paddingRight: 20, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                            <div style={{ color: '#6B7280', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: '20px', wordWrap: 'break-word' }}>아이디 찾기</div>
                            <div style={{ color: '#6B7280', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: '20px', wordWrap: 'break-word' }}>비밀번호 찾기</div>
                            <div style={{ color: '#6B7280', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: '20px', wordWrap: 'break-word' }}>회원가입</div>
                        </div>
                    </div>
                </div>
                <div style={{ width: 313, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex' }}>
                    <div style={{ width: 310, overflow: 'hidden', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                        <div style={{ paddingLeft: 2, paddingRight: 2, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex' }}>
                            <div style={{ color: '#6B7280', fontSize: 12, fontFamily: 'Noto Sans KR', fontWeight: '400', lineHeight: '18px', wordWrap: 'break-word' }}>SNS 계정으로 로그인</div>
                        </div>
                    </div>
                    <div style={{ width: 310, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                        <div style={{ width: 40, height: 40, position: 'relative' }}>
                            <div style={{ width: 40, height: 40, left: 0, top: 0, position: 'absolute' }}>
                                <div style={{ width: 40, height: 40, left: 0, top: 0, position: 'absolute', background: '#FEE500', borderRadius: 9999 }} />
                            </div>
                            <div style={{ width: 21.64, height: 20, left: 9, top: 10, position: 'absolute', background: '#392020' }} />
                            <div style={{ width: 4.85, height: 5.81, left: 10.97, top: 16.10, position: 'absolute', background: '#FEE500' }} />
                            <div style={{ width: 4.95, height: 5.91, left: 14.42, top: 16, position: 'absolute', background: '#FEE500' }} />
                            <div style={{ width: 3.99, height: 5.81, left: 19.55, top: 16, position: 'absolute', background: '#FEE500' }} />
                            <div style={{ width: 4.56, height: 5.87, left: 23.62, top: 16, position: 'absolute', background: '#FEE500' }} />
                        </div>
                        <div style={{ width: 40, height: 40, background: 'var(--naver-bg, #03C75A)', overflow: 'hidden', borderRadius: 9999, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                            <div style={{ width: 18, height: 18, position: 'relative' }}>
                                <div style={{ width: 18, height: 18, left: 0, top: 0, position: 'absolute', background: 'var(--naver-text, white)' }} />
                            </div>
                        </div>
                        <div style={{ width: 40, height: 40, position: 'relative' }}>
                            <div style={{ width: 40, height: 40, left: 0, top: 0, position: 'absolute', background: 'white', outline: '1px #E7E5E4 solid' }} />
                            <div style={{ width: 20, height: 20, left: 10.50, top: 10, position: 'absolute', overflow: 'hidden' }}>
                                <div style={{ width: 9.60, height: 9.40, left: 10.31, top: 8.18, position: 'absolute', background: '#4285F4' }} />
                                <div style={{ width: 15.55, height: 8.10, left: 1.38, top: 11.90, position: 'absolute', background: '#34A853' }} />
                                <div style={{ width: 4.40, height: 8.98, left: 0.31, top: 5.51, position: 'absolute', background: '#FBBC05' }} />
                                <div style={{ width: 15.63, height: 8.10, left: 1.38, top: 0, position: 'absolute', background: '#EA4335' }} />
                            </div>
                        </div>
                        <div style={{ width: 40, height: 40, position: 'relative' }}>
                            <div style={{ width: 40, height: 40, left: 0, top: 0, position: 'absolute', background: '#33394D' }} />
                            <div style={{ width: 40, height: 40, left: 0, top: 0, position: 'absolute', overflow: 'hidden' }}>
                                <div style={{ width: 40, height: 40, left: 0, top: 0, position: 'absolute', overflow: 'hidden' }}>
                                    <div style={{ width: 40, height: 39.86, left: 0, top: 0, position: 'absolute', background: '#0866FF' }} />
                                    <div style={{ width: 18.23, height: 32.59, left: 11.04, top: 7.41, position: 'absolute', background: 'white' }} />
                                </div>
                            </div>
                        </div>
                        <div style={{ width: 40, height: 40, position: 'relative' }}>
                            <div style={{ width: 40, height: 40, left: 0, top: 0, position: 'absolute', background: 'black' }} />
                            <div style={{ width: 20, height: 20, left: 10, top: 10, position: 'absolute', overflow: 'hidden' }}>
                                <div style={{ width: 17, height: 20, left: 1.56, top: 0, position: 'absolute', background: 'white' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
import React from 'react';
import { Carousel } from '../../components/Carousel/Carousel';

export default function OnBoarding({ onStart }) {
    const slides = [
        <div key="slide1" style={{ width: 380, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 40, display: 'inline-flex' }}>
            <div style={{ width: 233.14, height: 325.59, background: '#BF9760' }} />
            <div style={{ width: 229, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 60, display: 'flex' }}>
                <div style={{ alignSelf: 'stretch', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'flex' }}>
                    <div style={{ textAlign: 'center', color: '#2F2F2F', fontSize: 24, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '40px', wordWrap: 'break-word' }}>식물 키우기, <br />어렵게 느껴지시나요?</div>
                    <div style={{ alignSelf: 'stretch', textAlign: 'center', color: '#6B7280', fontSize: 16, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: '24px', wordWrap: 'break-word' }}>잎이 떨어지고 시들어가도 <br />왜 그런지 몰라 막막할 때가 있어요.</div>
                </div>
                <div style={{ justifyContent: 'center', alignItems: 'center', gap: 12, display: 'inline-flex' }}>
                    <div style={{ width: 6, height: 6, background: '#6AB43A', borderRadius: 20, outline: '0.20px #E7E5E4 solid' }} />
                    <div style={{ width: 6, height: 6, background: '#6B7280', borderRadius: 9999, outline: '0.20px #E7E5E4 solid' }} />
                    <div style={{ width: 6, height: 6, background: '#6B7280', borderRadius: 9999, outline: '0.20px #E7E5E4 solid' }} />
                </div>
            </div>
        </div>,
        
        <div key="slide2" style={{ width: 380, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 40, display: 'inline-flex' }}>
            <div style={{ width: 261, height: 318, position: 'relative', background: 'white', overflow: 'hidden', borderTopLeftRadius: 22, borderTopRightRadius: 22, borderLeft: '10px #AFAFAF solid', borderTop: '10px #AFAFAF solid', borderRight: '10px #AFAFAF solid' }}>
                <div style={{ width: 52, height: 5, left: 105, top: 17, position: 'absolute', background: '#D9D9D9', borderRadius: 20 }} />
            </div>
            <div style={{ paddingLeft: 25, paddingRight: 25, paddingTop: 10, paddingBottom: 10, background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', overflow: 'hidden', borderRadius: 50, outline: '1px #E7E5E4 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                <div style={{ color: '#2F2F2F', fontSize: 18, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: '28px', wordWrap: 'break-word' }}>전문가 진단과 알맞는 업체 매칭을 한번에</div>
            </div>
            <div style={{ paddingLeft: 25, paddingRight: 25, paddingTop: 10, paddingBottom: 10, background: '#6AB43A', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 50, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                <div style={{ color: 'white', fontSize: 18, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: '28px', wordWrap: 'break-word' }}>AI에게 반려식물 상태를 설명하면</div>
            </div>
            <div style={{ width: 321, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 60, display: 'flex' }}>
                <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'flex' }}>
                    <div style={{ textAlign: 'center' }}>
                        <span style={{ color: '#6AB43A', fontSize: 24, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '40px', wordWrap: 'break-word' }}>Rootie</span>
                        <span style={{ color: 'black', fontSize: 24, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '40px', wordWrap: 'break-word' }}>에서 <br />전문가를 매칭 받아보세요</span>
                    </div>
                    <div style={{ alignSelf: 'stretch', textAlign: 'center', color: '#6B7280', fontSize: 16, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: '24px', wordWrap: 'break-word' }}>식물 전문가와 매칭되어<br /> 내 반려식물에 맞는 진단과 솔루션을 받아보세요.</div>
                </div>
                <div style={{ justifyContent: 'center', alignItems: 'center', gap: 12, display: 'inline-flex' }}>
                    <div style={{ width: 6, height: 6, background: '#6B7280', borderRadius: 20, outline: '0.20px #E7E5E4 solid' }} />
                    <div style={{ width: 6, height: 6, background: '#6AB43A', borderRadius: 9999, outline: '0.20px #E7E5E4 solid' }} />
                    <div style={{ width: 6, height: 6, background: '#6B7280', borderRadius: 9999, outline: '0.20px #E7E5E4 solid' }} />
                </div>
            </div>
        </div>,
        
        <div key="slide3" style={{ width: 380, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 40, display: 'inline-flex' }}>
            <div style={{ width: 268.31, height: 315, background: '#90C33A' }} />
            <div style={{ textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '40px', wordWrap: 'break-word' }}>건강하고 쉬운 <br />식집사 생활</div>
            <div style={{ textAlign: 'center', color: '#6B7280', fontSize: 16, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: '24px', wordWrap: 'break-word' }}>혼자가 아닌 전문가의 도움으로 <br />식물도 일상도 더 편안해져요.</div>
            <div style={{ justifyContent: 'center', alignItems: 'center', gap: 12, display: 'inline-flex' }}>
                <div style={{ width: 6, height: 6, background: '#6B7280', borderRadius: 20, outline: '0.20px #E7E5E4 solid' }} />
                <div style={{ width: 6, height: 6, background: '#6AB43A', borderRadius: 9999, outline: '0.20px #E7E5E4 solid' }} />
                <div style={{ width: 6, height: 6, background: '#6B7280', borderRadius: 9999, outline: '0.20px #E7E5E4 solid' }} />
            </div>
        </div>
    ];

    return (
        <div className="phone-wrap" style={{ width: '100%', height: '100%', position: 'relative', background: 'white' }}>
            <div data-property-1="Default" style={{ width: 430, height: 120, left: 0, bottom: 0, position: 'absolute', background: 'white', overflow: 'hidden', zIndex: 10 }}>
                <div
                    onClick={onStart}
                    style={{ cursor: 'pointer', width: 390, height: 50, paddingLeft: 45, paddingRight: 45, paddingTop: 10, paddingBottom: 10, left: 20, top: 22, position: 'absolute', background: '#6AB43A', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'flex' }}
                >
                    <div style={{ color: 'white', fontSize: 16, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '24px', wordWrap: 'break-word' }}>시작하기</div>
                </div>
            </div>
            
            <div style={{ width: '100%', height: 580, top: 150, position: 'absolute' }}>
                <Carousel gap={50} speed={1}>
                    {slides}
                </Carousel>
            </div>
        </div>
    );
}
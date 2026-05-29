import { useState } from "react";
import "../SizeSelect/SizeSelect.css";
import ServiceOptions from "../ServiceOptions/ServiceOptions";

const ChevronDownIcon = () => (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
    </svg>
);

/**
 * SelectService — 서비스 선택 컴포넌트 (바텀시트 연동)
 *
 * @param {string[]} options     - 옵션 텍스트 배열    (기본: ["분갈이", "영양제", "가지치기"])
 * @param {string}   value       - 현재 선택된 값
 * @param {function} onChange    - 선택 변경 콜백      (value: string) => void
 * @param {string}   label       - 위에 표시할 레이블 (선택)
 * @param {string}   placeholder - 미선택 시 표시 텍스트
 */
export default function SelectService({
    options = ["분갈이", "영양제", "가지치기"],
    value = "",
    onChange,
    label,
    placeholder = "서비스를 선택해주세요",
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div 
                className="select-input-wrap"
                onClick={() => setIsOpen(true)}
                style={{ cursor: "pointer" }}
            >
                {label && <p className="select-input__label">{label}</p>}
                <div className="select-input__field">
                    <span className={value ? "select-input__value" : "select-input__placeholder"}>
                        {value || placeholder}
                    </span>
                    <ChevronDownIcon />
                </div>
            </div>
            
            <ServiceOptions
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                options={options}
                value={value}
                onConfirm={(val) => {
                    onChange?.(val);
                }}
            />
        </>
    );
}

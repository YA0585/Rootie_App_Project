import { useState } from "react";
import "./SelectService.css";
import ServiceOptions from "../ServiceOptions/ServiceOptions";

/**
 * PotServiceOptionItem — 단일 옵션 카드
 *
 * @param {string}   label       - 옵션 텍스트        (기본: "분갈이")
 * @param {boolean}  selected    - 선택 여부          (기본: false)
 * @param {function} onClick     - 클릭 콜백
 */
export function PotServiceOptionItem({
    label = "분갈이",
    selected = false,
    onClick,
}) {
    return (
        <button
            className={`pso-item ${selected ? "pso-item--selected" : ""}`}
            onClick={onClick}
        >
            <span className="pso-item__label">{label}</span>
            <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: "auto"}}>
                <polyline points="6 9 12 15 18 9" />
            </svg>
        </button>
    );
}

/**
 * PotServiceOptions — 옵션 목록 (아이템 여러 개)
 *
 * @param {string[]} options     - 옵션 텍스트 배열    (기본: ["분갈이", "영양제", "가지치기"])
 * @param {string}   value       - 현재 선택된 값
 * @param {function} onChange    - 선택 변경 콜백      (value: string) => void
 */
export default function SelectService({
    options = ["분갈이", "영양제", "가지치기"],
    value = "",
    onChange,
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="pso-list">
            <PotServiceOptionItem
                label={value || "서비스를 선택해주세요"}
                selected={!!value}
                onClick={() => setIsOpen(true)}
            />
            
            <ServiceOptions
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                options={options}
                value={value}
                onConfirm={(val) => {
                    onChange?.(val);
                }}
            />
        </div>
    );
}

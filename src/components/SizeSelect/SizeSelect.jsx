import { useState } from "react";
import "./SizeSelect.css";
import SelectOptions from "../SelectOptions/SelectOptions";

const ChevronDownIcon = () => (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
    </svg>
);

/**
 * SelectInput
 *
 * @param {string}   placeholder  - 미선택 시 표시 텍스트  (기본: "사이즈 선택하기")
 * @param {string}   value        - 현재 선택된 값
 * @param {string[]} options      - 드롭다운 옵션 목록
 * @param {function} onChange     - 선택 변경 콜백 (value: string) => void
 * @param {string}   label        - 위에 표시할 레이블 (선택)
 */
export default function SizeSelect({
    placeholder = "사이즈 선택하기",
    value = "",
    options = [],
    onChange,
    label,
    showArrow = true,
}) {
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);

    return (
        <>
            <div 
                className="select-input-wrap"
                onClick={() => {
                    if (options.length > 0) setIsOptionsOpen(true);
                }}
                style={{ cursor: options.length > 0 ? "pointer" : "default" }}
            >
                {label && <p className="select-input__label">{label}</p>}
                <div className="select-input__field">
                    <span className={value ? "select-input__value" : "select-input__placeholder"}>
                        {value || placeholder}
                    </span>
                    {showArrow && options.length > 0 && <ChevronDownIcon />}
                </div>
            </div>

            {options.length > 0 && (
                <SelectOptions
                    isOpen={isOptionsOpen}
                    onClose={() => setIsOptionsOpen(false)}
                    options={options}
                    value={value}
                    onConfirm={(val) => {
                        onChange?.(val);
                    }}
                />
            )}
        </>
    );
}

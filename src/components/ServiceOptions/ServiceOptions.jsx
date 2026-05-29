import { useState } from "react";
import "./ServiceOptions.css";

/**
 * ServiceOptions — 서비스 선택 바텀시트 컴포넌트
 *
 * @param {string[]} options       - 선택 옵션 목록          (기본: ["분갈이", "영양제", "가지치기"])
 * @param {string}   value         - 현재 선택된 값
 * @param {function} onChange      - 선택 변경 콜백           (value: string) => void
 * @param {function} onConfirm     - "선택하기" 버튼 콜백     (value: string) => void
 * @param {function} onClose       - 바텀시트 닫기 콜백
 * @param {boolean}  isOpen        - 바텀시트 열림 여부       (기본: true)
 * @param {string}   confirmLabel  - 확인 버튼 텍스트         (기본: "선택하기")
 */
export default function ServiceOptions({
    options = ["분갈이", "영양제", "가지치기"],
    value = "",
    onChange,
    onConfirm,
    onClose,
    isOpen = true,
    confirmLabel = "선택하기",
}) {
    const [selected, setSelected] = useState(value);

    const handleSelect = (opt) => {
        setSelected(opt);
        onChange?.(opt);
    };

    const handleConfirm = () => {
        if (!selected) return;
        onConfirm?.(selected);
        onClose?.();
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div className="svo-backdrop" onClick={onClose} />

            {/* Bottom sheet */}
            <div className="svo-sheet" role="dialog" aria-modal="true">
                {/* Drag handle */}
                <div className="svo-handle" />

                {/* Option list */}
                <div className="svo-list">
                    {options.map((opt) => {
                        const isSelected = selected === opt;
                        return (
                            <button
                                key={opt}
                                className={`svo-option ${isSelected ? "svo-option--selected" : ""}`}
                                onClick={() => handleSelect(opt)}
                            >
                                {opt}
                            </button>
                        );
                    })}
                </div>

                {/* Footer */}
                <div className="svo-footer">
                    <button
                        className={`svo-confirm-btn ${selected ? "svo-confirm-btn--active" : ""}`}
                        onClick={handleConfirm}
                        disabled={!selected}
                    >
                        {confirmLabel}
                    </button>
                </div>
            </div>
        </>
    );
}

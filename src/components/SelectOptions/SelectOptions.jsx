import { useState } from "react";
import "./SelectOptions.css";

/**
 * SelectOptions — 바텀시트 옵션 선택 컴포넌트
 *
 * @param {string[]} options        - 선택 옵션 목록
 * @param {string}   value          - 현재 선택된 값
 * @param {function} onChange       - 선택 변경 콜백 (value: string) => void
 * @param {function} onConfirm      - "선택하기" 버튼 콜백 (value: string) => void
 * @param {function} onClose        - 바텀시트 닫기 콜백
 * @param {boolean}  isOpen         - 바텀시트 열림 여부
 * @param {string}   confirmLabel   - 확인 버튼 텍스트 (기본: "선택하기")
 */
export default function SelectOptions({
    options = [],
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
        onConfirm?.(selected);
        onClose?.();
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div className="so-backdrop" onClick={onClose} />

            {/* Bottom sheet */}
            <div className="so-sheet" role="dialog" aria-modal="true">
                {/* Drag handle */}
                <div className="so-handle" />

                {/* Option list */}
                <div className="so-list">
                    {options.map((opt) => {
                        const isSelected = selected === opt;
                        return (
                            <button
                                key={opt}
                                className={`so-option ${isSelected ? "so-option--selected" : ""}`}
                                onClick={() => handleSelect(opt)}
                            >
                                {opt}
                            </button>
                        );
                    })}
                </div>

                {/* Footer */}
                <div className="so-footer">
                    <button
                        className={`so-confirm-btn ${selected ? "so-confirm-btn--active" : ""}`}
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

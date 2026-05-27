import { useState } from "react";
import "./CreateAccount.css";

export default function RootieSignup({ onNext }) {
    const [form, setForm] = useState({
        name: "",
        id: "",
        password: "",
        email: "",
    });

    const isActive =
        form.name.trim() !== "" &&
        form.id.trim() !== "" &&
        form.password.trim() !== "" &&
        form.email.trim() !== "";

    const handleChange = (field) => (e) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

    const handleNext = () => {
        if (!isActive) return;
        if (onNext) onNext();
    };

    return (
        <div className="signup-container">
            <div className="signup-inner">
                {/* Logo */}
                <div className="signup-logo-wrap">
                    <h1 className="signup-logo">Rootie</h1>
                </div>

                {/* Form Fields */}
                <div className="signup-form">
                    <div className="signup-field">
                        <label className="signup-label">이름</label>
                        <input
                            className="signup-input"
                            type="text"
                            placeholder="이름 입력"
                            value={form.name}
                            onChange={handleChange("name")}
                        />
                    </div>

                    <div className="signup-field">
                        <label className="signup-label">아이디</label>
                        <input
                            className="signup-input"
                            type="text"
                            placeholder="아이디 입력"
                            value={form.id}
                            onChange={handleChange("id")}
                        />
                    </div>

                    <div className="signup-field">
                        <label className="signup-label">비밀번호</label>
                        <input
                            className="signup-input"
                            type="password"
                            placeholder="비밀번호 입력"
                            value={form.password}
                            onChange={handleChange("password")}
                        />
                    </div>

                    <div className="signup-field">
                        <label className="signup-label">이메일</label>
                        <input
                            className="signup-input"
                            type="email"
                            placeholder="이메일 입력"
                            value={form.email}
                            onChange={handleChange("email")}
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Button */}
            <div className="signup-footer">
                <button
                    className={`signup-next-btn ${isActive ? "active" : ""}`}
                    onClick={handleNext}
                    disabled={!isActive}
                >
                    다음
                </button>
            </div>
        </div>
    );
}

// MyPlant.jsx
import "./MyPlant.css";
import { ChevronLeft, X, Sparkles } from "lucide-react";

const plantData = [
    {
        id: 1,
        title: "식물 이름",
        name: "몬스테라",
        image:
            "https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "식물 이름",
        name: "몬스테라",
        image:
            "https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=400&auto=format&fit=crop",
    },
];

export default function MyPlant() {
    return (
        <div className="myplant-page">
            {/* Header */}
            <header className="myplant-header">
                <button className="icon-btn">
                    <ChevronLeft size={24} />
                </button>

                <h1>내 반려식물</h1>

                <button className="icon-btn">
                    <X size={24} />
                </button>
            </header>

            {/* Plant List */}
            <section className="plant-list">
                {plantData.map((plant) => (
                    <div className="plant-card" key={plant.id}>
                        <div className="plant-left">
                            <img src={plant.image} alt={plant.name} />

                            <div className="plant-info">
                                <h2>{plant.title}</h2>
                                <p>{plant.name}</p>
                            </div>
                        </div>

                        <button className="diagnosis-btn">
                            <Sparkles size={14} strokeWidth={2.5} />
                            진단
                        </button>
                    </div>
                ))}
            </section>
        </div>
    );
}
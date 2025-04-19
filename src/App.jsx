import { useEffect, useState } from "react";
import { fetchCats } from "./CatService";
import Gallery from "./Gallery";
import Modal from "./Modal";
import "./style.css";

export default function App() {
    const [cats, setCats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCat, setSelectedCat] = useState(null);

    const loadCats = async () => {
        setLoading(true);
        const data = await fetchCats();
        setCats(data);
        setLoading(false);
    };

    useEffect(() => {
        loadCats();
    }, []);

    return (
        <div className="app">
            <div className="header-logo">🐾</div>
            <button onClick={loadCats} className="refresh-btn">
                Refresh
            </button>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <Gallery cats={cats} onCatClick={setSelectedCat} />
            )}

            {selectedCat && (
                <Modal imageUrl={selectedCat.url} onClose={() => setSelectedCat(null)} />
            )}
        </div>
    );
}

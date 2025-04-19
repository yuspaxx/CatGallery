export default function Gallery({ cats, onCatClick }) {
    return (
        <div className="grid">
            {cats.slice(0, 6).map(cat => (
                <img
                    key={cat.id}
                    src={cat.url}
                    alt="cat"
                    className="cat-img"
                    onClick={() => onCatClick(cat)}
                />
            ))}
        </div>
    );
}

export default function Modal({ imageUrl, onClose }) {
    return (
        <div className="modal" onClick={onClose}>
            <img src={imageUrl} alt="Large cat" />
        </div>
    );
}

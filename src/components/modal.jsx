const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
 
    return (
        <div
            onClick={onClose}
            id="bg"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    background: "black",
                    height: "80vh",
                    width: "30%",
                    margin: "auto",
                    padding: "2%",
                    border: "2px solid #000",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(255, 255, 255, 0.2)",
                    zIndex: 1000
                }}
            >
                {children}
            </div>
        </div>
    );
};
 
export default Modal;